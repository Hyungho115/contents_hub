const toggleViewBtn = document.querySelector("#toggleViewBtn");
const postList = document.querySelector("#postList");

if (toggleViewBtn && postList) {
  toggleViewBtn.addEventListener("click", () => {
    const isHighlightOn = postList.classList.toggle("highlight");
    toggleViewBtn.setAttribute("aria-pressed", String(isHighlightOn));
    toggleViewBtn.textContent = isHighlightOn
      ? "기본 보기로 전환"
      : "카드 강조 보기";
  });
}
