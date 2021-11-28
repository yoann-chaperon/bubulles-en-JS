const counterDisplay = document.querySelector('h3'); 
let counter = 0 ;

const bulleMarker = () => {

const bulle = document.createElement("span");
const size = Math.round(Math.random() * 200 + 100) + "px";
const plusMinus = Math.random() > 0.5 ? 1 : -1;

document.body.appendChild(bulle);
bulle.classList.add('bulle');

bulle.style.height = size;
bulle.style.width = size;

bulle.style.top = Math.random() * 100 + 50 + "%";
bulle.style.left = Math.random() * 100 + "%";

bulle .style.setProperty("--left", Math.random() * 100 * plusMinus + "%" );

bulle.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
    counterDisplay.style.color = "red";
    bulle.remove()
})

setTimeout(() => {
    bulle.remove();
}, 8000);
}
setInterval(bulleMarker, 300);
