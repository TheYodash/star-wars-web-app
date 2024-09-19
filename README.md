# The Known Universe Explorer

## Project Description
**The Known Universe Explorer** is a React application that fetches data from the [Star Wars API (SWAPI)](https://swapi.dev/), allowing users to explore characters, episodes, and spaceships from the Star Wars universe. With a simple and intuitive interface, users can navigate through the Star Wars lore, discovering key information about their favorite entities. The app is built React and provides a responsive user experience.

## Project Functionality
- Fetches data from the SWAPI to display characters, episodes, and spaceships.
- A responsive and dynamic navigation bar allows users to switch between characters, episodes, and spaceships.
- Displays detailed information about each entity when selected.
- Handles API calls asynchronously and ensures smooth data loading.
- Utilizes React components and state management for dynamic updates.

## Features
- **Dynamic Navigation Bar**: A navigation bar with links to "Characters," "Episodes," and "Spaceships."
- **Detailed Views**: Displays lists and detailed information about selected characters, episodes, or spaceships.
- **Asynchronous Data Fetching**: Fetches data in real-time from the SWAPI and renders it on the page.
- **Responsive Design**: The app is fully responsive and works across different screen sizes and devices.

## To-do List

### I. Must have:
- [x] The app needs to have multiple pages and use client-side routing
- [x] The app should make use of the Context API or use custom hooks;
- [x] Build the navigation bar to link to "Characters," "Episodes," and "Spaceships."
- [x] Fetch data from the Star Wars API for each section.
- [x] Build a page to show information about characters, planets, and starships
- [ ] Display the data fetched in a clean and organized format.
- [ ] Implement error handling for API requests.

### II. Should have:
- [ ] Add pagination for characters, episodes, and spaceships if the data exceeds the page limit.
- [ ] Implement search functionality to filter characters, episodes, or spaceships by name.
- [ ] Show loading states while fetching data.
  
### III. Could have:
- [ ] Add filters to refine searches (e.g., filtering characters by species or starships by model).
- [ ] Include images for characters, episodes, and spaceships.
- [ ] Add a favorite list feature allowing users to save and revisit their favorite characters or spaceships.
- [ ] Integrate Redux or another state management library for better scalability.
