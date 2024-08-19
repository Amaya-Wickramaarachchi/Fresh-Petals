
let slideIndex2 = 0;
showSlides2();

function showSlides2() {
    let slides = document.getElementsByClassName("mySlides2");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}    
    slides[slideIndex2-1].style.display = "block";  
    setTimeout(showSlides2, 4000); // Change image every 3 seconds
}

function plusSlides2(n) {
    showSlides1(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}
