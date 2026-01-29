import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources for STATIC UI elements (buttons, headers, etc.)
const resources = {
  en: {
    translation: {
      "home": "Home",
      "features": "Features",
      "team": "Our Team",
      "join_waitlist": "Join Waitlist",
      "get_early_access": "Get Early Access",
      "learn_more": "Learn more",
      "coming_soon": "Coming Soon",
      "platform_features": "Platform Features",
      "why_choose": "Why Choose",
      "explore_features": "Explore Features",
      "view_all_features": "View All Features",
      "copyright": "© 2024 The MC Hub. All rights reserved.",
      "hero_title_1": "Elevate Your Voice",
      "hero_title_2": "Expand Your Career",
      "hero_subtitle": "The first AI-powered Booking & Career Development platform dedicated to MCs. Connect, improve, and shine on every stage.",
      "features_preview_subtitle": "Everything you need to manage your career, improve your skills, and get booked.",
      "coming_soon": "Coming Soon",
      "we_building_platform": "We are building the ultimate platform for MCs.",
      "your_voice_matters": "Your voice matters",
      "help_us_shape": "— help us shape the future.",
      "join_revolution": "Join the Revolution",
      "first_to_experience": "Be among the first to experience The MC Hub. Share your thoughts and get exclusive early access benefits.",
      "cant_see_form": "Can't see the form?",
      "open_survey": "Open Survey in New Tab",
      "be_first_know": "Be the first to know when we launch.",
      "sign_up_perks": "Sign up now for early access and exclusive perks.",
      "your_name": "Your Name",
      "email_address": "Email Address",
      "i_am_mc": "I am an MC",
      "i_hire_mcs": "I hire MCs",
      "i_am_partner": "I am a Partner/Sponsor",
      "tell_us_optional": "Anything you'd like to tell us? (Optional)",
      "notify_me": "Notify Me",
      "sending": "Sending...",
      "success_msg": "Thank you! We'll be in touch.",
      "error_msg": "Something went wrong. Please try again.",
      "meet_the_minds": "Meet The Minds",
      "team_subtitle": "The visionaries building the future of the MC industry."
    }
  },
  vi: {
    translation: {
      "home": "Trang chủ",
      "features": "Tính năng",
      "team": "Đội ngũ",
      "join_waitlist": "Tham gia chờ",
      "get_early_access": "Truy cập sớm",
      "learn_more": "Xem thêm",
      "coming_soon": "Sắp ra mắt",
      "platform_features": "Tính năng nền tảng",
      "why_choose": "Tại sao chọn",
      "explore_features": "Khám phá tính năng",
      "view_all_features": "Xem tất cả tính năng",
      "copyright": "© 2024 The MC Hub. Bảo lưu mọi quyền.",
      "hero_title_1": "Nâng tầm giọng nói",
      "hero_title_2": "Phát triển sự nghiệp",
      "hero_subtitle": "Nền tảng Quản lý & Phát triển sự nghiệp tích hợp AI đầu tiên dành riêng cho MC. Kết nối, cải thiện và tỏa sáng trên mọi sân khấu.",
      "features_preview_subtitle": "Mọi thứ bạn cần để quản lý sự nghiệp, nâng cao kỹ năng và nhận show.",
      "we_building_platform": "Chúng tôi đang xây dựng nền tảng tối thượng cho MC.",
      "your_voice_matters": "Tiếng nói của bạn rất quan trọng",
      "help_us_shape": "— hãy giúp chúng tôi định hình tương lai.",
      "join_revolution": "Tham gia Cuộc cách mạng",
      "first_to_experience": "Hãy là một trong những người đầu tiên trải nghiệm The MC Hub. Chia sẻ suy nghĩ của bạn và nhận đặc quyền truy cập sớm độc quyền.",
      "cant_see_form": "Không thấy biểu mẫu?",
      "open_survey": "Mở khảo sát trong thẻ mới",
      "be_first_know": "Hãy là người đầu tiên biết khi chúng tôi ra mắt.",
      "sign_up_perks": "Đăng ký ngay để nhận quyền truy cập sớm và các ưu đãi độc quyền.",
      "your_name": "Tên của bạn",
      "email_address": "Địa chỉ email",
      "i_am_mc": "Tôi là MC",
      "i_hire_mcs": "Tôi thuê MC",
      "i_am_partner": "Tôi là Đối tác/Nhà tài trợ",
      "tell_us_optional": "Bạn muốn nhắn nhủ gì thêm không? (Tùy chọn)",
      "notify_me": "Thông báo cho tôi",
      "sending": "Đang gửi...",
      "success_msg": "Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.",
      "error_msg": "Đã có lỗi xảy ra. Vui lòng thử lại.",
      "meet_the_minds": "Gặp gỡ Đội ngũ",
      "team_subtitle": "Những người kiến tạo tương lai cho ngành MC."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'vi', // Default to Vietnamese as requested "mostly VN customers"
    debug: false,
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;
