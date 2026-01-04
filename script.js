function updateClock() {

    const clock =document.getElementById("clock");
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours > 12 ? "PM" : "AM" ;

    hours = hours % 12 ;
    hours = hours ? hours : 12 ;

    hours = hours ;
    minutes = minutes  ;
    seconds = seconds  ;

    clock.innerText = `${hours} : ${minutes} : ${seconds} : ${ampm}`;
}
updateClock() ;
setInterval(updateClock,1000);