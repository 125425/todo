/*save.onclick = function() {
    var input = document.getElementById("input-todo").value;
    alert(input);
};

var input = document.getElementById("input-todo").value;
var newTodo = document.createElement('li');
    newTodo.innerHTML = input;

    list.appendChild(newTodo);
*/


    save.onclick = function() {                                   //добавление по кнопке
        var input = document.getElementById("input-todo").value;
        var newTodo = document.createElement('li');
        newTodo.innerHTML = "<input type=\"checkbox\" value=\"a${index}\">" + input;

        list.appendChild(newTodo);
    };

    addTodo.onclick = function() {                                          //добавление развертывания кнопки:hidden->text
        if (document.getElementById("stringAdd").style.display == "none"){
            document.getElementById("stringAdd").style.display = "";}
        else {document.getElementById("stringAdd").style.display = "none";
        }
    }
     
    /*deleteChecked.onclick = function() {
       var checkCompleted = document.getElementById("input-todo");
        if (checkCompleted.checked) {      
    list.removeChild(checkCompleted);
        } else return
    }; */

 

  deleteChecked.onclick = function() {
        var elems = document.querySelectorAll('#list input[type="checkbox"]:checked');
     for (i = 0; i < elems.length; i++) { 
        list.removeChild(elems[i].parentElement);
    }
    } 



   
    