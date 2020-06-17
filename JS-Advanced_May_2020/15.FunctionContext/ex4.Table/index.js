function solve(){
   //добавяме click event Listener на тялото на таблицата
   const tbdoy = document.querySelector('tbody');
   const items = tbdoy.querySelectorAll('tr');

   tbdoy.addEventListener('dblclick', parseTable);

   function parseTable(e){
      //намираме изнрания елемент
      const row = e.target.parentNode;

      //проверяваме дали избрания елемент е ред
      if (row.nodeName === 'TR') {
         //ако изнрания елемент свети -> гасим го
         if(row.style.backgroundColor !== ''){
            row.style.backgroundColor = '';
         }else{

         // иначе , гасим всички останали и го светваме
         [...items].forEach(i => i.style.backgroundColor = '')
         row.style.backgroundColor = '#413f5e';
         }
      }
   }
}
