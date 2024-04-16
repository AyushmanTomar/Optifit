var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
loader.style.display = "none";
document.getElementById("loader-icon").style.display= "none";})
const body = document.querySelector("body");
toggleSwitch = document.getElementById("toggle-switch");
toggleSwitch.addEventListener('click', () => {
body.classList.toggle("dark");})
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


function myActivityFunction()
{
    var activityBtn = document.getElementById("sidebar1");
    if(activityBtn.className==="side-bar")
    {
        activityBtn.className+=" responsive";
    }
    else{
        activityBtn.className="side-bar";
    }
}


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true     
   })
   
   sr.reveal('.workout-para',{delay: 100})
   sr.reveal('.card',{delay: 100})
   const srDown = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 1500,
    reset: true
  })
  srDown.reveal('.login-header',{delay:200})
  srDown.reveal('.rights',{delay: 100})
  srDown.reveal('.social_icons2',{delay: 100})
//   srDown.reveal('.brief',{delay: 100})
  srDown.reveal('.workout-img',{delay: 100})
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 1500,
    reset: true
  })
//   srLeft.reveal('.main-content',{delay:200})
  srLeft.reveal('.post',{delay:200})

//   card

document.getElementById("logo1").addEventListener("click",openpage);

document.getElementById("side-bar-heading").addEventListener("click",openpage);
function openpage()
{
    window.open("pagemain1.html","_self");
}
function openWalking()
{
    window.open("walking.html","_self");
}
function openCricket()
{
    window.open("cricket.html","_self");
}function openSwimming()
{
    window.open("swimming.html","_self");
}function openCycling()
{
    window.open("cycling.html","_self");
}function openFootball()
{
    window.open("football.html","_self");
}
function openRunning()
{
    window.open("running.html","_self");
}


google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     10],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    8]
        ]);
        
        var options = {
            title: 'My Daily Activities',
            backgroundColor: '#E9E9E9',
            is3D: true,
            chartArea:{top:'10%',width:'60%',height:'60%'},
            legend: {
                position: "bottom"
            },
            titleTextStyle:{color: 'black', fontSize: 18},
            titlePosition: 'none',
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options,);
      }



      const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { 
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; 
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => { 
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { 
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth(); 
        } else {
            date = new Date(); 
        }
        renderCalendar(); 
    });
});



 

document.getElementById("chatav").addEventListener("click",openAV);
function openAV()
{
    window.open("https://opti-fit-chat.netlify.app/","_self");
}