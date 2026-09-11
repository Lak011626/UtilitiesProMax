document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.getElementById("generate-btn");
  const qrInput = document.getElementById("qr-input");
  const qrResultBox = document.getElementById("qr-result-box");
  const qrImage = document.getElementById("qr-image");
  const downloadBtn = document.getElementById("download-btn");

  generateBtn.addEventListener("click", function () {
    const textValue = qrInput.value.trim();

    // Kiểm tra xem người dùng đã nhập gì chưa
    if (!textValue) {
      alert("Vui lòng nhập nội dung hoặc đường link để tạo mã QR!");
      qrInput.focus();
      return;
    }

    // Đổi trạng thái nút bấm
    const originalText = generateBtn.textContent;
    generateBtn.textContent = "Generating...";
    generateBtn.disabled = true;
    generateBtn.classList.add("opacity-70", "cursor-not-allowed");

    // Gọi API nội bộ của Spring Boot backend
    const apiUrl = `/api/qr/generate?data=${encodeURIComponent(textValue)}`;

    // Load ảnh và hiển thị kết quả
    qrImage.src = apiUrl;

    qrImage.onload = function () {
      // Khôi phục nút bấm
      generateBtn.textContent = "Generate QR Code";
      generateBtn.disabled = false;
      generateBtn.classList.remove("opacity-70", "cursor-not-allowed");

      // Hiển thị khung chứa QR code và nút download
      qrResultBox.classList.remove("hidden");
      downloadBtn.href = apiUrl;
    };

    qrImage.onerror = function () {
      alert("Đã có lỗi xảy ra khi tạo QR Code. Vui lòng thử lại!");
      generateBtn.textContent = originalText;
      generateBtn.disabled = false;
      generateBtn.classList.remove("opacity-70", "cursor-not-allowed");
    };
  });
});
