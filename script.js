let slideindex = 1;
showslides(slideindex);

function plusslide(n){

    showslides(slideindex += n);
}


function minusslide(n){

    showslides(slideindex -= n)
}


function showslides(n){

    let i;

    let slides = document.getElementsByClassName("my-slide");

    if(n>slides.length){slideindex=1;}
    else if(n<1){slideindex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideindex-1].style.display = "block";

}