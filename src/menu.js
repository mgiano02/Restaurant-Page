export default function menuTab() {
    const menu = document.createElement('div');
    const btn = document.createElement('button');
    btn.innerText = 'Menu';
    const h1 = document.createElement('h1');
    h1.innerText = 'Menu';
    // const h2 = document.createElement('h2');
    // h2.innerText = 'Flavors';
    
    const firstDiv = document.createElement('div');
    menu.appendChild(firstDiv);
    const firstItem = document.createElement('h5');
    firstItem.innerText = 'Cones';
    firstItem.appendChild(firstDiv);
    const p = document.createElement('p');
    p.innerText = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum';
    firstDiv.appendChild(p);
    const img = document.createElement('img');
    firstDiv.appendChild(img);
    
    const secondDiv = document.createElement('div');
    menu.appendChild(secondDiv);
    const secondItem = document.createElement('h5');
    secondItem.innerText = 'Cups';
    secondDiv.appendChild(secondItem);
    const p2 = document.createElement('p');
    p2.innerText = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum';
    secondDiv.appendChild(p2);
    const img2 = document.createElement('img');
    secondDiv.appendChild(img2);
    
    const thirdDiv = document.createElement('div');
    menu.appendChild(thirdDiv);
    const thirdItem = document.createElement('h5');
    thirdItem.innerText = 'Root Beer Float';
    thirdDiv.appendChild(thirdItem);
    const p3 = document.createElement('p');
    p3.innerText = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum';
    thirdDiv.appendChild(p3);
    const img3 = document.createElement('img');
    thirdDiv.appendChild(img3);
}