export default function contactTab() {
    const contact = document.createElement('div');
    const btn = document.createElement('button');
    btn.innerText = 'Contact Us';
    const h1 = document.createElement('h1');
    h1.innerText = 'Contact Us';
    
    const firstDiv = document.createElement('div');
    contact.appendChild(firstDiv);
    const firstContact = document.createElement('h5');
    firstContact.innerText = 'We want to hear from you!';
    firstDiv.appendChild(firstContact);
    const p = document.createElement('p');
    p.innerText = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum';
    firstDiv.appendChild(p);
   
    const secondDiv = document.createElement('div');
    contact.appendChild(secondDiv);
    const secondContact = document.createElement('h5');
    secondContact.innerText = 'Manager\'s Office';
    secondDiv.appendChild(secondContact);
    const p2 = document.createElement('p');
    p2.innerText = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum';
    secondDiv.appendChild(p2);
}