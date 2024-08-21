const reviews = [

    {id: 1,
     name: "Del Ramsfire",
     job:"Fighter",
     img:"img/token_1.png",
     text: "i liked the movie"
    },
    
    {id: 2,
     name: "Randal Strombringer",
     job:"Wizard",
     img:"img/token_2.png",
     text: "I enjoyed the movie"
    },

    {id: 3,
     name: "Asha silvertongue",
     job:"Bard",
     img:"img/token_3.png",
     text: "i disliked the movie"
    }
];

const img = document.getElementById('reviewer-image');
const author = document.getElementById('author');
const job = document.getElementById('class');
const info = document.getElementById('info');


const prevBtn = document.querySelector(".button-prev");
const nextBtn = document.querySelector(".button-next");

let currentitem = 0;

window.addEventListener('DOMContentLoaded', function(){
   showPerson(currentitem);
});

function showPerson(n){
    const item = reviews[n];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click',function(){
currentitem++;

if(currentitem>2){
    currentitem = 0;
}
showPerson(currentitem);

});

prevBtn.addEventListener('click', function(){

    currentitem--;
    if(currentitem<0){
        currentitem = 2
    }
    showPerson(currentitem);
})