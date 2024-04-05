const sliderBox = document.querySelector('.slider-Box1'),
      container = document.querySelector('.container'),
      footer= document.querySelector('footer'),
      BtnPrev = document.querySelector('.prev'),
      BtnNext = document.querySelector('.next'),
      wrapper = document.querySelector('.wrapper'),
      loginlink = document.querySelector('.login-link'),
      registerlink = document.querySelector('.register-link'),
      homepage = document.querySelector('.home'),
      hpage2 = document.querySelector('.gidrotsikl-page'),
      gidrotsikl = document.querySelector('.navt3'),
      closed = document.querySelector('.iclosed'),
      loginbtn= document.querySelector('.textnavbar2'),
      n2 = document.querySelector('.n2'),
      btnshoppage = document.querySelector('.shopcard'),
      signbtn = document.querySelector('.textnavbar3'),
      kvadratsiklbtn = document.querySelector('.navt1'),
      kvadrstkl = document.querySelector('.kvadratsikl-page'),
      checkserch1 = document.querySelector('.serchnames1'),
      checkserch2 = document.querySelector('.serchnames2'),
      checkserch3 = document.querySelector('.serchnames3'),
      serchinput = document.querySelector('input'),
      btnhome = document.querySelector('.textnavbar1');

const imgBox = ['./Слайдер 1.png', './Фото-Sea-Doo-RXT-260-2015-небольшое-волнение.jpg', './1476375757_10564894854854855111.jpg', './ibiza-seminaire-jet-ski-1024x672.jpeg'];
let indexCurrent = 0;

btnshoppage.style.cursor = 'pointer';

function sliderFirst(index){
    if(index < 0){
        indexCurrent = imgBox.length - 1
    }else if(index >= imgBox.length){
        indexCurrent = 0
    }
    sliderBox.src = imgBox[indexCurrent]
}


function PrevSlide(){
    indexCurrent--;
    sliderFirst(indexCurrent)
    console.log('1');
}

function NextSlide(){
    indexCurrent++;
    sliderFirst(indexCurrent)
    console.log('2');
}


BtnPrev.addEventListener('click', PrevSlide)
BtnNext.addEventListener('click', NextSlide)

sliderFirst(indexCurrent);



gidrotsikl.addEventListener('click', ()=> {
   homepage.style.display = 'none';
   hpage2.style.display = 'block';
   
});
btnhome.addEventListener('click', ()=> {
    homepage.style.display = 'block';
    hpage2.style.display = 'none';
    
 });

gidrotsikl.addEventListener('click', ()=> {
    homepage.style.display = 'none';
    hpage2.style.display = 'block';
    btnhome.classList.remove('textnavbar1');
    gidrotsikl.classList.add('sty2');
    kvadratsiklbtn.classList.remove('sty2');
    kvadrstkl.style.display = 'none';
    
});
btnhome.addEventListener('click', ()=> {
     homepage.style.display = 'block';
     hpage2.style.display = 'none';
     kvadratsiklbtn.classList.remove('sty2')
     btnhome.classList.add('textnavbar1')
     gidrotsikl.classList.remove('sty2')
     kvadrstkl.style.display = 'none';
});

kvadratsiklbtn.addEventListener('click', ()=>{
    homepage.style.display = 'none';
    btnhome.classList.remove('textnavbar1')
     hpage2.style.display = 'none';
     gidrotsikl.classList.remove('sty2')
     kvadratsiklbtn.classList.add('sty2')
     kvadrstkl.style.display = 'block';
});

registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
    signbtn.classList.add('sign2')
    
    loginbtn.classList.remove('log2')
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
    signbtn.classList.remove('sign2')
    loginbtn.classList.add('log2')
});

loginbtn.addEventListener('click', ()=>{
    wrapper.style.display = 'flex';
    loginbtn.classList.add('log2');
    homepage.style.display = 'none';
    footer.style.display = 'none';
    hpage2.style.display = 'none';
    kvadrstkl.style.display = 'none';
    btnhome.classList.remove('textnavbar1');
    container.classList.add('stopc')
    kvadratsiklbtn.classList.remove('sty2');
    gidrotsikl.classList.remove('sty2');
    n2.style.display = 'none';
});

