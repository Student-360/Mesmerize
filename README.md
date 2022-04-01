# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Ikraam Rahman**

Time spent: **8** hours spent in total

Link to project: https://glitch.com/edit/#!/separated-royal-octopus?path=script.js%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- N/A 

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://media.giphy.com/media/6pvyPSrvCsvJ8JCluV/giphy.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

The following websites/resources were used for learning and troubleshooting purposes : StackoverFlow, w3schools.com, developer.mozilla.org, geeksforgeeks.org, thesitewizard.com, and delftstack.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

Although learning about front end development was an exhilarating process, there were numerous challenges I encountered while completing my submission. To start, when attempting to place an image over the buttons I had previously created, I was unable to reference the image in my html file. I had made sure to import the specified image into the assets file and based on research thought to assign it as : src="imageName.extension" or reference where the image was stored in the file and outline its pathway as src="filePathway". After a series of internet queries, I realized the way to successfully reference the image may be specific to glitch since the project was done using a glitch interface rather than a general html editor. Moreover this was also, when I discovered the codepath pre work help channel and thanks to the wonderful staff found a glaringly simple solution. If the properties of the downloaded image were viewed then glitch provided a url which could be inserted as such  <src="glitchAssetURL"> to render the image. 
      Another challenge I struggled with was hiding the rendered image of each respective card until they were clicked. I was able to create the <img> tag and its id for each button but could not create the CSS rules successfully, even after referencing a multitude of articles. While troubleshooting, I attempted to modify the javascript and was in part effective until it started messing with previously established game features and so the code was commented out for future revision. 
      In addition another hurdle I encountered was in creating a gif that illustrated the full functionality of my game. I used LICECap to make my recording, which worked perfectly, the problem however arose with rendering the gif in github. The template to render given was ![] (gifLink ) but though the file I had was of the type .gif when placed in github it did not render. When troubleshooting, I thought of hosting or downloading the gif to the following: googlePhotos, tenor, gifyu; but was still unsuccessful. Later I tried to use giphy’s create feature but their limit for a gif was 15 seconds, and so just when I was about to start editing my gif into smaller gifs I stumbled upon gighy’s upload option. The feature surprisingly didn't have the same time constraints as its create counterpart and seamlessly provided me with a link which rendered successfully in github.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words
 
After completing such a fascinating project, my curiosity has been piqued and there are a multitude of questions I have about web development. Some questions I have are as follow:
- What reference documentations are most frequently visited by web developers when writing html, css or javascript code?
- When is it appropriate to use differing front end languages, for instance choosing between react, angular or jquery?
- Can any of the previously mentioned be used in conjunction with html and css?
- Are there any other extraneous tools which play an instrumental role in web development?
- What are the intricacies in developing a dynamic web application in opposed to simply a static web page
- How is UX design taken into consideration when creating the front end of a website?
- How is the backend server side of a web application connected to its user facing side?
- What are the different domains in web development?
- What are the various web development roles for professionals and what do they encapsulate ? 
- What are the best practices to use when designing either front end or back end processes?
- How is security taken into consideration when designing web applications, is that strictly taken care in the back end 
 or are front end features evaluated to reduce risk?
- What are the best methods to troubleshoot or debug applications especially when balancing several languages to create one identity?
- What are the necessary skills (programming skills, creative consistency, etc) for aspiring web developers? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
 
There are various features I would add to increase the user experience and complexity of the game. The first of which would be to allow the user to choose which mode of difficulty they would like to play the memory game in. Depending on the difficulty level chosen, there are two possible factors that would then be affected: The rate at which each clue is played back and the number of clues played back in total. For instance if the hardest mode was chosen, then the user may have the clue playback speed begin at 700 and have 15 total clues to guess for the game to culminate (opposed to a 1200 clue playback speed and 6 total clues for the easiest mode) .          In addition I would like to enhance the user experience by having visual cues such as bursting stars or a broken heart appearing if the user won or lost the game respectively. The previously mentioned is opposed to the simple plain text messages viewed by the user in web page alert form. 
         Finally, it would be really cool to have the user receive a chance to continue playing even after their 3 miss clicks by playing a game within the game. The special game or feature would be as such: The user is shown a series of names such as :(Joker > King > Ace > Queen), with the names corresponding to images that briefly appeared on the cards they had been clicking. If the user is able to click on the buttons corresponding to the correct sequence of image names, then the user will be able to receive an additional ‘life’ or chance to continue the game. They would then be able to continue after having the current iteration of the game sequence played back to them once again.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://vimeo.com/694951716/391044d9b5)


## License

    Copyright [Ikraam Rahman]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
