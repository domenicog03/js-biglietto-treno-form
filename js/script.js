//btn calc
const calcButton = document.querySelector('#calc-btn');

calcButton.addEventListener('click', function(){

//km
const kmp = document.querySelector('#kmp').value;
const age= document.querySelector('#age').value;

let stdprice= 0.21 * (parseInt(kmp));
//console.log(stdprice);

let finalprice=stdprice;

if(parseInt(age)<18){
    const discount= stdprice*20/100;
   // console.log(discount);
    finalprice= stdprice-discount;
   // console.log(finalprice);


}else if (parseInt(age)>65){
    const discount= stdprice*40/100;
   // console.log(discount);
    finalprice= stdprice-discount;
  //  console.log(finalprice);

}

const userkmDiv = document.querySelector('.userkm');
userkmDiv.innerHTML = 'I km da percorrere sono:'+kmp;
userkmDiv.classList.add('active');

const userageDiv = document.querySelector('.userage');
userageDiv.innerHTML = 'La tua età è:'+ age;
userageDiv.classList.add('active');

const userpriceDiv = document.querySelector('.userprice');
userpriceDiv.innerHTML = 'Il prezzo finale è:'+ finalprice;
userpriceDiv.classList.add('active');


});




    



