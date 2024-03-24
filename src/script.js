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
});
const techBtn = document.getElementById("tech-button").addEventListener("click", (e) => {
    document.getElementById("tech-button").classList.value = actionBtn.active;
    document.getElementById("abt-button").classList.value = actionBtn.inactive;
    document.getElementById("exp-button").classList.value = actionBtn.inactive;
    document.getElementById("proj-button").classList.value = actionBtn.inactive;
});
const expBtn = document.getElementById("exp-button").addEventListener("click", (e) => {
    document.getElementById("exp-button").classList.value = actionBtn.active;
    document.getElementById("abt-button").classList.value = actionBtn.inactive;
    document.getElementById("tech-button").classList.value = actionBtn.inactive;
    document.getElementById("proj-button").classList.value = actionBtn.inactive;
});
const projBtn = document.getElementById("proj-button").addEventListener("click", (e) => {
    document.getElementById("proj-button").classList.value = actionBtn.active;
    document.getElementById("abt-button").classList.value = actionBtn.inactive;
    document.getElementById("tech-button").classList.value = actionBtn.inactive;
    document.getElementById("exp-button").classList.value = actionBtn.inactive;
});