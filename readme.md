# HTML And Tailwind Landing Page Task

## Overview
Create a simple cardflip memory game using **HTML**,**CSS** And **javascript**. 

## Tech Stack
- **HTML** for structure (Game board and header)
- **CSS** for styling (flipped cards and matched cards and all cards images)
- **VSCode** for development
- **Google-fonts** for fonts
- **JavaScript** for applying logics

## Logics
-**logic 1: handleload** start of the game or reload of the game cards shuffled automatically. for shuffleing geting data from HTML through querryselectorAll. Then convert nodelist array into construct array of shuffled images using for each method.

-**logic 2:card flipped** Card flipping Function . The input is nodelist array so using for loop function for fliping images. when i click any of the image that index no of cards has addEventlistener click function from output of this will add classlist attributes for card flips animation .Once two clicks finish called a check pair function. check pairs function parameter will be index of which two cards i clicked.

-**logic 3:Checking pairs** in this function check for the which two ards i cilcked that cards dataset value. If both cards value matched then it will add matched attributes properties to show image .once its matched untill or unless i restart or reload or match all pairs this attributeswill be added. else remove the flipped attributes atfer a short delay.

-**logic 4:winning msg** once you matched all pairs winning msg willbe visible in header . this function call will be inside of checking pairs .once pairs length reached card length this msg will be show.

-**logic 5:restart function** once you matched or in between restart clicking this logic will work . im using for loop for this because of nodelist array in for loop when i click restart the matched class attribute will remove for all images. and i call this function in checking pairs with if condition when matched cards length and cards length will be equal that time if i click all images flip back . in this i called handlestart function so images will shuffle as well

## How to Play 

- **step-1** click any of image and remember that image then click next image if two images are same both will show till you finish the game . untill or unless you click restart or reload

- **step-2** if both are not the same click next two and remeber that images also then you can identify the next click which two i need to click.

- **step-3** once you match all pairs ✨ You Won The Game ✨

## Features

- Responsive Design
- Clean and Minimalistic Layout

## Demo
- 

## Authors

- [@ Vengat p](https://github.com/Vengat-P)




