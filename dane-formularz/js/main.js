// Get inputs
const userName = document.getElementById('user-name');
const userSurname = document.getElementById('user-surname');
const userPhoneNumber = document.getElementById('user-phone');

// Get paragraphs
const paragraphName = document.getElementById('name');
const paragraphSurname = document.getElementById('surname');
const paragraphPhone = document.getElementById('phone');

// Get button
const button = document.querySelector('button');


function printData() {
    let textUserName = document.createTextNode(userName.value);
    paragraphName.appendChild(textUserName);

    let textUserSurname = document.createTextNode(userSurname.value);
    paragraphSurname.appendChild(textUserSurname);

    let textUserPhone = document.createTextNode(userPhoneNumber.value);
    paragraphPhone.appendChild(textUserPhone);
}

button.addEventListener('click', printData);