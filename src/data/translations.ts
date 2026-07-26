export interface TranslationType {
  // Navigation
  nav_home: string;
  nav_about: string;
  nav_solutions: string;
  nav_projects: string;
  nav_blog: string;
  nav_contact: string;
  nav_cta: string;

  // Hero
  hero_title: string;
  hero_subtitle: string;
  hero_cta_consult: string;
  hero_cta_calc: string;

  // Solutions
  solutions_title: string;
  solutions_subtitle: string;
  solution_learn_more: string;
  solution_1_title: string;
  solution_1_desc: string;
  solution_2_title: string;
  solution_2_desc: string;
  solution_3_title: string;
  solution_3_desc: string;
  solution_4_title: string;
  solution_4_desc: string;

  // Statistics
  stat_1_top: string;
  stat_1_value: string;
  stat_1_sub: string;
  stat_2_top: string;
  stat_2_value: string;
  stat_2_sub: string;
  stat_3_top: string;
  stat_3_value: string;
  stat_3_sub: string;
  stat_4_top: string;
  stat_4_value: string;
  stat_4_sub: string;
  stat_5_top: string;
  stat_5_value: string;
  stat_5_sub: string;

  // Why Kuodia
  why_title: string;
  why_p1: string;
  why_p2: string;
  why_check_1: string;
  why_check_2: string;
  why_check_3: string;
  why_check_4: string;
  why_cta: string;
  hotspot_solar: string;
  hotspot_recovery: string;
  hotspot_pump: string;
  hotspot_mgmt: string;
  hotspot_solar_desc: string;
  hotspot_recovery_desc: string;
  hotspot_pump_desc: string;
  hotspot_mgmt_desc: string;

  // Projects
  projects_title: string;
  projects_subtitle: string;
  projects_note: string;
  projects_bottom_note_title: string;
  projects_bottom_note_desc: string;
  projects_bottom_coming_title: string;
  projects_bottom_coming_desc: string;
  projects_bottom_coming_highlight: string;
  project_savings: string;
  project_payback: string;
  project_co2: string;
  project_years: string;
  project_tons: string;
  proj_1_title: string;
  proj_1_desc: string;
  proj_2_title: string;
  proj_2_desc: string;
  proj_3_title: string;
  proj_3_desc: string;
  proj_4_title: string;
  proj_4_desc: string;

  // Calculator Banner
  calc_banner_title: string;
  calc_banner_subtitle: string;
  calc_banner_cta: string;

  // Calculator Modal
  calc_modal_title: string;
  calc_modal_subtitle: string;
  calc_label_type: string;
  calc_label_bill: string;
  calc_label_area: string;
  calc_type_hotel: string;
  calc_type_resort: string;
  calc_type_office: string;
  calc_type_commercial: string;
  calc_btn_calculate: string;
  calc_btn_recalculate: string;
  calc_results_title: string;
  calc_res_savings: string;
  calc_res_payback: string;
  calc_res_co2: string;
  calc_contact_prompt: string;
  calc_btn_submit: string;
  calc_btn_close: string;
  calc_success_msg: string;

  // Footer
  footer_desc: string;
  footer_col_solutions: string;
  footer_col_about: string;
  footer_col_resources: string;
  footer_col_contact: string;
  footer_contact_address: string;
  footer_contact_phone: string;
  footer_contact_email: string;
  footer_contact_web: string;
  footer_copyright: string;
  footer_privacy: string;
  footer_terms: string;
}

