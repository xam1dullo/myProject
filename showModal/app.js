// let elImg  = document.querySelector('.img');

// let elNam = document.querySelector('#Namangan');
// let elAnd = document.querySelector('#Andijon');
// let elFer = document.querySelector('#Fergana');

// const elN = ()=>{
// elImg.src="";
// elImg.src = "images/614-200x200.jpg"
// }
// const elA = ()=>{

// elImg.src="";
// elImg.src = "images/blog-p-5.jpg"
// }
// const elF = ()=>{

// elImg.src="";
// elImg.src = "images/nilo-ren.jpg"
// }



// let elSubmit = document.querySelector('.submit');

// let arr  = [];
// elSubmit.addEventListener( 'click', function(){

// 	let elInput = document.querySelector('#chat').value;
// if(elInput !==""){

// 	let content = `<div class='row delets'><h6 class='alert alert-info first'>${elInput}<span class='delate'>x</span></h6></div>`; 
// 	arr.push(content)
// 	let elBlock = document.querySelector('#block')
// 	let leng = arr.length;
// 	 document.querySelector('#chat').value ='';
// 	 document.querySelector('#chat').focus();
// 	elBlock.innerHTML += arr[leng-1];

// 	let delet = document.querySelectorAll('.delate').forEach((value ,index)=>{
// 		let del = document.getElementsByClassName('delets');
// 		value.onclick = function(){
// 		del[index].style.display = "none";
// 		}
// 	});
// }else{
// 	alert('Iltomis Malumot kiriting!');
// }
// });

let elCloseBtn = document.querySelector('.btn-close');
let elMyShowModalBtn = document.querySelector('#showModal');
let elShowModal = document.querySelector('#myModal');

elMyShowModalBtn.addEventListener('click', function(){
	elShowModal.style.display = 'block'
});

elCloseBtn.addEventListener('click', function(){
	elShowModal.style.display = 'none'
});

window.onclick = function(event){
	let modal = document.querySelector('#myModal')
	if(modal == event.target){
		modal.style.display = 'none'
	}
	
}