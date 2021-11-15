// Start with an initial value of 20 seconds
const TIME_LIMIT = 20;

// Warning occurs at 10s
const WARNING_THRESHOLD = 10;
// Alert occurs at 5s
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
};

let remainingPathColor = COLOR_CODES.info.color;

// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timeLeft = TIME_LIMIT;

// This is the assign circle function.
document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
            id="base-timer-path-remaining"
            stroke-dasharray="283"
            class="base-timer__path-remaining ${remainingPathColor}"
            d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
            "
      ></path>

    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">
    ${formatTimeLeft(timeLeft)}
  </span>
</div>`

startTimer();

// Divides time left by the defined time limit
function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    // Reduces the length of the bar as it counds down
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

// A little math, r of this circle is 45 so circumference is
// C = 2 * pi * r = 2 * pi * 45 = 282,6 => 3
const FULL_DASH_ARRAY = 283;

// Update the dasharray value as time passes
function setCircleDasharray() {
    const circleDashArray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document.getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDashArray);
}

function startTimer() {
    timerInterval = setInterval(() => {
        // The amount of time passed increments by one
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;

        // The time left label is updated
        document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft);

        // Every second we reset CircleDasharray
        setCircleDasharray();
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