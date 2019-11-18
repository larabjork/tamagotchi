#Tamagotchi
##Created by Jonathan Salfen and Lara Bjork on November 18-19, 2019
###Project Description

This project was completed as an in-class assignment for the Intermediate JavaScript class at Epicodus, during a week focused on Asynchrony and APIs. The task description was as follows:

_The Tamagotchi was one of the most popular toys of the late ‘90’s and early ‘00’s. It was a handheld, digital pet that could be carried around on a keychain-sized mini computer. Tamagotchis required loving care by pressing buttons to feed them, play with them, and put them to sleep. If you didn't give a Tamagotchi enough food, attention or rest, it would die._

_Create an application using setInterval() to adjust a Tamagotchi’s food, play and sleep levels (as well as any other levels you’d like to add). Then create items and actions that can increase or decrease these levels. If you’re able to build out an application fully for one Tamagotchi, refactor so that a player can have multiple Tamagotchis._

###Specifications
These specs were developed based on the assignment description.

1. The program will let a user create a new Tamagotchi.
Input: Start button clicked
Output: Confirmation of new Tamagotchi.

2. The program will let a user name their Tamagotchi.
Input: Mabel
Output: Message like "Your Tamagotchi's name is Mabel"

3. The program will set starting values for feed, play, and sleep.
Input: Start button clicked
Output: Confirm initial values: feed, play, and sleep all start at 10 (top value for each).

4. The program will allow user to choose from feed, play, or sleep as the next activity for their pet.
Input: Button for Feed, Play, or Sleep is clicked.
Output: If Feed is clicked, Feed value increases by 1.

5. The program will decrease sleep and feed values if play is clicked.
Input: Play button clicked.
Output: Play value increases by 1, sleep and feed values decrease by 1.

6. The program will decrease play and sleep values if feed is clicked
Input: Feed button clicked.
Output: Feed value increases by 1, sleep and play values decrease by 1.

7. The program will decrease play and feed values if sleep is clicked
Input: Sleep button clicked.
Output: Sleep value increases by 1, feed and play values decrease by 3.

8. The program will end when all values reach 0.
Input: All values = 0.
Output: Message to user like, "I'm sorry, Mabel has died. Please accept our condolences."


###Technologies Used
HTML, CSS, JavaScript, Node.js, Chrome Node dev tools, babel 7.6.4, babel plugin 7.6.0,,clean-webpack-plugin 3.0.0, css-loader 3.2.0, eslint 6.3.0, eslint-loader 3.0.0, html-webpack-plugin 3.2.0, jest 24.9.0, style-loader 1.0.0, uglifyjs-webpack-plugin 2.2.0, webpack 4.39.3, webpack-cli 3.3.8, webpack-dev-server 3.8.0, bootstrap 4.3.1, jquery 3.4.1, and popper.js 1.16.0.

Project was written using Google Chrome; no other browsers were tested for compatibility.

###Project Setup instructions
1. Ensure that you have Node.js installed; check that **node** (v4.0.x or higher) and **npm** (v.3.6.x or higher) are in place.
2. After cloning the project locally, you can run **npm install -y** to download the necessary dependencies. You can then run **npm run build** to bundle your version of this project. If something doesn't display correctly or goes wrong somehow, please contact us at <jonathan.salfen@gmail.com> and <lara.m.bjork@gmail.com> and we will do our best to troubleshoot for you.

###Known Issues and Limitations
* INSERT AS APPROPRIATE

###License
This software is licensed under the MIT license.

Copyright (c) 2019 Jonathan Salfen and Lara Bjork
