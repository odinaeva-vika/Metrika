const checkboxsDesign = document.getElementById("checkboxs-design");

const checkСheckbox = (e) => {
  e.target.classList.contains('calculator-design__text') &&
    e.target.classList.toggle('calculator-design__text--active');
};

checkboxsDesign.addEventListener("click", checkСheckbox)