let taskTitle = document.querySelector("#tsk");
let addButton = document.querySelector("#btn");
let todos = document.querySelector(".todos");


// const del = () => {
//     let delIcon = document.querySelectorAll(".del")
//     delIcon.forEach((item) => {
        
//     });
// }

// add task
const add = () => {
    let li = document.createElement("li");
    let span = document.createElement("span")
    span.textContent = "x"
    span.className = "del"
    let task = document.createTextNode(taskTitle.value);
    li.appendChild(task)
    li.appendChild(span)
    todos.appendChild(li)
    taskTitle.value = ""


}

addButton.onclick = (e) => {
    add()
    e.preventDefault()

}
todos.addEventListener("click", (e) => {
    if(e.target.className == "del"){
        e.target.parentElement.remove();
    }
})