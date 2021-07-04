/*var elProductNameInput = document.querySelector('.product-name-input');
var elAddProductButton = document.querySelector('.add-product-button');
var elProductList = document.querySelector('.product-list');

var productList = [];

elAddProductButton.addEventListener('click', function(){
	// console.log(elProductNameInput.value);

	if(!elProductNameInput.value){
		return alert('Iltimos mahsulot nomini kiriting');

	}else if(elProductNameInput.value){

		if(productList.indexOf(elProductNameInpu t.value) > -1){
			return alert('Bu mahsulot qo\'yxatda bor');

		}else{
			productList.push(elProductNameInput.value);
			elProductNameInput.value ='';
			// elProductList.textContent = productList.join('<br>');
			elProductList.innerHTML  += productList.join('<br>');
			elProductNameInput.focus();
			console.log(productList);
		}
	} 
});	
*/
// array.push('valeu') - arraning oxiriga qo'shish
// array.unshift(items...: any) - arrayning boshiga qo'shish
// array.shift() - arrayning boshiga bittasini olib tashlash
// array.pop() -arrayning oxiridan bittani olib tashlash
/*===================================================*/
// array.splice(start: int, deleteCount: int, items...: any) - pabyandlash
// array.slice(start?: long long, end?: long long, contentType?: DOMString) - .slice(dan, gacha) -o'chirib tashlaydi
// array.sort() - berilgan arrayning alifbo tartibida tartiblashdi
// array.slice().sort() - nusxalab tartiblab beradi
//array.reverse() - teskari ketma-krtlikda tartiblashdi
 // Math.floor(Math.random()* (100 -min +1) +min);  min dan 100 gacha bo'lgan sonlar ichida random

 /*var elUserNumberInput = document.querySelector('.user-number-input')
 var elGuessButton = document.querySelector('.guess-button')
 var elTryCount= document.querySelector('.try-count')
 var randomNumber =   Math.floor(Math.random()* (100 -1 +1) +1);
 let hisobchi = 0;
console.log(randomNumber);
 elGuessButton.addEventListener('click', function(){
 	var userNumber = parseInt(elUserNumberInput.value, 10)

 	if(!elUserNumberInput.value){
 		return alert('Iltimos sonni kiriting');
 	}else{
 		if(userNumber >= 1 && userNumber <= 100 ){
 			hisobchi++;

 			elTryCount.textContent = hisobchi;
 		if(userNumber > randomNumber){

 			alert('Siz Yutdingiz :)');
 			elUserNumberInput.value='';
 			elUserNumberInput.focus();
 		}else if(userNumber < randomNumber){

 			alert('Siz Yutqazdingiz "_"');
 			elUserNumberInput.value='';
 			elUserNumberInput.focus();

 		}else{

 			alert('Do\'slik g\'alaba qozondi..');
 			elUserNumberInput.value='';
 			elUserNumberInput.focus();
 			var isAgain = confirm('Yana o\'ynaysizmi');
 			if(isAgain){
 				window.location.reload();
 			}else{
 				elGuessButton.disabled = true;
 			}
 		} 
 		}else{
 			return alert('Iltomos 1 bilan 100 orasidagi son kiriting');
 			
 		}
 	}
 });  
 console.log(hisobchi);	
*/

// for (var i = 0; i > -1; i++) {
// 	if(i === 51) continue;
// 	if(i == 77) break;
// 	console.log(i);
// }
// 
 var elAddParagraphButton = document.querySelector('.add-paragraph-button');

elAddParagraphButton.addEventListener('click', function(){

	var newParagraph = document.createElement('p');
	newParagraph.textContent = 'Yangi element vachach';
	newParagraph.classList.add('big-text');

	document.querySelector('.box').appendChild(newParagraph);
	// .add() - class qo'shish
	// .remove() - classni olib tash
	// .toggle() - bor bo'lsa olib tashlah yuq bo'lsa qo'shish
});
