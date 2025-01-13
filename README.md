# PantigTuro App

## Introduction
The **PantigTuro App** is designed to help early language learners, specifically Grade 1 students, improve their native language skills. This app features interactive storytelling based on classic Filipino folktales (**Alamat** in Tagalog) with a unique twist at the end: a word-guessing game or quiz. The app is completely offline, does not use any APIs or authentication, and is built using React Native with the Expo Framework (bare workflow) and TypeScript. 

Key features include story functions with audio synchronized text highlighting (inspired by Spotify lyrics), and game mechanics that challenge users with randomized quizzes and dynamic scoring.

---

## Video Demo
[![Watch the video](https://github.com/ejpiamonte/pantigturo/blob/main/Thumbnail.jpg)](https://github.com/ejpiamonte/pantigturo/raw/refs/heads/main/PantigTuro%20Demo.mp4)

---

## User Instructions
1. **Download the App**
   - Download the app from this [Google Drive Link](https://drive.google.com/drive/folders/1abyEOsP8rvdqtqhvc8Ui1nrfCvUVjhRM?usp=sharing). Save the file to your device.

2. **Install and Launch**
   - Follow your device's installation process (e.g., enable app installs from unknown sources if necessary).

3. **Using the App**
   - **Story Mode:**
     - Select a story from the menu.
     - Listen to the story narration with text that highlights in sync with the audio.
     - Use the mute/unmute, play/pause, and volume controls as needed.
   - **Quiz Mode:**
     - Enter the quiz section and enjoy randomized games.
     - Each game has clues, descriptions, and letter boxes (ABAKADA/Tagalog language).
     - After five incorrect letter guesses, the correct answer will be revealed, followed by a question about the number of syllables in the word.
     - Scores are saved and can be viewed in the **Difficulties** section.

---

## Developer Instructions (For Contributions)
1. **Clone the Repository**
   ```bash
   git clone https://github.com/ejpiamonte/pantigturo.git
   cd pantigturo
   ```

2. **Install Dependencies**
   ```bash
   npm install
   npx expo install typescript 
   npx expo install @types/react
   ```
   If you are new to typescript and you are using Visual Studio Code, typescript files might turn red, go to search bar and type ">TypeScript: Restart TS Server" to restart TypeScript server and it will clear the error.
 
   If you encounter problems please refer to the [latest Expo documentation](https://docs.expo.dev/) for instructions to set up the Expo CLI and install dependencies for a React Native bare workflow project.

3. **Install Expo Go**
   - Download and install the **Expo Go** app from the Google Play Store.

4. **Run the App**
   ```bash
   npx expo start
   ```

5. **Development Notes**
   - The app uses TypeScript for type safety.
   - Story functions include audio-text synchronization, inspired by Spotify's lyric highlighting.
   - Game functions randomize quizzes each time they are accessed and manage persistent score states using SQLite.

---

## Contributor Expectations
- **Find a Bug?**
  - If you find a bug, please create an issue in the repository, providing a detailed description of the problem and steps to reproduce it.

---

## Known Issues
1. After completing all the games in a quiz, the score takes a few seconds to fully register. However, the score will update correctly if the user returns to the **Difficulties** section or clicks the alphabet options slowly.

We welcome feedback and contributions to help improve this educational app!
