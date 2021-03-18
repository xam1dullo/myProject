var elAddToStartButton = document.querySelector('.add-to-start-product-button');
var elProductNameInput = document.querySelector('.product-name-input');
var elAddToEndButton = document.querySelector('.add-to-end-button');
var elRemoveIndexInput = document.querySelector('.remove-index-input');
var elRemoveProductButton = document.querySelector('.remove-product-button');
var elBozorlik = document.querySelector('.bozorlik');
var bozorlik = [];


elAddToStartButton.addEventListener('click', function(){
  var newProduct = elProductNameInput.value.trim().toLowerCase();
  if(!newProduct){
    alert("Mahsulot noomini kiriting:"); return;
  }
  if(bozorlik.indexOf(newProduct) > -1){
    alert('Bu narsa bor'); return;
  }
  bozorlik.unshift(newProduct);


  elBozorlik.innerHTML ="";
  for (var i = 0; i < bozorlik.length; i++) {
    var newLi = document.createElement('li');
    // newLi.classList('newLi');
    newLi.textContent = bozorlik[i];
    elBozorlik.appendChild(newLi);
    elProductNameInput.value = '';

  }
});

elAddToEndButton.addEventListener('click', function(){
  var newProduct = elProductNameInput.value.trim().toLowerCase();
  if(!newProduct){
    alert("Mahsulot noomini kiriting:"); return;
  }
  if(bozorlik.indexOf(newProduct) > -1){
    alert('Bu narsa bor'); return;
  }
  bozorlik.push(newProduct);
  elBozorlik.innerHTML ="";
  for (var i = 0; i < bozorlik.length; i++) {
    var newLi = document.createElement('li');
    // newLi.classList('newLi');
    newLi.textContent = bozorlik[i];
    elBozorlik.appendChild(newLi);
    elProductNameInput.value = '';
  }
});


elRemoveProductButton.addEventListener('click', function(){
  var removeIndex = parseInt(elRemoveIndexInput.value.trim(), 10);

  if(!bozorlik.length){
    alert('Indeks Kiriting:'); return;
  }
  if(!elRemoveIndexInput.value){
    alert('Ro\'yxat bo\'sh'); return;
  }
  if(removeIndex < 0 || removeIndex > bozorlik.length){
    alert('Bozozrlikda bor indekxni kiriting.'); return;
  }
  bozorlik.splice(removeIndex, 1);
  elBozorlik.innerHTML ="";
  for (var i = 0; i < bozorlik.length; i++) {
    var newLi = document.createElement('li');
    // newLi.classList('newLi');
    newLi.textContent = bozorlik[i];
    elBozorlik.appendChild(newLi);
    elProductNameInput.value = '';
  }
});
