import { useState, useEffect } from "react";
import { useTranslation } from "../context/LanguageContext";

export const useRandomSpeech = (
  minIntervalSeconds: number = 15,
  maxIntervalSeconds: number = 25,
  displayDurationMs: number = 3000
) => {
  const { language } = useTranslation();
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);

  useEffect(() => {
    const speeches: Record<string, string[]> = {
      vi: [
        "👋 Xin chào!",
        "Bạn cần trợ giúp?",
        "Trò chuyện nhé!",
        "Liên hệ ngay!",
        "Hỏi tôi bất cứ điều gì!",
      ],
      en: [
        "👋 Hi!",
        "Need help?",
        "Let's talk!",
        "Contact us!",
        "Ask me anything!",
      ],
      es: [
        "👋 ¡Hola!",
        "¿Necesitas ayuda?",
        "¡Hablemos!",
        "¡Contáctanos!",
        "¡Pregúntame lo que sea!",
      ],
    };

    const triggerSpeech = () => {
      const currentList = speeches[language] || speeches["en"];
      const randomIndex = Math.floor(Math.random() * currentList.length);
      setCurrentMessage(currentList[randomIndex]);

      // Hide message after displayDurationMs
      setTimeout(() => {
        setCurrentMessage(null);
      }, displayDurationMs);
    };

    // Calculate a random initial delay
    const initialDelay =
      (Math.random() * (maxIntervalSeconds - minIntervalSeconds) + minIntervalSeconds) * 1000;

    const firstTimeout = setTimeout(triggerSpeech, initialDelay);

    // Schedule next speeches
    const interval = setInterval(() => {
      triggerSpeech();
    }, (Math.random() * (maxIntervalSeconds - minIntervalSeconds) + minIntervalSeconds) * 1000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [language, minIntervalSeconds, maxIntervalSeconds, displayDurationMs]);

  return currentMessage;
};

export default useRandomSpeech;
