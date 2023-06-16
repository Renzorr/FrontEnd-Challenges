const filterSelect = document.querySelectorAll("#filter");

filterSelect.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedValue = button.value;
    const challengeCard = document.querySelectorAll(".challenge-card");

    challengeCard.forEach((item) => {
      if (
        !(
          selectedValue === "all" ||
          selectedValue === item.getAttribute("data-value")
        )
      ) {
        item.style.display = "none";
      } else {
        item.style.display = "block";
        item.focus();
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  loadData();
});
