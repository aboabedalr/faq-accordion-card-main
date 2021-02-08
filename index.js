var questions = document.querySelectorAll(".question");
console.log(questions);

questions.forEach(item => {
    item.addEventListener("click", e =>{
        console.log(e);
        console.log(item.querySelector(".answer"));
        item.querySelector(".responce").classList.toggle("clicked");
        item.querySelector(".title").classList.toggle("title-bold");
        item.querySelector(".icon").classList.toggle("icon-rotate");
    })
})