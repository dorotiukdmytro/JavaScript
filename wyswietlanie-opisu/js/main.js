const paragraph = document.getElementById('opis');
const button = document.querySelector('button');

button.addEventListener('click', function () {
    const paragraphText = document.createTextNode('Akademia 108');
    paragraph.appendChild(paragraphText);
});