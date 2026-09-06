// Đoạn mã JavaScript mẫu để xử lý tìm kiếm nhanh danh sách tiện ích
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(
    "input[placeholder='What do you want to do?']",
  );
  const utilityCards = document.querySelectorAll("main .space-y-3 > a");

  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      const keyword = e.target.value.toLowerCase().trim();

      utilityCards.forEach((card) => {
        const title = card.querySelector("h2").textContent.toLowerCase();
        const subtitle = card
          .querySelector("span.text-sm")
          .textContent.toLowerCase();

        if (title.includes(keyword) || subtitle.includes(keyword)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
});
