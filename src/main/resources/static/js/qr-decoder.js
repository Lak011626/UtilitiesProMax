document.addEventListener("DOMContentLoaded", function () {
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("qr-file-input");
  const uploadPlaceholder = document.getElementById("upload-placeholder");
  const previewContainer = document.getElementById("preview-container");
  const imagePreview = document.getElementById("image-preview");
  const fileName = document.getElementById("file-name");
  const decodeBtn = document.getElementById("decode-btn");
  const resultBox = document.getElementById("result-box");
  const decodedResult = document.getElementById("decoded-result");
  const copyBtn = document.getElementById("copy-btn");
  const errorAlert = document.getElementById("error-alert");

  let selectedFile = null;

  // Xử lý Click dropzone
  dropzone.addEventListener("click", () => fileInput.click());

  // Xử lý Drag & Drop
  ["dragenter", "dragover"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.add("border-blue-500", "bg-blue-500/5");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.remove("border-blue-500", "bg-blue-500/5");
    });
  });

  dropzone.addEventListener("drop", (e) => {
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      handleFile(this.files[0]);
    }
  });

  function handleFile(file) {
    if (!file.type.startsWith("image/")) {
      showError("Vui lòng chọn một file hình ảnh hợp lệ!");
      return;
    }
    selectedFile = file;
    hideError();
    resultBox.classList.add("hidden");

    // Preview ảnh
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.src = e.target.result;
      fileName.textContent = file.name;
      uploadPlaceholder.classList.add("hidden");
      previewContainer.classList.remove("hidden");
      decodeBtn.disabled = false;
    };
    reader.readAsDataURL(file);
  }

  // Giải mã QR code
  decodeBtn.addEventListener("click", function () {
    if (!selectedFile) return;

    hideError();
    const originalText = decodeBtn.textContent;
    decodeBtn.textContent = "Decoding...";
    decodeBtn.disabled = true;

    const formData = new FormData();
    formData.append("file", selectedFile);

    fetch("/api/qr/decode", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Không thể giải mã mã QR này.");
        }
        return data;
      })
      .then((data) => {
        decodedResult.value = data.result;
        resultBox.classList.remove("hidden");
      })
      .catch((err) => {
        showError(err.message);
      })
      .finally(() => {
        decodeBtn.textContent = originalText;
        decodeBtn.disabled = false;
      });
  });

  // Nút Copy nội dung đã giải mã
  copyBtn.addEventListener("click", function () {
    decodedResult.select();
    navigator.clipboard.writeText(decodedResult.value).then(() => {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      copyBtn.classList.add("bg-green-600", "text-white");
      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.classList.remove("bg-green-600", "text-white");
      }, 2000);
    });
  });

  function showError(msg) {
    errorAlert.textContent = msg;
    errorAlert.classList.remove("hidden");
  }

  function hideError() {
    errorAlert.classList.add("hidden");
    errorAlert.textContent = "";
  }
});
