/*save.onclick = function() {
    var input = document.getElementById("input-todo").value;
    alert(input);
};

var input = document.getElementById("input-todo").value;
var newTodo = document.createElement('li');
    newTodo.innerHTML = input;

    list.appendChild(newTodo);
*/


    save.onclick = function() {
        var input = document.getElementById("input-todo").value;
        var newTodo = document.createElement('li');
        newTodo.innerHTML = input;

        list.appendChild(newTodo);
    };