let theme = localStorage.getItem('dark_value');
console.log(theme); // Outputs: 42
const body = document.querySelector("body");
let t=false;
if(theme=='true')
{
    body.classList.add("dark");
    console.log("if");
    t=true;
}
else{
    body.classList.remove("dark");
    console.log("else");
    t=false;
}
localStorage.setItem('dark_value2', t);



toggleSwitch = document.getElementById("toggle-switch");
toggleSwitch.addEventListener('click', () => {
body.classList.toggle("dark");
t=!t;
localStorage.setItem('dark_value2', t);
})



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



const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true     
   })
sr.reveal('.login-box',{delay:200})

   const srDown = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 1500,
    reset: true
  })
  srDown.reveal('.login-header',{delay:200})
  srDown.reveal('.social-sign-in',{delay:200})
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 1500,
    reset: true
  })
  srLeft.reveal('.input-box',{delay:200})
  

  const srRight = ScrollReveal({
    origin: 'right',
    distance: '50px',
    duration: 1500,
    reset: true
  })
  srRight.reveal('.input-submit',{delay: 100})

let logo_click = document.getElementById('logo1');
logo_click.addEventListener('click',reload);
function reload(){
    window.open("index.html");
}
