# epic_password_generator
This page functions using a lot of conditionals.

When the "generate password" button is pressed a prompt is triggered requesting a number between 8 and 128.

If the number is outside of these bounds the process is terminated and they are asked to put a number between 8 and 128.

If the user inputs anything besides a number they will be introduced to a "NUMBERS ONLY!" alert.

Once an acceptable number is put into the prompt, a series of confirm popups will show up, each asking if the user would like to include a kind of character in their password.
If they confirm a popup, an array of those characters is added to a "master array." 

Thus if they confirm all the "master array" includes all kinds of characters.

If the user confirms no characters the process is terminated after they recieve an alert to please select at least one kind of character.

Once all desired characters are selected the password is generated using a loop thats length is determined by the input in the first input prompt. 

Each time the loop runs it generates a random character from the "master array" and adds it to a string called password. 

The loop stops once it has run the same amount of times as the number that the user input into the first prompt.

Once the password is generated it is displayed in the box on the page.

enjoy the site: https://dtrombla.github.io/epic_password_generator/

![password-application](https://github.com/DTrombla/images/blob/main/password-generator.PNG)


![generated-password](https://github.com/DTrombla/images/blob/main/password.PNG)
