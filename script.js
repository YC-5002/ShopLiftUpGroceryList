var list = [];
window.onscroll = function() {stick()};
var header = document.getElementsById("header");
var sticky = header.offsetTop;
function stick() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function add(){
    if(document.getElementById('item').value == ''){
        window.alert("Please enter a valid item.");
    }
    else{
        if(checkDup() == false){
            var ol = document.querySelector('ol');
            var li = document.createElement('li');
            var div = document.createElement('div');
            
            var newItem = {
                name: document.getElementById('item').value,
                quantity: 1
            }

            var span = document.createElement('span');
            span.innerHTML = newItem.name;
            div.appendChild(span);

            var quant = document.createElement('div');
            var spanQuant = document.createElement('span');
            spanQuant.innerHTML = 'Quantity: ';
            quant.appendChild(spanQuant);
            var quantity = document.createElement('input');
            quantity.type = 'number';
            quantity.value = newItem.quantity;
            quantity.min = 1;
            quant.appendChild(quantity);
            div.appendChild(quant);

            var buttons = document.createElement('div');
            var del = document.createElement('button');
            del.onclick = function remove(){
                ol.removeChild(li);
                list.splice(list.indexOf(newItem.name.toUpperCase()),1);
            }
            del.innerHTML = 'Delete';
            buttons.appendChild(del);
            var up = document.createElement('button');
            up.addEventListener('click', function () {
                var thisElement = this.parentElement.parentElement.parentElement;

                if (thisElement.previousElementSibling)
                    thisElement.parentNode.insertBefore(thisElement, thisElement.previousElementSibling);
            });
            up.innerHTML = '↑';
            buttons.appendChild(up);
            var down = document.createElement('button');
            down.addEventListener('click', function () {
                var thisElement = this.parentElement.parentElement.parentElement;

                if (thisElement.nextElementSibling)
                    thisElement.parentNode.insertBefore(thisElement.nextElementSibling, thisElement);
            });
            down.innerHTML = '↓';
            buttons.appendChild(down);
            div.appendChild(buttons);

            //li.innerHTML += "<td>" + newItem.name + "</td><td><input type='number' class='quantity' value='" + newItem.quantity + "' min='1'></input></td><td><button type='button' onclick='del(" + newItem.name + ");'>Delete</button></td>";
            li.appendChild(div);
            ol.appendChild(li);
            list.push(newItem.name.toUpperCase());
        }
        else {
            window.alert("The item is already in the list!");
        }
    }
}

function del(name){
    for(let item of list){
        if(item.name == name){
            item.quantity = 0;
        }
    }
}

function checkDup(){
    var toCheck = document.getElementById('item').value.toUpperCase();
    if(list.length > 0){
        for(n of list){
            if(n == toCheck) return true;
        }
    }
    return false;
}