signbtn.addEventListener('click', ()=>{
    wrapper.style.display = 'flex';
    wrapper.classList.add('active');
    homepage.style.display = 'none';
    footer.style.display = 'none';
    hpage2.style.display = 'none';
    kvadrstkl.style.display = 'none';
    btnhome.classList.remove('textnavbar1');
    gidrotsikl.classList.remove('sty2');
    kvadratsiklbtn.classList.remove('sty2');
    signbtn.classList.add('sign2');
    n2.style.display = 'none';
});

closed.addEventListener('click', ()=>{
    wrapper.style.display = 'none';
    wrapper.classList.remove('active');
    homepage.style.display = 'block';
    footer.style.display = 'block';
    signbtn.classList.remove('sign2');
    loginbtn.classList.remove('log2');
    n2.style.display = 'flex';
    btnhome.classList.add('home1p');
});

btnshoppage.addEventListener('click', ()=> {

});

checkserch1.addEventListener('click', ()=>{
    checkserch1.classList.add('serchchek');
    checkserch2.classList.remove('serchchek');
    checkserch3.classList.remove('serchchek');
});

checkserch2.addEventListener('click', ()=>{
    checkserch1.classList.remove('serchchek');
    checkserch2.classList.add('serchchek');
    checkserch3.classList.remove('serchchek');
});
checkserch3.addEventListener('click', ()=>{
    checkserch1.classList.remove('serchchek');
    checkserch2.classList.remove('serchchek');
    checkserch3.classList.add('serchchek');
});


document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login form");
    const registerForm = document.querySelector(".register form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const emailInput = this.querySelector("input[type='email']");
        const passwordInput = this.querySelector("input[type='password']");
        if (emailInput.value.length >= 8 && passwordInput.value.length >= 8) {
            this.submit(); 
            wrapper.style.display = 'flex';
        } else {
            alert("Parol kamida 8 belgidan ko'p bo'lishi kerak!");
        }
    });

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const usernameInput = this.querySelector("input[type='text']");
        const passwordInput = this.querySelector("input[type='password']");
        if (usernameInput.value.length >= 8 && passwordInput.value.length >= 8) {
            console.log("Register form submitted");
            this.submit(); 
        } else {
            alert("Login va parol kamida 8 belgidan ko'p bo'lishi kerak!");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector(".serch1button");
    const searchBar = document.querySelector(".serchbar input");
  
    searchButton.addEventListener("click", function() {
      const searchText = searchBar.value.trim().toLowerCase();
      if (searchText === "") {
        alert("Please enter a search query.");
        return;
      }
  
      const infoElements = document.querySelectorAll(".infopage .info3serch h1");
      let found = false;
      infoElements.forEach(function(element) {
        const textContent = element.textContent.trim().toLowerCase();
        if (textContent.includes(searchText)) {
          alert("Element found: " + textContent);
          found = true;
        }
      });
  
      if (!found) {
        alert("No matching elements found.");
      }
    });
  });

  let productCount = 1;

  document.querySelectorAll('.shopcard').forEach(function(card, index) {
    card.addEventListener('click', function() {
      const parentSliderbox = this.closest('.sliderbox1');
      const productName = parentSliderbox.querySelector('.aboughtobject').textContent;
      const productPrice = parentSliderbox.querySelector('.aboughtobject2').textContent;
  
      let productKey = productName.replace(/\s+/g, '_'); // productName dan ' ' belgilarini o'chirish
  
      // Ma'lumotlarni local storage dan olish
      let storedCount = localStorage.getItem(productKey);
      if (storedCount) {
        productCount = parseInt(storedCount) + 1;
      }
  
      // Ma'lumotlarni local storage ga saqlash
      localStorage.setItem(productKey, productCount);
  
      console.log(productName + " - " + productPrice);
      console.log(productKey + ": " + productCount);
    });
  });
