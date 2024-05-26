function addtask() {
    var todolist = document.getElementById("todolist")
    var todoinput = document.getElementById("todoinput")
    if (todoinput.value.length < 3) {
        alert("Enter Value")
        return
    }


    var li = document.createElement("li")
    li.innerHTML = todoinput.value
    li.style.fontSize="30px"
    var editBtn = document.createElement("button")
    editBtn.innerHTML = "EDIT"
    var deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "DELETE"
    deleteBtn.setAttribute("onClick", "delToDo(this)")
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)




    todolist.appendChild(li)
    todoinput.value = ""
}

function deleteall() {
    var todolist = document.getElementById("todolist")
    console.log (todolist.innerHTML)
    todolist.innerHTML = ""
}

function delToDo (ele) {
    console.log("delTodo", ele.parentNode)
    ele.parentNode.remove()
}