import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, ShieldCheck, Leaf, TrendingUp, Mail, Phone, User, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalculatorModal: React.FC<CalculatorModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useTranslation();
  
  // Step 1: Input, Step 2: Result
  const [step, setStep] = useState<1 | 2>(1);
  const [buildingType, setBuildingType] = useState<'hotel' | 'resort' | 'office' | 'commercial'>('hotel');
  const [monthlyBill, setMonthlyBill] = useState<string>('150000000'); // 150M VND
  const [floorArea, setFloorArea] = useState<string>('8000'); // 8000 m2
  
  // Contact Info
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Calculation outputs
  const [results, setResults] = useState({
    annualSavings: 0,
    paybackPeriod: 0,
    co2Savings: 0,
    savingsPercent: 0
  });

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const billNum = parseFloat(monthlyBill) || 0;
    
    let savingsRate = 0.45; // resort
    let payback = 3.5;
    
    if (buildingType === 'hotel') {
      savingsRate = 0.48;
      payback = 3.2;
    } else if (buildingType === 'office') {
      savingsRate = 0.38;
      payback = 4.2;
    } else if (buildingType === 'commercial') {
      savingsRate = 0.42;
      payback = 3.8;
    }

    const annualBill = billNum * 12;
    const annualSavings = annualBill * savingsRate;
    // CO2 savings formula: 1 million VND ~ 400 kWh ~ 320 kg CO2 (0.8 kg/kWh)
    // 1 million VND = 0.32 tons CO2.
    const co2Savings = (annualBill / 1000000) * 0.32 * savingsRate;

    setResults({
      annualSavings,
      paybackPeriod: payback,
      co2Savings: Math.round(co2Savings),
      savingsPercent: Math.round(savingsRate * 100)
    });
    setStep(2);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds
      setSubmitted(false);
      setStep(1);
      setName('');
      setPhone('');
      setEmail('');
      onClose();
    }, 3000);
  };

  const formatCurrency = (val: number) => {
    if (language === 'vi') {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(val);
    } else {
      // Approx USD
      const usdVal = val / 25000;
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(usdVal);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal box */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100"
          >
            {/* Header */}
            <div className="bg-brand-navy p-6 text-white flex justify-between items-center relative">
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 p-2.5 rounded-lg">
                  <Calculator className="h-6 w-6 text-brand-green-light" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl leading-tight">
                    {t('calc_modal_title')}
                  </h3>
                  <p className="text-white/70 text-xs mt-1">
                    {t('calc_modal_subtitle')}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content body */}
            <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
              {step === 1 ? (
                <form onSubmit={handleCalculate} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 block">
                      {t('calc_label_type')}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {(['hotel', 'resort', 'office', 'commercial'] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setBuildingType(type)}
                          className={`p-3 text-sm font-medium rounded-xl border text-center transition-all cursor-pointer ${
                            buildingType === type
                              ? 'border-brand-green bg-brand-green-bg text-brand-green shadow-sm ring-2 ring-brand-green/20'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {t(`calc_type_${type}` as any)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="monthlyBill" className="text-sm font-semibold text-slate-700 block">
                      {t('calc_label_bill')}
                    </label>
                    <div className="relative">
                      <input
                        id="monthlyBill"
                        type="number"
                        required
                        min="1000000"
                        value={monthlyBill}
                        onChange={(e) => setMonthlyBill(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 font-display font-semibold text-xs text-slate-400">
                        {language === 'vi' ? 'VNĐ' : 'VND'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {language === 'vi' 
                        ? 'Ví dụ: 150,000,000 đ/tháng' 
                        : 'Example: 150,000,000 VND/month'}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="floorArea" className="text-sm font-semibold text-slate-700 block">
                      {t('calc_label_area')}
                    </label>
                    <div className="relative">
                      <input
                        id="floorArea"
                        type="number"
                        required
                        min="10"
                        value={floorArea}
                        onChange={(e) => setFloorArea(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 font-display font-semibold text-xs text-slate-400">
                        m²
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-green hover:bg-green-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 transform active:scale-95 shadow-md shadow-brand-green/10 hover:shadow-lg hover:shadow-brand-green/20 flex items-center justify-center space-x-2 cursor-pointer font-display"
                  >
                    <span>{t('calc_btn_calculate')}</span>
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  {/* Title */}
                  <h4 className="font-display font-bold text-lg text-brand-navy border-b border-slate-100 pb-3 flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-brand-green" />
                    <span>{t('calc_results_title')}</span>
                  </h4>

                  {/* Stat cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-brand-green-bg/30 border border-brand-green-bg/60 p-4 rounded-xl text-center">
                      <div className="bg-brand-green/10 p-2 rounded-lg w-fit mx-auto mb-2 text-brand-green">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                        {t('calc_res_savings')}
                      </p>
                      <h5 className="font-display font-bold text-lg text-brand-green mt-1">
                        {formatCurrency(results.annualSavings)}
                      </h5>
                      <span className="text-[10px] text-brand-green font-bold bg-brand-green-bg px-2 py-0.5 rounded-full mt-1.5 inline-block">
                        -{results.savingsPercent}% {language === 'vi' ? 'Tiêu thụ' : 'Consumption'}
                      </span>
                    </div>

                    <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl text-center">
                      <div className="bg-brand-blue/10 p-2 rounded-lg w-fit mx-auto mb-2 text-brand-blue">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                        {t('calc_res_payback')}
                      </p>
                      <h5 className="font-display font-bold text-lg text-brand-blue mt-1">
                        {results.paybackPeriod} {t('project_years').toLowerCase()}
                      </h5>
                      <span className="text-[10px] text-brand-blue font-bold bg-blue-50 px-2 py-0.5 rounded-full mt-1.5 inline-block">
                        ROI: ~{(100 / results.paybackPeriod).toFixed(0)}%/yr
                      </span>
                    </div>

                    <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-xl text-center">
                      <div className="bg-emerald-500/10 p-2 rounded-lg w-fit mx-auto mb-2 text-emerald-600">
                        <Leaf className="h-5 w-5" />
                      </div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                        {t('calc_res_co2')}
                      </p>
                      <h5 className="font-display font-bold text-lg text-emerald-700 mt-1">
                        {results.co2Savings} {t('project_tons')}
                      </h5>
                      <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full mt-1.5 inline-block">
                        {language === 'vi' ? 'Bảo vệ khí hậu' : 'Climate Protected'}
                      </span>
                    </div>
                  </div>

                  {/* Consultation form */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-4">
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                      {t('calc_contact_prompt')}
                    </p>

                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center space-x-3 text-sm font-medium"
                      >
                        <CheckCircle2 className="h-5 w-5 text-brand-green flex-shrink-0" />
                        <span>{t('calc_success_msg')}</span>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleContactSubmit} className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="relative">
                            <input
                              type="text"
                              required
                              placeholder={language === 'vi' ? 'Họ và tên *' : 'Full Name *'}
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                            />
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                          </div>

                          <div className="relative">
                            <input
                              type="tel"
                              required
                              placeholder={language === 'vi' ? 'Số điện thoại *' : 'Phone Number *'}
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                            />
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                          </div>
                        </div>

                        <div className="relative">
                          <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                          />
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-brand-navy hover:bg-brand-navy-dark text-white font-medium py-2.5 px-4 rounded-lg text-sm transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer font-display"
                        >
                          <span>{t('calc_btn_submit')}</span>
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Actions buttons */}
                  <div className="flex space-x-3 pt-2">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold py-2.5 rounded-lg text-sm transition-colors cursor-pointer font-display"
                    >
                      {t('calc_btn_recalculate')}
                    </button>
                    <button
                      onClick={onClose}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-lg text-sm transition-colors cursor-pointer font-display"
                    >
                      {t('calc_btn_close')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default CalculatorModal;
