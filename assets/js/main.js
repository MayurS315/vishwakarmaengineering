let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 400){
        nav.classList.add("is-sticky");
    }
    else{
        nav.classList.remove("is-sticky");
    }
}
