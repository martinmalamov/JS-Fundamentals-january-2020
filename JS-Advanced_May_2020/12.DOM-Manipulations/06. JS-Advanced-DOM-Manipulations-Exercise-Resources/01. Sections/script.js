function create(words) {

  for (let i = 0; i < words.length; i++) {

    let div = document.createElement('div')
    let paragraph = document.createElement('p')
    paragraph.textContent = words[i];

    paragraph.style.display = "none";
    div.appendChild(paragraph)

    div.addEventListener("click", function () {
        paragraph.style.display = "block"
    });

    let contentDiv = document.getElementById('content');
    contentDiv.appendChild(div);
  }
}