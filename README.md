# Pomodoro Timer Productivity App
This is a pomodoro app that I'm trying to build this week, I thought I would take notes here while I think about how to structure this project.

# Patch Notes
## TODO  Just punch down from this list and link to it from here

## Patch 0.2.2 Patch update
I started replacing all the structure divs with Styled Components. Once I have all the pieces I think I can start splitting them off into different, localized components. It also may start making sense to develop base components that what I have can extend, for example I'm reusing font-size a lot, that should be set higher up the chain. There's also a bunch of really standard margin, padding, color settings that could be generalized.

So I swapped in all the Timer stylings from Pomofocus, and then I realized I could split up my "Hero" component into two parts, a Timer, and a Tasks component. I'm excited to make this change soon! I think I'm going to skip it for now, and finish the Wiki and the Footer first.

## Patch 0.2.1 Patch update
Installed Styled-Components So I could start building how the web app looks. Once I started adding styles to the navbar I started settling into a pattern I can use to paint the rest of the components. I'm sure there's a way to develop components more efficiently, but right now I have split concerns into different features of the app and I'm adding css to make them look right, we'll continue this pattern until we start looking right. Then we try to figure out the logic.

So TypeScript bug fixed, I couldn't import a .png file to the project, eventually, adding a globals.d.ts file to the /src folder and defining what a .png file is and what can come out of it solved the problem! I also had another issue where TypeScript didn't know what to do with a prop I had passed to what I thought was a styled-components img tag. The 'src' prop was broken because it was actually a styled-components div tag, and it wasn't used to having 'src' as a prop. I went to create an interface that a component could implement and then be styled before I realized just changing the tag from 'div' to 'img' told TypeScript what to expect from such a tag. Enlightening problem though! Encouraging that I can employ TypeScript and not encounter any walls I can't hurdle.

## Patch 0.2.0 Patch update
I installed a create-react-app application with redux and typescript! Wrote some very basic components to put into the app so I can get to work on a component by component level. I've broken up what I think the final app will look like into a series of components
Like this:
```
App
    NavBar
    Hero
    Wiki
    Footer
```
Done!

So We're going to start working on them but I don't really know how to write these components in TypeScript! Or test them, or utilize Redux ToolKit, so it'll be an adventure! Either way, we're moving forward with this plan!

## Breaking Changes report
We're moving to A React-Redux-TypeScript based application! We're moving to React because we want to write the components for this application in reusable ways for the future, Redux because managing application state would be helpful, and TypeScript because sometimes you have to suffer in order to learn, and I really want to learn TypeScript. Here's the full rundown below:

### Next Steps
I now have a basic timer application that will count down from a preset time and change colors on the way to the end. But I really want a pomodoro timer app, with the settings customizable and I want to collect some data about my work hours.

So exclusively talking front-end, I want to host everything on a single-page application such as [pomofocus.io](pomofocus.io), which handles everything I was talking about in a nice manner. This project is begging for react I think, although I could set this up with vanilla JS, it would require a bunch of containers and buttons and modals all organized in one project, or I could use react, and allow the natural structure of react to describe my project. It also could be a good candidate for writing things in TypeScript. React would also help by applying Redux, which could facilitate application state.

With Redux, a user could log in and have it's data populated to the report modal through dispatch props.

React, Redux, TypeScript seem like the way to go.
I think writing all of this would be hard in vanilla JS, but not impossible.

Breaking it into sections, there's a
<Navbar> that includes a progress bar

<TimeDisplay> that shows either the Pomodoro, the short break or the long break time remaining, including a [STOP] and a [>|] icon

<Tasks> section that adds To-Do's that provide a focus for the pomodoro in question

<Wiki> section that explains what a Pomodoro is and how this app helps you focus

<Footer> section that holds contact information and privacy policy.

This means I should hold all the data in PostgreSQL again, and write an express server to pop it out all the user data when it's requested. Maybe run some data science on it too.

## v0.1.6 Path update
Very Minor update, we're moving towards setting the timer value through an input element and a button. That way we can set out pomodoro time in a custom manner
- set Warning time to 50% of TIME_LIMIT
- set alert time to 25% of TIME_LIMIT

## v0.1.5 Patch update
- Added setRemainingPathColor function, which turns the ring from green to orange and orange to red as we approach the end of the timer.
- This concludes the basic functionality of the timer! Now we're converting the timer to specifically a pomodoro timer.

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