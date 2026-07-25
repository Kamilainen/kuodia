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

export const translations: Record<'vi' | 'en', TranslationType> = {
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

    projects_title: "DỰ ÁN TIÊU BIỂU",
    projects_subtitle: "Những dự án tiêu biểu đã được Kuodia triển khai thành công tại Việt Nam, mang lại giá trị kinh tế và môi trường bền vững.",
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

    projects_title: "FEATURED PROJECTS",
    projects_subtitle: "Selected reference projects successfully implemented by Kuodia in Vietnam, delivering economic and environmental values.",
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
  }
};
