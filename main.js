const slideContainer = [{
    img: "slider img/truskawki.jpg",
    text: 'Pierwszy tekst'
   },
   {
    img: "slider img/borowki.jpg",
    text: 'Drugi tekst'
   },
   {
    img: "slider img/jablka.jpg",
    text: 'Trzeci tekst'
    
   },
   {
    img: "slider img/gruchy.jpg",
    text: 'Czwarty tekst'
   }];

   const h1 = document.querySelector('.slider-h1');
   const image = document.querySelector('.slider');
   const dots = [...document.querySelectorAll('.dots span')];
   

   let active = 0;
   const timer = 4000;
   

const changeDots = () => {

const activeDot = dots.findIndex(dot => dot.classList.contains('active'));

 dots[activeDot].classList.remove('active');
 dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideContainer.length) {
     active = 0;
    }
    image.src = slideContainer[active].img;
    h1.textContent = slideContainer[active].text;
    changeDots()
   }
   let indexInterval = setInterval(changeSlide, timer);

const keyChangeSlide = (e) => {

    if(e.keyCode === 37 || e.keyCode === 39){
        clearInterval(indexInterval);
        e.keyCode == 37 ? active-- : active++;

        if(active === slideContainer.length){
            active = 0;
        }
         else if(active < 0) {
            active = slideContainer.length - 1;
           }
           changeDots();

           image.src = slideContainer[active].img;
           h1.textContent = slideContainer[active].text;

           indexInterval = setInterval(changeSlide, timer);
    
    }}

    function changeRight(){
        active++;
        clearInterval(indexInterval);
        if(active === slideContainer.length){
            active = 0;
        }
        changeDots();
        image.src = slideContainer[active].img;
        h1.textContent = slideContainer[active].text;

        indexInterval = setInterval(changeSlide, timer);
 

    }

    function changeLeft(){
        active--;
        clearInterval(indexInterval);

         if(active < 0) {
            active = slideContainer.length - 1;
           }
           changeDots();
           image.src = slideContainer[active].img;
           h1.textContent = slideContainer[active].text;

           indexInterval = setInterval(changeSlide, timer);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const btn = document.querySelector('ol .btn ');
    
    const logo = document.querySelector(".logo");



const changeColor = () => {
    console.log('aa');
    btn.classList.toggle('blackBtn');
    
    logo.classList.toggle('logoBack');


}




    btn.addEventListener('click',changeColor);



















    
   window.addEventListener('keydown', keyChangeSlide);