setInterval(()=> {
let date = new Date();

//Gets local time
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds(); 

//Correctly displays time based on standard time format
let timeOfDay = (hour >= 12) ? 'PM' : 'AM';
hour = (hour < 10) ? "0" + hour : (hour == 0) ? 12 : (hour > 12) ? "0" + (hour - 12) : hour;
min = (min < 10) ? "0" + min : min;
sec = (sec < 10) ? "0" + sec : sec;

document.getElementById("time").innerHTML = `${hour}:${min}:${sec} ${timeOfDay}`; 
})