# The Known Universe Explorer

## Project Description
**The Known Universe Explorer** is a React application that fetches data from the [Star Wars API ](https://akabab.github.io/starwars-api/), allowing users to explore characters from the Star Wars universe. With a simple and intuitive interface, users can navigate through the Star Wars lore, discovering key information about their favorite entities. The app is built React and provides a responsive user experience.

## Project Functionality
- Fetches data from the API to display characters.
- A responsive and dynamic navigation bar allows users to switch between characters and home.
- Displays detailed information about each entity when selected.
- Handles API calls asynchronously and ensures smooth data loading.
- Utilizes React components and state management for dynamic updates.

## Features
- **Dynamic Navigation Bar**: A navigation bar with links to "Characters" and "Home".
- **Detailed Views**: Displays lists and detailed information about selected characters.
- **Asynchronous Data Fetching**: Fetches data in real-time from the API and renders it on the page.
- **Responsive Design**: The app is fully responsive and works across different screen sizes and devices.

## To-do List

### I. Must have:
- [x] The app needs to have multiple pages and use client-side routing
- [x] The app should make use of the Context API or use custom hooks;
- [x] Build the navigation bar to link to "Characters," "Episodes," and "Spaceships."
- [x] Fetch data from the Star Wars API for each section.
- [x] Build a page to show information about characters, planets, and starships
- [x] Display the data fetched in a clean and organized format.
- [x] Implement error handling for API requests.
- [x] Add pagination for characters if the data exceeds the page limit.
- [x] Show loading states while fetching data.

### II. Should have:
- [ ] Implement search functionality to filter characters.

  
### III. Could have:
- [ ] Add filters to refine searches (e.g., filtering characters by species).
- [x] Include images for characters, episodes, and spaceships.
- [ ] Add a favorite list feature allowing users to save and revisit their favorite characters or spaceships.

## Styling Guide

This application will have:

- Homepage that contains information about the application

- Card view to show elements of characters, starships and planets each element will lead to a page that contains information.

### 1. **Color Scheme**
- Star Wars-themed color palette:
    - **Primary Colors**: Black (`#000000`), Yellow (`#FFD700`), White (`#FFFFFF`).
    - **Secondary Colors**: Dark Gray (`#2F2F2F`), Light Gray (`#E5E5E5`).

### 2. **Font Guidelines**
- Use **Sans-serif fonts** for clean and modern text rendering.
    - Suggested font: `Roboto` or `Arial`.
    - Set a default base font size of `1rem` for readability.
  
### 3. **Layout**
- Use of **Flex** and **Grid** in the layout
### 4. **Component Reusability**
- Break down UI elements into smaller, reusable components.
- Ensure all components are modular and styled with CSS modules to avoid style conflicts.

### 5. **Icons**
- Use simple and clean icons to represent key features.

