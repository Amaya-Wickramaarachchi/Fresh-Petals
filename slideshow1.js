let slideIndex1 = 0;
showSlides1();

function showSlides1() {
    let slides = document.getElementsByClassName("mySlides1");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {slideIndex1 = 1}    
    slides[slideIndex1-1].style.display = "block";  
    setTimeout(showSlides1, 3000); // Change image every 3 seconds
}

function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}
