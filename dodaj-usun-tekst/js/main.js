const paragraph = document.getElementById('text');
const textOfParagraph = document.createTextNode('Akademia 108');
const buttonAdd = document.getElementById('add');
const buttonRemove = document.getElementById('remove');

// paragraph.appendChild(textOfParagraph);



buttonAdd.addEventListener('click', function () {
    paragraph.appendChild(textOfParagraph);
});

buttonRemove.addEventListener('click', function () {
    paragraph.removeChild(textOfParagraph);
});