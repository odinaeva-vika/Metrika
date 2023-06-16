const outputRange = document.getElementById("output-range"),
      sliderRange = document.getElementById("range"),
      amountSquareMeter = document.getElementById("amount-square-meter"),
      amountProject = document.getElementById("amount-project"),
      checkboxes = document.querySelectorAll('.additional-services__box');

const getRangeValue = () => {
  outputRange.textContent = sliderRange.value;
};

getRangeValue();

const services = [
  { name: 'умный дом', price: 30000, checkbox: null },
  { name: 'технический надзор', price: 20000, checkbox: null },
  { name: 'авторский надзор', price: 25000, checkbox: null },
  { name: '3D тур по визуализациям проекта', price: 4000, checkbox: null },
  { name: 'дизайн-проект дополнительного помещения', price: '20000', checkbox: null },
  { name: 'дизайн-проект лоджии', price: '10000', checkbox: null },
  { name: 'дизайн-проект гардеробной комнаты', price: '10000', checkbox: null }
];

const getCheckboxValue = checkbox => checkbox.querySelector('input').checked;

const calculation = () => {
  const sum = services.reduce((acc, service) => {
    if (service.checkbox && getCheckboxValue(service.checkbox)) {
      return acc + parseInt(service.price);
    }
    return acc;
  }, parseInt(amountSquareMeter.textContent) * parseInt(sliderRange.value));

  amountProject.textContent = decdig(sum);
};

checkboxes.forEach(checkbox => {
  const serviceName = checkbox.dataset.name;
  const service = services.find(service => service.name === serviceName);
  if (service) {
    service.checkbox = checkbox;
    checkbox.addEventListener('change', calculation);
  }
});

function decdig(sum){
    sum = (''+sum).split(' ').join('');
    return sum
        .split('')
        .reverse()
        .join('')
        .match(/\d\d?\d?/g)
        .map(function(el){ return el.split('').reverse().join(''); })
        .reverse()
        .join(' ');
}

sliderRange.addEventListener('input', () => {
  getRangeValue();
  calculation();
});
