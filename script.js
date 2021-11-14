// Start with an initial value of 20 seconds
const TIME_LIMIT = 20;

// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timeLeft = TIME_LIMIT;

// This is the assign circle function.
document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">
    ${formatTimeLeft(timeLeft)}
  </span>
</div>`

startTimer();

function startTimer() {
    timerInterval = setInterval(() => {
        // The amount of time passed increments by one
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;

        // The time left label is updated
        document.getElementById("base-timer-label").innerHTML = format(timeLeft);
    // Every 1000ms (1 second)
    }, 1000);
}

function formatTimeLeft(time) {
    // The largest round integer less than or equal to the result of time divided by minute
    const minutes = Math.floor(time / 60);

    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds = time % 60;

    // If the value of seconds is less than 0, then display seconds with a leading 0
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    // The output in MM:SS format
    return `${minutes}:${seconds}`
}