export default function pageLoad() {
    const content = document.querySelector('#content');
    const title = document.createElement('h1');
    title.innerText = 'Welcome to Joe\'s Ice Cream Bar'
    content.appendChild(title);
    const img = document.createElement('img');
    img.src = 'lama-roscu-Wpg3Qm0zaGk-unsplash.jpg';
    content.appendChild(img);
    const p = document.createElement('p');
    p.innerText = 'The coolest bar in town! We offer from a wide variety of 36 flavors...or 36 different ways to beat the heat this summer!';
    content.appendChild(p);
    const p2 = document.createElement('p');
    p2.innerText = 'Come hang out with us after 7pm for half price double scoops!'
    content.appendChild(p2);
}