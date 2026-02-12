# Lesson 5 Activity: Student Profile App (React Native + Expo)

## 1. Activity Title
Build a Student Personal Info App with Stack Navigation and FlatList

## 2. Duration
60-90 minutes

## 3. Learning Objectives
By the end of this activity, students should be able to:
1. Create and organize screens in a React Native Expo project.
2. Use `App.js` only as a router with:
   1. `NavigationContainer`
   2. `createStackNavigator`
3. Use `View` and `Text` to display personal information.
4. Use both `const` and `let` variables in a screen.
5. Create and render an array using `FlatList`.
6. Apply custom styles using `StyleSheet`.

## 4. Prerequisites
Students should already know:
1. Basic Expo commands
2. `Text`, `View`, `StyleSheet`
3. `let` and `const`
4. Basic navigation setup
5. Basic `FlatList` usage

## 5. Project Setup
From terminal:

```bash
cd lesson5
npm install
npm run start
```

If project setup is missing, create Expo app first:

```bash
npx create-expo-app lesson5 --template
```

Then install dependencies:

```bash
npx expo install react-native-web react-dom @expo/metro-runtime
npm install @react-navigation/native @react-navigation/stack
npx expo install react-native-screens react-native-safe-area-context
```

## 6. Folder Structure Requirement
Students must use this structure:

```txt
lesson5/
App.js
screens/
MainScreen.js
StudentInfoScreen.js
HobbiesScreen.js
```

## 7. Core Task Requirements

### A) `App.js` Router Only
`App.js` must:
1. Import and configure `NavigationContainer`
2. Create stack with `createStackNavigator`
3. Register 3 screens:
   1. `Main`
   2. `StudentInfo`
   3. `Hobbies`
4. Contain no UI content besides navigation config

### B) `StudentInfoScreen.js`
Create a screen that displays personal student info using `Text` + `View`.

Must include:
1. `const firstName`
2. `const surname`
3. `let fullName` built from first + surname
4. At least 3 additional personal fields, for example:
   1. Birthday
   2. City
   3. Class/Grade

Must render:
1. A title (example: `Student Personal Info`)
2. Labels and values for each field

### C) `HobbiesScreen.js`
Create an array of hobbies and render with `FlatList`.

Must include:
1. A hobbies array with at least 5 items
2. Unique key per item (for example `id`)
3. `FlatList` with:
   1. `data`
   2. `keyExtractor`
   3. `renderItem`

### D) `MainScreen.js`
Create a simple welcome screen with `Text` and `View`.

## 8. Styling Requirement
Students must style by their own design taste:
1. Different font sizes for title vs body text
2. At least 3 different colors in the UI
3. Spacing (`margin`/`padding`) for readable layout
4. Rounded corners or card-like section for info/hobbies

## 9. Functional Checklist (Student Self-Check)
Before submission, students verify:
1. App opens without red errors
2. Navigation header is visible
3. Can open all 3 screens from stack
4. Student info screen shows `let` and `const` driven values
5. Hobbies list renders from array using `FlatList`
6. Styling is applied and readable

## 10. Submission Requirements
Students submit:
1. Full `lesson5` folder
2. Screenshot of:
   1. `Main` screen
   2. `StudentInfo` screen
   3. `Hobbies` screen
3. Short note (3-5 lines) explaining:
   1. Where `let` is used
   2. Where `const` is used
   3. Where `FlatList` is used

## 11. Assessment Rubric (100 points)
1. Navigation setup in `App.js` only: 25 pts
2. Student info screen requirements (`Text`, `View`, `let`, `const`): 25 pts
3. Hobbies array rendered with `FlatList`: 25 pts
4. Styling quality and clean layout: 15 pts
5. Code organization and file structure: 10 pts

## 12. Bonus Challenge (Optional)
1. Add an avatar image in `StudentInfoScreen`
2. Add one more screen (example: `FavoriteSubjects`)
3. Make hobbies list horizontal or add item separators
![alt text](image.png)
![alt text](image-1.png)