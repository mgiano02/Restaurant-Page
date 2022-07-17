export default function menuTab() {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');

    content.appendChild(menu);
    const btn = document.createElement('button');
    btn.innerText = 'Menu';
    const h1 = document.createElement('h1');
    h1.innerText = 'Menu';
    
    const firstDiv = document.createElement('div');
    firstDiv.setAttribute('id', 'divCones');
    firstDiv.classList.add('divFlex');
    menu.appendChild(firstDiv);
    const firstItem = document.createElement('h2');
    firstItem.innerText = 'Cones';
    firstDiv.appendChild(firstItem);
    const p = document.createElement('p');
    p.innerText = 'How many scoops can you fit on them?';
    firstDiv.appendChild(p);
    const img = document.createElement('img');
    img.src = 'courtney-cook-QYsRxRPygwU-unsplash.jpg';
    img.setAttribute('id', 'imgCones');
    firstDiv.appendChild(img);
    
    const secondDiv = document.createElement('div');
    secondDiv.setAttribute('id', 'divBowls');
    secondDiv.classList.add('divFlex');
    menu.appendChild(secondDiv);
    const secondItem = document.createElement('h2');
    secondItem.innerText = 'Bowls';
    secondDiv.appendChild(secondItem);
    const p2 = document.createElement('p');
    p2.innerText = 'Yes. Our bowls ARE in fact edible. We recommend eating the ice cream inside them first. Just try not to eat the spoon with it.';
    secondDiv.appendChild(p2);
    const img2 = document.createElement('img');
    img2.src = 'sheri-silver-5A0O12BIsjY-unsplash.jpg';
    img2.setAttribute('id', 'imgBowls');
    secondDiv.appendChild(img2);
    
    const thirdDiv = document.createElement('div');
    thirdDiv.setAttribute('id', 'divFloats');
    thirdDiv.classList.add('divFlex');
    menu.appendChild(thirdDiv);
    const thirdItem = document.createElement('h2');
    thirdItem.innerText = 'Root Beer Float';
    thirdDiv.appendChild(thirdItem);
    const p3 = document.createElement('p');
    p3.innerText = 'It wouldn\'t a bar without (root) beer. Splash in ice cream for some fun!';
    thirdDiv.appendChild(p3);
    const img3 = document.createElement('img');
    img3.src = 'american-heritage-chocolate-bpltEWyrAt0-unsplash.jpg';
    img3.setAttribute('id', 'imgFloats');
    thirdDiv.appendChild(img3);
}

// Make it responsive