# guestConnect

## Instructions for start up,

visit deployed: https://guestconnect-6bbb5.web.app/?

1. Clone this repository to your local machine.
2. Open the repository in your editor of choice.
3. Open the terminal and enter (npm i)
4. Once everything is done installing, in the terminal enter (npm start)

## Tech stack & reasoning.

    JavaScript, React.js, SASS, ContextAPI.

1.  Language:
    I chose to work with JavaScript for this exercise, due to its object oriented nature, and my familiarity with it.

2.  Why React?
    React components are essentially objects, and Eva said "use objects" so I used them for everything. I tried to make them reusable as possible, for example my MenuOptions component does a check and conditionally renders the proper display, allowing me to pass the same component for multiple use cases. While envisioning a solution, I couldn't help but think of using context api (similar to redux but easier to set up) as a way to store and manipulate the data provided. I stored the selected guest and company in state and used those for template generation in my ChatOption component. Using Contexts would also make future feature implementation easy, (Ie auth can be added by simply adding user to the reducer.) I already started making a sent state array, which could hold all sent messages for instance.

3.  Design choices:
    I was trying to (very roughly) simulate a web app environment, where a staff member would be selecting a checked in guest, I started by placing guests at the top of the menu to encourage selecting that first, however I am conditionally rendering the Chat component so if there is no guest selected, it will advise the user to pick one, and once selected it will ask where the selected user is staying. Prompting them to choose a hotel partner.

4.  TODO's: Unfortunately I didn't have enough time to do everything I wanted:

- Incorporating message history (this can be done by using the sent array in state and pushing messages into it.)
- authentication: just need to add a user:[] in state and set up firebase auth. can also add messaging functionality through similar process.
- predictive text for input fields, since both the guest and company are stored in state as an array I could bring them into a component that receives the guest and company values as an array and basically just map through the suggested items and compare against the key-down event.
- Showing messages sent on submit, instead the form button is just a regular button and causes a refresh resetting the application state.
- writing some actual unit tests.
- use timezone of hotel to dictate time of day in the greeting function.

5. Testing Methods:
   1. Manual aka I tried to break it myself, I structured the app pretty simply so not much really could go wrong.
   2. I used ternary operators when referencing things I knew might not be there all of the time.
6. Final thoughts:

- user endtime and startTime stamps: I did not implement anything with those as I couldn't figure out the formatting, in time.
- I haven't actually worked with templates outside of template string literals and Ill be looking into resources about other methods.

## Objectives given:

We want to see your implementation of this process. More specifically, your code should:
Have some sort of structure or object for working with template messages that have placeholders/variables (i.e. firstName, lastName,
roomNumber, etc.) embedded in them

- [x] Load in message template information from a JSON file that you will have had created. Structure the file however you see fit can be found
      - can be found in  Components/ChatOptions
- [x] Load in guest and company information from the JSON files that we have provided
      - can be found in Components/GuestMenu & Components/CompanyMenu
- [x] Support a greeting variable that will change based on the time of day (e.g. "Good morning" / "Good afternoon" / "Good evening")
      - can be found in  Components/ChatOptions
- [x] Allow the user to specify which guest and which company should be used to populate template messages.
       - this is handled by the on click events, and contexts. can be found in Components/MenuOptions
- [x] Allow the user to either select one of the message templates that was loaded in from the JSON file or to enter in a new message template.
       - I interperated this as a way for the user to create their own message.
- [x] Generate a final message output that is a result of populating the specified variables of the message template with the correct values from the other data
      - accomplished using radial button selection for pregenerated templates, and an input for a custom input. I wanted to add predictive text, to better assist the user       with proper data entry. 

You can use any programming language you like. We care more about how you approach the problem than what specific languages you are
proficient in. ***No GUI element is required***, but feel free to expand in that direction if it suits you.
***I saw this late, but on the plus side now everyone can check it out! 
