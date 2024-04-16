let theme=false;let t1=false;
localStorage.setItem('dark_value', theme)
function myMenuFunction()
{
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className==="nav-menu")
    {
        menuBtn.className+=" responsive";
    }
    else{
        menuBtn.className="nav-menu";
    }
}





window.onscroll = function()
{
    headerShadow()
};
function headerShadow(){
    const navHeader = document.getElementById("header");
    if(document.body.scrollTop>10 || document.documentElement.scrollTop>10)
    {
        navHeader.style.boxShadow="0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height="70px";
        navHeader.style.lineHeight="0 1px 6px rgba(0, 0, 0 , 0.1)";
    }
    else{
        navHeader.style.boxShadow="none";
        navHeader.style.height="70px";
        navHeader.style.lineHeight="70px";
    }
}

var typed = new Typed('.typedText', {
    strings: ['Opt for fit life!'],
    typeSpeed: 40,smartBackspace: true,loop:true,backSpeed:30,onBegin: (self) => {},backDelay:1000,
  });

if(theme=='true'){
    t1=true;
}
else
t1=false;

const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");
toggleSwitch.addEventListener('click', () => {
body.classList.toggle("dark");
theme=t1;
console.log(theme);
localStorage.setItem('dark_value', theme);})

function login_redirect(){
    window.open("login.html","_self");
}
let theme1 = localStorage.getItem('dark_value2');
console.log(theme1);
if(theme1=='true'||theme==true)
{
    body.classList.add("dark");
    console.log("if");
    localStorage.setItem('dark_value', theme1);
}
else{
    body.classList.remove("dark");
    console.log("else");
    localStorage.setItem('dark_value', theme1);
}

//for logging into the account
function openAccount(){
    let mail = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    if(mail=='ayushmantomar721@gmail.com' && pass=='@yushmaN2002')
    {
        //to perform after login button is clicked
        window.open("pagemain1.html","_blank");
    }
    else
    alert("Incorrect Details! Enter agian");
}



const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true     
   })
   sr.reveal('.featured-text-card',{delay:100})
   sr.reveal('.featured-name',{delay: 100})
   sr.reveal('.featured-text-info',{delay: 100})
   sr.reveal('.about-pic-box',{delay: 100})
   sr.reveal('.social_icons',{delay: 100})

   sr.reveal('.nutrition-img',{delay: 100})
  sr.reveal('.community-description',{delay: 100})
  sr.reveal('.workout-img-box',{delay: 100})
   
   const srDown = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 1500,
    reset: true
  })
   srDown.reveal('.featured-form',{delay: 200})
   srDown.reveal('.social_icons2',{delay: 100})
   srDown.reveal('.fetured-text-btn',{delay: 100})
srDown.reveal('.rights',{delay: 100})
srDown.reveal('.about-description',{delay: 100})
srDown.reveal('.nutrition-desciption',{delay: 100})
  srDown.reveal('.community-img',{delay: 100})
  srDown.reveal('.workout-description',{delay: 100})




// const srRight = ScrollReveal({
//     origin: 'right',
//     distance: '7px',
//     duration: 1500,
//     reset: true
//   })
  





//   const srLeft = ScrollReveal({
//     origin: 'left',
//     distance: '7px',
//     duration: 1500,
//     reset: true
//   })
  
  