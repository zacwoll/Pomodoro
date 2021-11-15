# Pomodoro Timer Productivity App
This is a pomodoro app that I'm trying to build this week, I thought I would take notes here while I think about how to structure this project.

# Patch Notes
## TODO  Just punch down from this list and link to it from here

## v0.1.4 Patch update
- Added setCircleDasharray method inside our time interval, some math in this one folks, the current size of the element is 300px, so the circumference of the circle, what's being reduced to zero, is 2 * pi * r, and with r = 45px that comes out to 2 * pi * 45 = 282.6 ~= 283

We calculate the elapsed time out of set time fraction and multiply it against this number sets the length of the first dash in the Dasharray property.

Effectively, the green part is the first dash, and the grey is the rest, so the length of the first dash is set to the circumference of the circle and shrank down to zero, while the length of every dash is set to this 283 circumference

## v0.1.3 Patch update
- Added inner path to circle, that will rotate counter-clockwise from the top of the circle. Supposed to indicate "Time Remaining"
### Important notes
- we set the color from "COLOR_CODES.info.color"
- We set the stroke-width to the same size as the original ring.
- duration of the transition is set to 1 second so that it animates smoothly and corresponds with the time remaining in the time label. Next is animation of the circle

## v0.1.2 Patch update
- Added function that increments the time passed (and thus decrements the time remaining)
- Called function after document loads the .innerHTML function (same idea as onDocumentLoaded)

## v0.1.1 Patch update
- Added time inside the circle
- Added time constant, time left and time limit
- corrected the some positions in the css, marked in comments

## v0.1.0 Minor update

- Added basic timer template for the timer, an svg with a circle element inside to draw a timer ring, indicating the passing time and add a span to show the remaining time value. This is my first push towards incorporating react. I couldn't encapsulate this html code and inject it without using javascript anyway, so it would be nice to encapsulate this code away as a React Component.
- We added this css
```
/* Sets the containers height and width */
.base-timer {
    position: relative;
    height: 300px;
    width: 300px;
}

/* Removes SVG styling that would hide the time label */
.base-timer__circle {
    /* fill removes the inside out to the edge */
    fill: none;
    /* stroke is the width of the edge */
    stroke: none;
}

/* The grey background displaying the timer's progress */
.base-timer__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
}
```
which makes it another good candidate for styled-components

So currently, we have Project Starter and Grey Circle. More to come, I want organizational tools!