export const translations: Record<'vi' | 'en' | 'es' ,TranslationType> = {
  vi: {
    nav_home: "TRANG CHỦ",
    nav_about: "GIỚI THIỆU",
    nav_solutions: "GIẢI PHÁP",
    nav_projects: "DỰ ÁN",
    nav_blog: "BLOG",
    nav_contact: "LIÊN HỆ",
    nav_cta: "LIÊN HỆ NGAY",

    hero_title: "ENGINEERING THE FUTURE OF ENERGY EFFICIENCY",
    hero_subtitle: "Chúng tôi thiết kế và triển khai các giải pháp tiên tiến để giảm tiêu thụ điện và nước cho khách sạn, khu nghỉ dưỡng và tòa nhà thương mại tại Việt Nam.",
    hero_cta_consult: "YÊU CẦU TƯ VẤN",
    hero_cta_calc: "TÍNH TOÁN TIẾT KIỆM",

    solutions_title: "CÁC GIẢI PHÁP TIẾT KIỆM NĂNG LƯỢNG",
    solutions_subtitle: "Chúng tôi cung cấp các công nghệ hiện đại được tích hợp đồng bộ để tối ưu hóa hiệu quả vận hành của doanh nghiệp.",
    solution_learn_more: "TÌM HIỂU THÊM",
    solution_1_title: "AEROTHERMAL HEAT PUMPS",
    solution_1_desc: "Hệ thống bơm nhiệt hiệu suất cao dùng cho sưởi ấm, làm mát và cung cấp nước nóng sinh hoạt.",
    solution_2_title: "SOLAR\nENERGY",
    solution_2_desc: "Tối đa hóa sản lượng năng lượng sạch với các giải pháp năng lượng mặt trời thông minh.",
    solution_3_title: "HEAT RECOVERY SYSTEMS",
    solution_3_desc: "Thu hồi nhiệt thải từ nước, hệ thống VRF và các quá trình công nghiệp để sản xuất nước nóng.",
    solution_4_title: "HOTEL ENERGY SOLUTIONS",
    solution_4_desc: "Quản lý năng lượng toàn diện cho khách sạn và khu nghỉ dưỡng để giảm chi phí vận hành tối đa.",

    stat_1_top: "LÊN ĐẾN",
    stat_1_value: "70%",
    stat_1_sub: "TIẾT KIỆM NĂNG LƯỢNG",
    stat_2_top: "",
    stat_2_value: "3-7 NĂM",
    stat_2_sub: "HOÀN VỐN ĐẦU TƯ",
    stat_3_top: "GIẢM ĐẾN",
    stat_3_value: "60%",
    stat_3_sub: "LƯỢNG CO₂ THẢI RA",
    stat_4_top: "ENGINEERING",
    stat_4_value: "TAILORED",
    stat_4_sub: "GIẢI PHÁP TÙY CHỈNH",
    stat_5_top: "SUPPORT",
    stat_5_value: "IN VIETNAM",
    stat_5_sub: "HỖ TRỢ KỸ THUẬT ĐỊA PHƯƠNG",

    why_title: "TẠI SAO CHỌN KUODIA?",
    why_p1: "Kuodia Renovables là công ty kỹ thuật chuyên thiết kế và triển khai các giải pháp hiệu quả năng lượng toàn diện.",
    why_p2: "Chúng tôi không chỉ cung cấp thiết bị, mà còn tối ưu hóa toàn bộ hệ thống để đảm bảo hiệu suất cao nhất và thời gian hoàn vốn nhanh nhất.",
    why_check_1: "Thiết kế kỹ thuật chuyên sâu và may đo theo thực tế.",
    why_check_2: "Công nghệ tiên tiến, thiết bị chính hãng hiệu suất cao.",
    why_check_3: "Tối ưu chi phí vận hành dài hạn cho chủ đầu tư.",
    why_check_4: "Đồng hành cùng khách hàng trong suốt vòng đời dự án.",
    why_cta: "TÌM HIỂU THÊM VỀ CHÚNG TÔI",
    hotspot_solar: "NĂNG LƯỢNG MẶT TRỜI",
    hotspot_solar_desc: "Hệ thống pin mặt trời áp mái tối ưu hóa chuyển đổi quang năng, cung cấp điện sạch trực tiếp cho tòa nhà.",
    hotspot_recovery: "THU HỒI NHIỆT THẢI",
    hotspot_recovery_desc: "Tận dụng nhiệt dư từ điều hòa trung tâm VRF và nước xả để làm nóng nước sinh hoạt miễn phí.",
    hotspot_pump: "BƠM NHIỆT AEROTHERMAL",
    hotspot_pump_desc: "Bơm nhiệt nguồn gió siêu tiết kiệm điện, cung cấp nước nóng ổn định 24/7 bất kể thời tiết.",
    hotspot_mgmt: "QUẢN LÝ NĂNG LƯỢNG",
    hotspot_mgmt_desc: "Hệ thống giám sát thông minh tối ưu hóa phụ tải, phát hiện lãng phí điện năng theo thời gian thực.",

    projects_title: "GIẢI PHÁP THAM KHẢO",
    projects_subtitle: "Khám phá các ví dụ về cách các giải pháp của Kuodia có thể được áp dụng trong nhiều lĩnh vực nhằm nâng cao hiệu quả năng lượng và giảm chi phí vận hành.",
    projects_note: "Các trường hợp dưới đây chỉ mang tính minh họa và không đại diện cho các dự án đã được Kuodia thực hiện.",
    projects_bottom_note_title: "LƯU Ý",
    projects_bottom_note_desc: "Các giải pháp trên là những ví dụ mang tính khái niệm, được xây dựng dựa trên công nghệ và phương pháp mà Kuodia áp dụng. Mỗi dự án đều được thiết kế riêng theo nhu cầu cụ thể của từng khách hàng.",
    projects_bottom_coming_title: "SẮP RA MẮT: CÁC DỰ ÁN THỰC TẾ",
    projects_bottom_coming_desc: "Chúng tôi đang triển khai các dự án thực tế và sẽ sớm chia sẻ cùng bạn.",
    projects_bottom_coming_highlight: "Giải pháp thực tế. Kết quả đo lường được. Tác động bền vững.",
    project_savings: "Tiết kiệm năng lượng",
    project_payback: "Thời gian hoàn vốn",
    project_co2: "Tấn CO₂ giảm thiểu",
    project_years: "Năm",
    project_tons: "tấn/năm",
    proj_1_title: "Da Nang Luxury Resort",
    proj_1_desc: "Giải pháp tổng thể hiệu quả năng lượng cho khu nghỉ dưỡng 5 sao quy mô lớn.",
    proj_2_title: "Nha Trang Hotel",
    proj_2_desc: "Hệ thống nước nóng trung tâm thu hồi nhiệt kết hợp năng lượng mặt trời.",
    proj_3_title: "Phu Quoc Resort",
    proj_3_desc: "Tích hợp bơm nhiệt Aerothermal và hệ thống sưởi ấm bể bơi thông minh.",
    proj_4_title: "Hanoi Office Building",
    proj_4_desc: "Nâng cấp cải tạo hệ thống điều hòa không khí HVAC và chiếu sáng thông minh.",

    calc_banner_title: "TÍNH TOÁN TIẾT KIỆM CHO DỰ ÁN CỦA BẠN",
    calc_banner_subtitle: "Nhập thông tin cơ bản và nhận ước tính tiết kiệm năng lượng, chi phí và thời gian hoàn vốn cho dự án của bạn.",
    calc_banner_cta: "BẮT ĐẦU TÍNH TOÁN MIỄN PHÍ",

    calc_modal_title: "Bộ Tính Toán Tiết Kiệm Năng Lượng",
    calc_modal_subtitle: "Nhập thông tin dự án của bạn để ước tính nhanh tiềm năng tiết kiệm điện/nước và giảm phát thải CO2 hàng năm.",
    calc_label_type: "Loại hình công trình",
    calc_label_bill: "Hóa đơn điện trung bình hàng tháng (VNĐ)",
    calc_label_area: "Tổng diện tích sàn sử dụng (m²)",
    calc_type_hotel: "Khách sạn (Hotel)",
    calc_type_resort: "Khu nghỉ dưỡng (Resort)",
    calc_type_office: "Tòa nhà văn phòng (Office)",
    calc_type_commercial: "Trung tâm thương mại / Khác",
    calc_btn_calculate: "Tính toán kết quả",
    calc_btn_recalculate: "Tính toán lại",
    calc_results_title: "Tiềm Năng Tiết Kiệm Dự Kiến",
    calc_res_savings: "Số tiền tiết kiệm hàng năm",
    calc_res_payback: "Thời gian hoàn vốn dự kiến",
    calc_res_co2: "Lượng khí thải CO₂ cắt giảm",
    calc_contact_prompt: "Nhận báo cáo phân tích chi tiết và tư vấn khảo sát miễn phí từ kỹ sư của chúng tôi:",
    calc_btn_submit: "Đăng ký nhận tư vấn chi tiết",
    calc_btn_close: "Đóng",
    calc_success_msg: "Cảm ơn bạn! Yêu cầu tư vấn của bạn đã được ghi nhận. Kỹ sư Kuodia sẽ liên hệ lại trong vòng 24h.",

    footer_desc: "Kỹ thuật hiệu quả năng lượng vì một tương lai bền vững.",
    footer_col_solutions: "GIẢI PHÁP",
    footer_col_about: "VỀ CHÚNG TÔI",
    footer_col_resources: "TÀI NGUYÊN",
    footer_col_contact: "LIÊN HỆ",
    footer_contact_address: "Tầng 12, Tòa nhà F.Home, 16 Lý Thường Kiệt, Hải Châu, Đà Nẵng, Việt Nam",
    footer_contact_phone: "+84 90 123 4567",
    footer_contact_email: "info@kuodia.vn",
    footer_contact_web: "www.kuodia.vn",
    footer_copyright: "© 2026 Kuodia Renovables. Bảo lưu mọi quyền.",
    footer_privacy: "Chính sách bảo mật",
    footer_terms: "Điều khoản sử dụng"
  },
  en: {
    nav_home: "HOME",
    nav_about: "ABOUT US",
    nav_solutions: "SOLUTIONS",
    nav_projects: "PROJECTS",
    nav_blog: "BLOG",
    nav_contact: "CONTACT",
    nav_cta: "CONTACT NOW",

    hero_title: "ENGINEERING THE FUTURE OF ENERGY EFFICIENCY",
    hero_subtitle: "We design and implement advanced solutions to reduce energy and water consumption for hotels, resorts and commercial buildings in Vietnam.",
    hero_cta_consult: "REQUEST CONSULTATION",
    hero_cta_calc: "CALCULATE SAVINGS",

    solutions_title: "ENERGY SAVINGS SOLUTIONS",
    solutions_subtitle: "We deliver advanced, fully integrated technologies to optimize your operational energy efficiency.",
    solution_learn_more: "FIND OUT MORE",
    solution_1_title: "AEROTHERMAL HEAT PUMPS",
    solution_1_desc: "High efficiency systems for heating, cooling and domestic hot water production.",
    solution_2_title: "SOLAR\nENERGY",
    solution_2_desc: "Maximize clean energy production with smart and integrated solar solutions.",
    solution_3_title: "HEAT RECOVERY SYSTEMS",
    solution_3_desc: "Recover waste heat from water, VRF systems and processes to produce hot water.",
    solution_4_title: "HOTEL ENERGY SOLUTIONS",
    solution_4_desc: "Complete energy management for hotels and resorts to significantly reduce operating costs.",

    stat_1_top: "UP TO",
    stat_1_value: "70%",
    stat_1_sub: "ENERGY SAVINGS",
    stat_2_top: "",
    stat_2_value: "3-7 YEARS",
    stat_2_sub: "RETURN ON INVESTMENT",
    stat_3_top: "UP TO",
    stat_3_value: "60%",
    stat_3_sub: "CO₂ REDUCTION",
    stat_4_top: "ENGINEERING",
    stat_4_value: "TAILORED",
    stat_4_sub: "CUSTOM SOLUTIONS",
    stat_5_top: "SUPPORT",
    stat_5_value: "IN VIETNAM",
    stat_5_sub: "LOCAL TECHNICAL SUPPORT",

    why_title: "WHY KUODIA?",
    why_p1: "Kuodia Renovables is an engineering firm specialized in designing and deploying end-to-end energy efficiency solutions.",
    why_p2: "We do not just supply equipment; we optimize the entire system to ensure the highest performance and the fastest payback period.",
    why_check_1: "In-depth, custom engineering design for every site.",
    why_check_2: "Cutting-edge technology with high-efficiency equipment.",
    why_check_3: "Long-term operation cost reduction for stakeholders.",
    why_check_4: "Accompanying customers throughout the entire system lifecycle.",
    why_cta: "FIND OUT MORE ABOUT US",
    hotspot_solar: "SOLAR ENERGY",
    hotspot_solar_desc: "Rooftop solar panel systems optimizing PV conversion, feeding clean electricity directly into the facility grid.",
    hotspot_recovery: "HEAT RECOVERY",
    hotspot_recovery_desc: "Harness waste heat from VRF air conditioners and greywater to heat domestic water for free.",
    hotspot_pump: "AEROTHERMAL HEAT PUMP",
    hotspot_pump_desc: "Eco-friendly air source heat pumps supplying stable hot water 24/7 under any weather condition.",
    hotspot_mgmt: "ENERGY MANAGEMENT",
    hotspot_mgmt_desc: "Smart load monitoring system that detects power waste and optimizes operations in real-time.",

    projects_title: "REFERENCE SOLUTIONS",
    projects_subtitle: "Explore examples of how Kuodia's solutions can be applied in various sectors to improve energy efficiency and reduce operational costs.",
    projects_note: "The cases below are for illustrative purposes only and do not represent projects implemented by Kuodia.",
    projects_bottom_note_title: "NOTE",
    projects_bottom_note_desc: "The solutions above are conceptual examples built based on the technologies and methodologies applied by Kuodia. Each project is customized according to the specific needs of each client.",
    projects_bottom_coming_title: "COMING SOON: REAL PROJECTS",
    projects_bottom_coming_desc: "We are currently deploying real-world projects and will share them with you soon.",
    projects_bottom_coming_highlight: "Real solutions. Measurable results. Sustainable impact.",
    project_savings: "Energy savings",
    project_payback: "Payback period",
    project_co2: "CO₂ reduction",
    project_years: "Years",
    project_tons: "tons/year",
    proj_1_title: "Da Nang Luxury Resort",
    proj_1_desc: "Comprehensive energy efficiency solutions for a large-scale 5-star resort.",
    proj_2_title: "Nha Trang Hotel",
    proj_2_desc: "Central solar hot water heating system integrated with VRF waste heat recovery.",
    proj_3_title: "Phu Quoc Resort",
    proj_3_desc: "Integrated aerothermal heat pumps and smart pool heating controls.",
    proj_4_title: "Hanoi Office Building",
    proj_4_desc: "HVAC system retrofit and smart lighting energy management upgrades.",

    calc_banner_title: "CALCULATE SAVINGS FOR YOUR PROJECT",
    calc_banner_subtitle: "Enter basic details to receive estimates of energy, cost savings and payback period for your project.",
    calc_banner_cta: "START FREE CALCULATION",

    calc_modal_title: "Energy Savings Calculator",
    calc_modal_subtitle: "Enter your facility parameters to obtain a quick estimation of annual electricity/water savings and CO2 reduction.",
    calc_label_type: "Building type",
    calc_label_bill: "Average monthly energy bill (VND)",
    calc_label_area: "Total usable floor area (m²)",
    calc_type_hotel: "Hotel",
    calc_type_resort: "Resort",
    calc_type_office: "Office Building",
    calc_type_commercial: "Commercial Center / Other",
    calc_btn_calculate: "Calculate Results",
    calc_btn_recalculate: "Recalculate",
    calc_results_title: "Estimated Potential Savings",
    calc_res_savings: "Estimated annual cost savings",
    calc_res_payback: "Estimated payback period",
    calc_res_co2: "Annual CO₂ emissions avoided",
    calc_contact_prompt: "Request a detailed audit report and a free site survey from our technical engineers:",
    calc_btn_submit: "Register for Detailed Consultation",
    calc_btn_close: "Close",
    calc_success_msg: "Thank you! Your consultation request has been recorded. A Kuodia engineer will contact you within 24 hours.",

    footer_desc: "Engineering energy efficiency for a sustainable future.",
    footer_col_solutions: "SOLUTIONS",
    footer_col_about: "ABOUT US",
    footer_col_resources: "RESOURCES",
    footer_col_contact: "CONTACT",
    footer_contact_address: "12th Floor, F.Home Building, 16 Ly Thuong Kiet, Hai Chau, Da Nang, Vietnam",
    footer_contact_phone: "+84 90 123 4567",
    footer_contact_email: "info@kuodia.vn",
    footer_contact_web: "www.kuodia.vn",
    footer_copyright: "© 2026 Kuodia Renovables. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use"
  },
  es: {
  nav_home: "INICIO",
  nav_about: "SOBRE NOSOTROS",
  nav_solutions: "SOLUCIONES",
  nav_projects: "PROYECTOS",
  nav_blog: "BLOG",
  nav_contact: "CONTACTO",
  nav_cta: "CONTÁCTANOS",

  hero_title: "DISEÑANDO EL FUTURO DE LA EFICIENCIA ENERGÉTICA",
  hero_subtitle: "Diseñamos e implementamos soluciones avanzadas para reducir el consumo de energía y agua en hoteles, resorts y edificios comerciales en Vietnam.",
  hero_cta_consult: "SOLICITAR ASESORÍA",
  hero_cta_calc: "CALCULAR AHORRO",

  solutions_title: "SOLUCIONES DE AHORRO ENERGÉTICO",
  solutions_subtitle: "Ofrecemos tecnologías avanzadas e integradas para optimizar la eficiencia energética de sus operaciones.",
  solution_learn_more: "MÁS INFORMACIÓN",
  solution_1_title: "BOMBAS DE CALOR AEROTÉRMICAS",
  solution_1_desc: "Sistemas de alta eficiencia para calefacción, refrigeración y producción de agua caliente sanitaria.",
  solution_2_title: "ENERGÍA\nSOLAR",
  solution_2_desc: "Maximice la generación de energía limpia con soluciones solares inteligentes e integradas.",
  solution_3_title: "SISTEMAS DE RECUPERACIÓN DE CALOR",
  solution_3_desc: "Recupere el calor residual del agua, sistemas VRF y procesos para producir agua caliente.",
  solution_4_title: "SOLUCIONES ENERGÉTICAS PARA HOTELES",
  solution_4_desc: "Gestión energética integral para hoteles y resorts que reduce significativamente los costos operativos.",

  stat_1_top: "HASTA",
  stat_1_value: "70%",
  stat_1_sub: "AHORRO DE ENERGÍA",
  stat_2_top: "",
  stat_2_value: "3-7 AÑOS",
  stat_2_sub: "RETORNO DE INVERSIÓN",
  stat_3_top: "HASTA",
  stat_3_value: "60%",
  stat_3_sub: "REDUCCIÓN DE CO₂",
  stat_4_top: "INGENIERÍA",
  stat_4_value: "A MEDIDA",
  stat_4_sub: "SOLUCIONES PERSONALIZADAS",
  stat_5_top: "SOPORTE",
  stat_5_value: "EN VIETNAM",
  stat_5_sub: "ASISTENCIA TÉCNICA LOCAL",

  why_title: "¿POR QUÉ KUODIA?",
  why_p1: "Kuodia Renovables es una empresa de ingeniería especializada en el diseño e implementación de soluciones integrales de eficiencia energética.",
  why_p2: "No solo suministramos equipos; optimizamos todo el sistema para garantizar el máximo rendimiento y el período de recuperación más rápido.",
  why_check_1: "Diseño de ingeniería personalizado para cada proyecto.",
  why_check_2: "Tecnología de vanguardia con equipos de alta eficiencia.",
  why_check_3: "Reducción de los costos operativos a largo plazo.",
  why_check_4: "Acompañamiento durante todo el ciclo de vida del sistema.",
  why_cta: "CONOZCA MÁS SOBRE NOSOTROS",

  hotspot_solar: "ENERGÍA SOLAR",
  hotspot_solar_desc: "Sistemas fotovoltaicos en cubierta que optimizan la conversión solar y suministran electricidad limpia directamente a la instalación.",
  hotspot_recovery: "RECUPERACIÓN DE CALOR",
  hotspot_recovery_desc: "Aproveche el calor residual de los sistemas VRF y de las aguas grises para producir agua caliente de forma gratuita.",
  hotspot_pump: "BOMBA DE CALOR AEROTÉRMICA",
  hotspot_pump_desc: "Bombas de calor aire-agua ecológicas que proporcionan agua caliente estable las 24 horas del día, en cualquier condición climática.",
  hotspot_mgmt: "GESTIÓN ENERGÉTICA",
  hotspot_mgmt_desc: "Sistema inteligente de monitoreo de cargas que detecta desperdicios energéticos y optimiza las operaciones en tiempo real.",

  projects_title: "SOLUCIONES DE REFERENCIA",
  projects_subtitle: "Explore ejemplos de cómo se pueden aplicar las soluciones de Kuodia en diversos sectores para mejorar la eficiencia energética y reducir los costos operativos.",
  projects_note: "Los casos a continuación son solo con fines ilustrativos y no representan proyectos implementados por Kuodia.",
  projects_bottom_note_title: "NOTA",
  projects_bottom_note_desc: "Las soluciones anteriores son ejemplos conceptuales creados a partir de las tecnologías y metodologías aplicadas por Kuodia. Cada proyecto se personaliza según las necesidades específicas de cada cliente.",
  projects_bottom_coming_title: "PRÓXIMAMENTE: PROYECTOS REALES",
  projects_bottom_coming_desc: "Actualmente estamos implementando proyectos del mundo real y los compartiremos con usted pronto.",
  projects_bottom_coming_highlight: "Soluciones reales. Resultados medibles. Impacto sostenible.",
  project_savings: "Ahorro energético",
  project_payback: "Período de retorno",
  project_co2: "Reducción de CO₂",
  project_years: "Años",
  project_tons: "toneladas/año",

  proj_1_title: "Resort de Lujo en Da Nang",
  proj_1_desc: "Soluciones integrales de eficiencia energética para un resort de cinco estrellas de gran escala.",
  proj_2_title: "Hotel en Nha Trang",
  proj_2_desc: "Sistema central de agua caliente solar integrado con recuperación de calor de sistemas VRF.",
  proj_3_title: "Resort en Phu Quoc",
  proj_3_desc: "Bombas de calor aerotérmicas integradas y control inteligente para calefacción de piscinas.",
  proj_4_title: "Edificio de Oficinas en Hanói",
  proj_4_desc: "Modernización del sistema HVAC y gestión inteligente del consumo de iluminación.",

  calc_banner_title: "CALCULE EL AHORRO DE SU PROYECTO",
  calc_banner_subtitle: "Ingrese los datos básicos para recibir una estimación del ahorro energético, económico y del período de retorno.",
  calc_banner_cta: "INICIAR CÁLCULO GRATUITO",

  calc_modal_title: "Calculadora de Ahorro Energético",
  calc_modal_subtitle: "Ingrese los parámetros de su edificio para obtener una estimación rápida del ahorro anual de energía, agua y la reducción de emisiones de CO₂.",
  calc_label_type: "Tipo de edificio",
  calc_label_bill: "Factura mensual promedio de energía (VND)",
  calc_label_area: "Superficie útil total (m²)",

  calc_type_hotel: "Hotel",
  calc_type_resort: "Resort",
  calc_type_office: "Edificio de Oficinas",
  calc_type_commercial: "Centro Comercial / Otro",

  calc_btn_calculate: "Calcular",
  calc_btn_recalculate: "Recalcular",

  calc_results_title: "Ahorro Potencial Estimado",
  calc_res_savings: "Ahorro anual estimado",
  calc_res_payback: "Período estimado de retorno",
  calc_res_co2: "Emisiones anuales de CO₂ evitadas",

  calc_contact_prompt: "Solicite un informe técnico detallado y una inspección gratuita realizada por nuestros ingenieros:",
  calc_btn_submit: "Solicitar Asesoría Detallada",
  calc_btn_close: "Cerrar",

  calc_success_msg: "¡Gracias! Su solicitud ha sido registrada. Un ingeniero de Kuodia se pondrá en contacto con usted en un plazo de 24 horas.",

  footer_desc: "Ingeniería para la eficiencia energética y un futuro sostenible.",
  footer_col_solutions: "SOLUCIONES",
  footer_col_about: "SOBRE NOSOTROS",
  footer_col_resources: "RECURSOS",
  footer_col_contact: "CONTACTO",

  footer_contact_address: "Piso 12, Edificio F.Home, 16 Ly Thuong Kiet, Hai Chau, Da Nang, Vietnam",
  footer_contact_phone: "+84 90 123 4567",
  footer_contact_email: "info@kuodia.vn",
  footer_contact_web: "www.kuodia.vn",

  footer_copyright: "© 2026 Kuodia Renovables. Todos los derechos reservados.",
  footer_privacy: "Política de Privacidad",
  footer_terms: "Términos de Uso"
}
};
