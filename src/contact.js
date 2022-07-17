export default function contactTab() {
    const content = document.querySelector('#content');
    const contact = document.createElement('div');
    
    content.appendChild(contact);
    const btn = document.createElement('button');
    btn.innerText = 'Contact Us';
    const h1 = document.createElement('h1');
    h1.innerText = 'Contact Us';
    
    const firstDiv = document.createElement('div');
    contact.appendChild(firstDiv);
    firstDiv.classList.add('divFlex');
    const firstContact = document.createElement('h2');
    firstContact.innerText = 'We want to hear from you!';
    firstDiv.appendChild(firstContact);
    const firstNumber = document.createElement('p');
    firstNumber.innerText = 'Main Number: 122-333-4567';
    const firstEmail = document.createElement('p');
    firstEmail.innerText = 'IC_Treats_@realEmail.com';
    firstDiv.appendChild(firstNumber);
    firstDiv.appendChild(firstEmail);
   
    const secondDiv = document.createElement('div');
    contact.appendChild(secondDiv);
    secondDiv.classList.add('divFlex');
    const secondContact = document.createElement('h2');
    secondContact.innerText = 'Manager\'s Office';
    secondDiv.appendChild(secondContact);
    const secondNumber = document.createElement('p');
    secondNumber.innerText = 'Number: 123-867-5309';
    const secondEmail = document.createElement('p');
    secondEmail.innerText = 'Eyes_Cream@realEmail.com';
    secondDiv.appendChild(secondNumber);
    secondDiv.appendChild(secondEmail);

    const thirdDiv = document.createElement('div');
    contact.appendChild(thirdDiv);
    thirdDiv.classList.add('divFlex');
    const thirdContact = document.createElement('h2');
    thirdContact.innerText = 'Rate us online!';
    thirdDiv.appendChild(thirdContact);
    const thirdNumber = document.createElement('p');
    thirdNumber.innerText = 'How can we do better?';
    thirdDiv.appendChild(thirdNumber);
}