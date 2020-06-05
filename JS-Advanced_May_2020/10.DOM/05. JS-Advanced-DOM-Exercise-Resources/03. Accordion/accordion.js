function toggle() {
    let div = document.querySelector('#extra');
    let btn = document.querySelectorAll('.button')[0];

    if(div.style.display === 'block'){
        btn.textContent = 'More';
        div.style.display = 'none';
    }else{
        btn.textContent = 'Less';
        div.style.display = 'block';
    }
}