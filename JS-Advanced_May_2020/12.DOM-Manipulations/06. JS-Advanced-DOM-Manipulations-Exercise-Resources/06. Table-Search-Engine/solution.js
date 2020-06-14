function solve() {
   //закачаме Listener
   document.querySelector('#searchBtn').addEventListener('click', onSearch);

   const input = document.querySelector('#searchField');

   function onSearch(e) {
      //четем входа
      const query = input.value
         .trim().toLocaleLowerCase();
      if (query.trim().length > 0) {
         const tbody = document.querySelector('tbody');
         //обхождаме редовете и премахваме клас select
         [...tbody.querySelectorAll('tr')]
            .forEach(r => {
               r.classList.remove('select')
            });
         //обхождаме клетките и търсим съвпадения
         [...tbody.querySelectorAll('td')]
            .forEach(d => {
               if (d.textContent.trim().toLocaleLowerCase().includes(query)) {
                  d.parentNode.classList.add('select')
               }
            });
         //зачистваме полето
         input.value = '';
      }
   }
}