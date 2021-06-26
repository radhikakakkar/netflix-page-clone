const tabItem = document.querySelectorAll('.tab-item');
const content = document.querySelectorAll('.tab-content-item');

var num1 = document.getElementById("tab-1").id;
var num2 = document.getElementById("tab-2").id;
var num3 = document.getElementById("tab-3").id;

//list.getElementsByClassName("child")[0].innerHTML = "Milk";

var c1 = content[0];
var c2 = content[1];
var c3 = content[2];

function selectItem(e){
    
    removeBorder();
    this.classList.add('tab-border');
    removeShow();
    
    if(this.id === num1){

        c1.classList.add('show');

    }
    else if(this.id === num2){

        c2.classList.add('show');

    }
    else if(this.id === num3){

        c3.classList.add('show');

    }
    else{
        console.log('flop');
    }
}

function removeBorder(){
	tabItem.forEach(item => {
		item.classList.remove('tab-border');
	});
}

function removeShow(){
	content.forEach(item => {
		item.classList.remove('show');
	});
}

    tabItem.forEach(item => {
	item.addEventListener('click', selectItem);
    });
