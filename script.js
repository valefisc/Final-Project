
    let toDos = [];
    document.querySelector('#NewTodo').addEventListener("submit", function(event){
        event.preventDefault();
        let value = document.querySelector('#ToDoField').value;
        let NewToDo = {
            text: value,
            complete: false,
        }
        toDos.push(NewToDo);
        console.log(toDos);
        ToDoField.value ='';
        toDoList();
    })
  
    const ol = document.querySelector("ol");
    function toDoList(){
    let template = ``;
 
    for(let i = 0; i < toDos.length; i++){ 
        if(toDos[i].complete === true){
        template += `<form id=${i} style="color:green;"> <input id=${i} type="checkbox" checked>  ${toDos[i].text} <button id =${i}>x</button> </form>`
        }else {
            template += `<form id=${i} > <input id=${i} type="checkbox">  ${toDos[i].text} <button id =${i}>x</button> </form>`
        }
        
        ol.innerHTML = template;
    }
}
    
    ol.addEventListener("click",function (event){
        event.preventDefault();
        console.log(event.target);
        if(event.target.matches('button')){
            console.log (event);
            let num = event.target.id;
            console.log(num);
            toDos.splice(num, 1);
            console.log(toDos);
            if (toDos.length === 0){
                template = ``;
                ol.innerHTML = template;
            } else {
                toDoList();
            }
            
        } else if(event.target.matches('input')){
            console.log (event);
            let num = event.target.id;
            console.log(num);
            if (toDos[num].complete === true){
                toDos[num].complete = false;
            } else if (toDos[num].complete === false){
                toDos[num].complete = true;
            };
            console.log (toDos[num]);
            toDoList();
        }
    })


   