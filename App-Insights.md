# Next Steps
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