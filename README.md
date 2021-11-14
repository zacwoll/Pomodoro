# Pomodoro Timer Productivity App
This is a pomodoro app that I'm trying to build this week, I thought I would take notes here while I think about how to structure this project.

# Patch Notes

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