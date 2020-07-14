


document.addEventListener("DOMContentLoaded", () => {
  // your code 
  let form = document.querySelector('form')
const handleSubmit = function(ele){
  ele.preventDefault()
  console.log(ele.target.newTaskDescription.value)
  newLi(ele.target.newTaskDescription.value)
  // ele.target.reset();
}
form.addEventListener("submit",handleSubmit)
//  const buildtoDo = function(toDo) {
//    let li = document.createElement('li')
//    li.innerText = toDo
//  }

 const newLi = function(item){
  let li = document.createElement('li')
  li.innerText= item
  toDoUL.appendChild(li)
 }

  let toDoUL = document.querySelector('ul')

// document.appendChild(toDo)
});



