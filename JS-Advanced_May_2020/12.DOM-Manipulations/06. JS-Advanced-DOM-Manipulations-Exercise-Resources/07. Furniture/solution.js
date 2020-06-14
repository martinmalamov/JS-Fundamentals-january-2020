function solve() {
  const genBtn = document.querySelector('#exercise button');
  const buyBtn = document.querySelector("#exercise > button:nth-child(6)");
  genBtn.addEventListener('click', getData);
  buyBtn.addEventListener('click', procesData);
  const tbody = document.querySelector("#exercise > div > div > div > div > table > tbody");
  const result = document.querySelector("#exercise > textarea:nth-child(5)");
  let totalPrice = 0;
  let avgDecFactor = 0;
  let averages = [];
  let goodsBuyed = [];

  function genAttrElement(type, attr, content) {
      let item = document.createElement(type);
      item.setAttribute(attr, content);
      return item;
  }

  function genericElement(typeEl, content) {
      let htmlElement = document.createElement(typeEl);
      if (typeof content === 'string' || typeof content === 'number') {
          htmlElement.innerHTML = content;
      }
      if (typeof content === 'object') {
          htmlElement.appendChild(content);
      }
      return htmlElement;
  }

  function addItem(par, child) {
      return par.appendChild(child);
  }

  function getData() {
      let arr = JSON.parse(document.querySelector("#exercise > textarea:nth-child(2)").value);
      arr.map(function (e) {
              let name = genericElement('p', e['name']);
              let img = genAttrElement('img', 'src', e['img']);
              let price = genericElement('p', e['price']);
              let decFactor = genericElement('p', e['decFactor']);
              let input = genAttrElement('input', 'type', 'checkbox');
              let tr = genericElement('tr', '');
              addItem(tr, genericElement('td', img));
              addItem(tr, genericElement('td', name));
              addItem(tr, genericElement('td', price));
              addItem(tr, genericElement('td', decFactor));
              addItem(tr, genericElement('td', input));
              addItem(tbody, tr);
          }
      )
  }

  function procesData() {
      let resultData = Array.from(document.querySelectorAll("input[type='checkbox']"));
      resultData.map(e => {
          if (e.checked === true) {
              averages.push(+e.parentNode.previousElementSibling.textContent);
              totalPrice += +e.parentNode.previousElementSibling.previousElementSibling.textContent;
              goodsBuyed.push(e.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
          }
      });
      avgDecFactor = averages.reduce((a, b) => a + b, 0) / averages.length;
      result.value += "Bought furniture: " + goodsBuyed.join(', ') + "\n";
      result.value += "Total price: " + totalPrice.toFixed(2) + "\n";
      result.value += "Average decoration factor: " + avgDecFactor;
  }
} 


