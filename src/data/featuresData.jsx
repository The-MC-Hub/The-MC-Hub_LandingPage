import React from 'react';
import {
    FaChartLine, FaIdCard, FaCalendarAlt, FaFileContract,
    FaMicrophoneAlt, FaHeadphones, FaUserFriends,
    FaEdit, FaTshirt, FaGamepad
} from 'react-icons/fa';

export const featuresData = [
    {
        id: 'booking',
        title: "Core Booking & Management",
        title_vi: "Quản lý & Đặt show cốt lõi",
        description: "Comprehensive tools to manage your bookings, contracts, and professional profile with ease.",
        description_vi: "Bộ công cụ toàn diện giúp bạn quản lý show, hợp đồng và hồ sơ chuyên nghiệp một cách dễ dàng.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        items: [
            {
                icon: <FaChartLine />,
                title: "Smart Ranking",
                title_vi: "Xếp hạng Thông minh",
                desc: "Transparent ranking based on quality and response rate.",
                desc_vi: "Hệ thống xếp hạng minh bạch dựa trên chất lượng và tốc độ phản hồi."
            },
            {
                icon: <FaIdCard />,
                title: "Dynamic Portfolio",
                title_vi: "Portfolio Động",
                desc: "High-quality showreels and verified badges to build trust.",
                desc_vi: "Showreel chất lượng cao và huy hiệu xác thực giúp xây dựng uy tín."
            },
            {
                icon: <FaCalendarAlt />,
                title: "Smart Calendar",
                title_vi: "Lịch thông minh",
                desc: "2-way sync with Google/Apple Calendar.",
                desc_vi: "Đồng bộ 2 chiều với Google/Apple Calendar."
            },
            {
                icon: <FaFileContract />,
                title: "Escrow & E-contract",
                title_vi: "E-Contract & Escrow",
                desc: "Secure payments and auto-generated contracts.",
                desc_vi: "Thanh toán bảo đảm và hợp đồng tự động."
            }
        ]
    },
    {
        id: 'tech',
        title: "Advanced Tech & AI",
        title_vi: "Công nghệ AI Tiên tiến",
        description: "Leverage cutting-edge AI to improve your skills and find the perfect opportunities.",
        description_vi: "Tận dụng công nghệ AI tiên phong để nâng cao kỹ năng và tìm kiếm cơ hội phù hợp nhất.",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
        items: [
            {
                icon: <FaMicrophoneAlt />,
                title: "AI Voice Coach",
                title_vi: "HLV Giọng nói AI",
                desc: "Real-time analysis of recording speed and pronunciation.",
                desc_vi: "Phân tích tốc độ nói và phát âm theo thời gian thực."
            },
            {
                icon: <FaHeadphones />,
                title: "Virtual Casting Room",
                title_vi: "Phòng Casting Ảo",
                desc: "Record and submit script samples directly in-app.",
                desc_vi: "Ghi âm và nộp mẫu giọng casting ngay trên ứng dụng."
            },
            {
                icon: <FaUserFriends />,
                title: "MC Duo Matching",
                title_vi: "Ghép đôi MC",
                desc: "Find your perfect co-host with style-based matching.",
                desc_vi: "Tìm bạn dẫn ăn ý dựa trên phong cách dẫn."
            }
        ]
    },
    {
        id: 'ecosystem',
        title: "Ecosystem & Tools",
        title_vi: "Hệ sinh thái & Công cụ",
        description: "A complete ecosystem supporting every aspect of your MC journey, from wardrobe to scripts.",
        description_vi: "Hệ sinh thái trọn vẹn hỗ trợ mọi khía cạnh sự nghiệp MC, từ trang phục đến kịch bản.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        items: [
            {
                icon: <FaEdit />,
                title: "Script Collaboration",
                title_vi: "Cộng tác Kịch bản",
                desc: "Real-time editing with clients. No more file ping-pong.",
                desc_vi: "Chỉnh sửa trực tuyến cùng khách hàng. Không còn phải gửi file qua lại."
            },
            {
                icon: <FaTshirt />,
                title: "Wardrobe & AI Stylist",
                title_vi: "Trợ lý Trang phục AI",
                desc: "Get outfit suggestions and rent costumes effortlessly.",
                desc_vi: "Gợi ý phối đồ và thuê trang phục diễn dễ dàng."
            },
            {
                icon: <FaGamepad />,
                title: "Interactive Stage Kit",
                title_vi: "Bộ công cụ Tương tác",
                desc: "Lucky draws and live voting tools for events.",
                desc_vi: "Quay số may mắn và bình chọn trực tiếp cho sự kiện."
            }
        ]
    }
];
