## TriviaApp

This App uses a simple API that randomly returns some questions, those are displaying on the app and after completing 4 questions it shows your results.

The app is a take home challenge.

### Pending 

- Using reanimated for wiggle or any animation: I did not distributed correctly my time, i was not able to complete the animation using reanimated. I used Animated from RN to do an small animation on a few buttons.
- Counter: I would add a counter so the user knows how many questions there are and which question is currently being displayed. Additionally, I would disable the buttons while the animation is running.
- 3rd screen: I wanted to have a 3rd for the results with the option to do the challenge again or return to home.
- Score save: I would add the async storage to persist previous scores.
- Test and bonus points: I would love to have more time to integrate testing library and do a few unit test in particular the behavior of the Stepper component.


### Results

![Android preview](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHFmbm00end4MnB6bjY3NDhobmhjbmhoNHdtOTM1YXZrcmVtbXF5cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6oXeTon4FJr6nlCloY/giphy.gif)  ![iOS preview](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHQyeGhiaDFweW1na2k5OXE5ZHEzdnlwMzRqZzdxc2xvZmQybnZ1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vTEQx0S9SLABYbSgW7/giphy.gif)


### Before start

This project was built using React Native, following the usual setup. To dive in, just make sure your environment is ready. You can find all the details in the React Native [documentation](https://reactnative.dev/docs/environment-setup).

If you're using Android, it's a good idea to take your time and follow the documentation's instructions to install all the required SDK.

#### Step 1: Clone the repo.

`git clone https://github.com/josecarvajal8/cameraApp.git`

#### Step 2: Dependencies and pods

Install the dependencies by running:
`yarn`

Install pods by running:

`cd ios/ && pod install && cd ..`

#### Step 3: Run your app

Start the server by running:
`yarn start`

Run your app by running:
`yarn ios` or `yarn android`

