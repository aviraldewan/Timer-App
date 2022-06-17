// to store current time of timer
let hour = 24;
let minute = 0;
let sec = 0;

// function to reset the timer
function resetTime() {
    hour = 24;
    minute = 0;
    sec = 0;
    alert("Timer is Reset");
}

// function to update time
function updateTime()
{

    // if timer is complete the print message that time is up
    // and return
    if (hour == 0 && minute == 0 && sec == 0)
    {
        document.querySelector('h1').innerHTML = "Time Up";
        return;
    }

    // update hours, minutes and seconds
    if (sec == 0)
    {
        if (minute -1 >= 0)
        {
         minute--;
        }
        sec = 60;
    }
    if (minute == 0)
    {
        if (hour != 0)
        {
            hour--;
            minute = 59;
        }
    }

    if (sec -1 >= 0)
        sec--;

    // Update HTML
        // if current hour or minute or second is less than 10
        // then print them with a leading zero
    if (hour <= 9)
        document.querySelector('#hour').innerHTML = "0" + hour;
    else
        document.querySelector('#hour').innerHTML = hour;
    if (minute <= 9)
        document.querySelector('#minute').innerHTML = "0" + minute;
    else
        document.querySelector('#minute').innerHTML = minute;
    if (sec <= 9)
        document.querySelector('#sec').innerHTML = "0" + sec;
    else
        document.querySelector('#sec').innerHTML = sec;
}

document.addEventListener('DOMContentLoaded', function() {

    // get current time in timer
    document.querySelector('#hour').innerHTML = hour;
    document.querySelector('#minute').innerHTML = "0" + minute;
    document.querySelector('#sec').innerHTML = "0" + sec;

    // if reset button is clicked, call the reset time function
    document.querySelector('#reset').onclick = resetTime;

    // Update time after each second
    setInterval(updateTime,1000);
});