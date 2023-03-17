const timeLeft = document.getElementById('time-left')

let myBirthday = new Date('11/07/2023');
// console.log(myBirthday)

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; //(miliseconds)
let timerId

function countDown(){
    const today = new Date();
    const dayLeft = myBirthday - today;
    // console.log(dayLeft)

    if(dayLeft <= -day){
        timeLeft.innerHTML = 'Hope You had a Nice Day';
        clearInterval(timerId);
        return;
    }
    else if (dayLeft <= 0){
        timeLeft.innerHTML = "Happy BirthDay To you! Wish you a very peaceful life";
        clearInterval(timerId);
        return;
    }

    // to display the result 
    const remainingDays = Math.floor(dayLeft / day);
    const remainingHours = Math.floor((dayLeft % day) / hour);
    const remainingMinutes = Math.floor((dayLeft % hour) / minute);
    const remainingSeconds = Math.floor((dayLeft % minute) / second);
    // console.log(remainingDays, remainingHours, remainingMinutes, remainingSeconds);

    timeLeft.innerHTML = `${remainingDays} Days ${remainingHours} Hours ${remainingMinutes} Minutes ${remainingSeconds} Seconds`
}
timerId = setInterval(countDown, 1000);

// function countDown(){
//     setInterval(function(){
//         const today = new Date();
//         const dayLeft = myBirthday - today;
//         // console.log(dayLeft)
//     },1000)
// }
// countDown();