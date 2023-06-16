const calcBtn = document.getElementById("calcBtn");

const calcBtnClickHandler = (e) => {
  const quantityElement = e.target.parentElement.querySelector(".calc-quantity");
  let quantity = +quantityElement.textContent;

  if (e.target.classList.contains("calc-plus")) {
    quantity++;
  } else if (e.target.classList.contains("calc-minus") && quantity > 1) {
    quantity--;
  }

  quantityElement.textContent = quantity;
};

calcBtn.addEventListener("click", calcBtnClickHandler);


