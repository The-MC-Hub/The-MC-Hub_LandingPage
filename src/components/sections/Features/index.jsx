import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

const Features = () => {
  const [activeTab, setActiveTab] = React.useState('newbie'); // 'newbie' | 'pro'
  const isNewbie = activeTab === 'newbie';

  return (
    <section id="features" className="section features-section">
      <div className="container">
        {/* Main heading */}
        <div className="features-header-wrapper">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            LỘ TRÌNH PHÁT TRIỂN DÀNH RIÊNG CHO BẠN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="section-subtitle"
          >
            Dù bạn là người mới bắt đầu hay đã là chuyên gia, The MC Hub đều có công cụ để bạn tỏa sáng.
          </motion.p>
        </div>

        {/* Toggle switch */}
        <div className="roadmap-toggle-wrapper">
          <button
            type="button"
            className="roadmap-toggle"
            onClick={() => setActiveTab(isNewbie ? 'pro' : 'newbie')}
            aria-label="Chuyển đổi giữa người mới và MC chuyên nghiệp"
          >
            <span className="roadmap-toggle-option">Người mới</span>
            <span className="roadmap-toggle-option">Chuyên nghiệp</span>
            <motion.span
              className="roadmap-toggle-thumb"
              layout
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              style={{ left: isNewbie ? '4px' : 'calc(50% + 4px)' }}
            />
          </button>
        </div>

        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="roadmap-tab-content"
        >
          {isNewbie ? (
            <>
              <motion.p variants={itemVariants} className="roadmap-tab-tagline">
                Xây dựng sự tự tin từ con số 0 - Người thầy AI kiên nhẫn nhất của bạn.
              </motion.p>

              <div className="category-content-wrapper roadmap-layout">
                <motion.div variants={itemVariants} className="category-image-wrapper roadmap-image-newbie">
                  <img
                    src="/src/assets/images/newbie.jpg"
                    alt="Người mới luyện tập dẫn chương trình cùng AI"
                    className="category-image"
                    loading="lazy"
                  />
                  <div className="image-overlay"></div>
                </motion.div>

                <div className="features-grid">
                  <motion.div variants={itemVariants} className="feature-card">
                    <div className="feature-icon">🤖</div>
                    <h3>AI Pronunciation Tutor (Gia sư phát âm)</h3>
                    <p>
                      Luyện tập phát âm chuẩn Tiếng Việt (tròn vành rõ chữ), sửa ngọng (L/N), và kiểm soát tốc độ nói.
                      AI lắng nghe và chỉ ra lỗi sai ngay lập tức.
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="feature-card">
                    <div className="feature-icon">📝</div>
                    <h3>Script Library &amp; Practice (Kho kịch bản thực chiến)</h3>
                    <p>
                      Truy cập hàng trăm kịch bản mẫu (Đám cưới, Bản tin, Talkshow). Tập dẫn theo máy nhắc chữ
                      (Teleprompter) tích hợp sẵn trên web.
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="feature-card">
                    <div className="feature-icon">🏟️</div>
                    <h3>Virtual Stage (Sân khấu ảo - MVP)</h3>
                    <p>
                      Chế độ giả lập tiếng ồn môi trường (tiếng vỗ tay, tiếng ồn ào) để rèn luyện bản lĩnh sân khấu
                      ngay tại phòng ngủ.
                    </p>
                  </motion.div>
                </div>
              </div>
            </>
          ) : (
            <>
              <motion.p variants={itemVariants} className="roadmap-tab-tagline">
                Tinh chỉnh kỹ năng - Nâng tầm thương hiệu cá nhân.
              </motion.p>

              <div className="category-content-wrapper roadmap-layout roadmap-layout-pro">
                <motion.div variants={itemVariants} className="category-image-wrapper roadmap-image-pro">
                  <img
                    src="/src/assets/images/pro.jpg"
                    alt="MC chuyên nghiệp trên sân khấu lớn"
                    className="category-image"
                    loading="lazy"
                  />
                  <div className="image-overlay"></div>
                </motion.div>

                <div className="features-grid">
                  <motion.div variants={itemVariants} className="feature-card">
                    <div className="feature-icon">📊</div>
                    <h3>Advanced Voice Analytics (Phân tích chuyên sâu)</h3>
                    <p>
                      Không chỉ sửa lỗi, AI phân tích <strong>Biểu đồ cảm xúc (Emotion)</strong>,{' '}
                      <strong>Ngữ điệu (Intonation)</strong> và <strong>Sức thuyết phục</strong>. Giúp bạn từ &quot;nói
                      đúng&quot; thành &quot;nói hay&quot;.
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="feature-card">
                    <div className="feature-icon">💼</div>
                    <h3>Digital Portfolio Builder (Xây dựng hồ sơ số)</h3>
                    <p>
                      Tạo một Landing Page cá nhân (Bio Link) chuyên nghiệp tích hợp sẵn các bản thu âm (Showreel) tốt
                      nhất của bạn. Đây là &quot;vũ khí&quot; để bạn gửi cho khách hàng (dù chưa có hệ thống booking).
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="feature-card">
                    <div className="feature-icon">🌍</div>
                    <h3>Personal Branding &amp; Networking</h3>
                    <p>
                      Tham gia cộng đồng MC độc quyền, chia sẻ kinh nghiệm và nhận các tips xây dựng thương hiệu cá
                      nhân trong ngành.
                    </p>
                  </motion.div>
                </div>
              </div>
            </>
          )}
        </motion.div>

        {/* Bridge / coming soon section */}
        <motion.div
          className="bridge-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2 }}
        >
          <p className="bridge-badge">Coming Soon</p>
          <h2 className="bridge-title">🚀 LEVEL UP: TỪ HỌC VIÊN ĐẾN NGÔI SAO</h2>
          <p className="bridge-description">
            &quot;Hoàn thành các bài luyện tập, đạt điểm AI trên 80/100 để nhận <strong>Huy hiệu Xác thực (Verified
            Badge)</strong>. Khi tính năng Booking ra mắt, bạn sẽ được <strong>ưu tiên hiển thị</strong> tiếp cận hàng
            ngàn khách hàng.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
