const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const ElemFades = document.querySelectorAll('.just-fade');



btnHamburger.addEventListener('click', function(){
	console.log('open hamburger');

	if (header.classList.contains('open')) {//close mobile menu 
		body.classList.remove('noscroll');
		header.classList.remove('open');
		ElemFades.forEach(function(element){
			element.classList.remove('fadeIn');
			element.classList.add('fadeOut');
		});
		
	}else{	//open  mobile menu 
		body.classList.add('noscroll');
		header.classList.add('open');
		ElemFades.forEach(function(element){
			element.classList.remove('fadeOut');
			element.classList.add('fadeIn');
		});
	}
});