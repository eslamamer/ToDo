const task     = document.querySelector('.task');
const insert   = document.querySelector('.insert');
const button   = document.querySelector('.task button')
const warning  = document.querySelector('.warning')
const clearBtn = document.getElementById('clear')
let list

task.addEventListener('submit', function(e){
    e.preventDefault()
    if(insert.value == ""){
        wornMsg()
    }else{
        addTask()
        }
      }) 

function wornMsg(){
    warning.style.display = 'block';
}

insert.addEventListener('keypress', function() {warning.style.display='none'})

function addTask(){
    list              = document.getElementById('list')
    const newTask     = document.createElement('h4')
    const check       = document.createElement('input')
    const element     = document.createElement('div')
    newTask.innerText = insert.value;
    check.type = 'checkbox'
    element.append(check, newTask)
    element.classList.add('listSty')
    list.appendChild(element)
    insert.value =""

    check.addEventListener('click', function(){
        this.hasAttribute('checked')?this.removeAttribute('checked'):this.setAttribute('checked',true)
        if(check.hasAttribute('checked')){
            newTask.style.textDecoration = 'line-through' 
            set = setTimeout(() => {
             element.remove()
            }, 2000);
        }else{
            newTask.style.textDecoration = 'none'
            clearTimeout(set);
            }
        }
     )
 }
  
clearBtn.onclick = function (){
    const arr = [...list.children]
    for(let i=0; i<arr.length; i++){
    arr[i].remove()
      }
}