document.addEventListener("DOMContentLoaded", () => {

//   let form = document.querySelector('form')
//   console.log(form)

//   const task = function(e){
//     e.preventDefault()
//     console.log('submit')
//     console.log(e.target.description.value)
//     buildLi()
//   }
//   form.addEventListener('submit', task)

// let taskUL = document.querySelector('ul')

// let newTask = document.getElementById('tasks')
// //do we include e?

// const buildLi = function(task) {
//   let li = document.createElement('li')
//   li.innerText = task
//   taskUL.appendChild(li)
// }

// newTask.forEach(function(task) {
//   buildLi(task)
// })

const buildLi = function(task){
  let li = document.createElement('li')
  li.innerText = task
  guestUL.appendChild(li)
}
let form = document.getElementById('create-task-form')
const handleSubmit = function(e) {
e.preventDefault()
console.log ('submit')
console.log (e.target.description.value)
buildLi(e.target.description.value)
}
form.addEventListener('submit', handleSubmit)
let guestUL = document.querySelector('ul')
let tasks = document.getElementById('tasks')
tasks.forEach(function(task){
buildLi(task)
})


});