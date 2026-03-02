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
      "team_subtitle": "The visionaries building the future of the MC industry.",

      "feat_label": "Key Features",
      "feat_title_line1": "YOUR PERSONAL",
      "feat_title_line2": "DEVELOPMENT ROADMAP",
      "feat_subtitle": "Whether you're a beginner or an experienced pro, <strong>The MC Hub</strong> has the tools to help you shine.",
      "feat_tab_newbie": "Beginner",
      "feat_tab_pro": "Professional",
      "feat_tagline_newbie": "Build confidence from scratch — your most patient AI mentor.",
      "feat_tagline_pro": "Refine your skills — elevate your personal brand.",
      "feat_img_alt_newbie": "Beginner practicing MC with AI",
      "feat_img_alt_pro": "Professional MC on a big stage",
      "feat_badge_newbie": "AI Training Mode",
      "feat_badge_pro": "Pro Level Active",

      "feat_n1_title": "AI Pronunciation Tutor",
      "feat_n1_sub": "Pronunciation Coach",
      "feat_n1_desc": "Practice standard Vietnamese pronunciation, fix L/N mistakes, and control speaking pace. AI listens and points out errors in real time.",

      "feat_n2_title": "Script Library & Practice",
      "feat_n2_sub": "Battle-ready scripts",
      "feat_n2_desc": "Access hundreds of sample scripts (Weddings, News, Talkshows). Practice with a built-in Teleprompter integrated into the web.",

      "feat_n3_title": "Virtual Stage",
      "feat_n3_sub": "Virtual Stage – MVP",
      "feat_n3_desc": "Simulate crowd noise (applause, ambient sound) to train your stage presence right from your bedroom.",

      "feat_p1_title": "Advanced Voice Analytics",
      "feat_p1_sub": "In-depth analysis",
      "feat_p1_desc_before": "Beyond error correction, AI analyses ",
      "feat_p1_emotion": "Emotion Chart",
      "feat_p1_intonation": "Intonation",
      "feat_p1_persuasion": "Persuasiveness",
      "feat_p1_desc_after": ". Helps you go from \"speaking correctly\" to \"speaking brilliantly\".",

      "feat_p2_title": "Digital Portfolio Builder",
      "feat_p2_sub": "Digital profile",
      "feat_p2_desc": "Create a professional personal Landing Page (Bio Link) with your best showreels integrated. The perfect \"weapon\" to send to clients (even before a booking system exists).",

      "feat_p3_title": "Personal Branding & Networking",
      "feat_p3_sub": "Personal brand",
      "feat_p3_desc": "Join the exclusive MC community, share experiences, and get tips for building your personal brand in the industry.",

      "feat_bridge_badge": "Coming Soon",
      "feat_bridge_title": "🚀 LEVEL UP: FROM STUDENT TO STAR",
      "feat_bridge_desc_pre": "\"Complete practice sessions, score 80/100 or above to receive the ",
      "feat_bridge_badge_name": "Verified Badge",
      "feat_bridge_desc_mid": ". When the Booking feature launches, you will get ",
      "feat_bridge_priority": "priority visibility",
      "feat_bridge_desc_post": " to reach thousands of clients.\"",
      "feat_stat_score": "AI score required",
      "feat_stat_clients": "Clients reached",
      "feat_stat_opps": "Opportunities to shine"
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
      "team_subtitle": "Những người kiến tạo tương lai cho ngành MC.",

      "feat_label": "Tính năng nổi bật",
      "feat_title_line1": "LỘ TRÌNH PHÁT TRIỂN",
      "feat_title_line2": "DÀNH RIÊNG CHO BẠN",
      "feat_subtitle": "Dù bạn là người mới bắt đầu hay đã là chuyên gia, <strong>The MC Hub</strong> đều có công cụ để bạn tỏa sáng.",
      "feat_tab_newbie": "Người mới",
      "feat_tab_pro": "Chuyên nghiệp",
      "feat_tagline_newbie": "Xây dựng sự tự tin từ con số 0 — Người thầy AI kiên nhẫn nhất của bạn.",
      "feat_tagline_pro": "Tinh chỉnh kỹ năng — Nâng tầm thương hiệu cá nhân.",
      "feat_img_alt_newbie": "Người mới luyện tập dẫn chương trình cùng AI",
      "feat_img_alt_pro": "MC chuyên nghiệp trên sân khấu lớn",
      "feat_badge_newbie": "AI Training Mode",
      "feat_badge_pro": "Pro Level Active",

      "feat_n1_title": "AI Pronunciation Tutor",
      "feat_n1_sub": "Gia sư phát âm",
      "feat_n1_desc": "Luyện tập phát âm chuẩn Tiếng Việt (tròn vành rõ chữ), sửa ngọng (L/N), và kiểm soát tốc độ nói. AI lắng nghe và chỉ ra lỗi sai ngay lập tức.",

      "feat_n2_title": "Script Library & Practice",
      "feat_n2_sub": "Kho kịch bản thực chiến",
      "feat_n2_desc": "Truy cập hàng trăm kịch bản mẫu (Đám cưới, Bản tin, Talkshow). Tập dẫn theo máy nhắc chữ (Teleprompter) tích hợp sẵn trên web.",

      "feat_n3_title": "Virtual Stage",
      "feat_n3_sub": "Sân khấu ảo - MVP",
      "feat_n3_desc": "Chế độ giả lập tiếng ồn môi trường (tiếng vỗ tay, tiếng ồn ào) để rèn luyện bản lĩnh sân khấu ngay tại phòng ngủ.",

      "feat_p1_title": "Advanced Voice Analytics",
      "feat_p1_sub": "Phân tích chuyên sâu",
      "feat_p1_desc_before": "Không chỉ sửa lỗi, AI phân tích ",
      "feat_p1_emotion": "Biểu đồ cảm xúc (Emotion)",
      "feat_p1_intonation": "Ngữ điệu (Intonation)",
      "feat_p1_persuasion": "Sức thuyết phục",
      "feat_p1_desc_after": ". Giúp bạn từ \"nói đúng\" thành \"nói hay\".",

      "feat_p2_title": "Digital Portfolio Builder",
      "feat_p2_sub": "Xây dựng hồ sơ số",
      "feat_p2_desc": "Tạo một Landing Page cá nhân (Bio Link) chuyên nghiệp tích hợp sẵn các bản thu âm (Showreel) tốt nhất của bạn. Đây là \"vũ khí\" để bạn gửi cho khách hàng (dù chưa có hệ thống booking).",

      "feat_p3_title": "Personal Branding & Networking",
      "feat_p3_sub": "Thương hiệu cá nhân",
      "feat_p3_desc": "Tham gia cộng đồng MC độc quyền, chia sẻ kinh nghiệm và nhận các tips xây dựng thương hiệu cá nhân trong ngành.",

      "feat_bridge_badge": "Coming Soon",
      "feat_bridge_title": "🚀 LEVEL UP: TỪ HỌC VIÊN ĐẾN NGÔI SAO",
      "feat_bridge_desc_pre": "\"Hoàn thành các bài luyện tập, đạt điểm AI trên 80/100 để nhận ",
      "feat_bridge_badge_name": "Huy hiệu Xác thực (Verified Badge)",
      "feat_bridge_desc_mid": ". Khi tính năng Booking ra mắt, bạn sẽ được ",
      "feat_bridge_priority": "ưu tiên hiển thị",
      "feat_bridge_desc_post": " tiếp cận hàng ngàn khách hàng.\"",
      "feat_stat_score": "Điểm AI cần đạt",
      "feat_stat_clients": "Khách hàng tiếp cận",
      "feat_stat_opps": "Cơ hội tỏa sáng"
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
