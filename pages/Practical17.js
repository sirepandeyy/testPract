const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');


function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

const amPm = hour >= 12 ? 'PM' : 'AM';

hour = hour % 12 || 12;

time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

setTimeout(showTime,1000);
}

function addZero(n){
    return (parseInt(n,10)<10 ? '0':'')+n;
}


function setBack(){

let today = new Date(),
    hour = today.getHours();
   
     if(hour>= 20){
        document.body.style.background = "url('night.jpg')"
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.color = "white";
        greeting.textContent = "Good Night"
    } else if(hour >= 16){
        document.body.style.background = "url('eve.jpg')"
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.color = "white";
        greeting.textContent = "Good Evening"
    }else if(hour>=12){
        document.body.style.background = "url('noon.jpg')"
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        greeting.textContent = "Good AfterNoon"
    }else if(hour < 12){
        document.body.style.background = "url('morning.jpg')"
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.color = "white";
        greeting.textContent = "Good Morning"
    }
    }


function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]'
    }else{
        name.textContent = localStorage.getItem('name')
    }

}

function setName(e){
   if(e.type === 'keypress'){

    if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('name',e.target.innerText)
        name.blur()
    }

   }else{
       localStorage.setItem('name',e.target.innerText)
   }

}

function setFocus(e){
    if(e.type === 'keypress'){

        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus',e.target.innerText)
            focus.blur()
        }
    
       }else{
           localStorage.setItem('focus',e.target.innerText)
       }
    
}


function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]'
    }else{
        focus.textContent = localStorage.getItem('focus')
    }

}

name.addEventListener('keypress',setName);
name.addEventListener('blur',setName)

focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus)

setBack()
showTime()
getName()
getFocus()





















