// Your code goes here
//Navigation: mouseenter, mouseleave, pointerenter, pointerout
const navStyle = document.querySelectorAll("a");
navStyle.forEach(element => {
    element.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = "#17A2B8";
        event.target.style.color = "white";
    })
})

navStyle.forEach(element => {
    element.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = "white";
        event.target.style.color = "black";
    })
})

const mainTitle = document.querySelector("h1");
mainTitle.addEventListener('pointerenter', (event) => {
    event.target.style.fontSize = "40px";
    event.target.style.color = "brown";
})
mainTitle.addEventListener('pointerout', (event) => {
    event.target.style.fontSize = "55px";
    event.target.style.color = "black";
})

//h1 Styling: mouseover, mouseout

const titleStyle = document.querySelectorAll("h2, h4");
titleStyle.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = "60px";
        event.target.style.color = "brown";
    })
})

titleStyle.forEach(element => {
    element.addEventListener('mouseout', (event) => {
        event.target.style.fontSize = "40px";
        event.target.style.color = "black";
    })
})
//Nest to similar events and prevent from propagating
const parentStyle = document.querySelector('body');
parentStyle.addEventListener('click', (event) => {
    event.target.style.color = "green";
    event.target.style.backgroundColor = "papayawhip";
    event.stopPropagation();
})

const changeh3 = document.querySelector('h4');
changeh3.addEventListener('click', (event) => {
    event.target.style.color = "#17A2B8";
});


//Images: mouseenter, mouseleave, resize
const mainImage = document.querySelector('.intro img');
mainImage.addEventListener('mouseenter', (event) => {
    event.target.style.transform = "scale(1.5)";
    event.target.style.transition = "transform .2s";
})

mainImage.addEventListener('mouseleave', (event) => {
    event.target.style.transform = "scale(1)";
    event.target.style.transition = "transform .2s";
})

const picResize = document.querySelector('.content-destination img');
window.addEventListener('resize', (event) => {
    picResize.src = 'img/fun-bus.jpg';
})

// DRAGSTART
const imgContent = document.querySelector('.img-content img');
imgContent.addEventListener('dragstart', (event) => {
  event.target.src = 'img/fun.jpg';
}, false);

// DRAGEND
imgContent.addEventListener('dragend', (event) => {
  event.target.src = 'img/adventure.jpg';
}, false);

//Paragraphs: dblclick

const pStyle = document.querySelectorAll('p');
pStyle.forEach(element => {
    element.addEventListener('dblclick', (event) => {
        event.target.style.color = "brown";
    })
})

//Buttons Styling: click

const btnOnclick = document.querySelector(".btn");
btnOnclick.addEventListener('click', (event) => {
    alert("Are you sure you want to Sign Up??");
})

//prevent default
const stopLink = document.querySelectorAll("a");
stopLink.forEach(element => {
    element.addEventListener("click", (event) => {
  event.target.preventDefault();
    });
});