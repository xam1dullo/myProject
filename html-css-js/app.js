let elBtn = document.querySelector('.btn');

elBtn.addEventListener('click',()=>{
	let attribut = document.querySelector('#idx');
	attribut.setAttribute('type','text');
	attribut.setAttribute('placeholder','Assalomu alaykum ok');
	attribut.value="Assalamu alaykum Mani ismin xamidullo";
	document.style.backgroundColor='blue';
	this.style.color='#fff';

});

let elRangeOne = document.querySelector('#rang1');
let elRangeTwo = document.querySelector('#reng2');
let elRangeThree = document.querySelector('#reng3');
let elRangeFour = document.querySelector('#reng4');
let elBox = document.querySelector('.box');
let elBox2 = document.querySelector('.box2');
let elBox3 = document.querySelector('.box3');
let elBox4 = document.querySelector('.box4');


elRangeOne.oninput =  function() {
	let elInput1 = document.querySelector('#inpt1');
	elInput1.value = this.value;
	elBox.style.borderTopLeftRadius =`${this.value}px` ; 
	elBox2.style.borderTopRightRadius =`${this.value}px` ; 

	elBox4.style.borderBottomLeftRadius  =`${this.value}px` ; 
	elBox3.style.borderBottomRightRadius  =`${this.value}px` ; 


};
elRangeTwo.oninput =  function() {
	let elInput2 = document.querySelector('#inpt2');
	elInput2.value = this.value;
	elBox.style.borderTopRightRadius =`${this.value}px` ; 
	elBox2.style.borderTopLeftRadius =`${this.value}px` ; 
	elBox3.style.borderBottomLeftRadius  =`${this.value}px` ; 
	elBox4.style.borderBottomRightRadius  =`${this.value}px` ;

	

};
elRangeThree.oninput =  function() {
	let elInput3 = document.querySelector('#inpt3');
	elInput3.value = this.value;
	elBox.style.borderBottomLeftRadius  =`${this.value}px` ; 
	elBox2.style.borderBottomRightRadius  =`${this.value}px` ;

	elBox3.style.borderTopLeftRadius =`${this.value}px` ; 
	elBox4.style.borderTopRightRadius =`${this.value}px` ; 

};
elRangeFour.oninput =  function() {
	let elInput4 = document.querySelector('#inpt4');
	elInput4.value = this.value;
	elBox2.style.borderBottomLeftRadius  =`${this.value}px` ; 
	elBox.style.borderBottomRightRadius  =`${this.value}px` ; 

	elBox3.style.borderTopRightRadius =`${this.value}px` ; 
	elBox4.style.borderTopLeftRadius =`${this.value}px` ; 
};

let elRed = document.querySelector('.btn1');
let elBlue = document.querySelector('.btn2');
let elYellow = document.querySelector('.btn3');
let elBlack = document.querySelector('.btn4');

elRed.addEventListener('click', function(){
	elBox.style.backgroundColor = 'red';
	this.style.backgroundColor = 'green';
	this.style.color = 'black';
});


elBlue.addEventListener('click', function(){
	elBox2.style.backgroundColor = 'blue';
	this.style.backgroundColor = 'green';
	this.style.color = 'black';
});


elYellow.addEventListener('click', function(){
	elBox3.style.backgroundColor = 'yellow';
	this.style.backgroundColor = 'green';
	this.style.color = 'black';
});


elBlack.addEventListener('click', function(){
	elBox4.style.backgroundColor = 'black';
	this.style.backgroundColor = 'green';
	this.style.color = 'black';
});