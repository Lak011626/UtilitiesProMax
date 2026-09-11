// Đoạn mã JavaScript mẫu để xử lý tìm kiếm nhanh danh sách tiện ích
document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // 1. BẢNG DỊCH ĐA NGÔN NGỮ (i18n)
  // ==========================================
  const translations = {
    en: {
      nav_utilities: "Utilities",
      nav_about: "About",
      nav_blog: "Blog",
      hero_category: "UTILITIES",
      hero_title: "Start with what you need.",
      hero_subtitle: "Choose a task and go straight to the utility.",
      search_label: "Find a utility",
      search_placeholder: "What do you want to do?",


      // About Page
      about_title: "About PetexSpace Utilities",
      about_subtitle:
        "A collection of fast, lightweight, and modern web utilities built to make your daily tasks effortless.",
      about_mission_title: "🚀 Mission",
      about_mission_desc:
        "PetexSpace Utilities provides clean, privacy-focused, and high-performance online tools without clutter or annoying ads. Everything is designed to be developer and user friendly.",
      about_tech_title: "🛠 Tech Stack",

      // Blog Page
      blog_title: "Blog & Articles",
      blog_subtitle: "Latest news, technical guides, and utility updates.",
      blog_post1_tag: "Guide",
      blog_post1_title: "How to Generate QR Codes Safely in Java",
      blog_post1_desc:
        "Learn how to create QR codes internally using ZXing library without depending on 3rd party APIs.",
      blog_post2_tag: "Productivity",
      blog_post2_title: "Top 10 Web Utilities Every Developer Needs",
      blog_post2_desc:
        "Discover essential online tools to boost your daily coding and productivity workflow.",


      u1_title: "Create a QR code",
      u1_desc: "QR Code Generator",
      u2_title: "Read a QR code",
      u2_desc: "QR Code Decoder",
      u3_title: "Extract text from image",
      u3_desc: "Image OCR to Text",
      u4_title: "Mouse Test",
      u4_desc: "Test mouse buttons and scroll",
      u5_title: "Test connected devices",
      u5_desc: "Device Diagnostics",
      u6_title: "Test typing speed",
      u6_desc: "Typing Speed Test",
      u7_title: "Generate names",
      u7_desc: "Random Name Generator",
      u8_title: "Random selection",
      u8_desc: "Random Wheel Picker",
      u9_title: "Convert a file",
      u9_desc: "File Converter",
      u10_title: "Work with data or text",
      u10_desc: "Data & Text Tools",
      u11_title: "Unit converter & Calculator",
      u11_desc: "Calculator",
      u12_title: "Color Contrast Checker",
      u12_desc: "Check Color Contrast",
      u13_title: "Word & Character Counter",
      u13_desc: "Text Counter",
      u14_title: "Extract color palette from image",
      u14_desc: "Image Color Palette",
      u15_title: "Get current 2FA code",
      u15_desc: "Get 2FA Code",
      u16_title: "Write & Compile LaTeX",
      u16_desc: "LaTeX Editor",
    },
    vi: {
      nav_utilities: "Tiện ích",
      nav_about: "Giới thiệu",
      nav_blog: "Bài viết",
      hero_category: "BỘ TIỆN ÍCH",
      hero_title: "Bắt đầu với nhu cầu của bạn.",
      hero_subtitle: "Chọn một công cụ và bắt đầu công việc ngay lập tức.",
      search_label: "Tìm kiếm tiện ích",
      search_placeholder: "Bạn muốn làm gì?",


      // About Page
      about_title: "Về PetexSpace Utilities",
      about_subtitle:
        "Bộ công cụ web nhanh chóng, nhẹ nhàng và hiện đại giúp công việc hàng ngày của bạn trở nên dễ dàng.",
      about_mission_title: "🚀 Sứ mệnh",
      about_mission_desc:
        "PetexSpace Utilities cung cấp các công cụ trực tuyến sạch sẽ, bảo mật và hiệu suất cao mà không có quảng cáo phiền phức. Mọi thứ được thiết kế tối ưu cho lập trình viên và người dùng.",
      about_tech_title: "🛠 Công nghệ sử dụng",

      // Blog Page
      blog_title: "Bài viết & Tin tức",
      blog_subtitle:
        "Cập nhật những tin tức, hướng dẫn kỹ thuật và tính năng mới nhất.",
      blog_post1_tag: "Hướng dẫn",
      blog_post1_title: "Cách tạo mã QR an toàn trong Java",
      blog_post1_desc:
        "Tìm hiểu cách tạo mã QR nội bộ bằng thư viện ZXing mà không phụ thuộc vào API bên thứ 3.",
      blog_post2_tag: "Năng suất",
      blog_post2_title: "Top 10 tiện ích Web lập trình viên nào cũng cần",
      blog_post2_desc:
        "Khám phá các công cụ trực tuyến thiết yếu giúp tăng tốc quy trình làm việc và lập trình hàng ngày của bạn.",


      u1_title: "Tạo mã QR",
      u1_desc: "Trình tạo mã QR",
      u2_title: "Đọc mã QR",
      u2_desc: "Trình giải mã QR",
      u3_title: "Trích xuất chữ từ hình ảnh",
      u3_desc: "OCR hình ảnh thành văn bản",
      u4_title: "Kiểm tra chuột",
      u4_desc: "Kiểm tra chuột & con lăn",
      u5_title: "Kiểm tra thiết bị được kết nối",
      u5_desc: "Chẩn đoán thiết bị",
      u6_title: "Kiểm tra tốc độ gõ",
      u6_desc: "Kiểm tra tốc độ đánh máy",
      u7_title: "Tạo tên",
      u7_desc: "Trình tạo tên ngẫu nhiên",
      u8_title: "Chọn ngẫu nhiên",
      u8_desc: "Bánh xe ngẫu nhiên",
      u9_title: "Chuyển đổi một tập tin",
      u9_desc: "Trình chuyển đổi tập tin",
      u10_title: "Làm việc với dữ liệu hoặc văn bản",
      u10_desc: "Xử lý Dữ liệu & Văn bản",
      u11_title: "Chuyển đổi đơn vị và tính toán",
      u11_desc: "Máy tính & Đổi đơn vị",
      u12_title: "Kiểm tra độ tương phản màu",
      u12_desc: "Kiểm tra độ tương phản màu",
      u13_title: "Đếm từ và ký tự",
      u13_desc: "Đếm văn bản",
      u14_title: "Lấy màu từ hình ảnh",
      u14_desc: "Trích xuất bảng màu ảnh",
      u15_title: "Lấy mã 2FA hiện tại",
      u15_desc: "Trình lấy mã 2FA",
      u16_title: "Viết và biên dịch LaTeX",
      u16_desc: "Trình soạn thảo LaTeX",
    },
  };

  const langBtn = document.getElementById("lang-btn");
  const langDropdown = document.getElementById("lang-dropdown");
  const currentLangText = document.getElementById("current-lang");
  const langOptions = document.querySelectorAll(".lang-option");

  let currentLang = localStorage.getItem("app_lang") || "vi";
  applyLanguage(currentLang);

  if (langBtn && langDropdown) {
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      langDropdown.classList.toggle("hidden");
    });

    document.addEventListener("click", function () {
      langDropdown.classList.add("hidden");
    });

    langOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const selectedLang = this.getAttribute("data-lang");
        applyLanguage(selectedLang);
        localStorage.setItem("app_lang", selectedLang);
        langDropdown.classList.add("hidden");
      });
    });
  }

  function applyLanguage(lang) {
    currentLang = lang;
    if (currentLangText) {
      currentLangText.textContent = lang === "vi" ? "Tiếng Việt" : "English";
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });
  }

  // ==========================================
  // 2. CHẾ ĐỘ SÁNG / TỐI (THEME TOGGLE)
  // ==========================================
  const themeBtn = document.getElementById("theme-btn");
  const htmlEl = document.documentElement;

  let currentTheme = localStorage.getItem("app_theme") || "dark";
  applyTheme(currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(currentTheme);
      localStorage.setItem("app_theme", currentTheme);
    });
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      htmlEl.classList.add("dark");
    } else {
      htmlEl.classList.remove("dark");
    }
  }

  // ==========================================
  // 3. TÌM KIẾM TIỆN ÍCH (SEARCH FILTER)
  // ==========================================
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase().trim();
      const cards = document.querySelectorAll(".utility-card");

      cards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  }
});
