const actionBtn = {
    active: `before:content-[''] before:inline-block before:align-middle before:w-14 before:h-[0.9px] before:mr-2 before:bg-white before:duration-300 before:ease-in-out 
            text-white w-fit`,
    inactive: `before:content-[''] before:inline-block before:align-middle before:w-7 before:h-[0.9px] before:mr-2 before:bg-gray-600 
    hover:before:w-14 hover:before:bg-white hover:before:duration-300 hover:before:ease-in-out 
    text-slate-500 hover:text-white w-fit`,
}

const aboutBtn = document.getElementById("abt-button").addEventListener("click", (e) => {
    document.getElementById("abt-button").classList.value = actionBtn.active;
    document.getElementById("tech-button").classList.value = actionBtn.inactive;
    document.getElementById("exp-button").classList.value = actionBtn.inactive;
    document.getElementById("proj-button").classList.value = actionBtn.inactive;
    console.log(e);
});
const techBtn = document.getElementById("tech-button").addEventListener("click", (e) => {
    document.getElementById("tech-button").classList.value = actionBtn.active;
    document.getElementById("abt-button").classList.value = actionBtn.inactive;
    document.getElementById("exp-button").classList.value = actionBtn.inactive;
    document.getElementById("proj-button").classList.value = actionBtn.inactive;
    console.log(e);
});
const expBtn = document.getElementById("exp-button").addEventListener("click", (e) => {
    document.getElementById("exp-button").classList.value = actionBtn.active;
    document.getElementById("abt-button").classList.value = actionBtn.inactive;
    document.getElementById("tech-button").classList.value = actionBtn.inactive;
    document.getElementById("proj-button").classList.value = actionBtn.inactive;
    console.log(e);
});
const projBtn = document.getElementById("proj-button").addEventListener("click", (e) => {
    document.getElementById("proj-button").classList.value = actionBtn.active;
    document.getElementById("abt-button").classList.value = actionBtn.inactive;
    document.getElementById("tech-button").classList.value = actionBtn.inactive;
    document.getElementById("exp-button").classList.value = actionBtn.inactive;
    console.log(e);
});

let circle = document.getElementById("circle");

window.addEventListener("mousemove", (e) => {
    
    //let x = e.clientX + "px";
    //let y = e.clientY + "px"

    circle.style.left = e.clientX - 104 + "px";
    circle.style.top = e.clientY - 104 + "px";
    
})
window.addEventListener("scroll", (e) => {
    console.log(window.scrollY);
    if(window.scrollY <= 30){
        document.getElementById("abt-button").classList.value = actionBtn.active;
        document.getElementById("tech-button").classList.value = actionBtn.inactive;
        document.getElementById("exp-button").classList.value = actionBtn.inactive;
        document.getElementById("proj-button").classList.value = actionBtn.inactive;
    } else if(window.scrollY >= 170 && window.scrollY <= 300) {
        document.getElementById("tech-button").classList.value = actionBtn.active;
        document.getElementById("abt-button").classList.value = actionBtn.inactive;
        document.getElementById("exp-button").classList.value = actionBtn.inactive;
        document.getElementById("proj-button").classList.value = actionBtn.inactive;
    } else if(window.scrollY >= 410 && window.scrollY <= 900){
        document.getElementById("exp-button").classList.value = actionBtn.active;
        document.getElementById("abt-button").classList.value = actionBtn.inactive;
        document.getElementById("tech-button").classList.value = actionBtn.inactive;
        document.getElementById("proj-button").classList.value = actionBtn.inactive;
    } else if (window.scrollY >= 1100){
        document.getElementById("proj-button").classList.value = actionBtn.active;
        document.getElementById("abt-button").classList.value = actionBtn.inactive;
        document.getElementById("tech-button").classList.value = actionBtn.inactive;
        document.getElementById("exp-button").classList.value = actionBtn.inactive;
    }
})


