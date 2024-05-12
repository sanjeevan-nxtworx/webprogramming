const likeButtons = document.querySelectorAll(".card-btn");

likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card-btn--like");
  });
});
