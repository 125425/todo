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
    if (allCheckPos.length !=0 ) {
      cc.checked = true;    
      cc1.checked = true; 
      cc2.checked = true; 
      cc3.checked = true; 
    }

    
    else {
      cc.checked = false;    
      cc1.checked = false; 
      cc2.checked = false; 
      cc3.checked = false;
    }
}

