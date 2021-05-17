let date = new Date();

//Gets local time
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds(); 

let standardTime = (hour >= 12) ? 'PM' : 'AM';
hour = (hour == 0) ? 12 : (hour > 12) ? hour - 12 : hour; //correctly displays hour based on standard time

function clockUpdate() {
document.getElementById("time").innerHTML = `${hour}:${min}:${sec} ${standardTime}`; 
setInterval(clockUpdate, 1000); //updates time every second
}

clockUpdate();