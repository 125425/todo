    save.onclick = function() {                                   //добавление по кнопке
        var input = document.getElementById("input-todo").value;
        var newTodo = document.createElement('li');     
        newTodo.innerHTML = `<input type="checkbox" value="a" style="vertical-align:middle">  ${input} <button id="deleteTodo" type="button"></button>`;
        list.appendChild(newTodo);
        document.getElementById("input-todo").value = '';
     
    };

    /*
    addTodo.onclick = function() {                                          //добавление развертывания кнопки:hidden->text (убрано за ненадобностью)
        if (document.getElementById("stringAdd").style.display == "none"){
            document.getElementById("stringAdd").style.display = "";}
        else {document.getElementById("stringAdd").style.display = "none";
        }
    }   */

 

  deleteChecked.onclick = function() {
        var elems = document.querySelectorAll(`#list input[type="checkbox"]:checked`);
     for (i = 0; i < elems.length; i++) { 
        list.removeChild(elems[i].parentElement);
    }
    } 

      $('#list').on('click', 'button', function(event){ // для многократного использования обработчика
        var delTodo = event.target;
        delTodo = delTodo.parentElement;
        delTodo.remove();
    
    })


allCheck.onclick = function() {
   var allCheckPos = document.querySelectorAll(`input[type="checkbox"]:not(:checked)`);
   var allCheckNoPos = document.querySelectorAll(`input[type="checkbox"]:checked`);
  if (allCheckPos.length !=0 ) 
   for (const item of allCheckPos){
        item.checked = true;
    } 
    else {
     for (const itemNo of allCheckNoPos) {
         itemNo.checked = false;
     }
    }
} 
/*
var field = function() {
    const checkField = document.querySelectorAll('#list');
    if (!!checkField === true) {
        return
    } else {
        document.querySelectorAll(#list).style.display == "none"
    }
}
*/
