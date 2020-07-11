# Homework5

Link: https://deg18.github.io/Homework5/

What I did:

1. I went to code.jquery.com to get the script link and added to the head

2. I created a function to get the current Date in script.js file and target to #currentDay so it will display on the header

3. I created a container with 9 rows, and each row corresponding to the time frame.

4. Inside the row, I created 3 columns, and they contain time, textarea, and a save button.

5. In the script.js file, I created 9 empty arrays, to store 9 different time frame data.

6. I created an init() function, so when the user refresh the page, computer will go through the init() function first, and grab local storage data display on the right time frame.

7. when user click the save button, computer will go search for value to see which save button did user clicked and append the input value from user to the array, then it will save to the local storage, so the user will getting the same data when they refresh the page.

8. I created a change background color function when the current local time has passed time frame, the respective time frame background color will change to lightgray color, when the time frame is current time, the background color will be lightpink, when the time is in the future the background color will be lightgreen.

# Image of output:

![](img/ScreenShot_HW5.PNG)
