const task     = document.querySelector('.task');
const insert   = document.querySelector('.insert');
const button   = document.querySelector('.task button')
const warning  = document.querySelector('.warning')
const clearBtn = document.getElementById('clear')
console.log(insert.value)
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
function addTask(){
    const list        = document.getElementById('list')
    const newTask     = document.createElement('h4')
    const check       = document.createElement('input')
    const element     = document.createElement('div')
    newTask.innerText = insert.value;
    check.type = 'checkbox'
    element.append(check, newTask)
    element.classList.add('listSty')
    list.appendChild(element)
    warning.style.display='none'
    insert.value =""
    check.addEventListener('click', function(){
        this.hasAttribute('checked')?this.removeAttribute('checked'):this.setAttribute('checked',true)
        if(check.hasAttribute('checked')){
            newTask.style.textDecoration = 'line-through' 
            setTimeout(() => {
             element.remove()
            }, 2000);
        }else{
            newTask.style.textDecoration = 'none'
        }
    })
    clearBtn.onclick = function (){
    const arr = [...list.children]
     for(let i=0; i<arr.length; i++){
         arr[i].remove()
     }
        }
       }
  
   
