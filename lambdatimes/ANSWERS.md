## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

The developer will know by reading the propTypes that he needs to pass in a property. The isRequired property tells us that the property is required for the component to work.


- [ ] Describe a life-cycle event in React?

During the lifetime of a component, there’s a series of events that gets called, and to each event you can hook and provide custom functionality.
There are 3 phases in a React component lifecycle:
Mounting
Updating
Unmounting

When *** Mounting *** we have 4 lifecycle methods before the component is mounted in the DOM: the constructor, getDerivedStateFromProps, render and componentDidMount.

When *** Updating *** we have 5 lifecycle methods before the component is mounted in the DOM: the getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate.

*** Unmounting ***
In this phase we only have one method, componentWillUnmount.

- [ ] Explain the details of a Higher Order Component?

A higher-order component is a function that takes a component and returns a new component.
The goal of this pattern is to decompose the logic into simpler and smaller functions that can be reused.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

*** Apply styles via external css. ***
Its easier for someone without react knowledge to style the page. 

*** Apply Style via Bootstrap. ***
 Learning how to work with Reactstrap will help you when you get to that point where you’ll be using some sort of custom component library or styling library at your day job.

*** Apply Style via internal styed component. ***
It's my favorite :) Its clean no leaking, everything stays on the same component, easyer acces to every element.