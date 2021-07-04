var elProductInput = document.querySelector('.input-product');
var elOldAddBProductButton = document.querySelector('.old-add-product-button');
var elAndAddProductButton = document.querySelector('.and-add-product-button');
var elBoxProductList = document.querySelector('.box-product-list');


var ProductList = [];

elOldAddBProductButton.addEventListener('click', function(){

	if(!elProductInput.value){
		return alert('Iltimos bozorllikni kiriting');
	}else {
	
		var ProductListlist = document.createElement('li');
		var ProductListButton = document.createElement('button');
		ProductListlist.appendChild(ProductListButton);
		ProductList.push(ProductListButton.innerHTML);
		console.log(ProductList);
		
		ProductListButton.textContent = elProductInput.value;
		ProductListButton.classList.add('big-text');
		elBoxProductList.appendChild(ProductListlist);
		
	}

});

elAndAddProductButton.addEventListener('click', function(){


	if(!elProductInput.value){
		return alert('Iltimos bozorllikni kiriting');
	}else {
		
		var ProductListlist = document.createElement('li');
		var ProductListButton = document.createElement('button');
		ProductListlist.appendChild(ProductListButton);

		ProductListButton.textContent = elProductInput.value;
		ProductListButton.classList.add('big-text');
		elBoxProductList.appendChild(ProductListlist);
		
	}


});
