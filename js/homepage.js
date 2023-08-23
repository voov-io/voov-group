let contenScroll = document.getElementById("contentscroll");
let card = document.querySelector(".reviews");

document.addEventListener('click', (e) =>{

    if (e.target.matches("#next")) {
        
        contenScroll.scrollLeft +=card.offsetWidth;
    }
    if (e.target.matches("#prev")) {
        
        contenScroll.scrollLeft -=card.offsetWidth;
        
    }
})