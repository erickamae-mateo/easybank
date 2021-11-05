# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

![image](https://user-images.githubusercontent.com/88840940/140470559-b3b94174-0beb-4bf9-a7bd-aa2c34605163.png)

![Screenshot 2021-11-05 at 14-57-05 Frontend Mentor Easybank landing page](https://user-images.githubusercontent.com/88840940/140471418-319250f9-1f57-4d84-86c0-bcee85de88ff.png)



### Links

- Solution URL:https://github.com/erickamae-mateo/easybank
- Live Site URL: https://erickamae-mateo.github.io/easybank/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JS
- Mobile-first workflow


### What I learned

I learned to create a responsive navbar without using CSS or JS framework.



I also added the code snippets, see below:

```html
<header class="header">
    <div class="overlay fade"></div>
    <nav class="cpy flex flex-jc-sb flex-ai-c">
      <a href="#" class="header_logo">
        <img src="images/logo.svg" alt="Easybank">
      </a>

      <!-- 1.2 MOBILE MENU TOGGLE-->
      <a href="#" id="btnMenu" class="header_toggle hide_desktop">
       <span></span>
       <span></span>
       <span></span>
      </a>

        <!-- 1.1 DESKTOP MENU-->
        <div class="header_links hide_mobile">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>

        <a href="#" class="button hide_mobile">Request Invite</a>
    </nav>

        <!-- 1.3 MOBILE MENU TOGGLE-->
      <div class="header_menu fade">
         <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
      </div>
  </header> 
```
```css
nav{
	position: relative;
	background: white;
	padding:1.0625rem 0rem;

}
h1, h2, h3{
	margin-top: 0;
	font-weight: 300;
	line-height: 1.15;
	color: #2d314d;
}

.header{
	position: relative;
 	 z-index: 1;
}
h1{
	
	color: #2d314d;
	margin-bottom: 1.5rem;
}
h2{
	font-size: 1.875rem;
	margin-bottom: 1.5625rem;
}
p{
		font-size: 1rem;
		line-height: 1.5;
	}

.container{
		max-width: 1200px;
		margin: 0 auto;
	}
.cpx{
	padding-top: 4.375rem;
	padding-bottom:  4.375rem;
}
.cpy{
	padding-right: 1.75rem;
	padding-left: 1.75rem;
}
.cp{
	padding-top:  4.375rem;
	padding-bottom:  4.375rem;
	padding-right: 1.75rem;
	padding-left: 1.75rem;
}
.flex{
	display: flex;
}
	.flex-jc-sb{
		justify-content: space-between;
	}
	.flex-jc-c{
		justify-content: center;
	}

	.flex-ai-c{
		align-items: center;
	}

.button{
	display: inline-block;
	padding: 0.875rem 2.1875rem;
	background: linear-gradient(to right, #31d35c , #2bb7da);
	border:0;
	border-radius: 50px;
	cursor: pointer;
	font-size: 0.875rem;
	font-weight: 400;
	transition: opacity 300ms ease-in-out;
	color: white;

}

.button:hover{
	opacity: 0.75;
}
/******************************* HEADER TOGGLE MENU *****************************************8*/
.header{
}
	.header_logo img{
		width: 8.8125rem;
		height: 1.375rem;
	}

/*MOBILE DESIGN*/
.header_toggle span{ 
		display: block;
		width: 26px;
		height: 2px;
		background-color: #2d314d;
		transition: all 300ms ease-in-out;
		transform-origin: 3px 1px; 
	}
	.header_toggle span:not(:last-child){
		margin-bottom: 5px;
	} 

/*MOBILE DESIGN TOGGLE*/
  .open span:first-child{
		transform: rotate(45deg);
	} 
  .open span:nth-child(2){
		opacity: 0;
	} 
  .open span:last-child{ 
		transform: rotate(-45deg);
	} 
	

		/*desktop design*/
		.header_links a{
			position: relative;
			font-size: 0.875rem;
			margin-right: 1rem;
		}
		.header_links a{
			color:  #2d314d;
		}
		.header_links a::before{
			content: "";
			position: absolute; 
			display: block;
			width: 100%;
			height: 5px; 
			left: 0;
			right: 0;
			bottom:-30px; 
			background: linear-gradient(to right, #31d35c , #2bb7da);
			opacity: 0;
			transition: opacity 200ms ease-in-out;
		}
		.header_links a:hover::before{
			opacity: 1;
			
		}

/*CANNOT ANIMATE THE DISPLAY: NONE AND BLOCK*/
 .header_toggle .open .overlay{
	display: block;
	animation: fadeIn 300ms ease-in-out forwards;
}
	.overlay { 
	 opacity: 0;
	 position: fixed;
	 top: 0;
	 right: 0;
	 left: 0;
	 bottom: 0;
	 background: #2d314d;
	 background: linear-gradient(#2d314d, transparent);
	}

@keyframes fadeIn{
	from{
		visibility: hidden;
		opacity: 0;
	}
	1%{
		visibility: visible;
		opacity: 0;
	}
	to{
		visibility: visible;
		opacity: 1; 
	}
}
.fade{
	visibility: hidden;
}
.fadeIn{
	animation: fadeIn 200ms ease-in-out forwards;
}
@keyframes fadeOut{
	from{
		visibility: visible;
		opacity: 1;
	}
	99%{
		visibility: visible;
		opacity: 0;
	}
	to{
		visibility: hidden;
		opacity: 0;
	}
}
.fadeOut{
	animation: fadeOut 200ms ease-in-out forwards;
}

/*mobile menu links under overlay*/
.header_menu{ 
	position: absolute;
    width: calc(100% - 3rem);
    left: 50%;
    transform: translateX(-50%);
	background-color: white;
	margin-top: 1.5rem;
	padding: 1.625rem;
	border-radius: 5px;

}

.header_menu a{ 
	display: block;
	padding: 0.625rem;
	color:  #2d314d;
	text-align: center;
	
}

@media screen and (min-width: 48em) and (max-width: 87em){
	a, a:visited, a:hover{
	text-decoration: none;
	}
	h1{
		font-size: 3.25rem;
	}
	h2{
	font-size: 2.25rem;
	margin-bottom: 2.25rem;
	}
	p{
		font-size: 1rem;
		line-height: 1.5;
	}
	.hide_desktop{
		display:none;
	}
	.container{
		padding-top: 6rem;
		padding-bottom: 6rem;
	}
}

@media screen and (min-width: 30.0625em) and (max-width: 47.9375em){
	.hide_mobile{
		display:none;
	}
}
@media screen and (max-width: 47em){ 
	.hide_mobile{
		display:none;
	}
}



	</style>
```
```js
 <script type="text/javascript">
  const body = document.querySelector('body');
  const btnMenu = document.querySelector("#btnMenu");
  const header = document.querySelector(".header");
  const overlay = document.querySelector(".overlay");
  const fadeElems =document.querySelectorAll(".fade");

  btnMenu.addEventListener('click', function(){
  console.log('click hamburger');

  if (header.classList.contains('open')){ //CLOSE MENU
    header.classList.remove('open');
    body.classList.remove('noscroll');

    fadeElems.forEach(function(element){
    element.classList.remove('fadeIn');
    element.classList.add('fadeOut');
    });
   
  }else{ //OPEN MENU
    header.classList.add('open');
    body.classList.add('noscroll');

    fadeElems.forEach(function(element){
       element.classList.add('fadeIn'); 
      element.classList.remove('fadeOut');
    });
   
  }
  
});

  </script>
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

I want to focus on learning grid and flexbox in responsive design.
Also, css positioning properties.


### Useful resources

- [Jessica Chan](https://coder-coder.com/) - This helped me to create a responsive navbar. She clearly explained the difference between grid and flex, and css position properties. Additionally, I had a great understanding to take mobile first approached in designing a web page/s really liked this pattern and will use it going forward.

- [Jessica Chan](https://www.freecodecamp.org/news/4-reasons-your-z-index-isnt-working-and-how-to-fix-it-coder-coder-6bc05f103e6c/) - This is an amazing article which helped me finally understand z-index and why it isn't working. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@Ericka-MaeMateo](frontendmentor.io/profile/erickamae-mateo)
- LinkedIn - [Ericka Mae Mateo](https://www.linkedin.com/in/ericka-mae-mateo-823a18129/)



## Acknowledgments

Thank you for being my inspiration and teacher Ms. Jessica Chan. 
https://www.youtube.com/
https://developer.mozilla.org/en-US/
https://www.w3schools.com/
