const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const iyaBtn = document.querySelector(".iya-btn");
const tidakBtn = document.querySelector(".tidak-btn");

iyaBtn.addEventListener("click", () => {
    question.innerHTML = "Terimakasih🥰";
    gif.scr = "widia.gif";
});

tidakBtn.addEventListener("mouseover", () => {
    const tidakBtnRect = tidakBtn.getBoundingClientRect();
    const maxX = window.innerWidth - tidakBtnRect.width;
    const maxY = window.innerHeight - tidakBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    tidakBtn.style.left = randomX + "px";
    tidakBtn.style.top = randomY + "px";
});