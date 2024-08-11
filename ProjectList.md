# React Machine Coding Round and Features

### Table of Contents

1. 📜 **Accordion**
2. 🎨 **Random Color Generator**
3. 🌐 **Navigation Bar**
4. 🌗 **Light Mode and Dark Mode**
5. 📝 **Todo App**
6. 🎠 **Carousel**
7. 🖼️ **Image Slider**
8. 📄 **Pagination**
9. ❓ **Quiz Application**
10. ✖️⭕ **Tic Tac Toe**
11. 📊 **Scroll Indicator**
12. 🔢 **Counter**
13. ⏳ **Countdown App**
14. 🔐 **Login and Registration Form with Validation**
15. 🌍 **Multi-Page Application with React Router DOM**
16. 👤 **User Profile Management System with Redux Toolkit**
17. 🪟 **Modal Popup**
18. 🔍 **Autocomplete**
19. 🔎 **Search**
20. 🔄 **Infinite Scrolling**
21. 💬 **Random Quote Generator**

---
### 1. Accordion

- **Single-Selection Accordion:** Create an accordion component where only one section can be expanded at a time. Each section should have a toggle mechanism that collapses any previously expanded section when a new section is opened.
- **Multi-Selection Accordion:** Create an accordion component where multiple sections can be expanded simultaneously. Each section should have an independent toggle mechanism that allows multiple sections to be open at once.

### 2. Random Color Generator

_Create a Random Color Generator component with specific functionalities for generating and displaying color codes._

**Default Behavior:**

- **Generate Random Color Button:** When the "Generate Random Color" button is clicked, the component should generate a random color and display both the RGB and hex color codes simultaneously. This is the default behavior when no specific color code option is selected.

**RGB Color Code Display:**

- **RGB Color Button:** When the "RGB Color" button is clicked, the component should generate a random color and display only the RGB color code. The hex color code should not be displayed when this button is selected.

**Hex Color Code Display:**

- **Hex Code Button:** When the "Hex Code" button is clicked, the component should generate a random color and display only the hex color code. The RGB color code should not be displayed when this button is selected.

**Requirements:**

- The component should have three distinct buttons: "Generate Random Color", "RGB Color", and "Hex Code".
- Ensure that clicking on any of the specific buttons (RGB or Hex) will override the default behavior of displaying both codes.
- The component should correctly handle cases where no specific button is clicked and only the "Generate Random Color" button is used.

### 3. Navigation Bar

**Responsiveness:**

- **Desktop View:** Implement a navigation bar that is fully visible and properly styled for larger screens (e.g., desktops and tablets). Ensure it includes links or menu items that users can easily navigate to different sections of the site.
- **Mobile View:** Adapt the navigation bar for smaller screens (e.g., smartphones) by collapsing it into a compact format that can be expanded or toggled.

**Sidebar and Toggle Functionality:**

- **Sidebar Menu:** When the navigation bar is viewed on smaller devices, convert it into a sidebar that can slide in and out from the side of the screen. This sidebar should contain the same navigation links or menu items available in the desktop view.
- **Toggle Button:** Include a toggle button (e.g., a hamburger menu icon) that allows users to open and close the sidebar. Ensure that this button is visible and accessible on smaller screens, and that it triggers the sidebar to slide in or out smoothly.

**Requirements:**

- The navigation bar should be styled to fit the overall design of the site, with clear and accessible links or menu items.
- The sidebar should function seamlessly, appearing and disappearing based on user interaction with the toggle button.

### 4. Light Mode and Dark Mode

_Implement a light mode and dark mode feature for the application that allows users to switch between these modes._
**Toggle Between Modes:**

- **Light Mode and Dark Mode:** Implement functionality to switch between light mode and dark mode for the application. Light mode should have a bright and clear color scheme, while dark mode should have a dark, low-light color scheme to reduce eye strain in low-light environments.
- **Toggle Switch:** Provide a user interface element, such as a switch or button, to toggle between light mode and dark mode. This switch should be easily accessible and clearly labeled.

**Using Context API:**

- **Context Setup:** Create a React Context to manage and provide the current theme (light or dark) throughout the application. Use a Context Provider to wrap the main application component and manage the theme state.
- **Context Consumer:** Implement a way for components to consume the theme context and apply the appropriate styles based on the current theme. Ensure that all parts of the application are responsive to theme changes.
- **Persistent Theme:** Optionally, store the user's theme preference in local storage or a similar mechanism to persist the chosen theme across sessions.

### 5. Todo App - Instructions

_Develop a Todo application that allows users to add, edit, and delete tasks, using both React state management and Redux Toolkit._

**_Basic Functionality:_**

- **Add Tasks:** Implement an input field where users can enter new tasks. Once a task is added, it should be displayed in the task list.
- **Edit Tasks:** Allow users to edit existing tasks, either inline or via a separate form. Ensure the edited task updates in the task list.
- **Delete Tasks:** Provide a way to delete tasks, such as a delete button next to each task. When clicked, the task should be removed from the list.

**_React State Management (Local State):_**

- **State Handling:** Use React’s `useState` to manage the list of tasks within a component. Maintain an array of tasks in the local state, with functions to add, edit, and delete tasks.
- **Component Structure:** Organize the application into parent and child components. The parent component will hold the task state and pass down necessary data and functions via props to child components responsible for rendering, editing, and deleting tasks.
- **State Updates:** Implement functions within the parent component to handle state updates (e.g., adding a new task, updating an existing task, or removing a task), and pass these functions as props to relevant child components.

**_Redux Toolkit:_**

- **Redux Store Setup:** Create a Redux store using Redux Toolkit. Define a `slice` for tasks, including actions (`addTask`, `editTask`, `deleteTask`) and reducers to handle these actions.
- **Dispatching Actions:** Use `useDispatch` to dispatch actions from your components. Each action should update the state in the Redux store.
- **Selecting State:** Use `useSelector` to retrieve the current list of tasks from the Redux store. This state should be used to render the task list in the UI.
- **Component Integration:** Replace local state management with Redux Toolkit in the application. Ensure all task operations (add, edit, delete) interact with the Redux store instead of local state.

**_Requirements:_**

- The app should correctly add, edit, and delete tasks, with real-time updates to the UI.
- The application should demonstrate clear differences in handling state locally within a component and globally using Redux Toolkit.
- Both implementations (React state and Redux Toolkit) should offer a smooth user experience with instant feedback on task operations.

### 6. Carousel

_Create a carousel component that displays a series of items or images, allowing users to slide through them._

1. **Carousel Structure:**

   - **Layout:** Set up a container that holds multiple items or images. Arrange them horizontally with the ability to scroll or slide through them.
   - **Navigation Controls:** Implement "Previous" and "Next" buttons to navigate through the items. The buttons should update the view to show the previous or next set of items/images.
   - **Indicators:** Optionally, add indicators (e.g., dots or thumbnails) at the bottom of the carousel to represent each item. Clicking on an indicator should navigate directly to the corresponding item.

2. **Responsive Design:**
   - **Adaptability:** Ensure the carousel is responsive, adapting to different screen sizes. On smaller screens, reduce the number of visible items and adjust the navigation controls accordingly.
   - **Touch Support:** For mobile devices, implement touch support so users can swipe left or right to navigate through the items.

---

### 7. Image Slider

_Develop an image slider that allows users to navigate through a set of images using "Next" and "Previous" buttons._

**Image Display:**

- **Layout:** Create a container that displays one image at a time, with the next and previous images hidden off-screen. The displayed image should be centered within the container.
- **Navigation Buttons:** Implement "Previous" and "Next" buttons on either side of the image. Clicking these buttons should slide the current image out and the next/previous image into view.

**Image Transition:**

- **Animation:** Ensure smooth sliding animations between images. The transition should be quick but smooth, enhancing the user experience.
- **Looping:** Implement looping functionality so that navigating past the last image brings the user back to the first image, and vice versa.

**Responsive Design:**

- **Adaptation:** Make sure the image slider is responsive, resizing the images and buttons appropriately for different screen sizes.
- **Accessibility:** Ensure that the slider is accessible via keyboard (e.g., using arrow keys) and provides clear alt text for screen readers.

### 8. Pagination

_Implement a pagination component that allows users to navigate through multiple pages of content._

- **Page Numbers:** Display page numbers at the bottom of the content. Users should be able to click on a page number to navigate directly to that page's content.
- **Next/Previous Buttons:** Implement "Next" and "Previous" buttons to move between pages sequentially. Ensure that these buttons are disabled when on the first or last page, respectively.

**Content Display:**

- **Dynamic Loading:** Load and display content based on the current page number. Only the content for the selected page should be visible, with others hidden or unloaded.
- **Items per Page:** Allow a customizable number of items per page. For example, if there are 50 items and 10 items per page, the pagination should reflect 5 pages.

**Responsive Design:**

- **Scalability:** Ensure the pagination component works well on different screen sizes, adapting the layout and size of page numbers as necessary.
- **Keyboard Navigation:** Make sure the pagination controls are accessible via keyboard, with focus states that clearly indicate the currently selected page.

### 9. Quiz Application

_A quiz application that presents multiple-choice questions to users and calculates their score based on correct answers._

**Question Display:** Implement the ability to display one question at a time with multiple-choice options. Ensure that users can select only one answer per question.
**Scoring System:** Track the user's answers, compare them against the correct answers, and calculate the score at the end of the quiz.
**Result Display:** Display the user's score and optionally provide feedback on correct and incorrect answers. Consider adding a restart quiz option.

### 10. Tic Tac Toe

_A simple tic-tac-toe game where two players can compete against each other._

**Game Board:** Create a 3x3 grid where players can click to place their respective markers (X or O). Alternate turns between the two players.
**Win Detection:** Implement logic to check for winning conditions (three in a row horizontally, vertically, or diagonally) and declare a winner or a draw.
**Restart Game:** Provide functionality to reset the game board and start a new match after the game ends.

### 11. Scroll Indicator

_A scroll indicator that visually represents the user's scroll position on the page._

**Scroll Detection:** Implement a way to detect the user's scroll position relative to the total page height or content height.
**Indicator Bar:** Display a progress bar at the top of the page that fills up as the user scrolls down. The bar should dynamically adjust as the user scrolls up or down.
**Responsiveness:** Ensure the scroll indicator works smoothly across different devices and screen sizes, adapting to various content heights and scroll behaviors.

### 12. Counter

_A basic counter component that allows users to increment and decrement a count._

**Counter Display:** Implement a display to show the current count value. The initial count should start at zero or a specified default value.
**Increment/Decrement Buttons:** Add buttons for incrementing and decrementing the count. Each click should update the display with the new count value.
**Boundaries and Reset:** Optionally, implement boundaries to prevent the count from going below zero or above a maximum value. Also, provide a reset button to set the count back to the initial value.

### 13. Countdown App

_A countdown timer that tracks the time remaining until a specified date._

**Timer Setup:** Allow users to set a target date and time for the countdown. The timer should start automatically once the target is set.
**Time Display:** Continuously update and display the remaining time in a format that includes days, hours, minutes, and seconds. The display should dynamically adjust as the time decreases.
**Completion Handling:** When the countdown reaches zero, trigger an event or notification (e.g., an alert or message) indicating that the time is up. Optionally, provide a way to restart or set a new countdown.

### 14. Login and Registration Form with Validation

_Create a reusable form component with client-side validation, and implement it for both login and registration forms._

**Reusable Form Component:**

- Create a general form component that can accept different field configurations as props.
- Implement client-side validation rules, such as required fields, email format, and password strength.
- Display error messages dynamically based on the validation rules.

**Login Form Implementation:**

- Use the reusable form component to create a login form.
- Fields: Email/Username, Password.
- Validation: Ensure that both fields are filled out and that the password meets any required criteria.
- Handle form submission, showing feedback to the user if the login is successful or if there are errors.

**Registration Form Implementation:**

- Use the reusable form component to create a registration form.
- Fields: Username, Email, Password, Confirm Password.
- Validation: Validate each field for correct input, ensuring that passwords match, email is valid, and the username meets any specific requirements.
- Handle form submission, showing feedback to the user if the registration is successful or if there are errors.

### 15. Implement a Multi-Page Application with React Router DOM

_Set up a basic multi-page application using React Router DOM, allowing users to navigate between different views or pages in the application._

**Install and Set Up React Router DOM:**

- Install React Router DOM in your React project using `npm install react-router-dom`.
- Create a `BrowserRouter` at the root of your application to enable routing.

**Define Routes:**

- Set up a basic routing structure with multiple routes, such as:
  - `/`: Home page.
  - `/about`: About page.
  - `/contact`: Contact page.
  - `/dashboard`: Dashboard page (only accessible after login).
- Each route should render a different component, which serves as a different page in your application.

**Create Navigation Links:**

- Implement a navigation bar with links to each of the pages (`Home`, `About`, `Contact`, `Dashboard`).
- Use the `Link` or `NavLink` components from React Router DOM to navigate between pages without refreshing the browser.

**Implement Route-Specific Components:**

- Create separate React components for each page (e.g., `Home`, `About`, `Contact`, `Dashboard`).
- Render these components based on the current URL path using the `Route` component from React Router DOM.

**Add Conditional Rendering:**

- Implement conditional rendering for routes that require authentication, such as the `Dashboard` page.
- Use the `Redirect` component to navigate users to the login page if they try to access protected routes without being authenticated.

**Handle 404 Pages:**

- Add a `Route` with the path `*` to catch all undefined routes and display a "404 Not Found" page.

### 16. Building a User Profile Management System with Redux Toolkit

_Create a user profile management system where users can view and update their profile information. The state management is handled using Redux Toolkit._

**Setup Redux Toolkit:**

- **Install Dependencies:**
  npm install @reduxjs/toolkit react-redux
- **Create a Redux Store:** - Define a `store` using `configureStore` from Redux Toolkit. - Create a `profileSlice` using `createSlice` to manage the user profile state. - Export the `store` and integrate it with your React application using `Provider`.
  **Define Redux State and Actions:**

- **Create a Profile Slice:**
  - Define the initial state for the user profile, including properties like `name`, `email`, and `age`.
  - Create reducers for updating the profile information.
  - Generate actions and selectors using `createSlice`.
- **Implement Selectors and Dispatchers:**
  - Use `useSelector` to read the profile information from the store.
  - Use `useDispatch` to dispatch actions for updating the profile.

**Create Profile Management Components:**

- **Profile Display Component:**
  - Create a component to display the current user profile information.
  - Use `useSelector` to fetch and display the profile data from the Redux store.
- **Profile Edit Component:**
  - Create a form for updating the user profile.
  - Include input fields for `name`, `email`, and `age`.
  - Use `useDispatch` to dispatch an action to update the profile when the form is submitted.

**Implement Routing (Optional):**

- **Setup Routing:**
  - Use `react-router-dom` if routing is needed to navigate between different parts of the application.
  - Define routes for viewing and editing the profile.

**Integrate with UI:**

- **Profile Page:**
  - Integrate the Profile Display and Profile Edit components into a single profile page.
  - Add functionality to switch between viewing and editing modes.

**Outcome:**

- Users can view and update their profile information.
- State management for the user profile is handled by Redux Toolkit, allowing for centralized management of the profile state.
- The application provides a clear interface for users to interact with their profile information.

### 17. Modal Popup

_Create a modal popup that displays customizable content and includes functionality to show and hide the modal._

**Steps:**
**Create a Modal Component:**

- Implement a component to render the modal overlay and content.
- Add functionality to show and hide the modal based on state.
- Include a close button to hide the modal.
  **Customizable Content:**

- Allow the modal to accept children or content as props for customization.
- Ensure the content is displayed within the modal window.
  **Triggering Modal:**
- Create a button or action that triggers the modal to open.
- Manage the modal's open/close state using React state.

### 18. Autocomplete

_Implement an input field with autocomplete functionality to suggest options based on user input._

**Create an Autocomplete Component:**

- Implement an input field that displays suggestions as the user types.
- Use state to manage the list of suggestions and the current input value.

**Fetch Suggestions:**

- Integrate a method to fetch or generate suggestions based on the user input.
- Filter and display matching suggestions below the input field.

**Handle Selection:**

- Allow users to select a suggestion from the list.
- Update the input field with the selected suggestion.

### 19. Search

_Create a search component that filters and displays results based on user queries._

**Create a Search Component:**

- Implement an input field for the search query and a button to trigger the search.
- Use state to manage the search query and filtered results.

**Filter Results:**

- Create a method to filter the data based on the search query.
- Display the filtered results dynamically as the user types or submits the search.

**Display Results:**

- Render the search results below the input field.
- Handle cases where no results are found.

### 20. Infinite Scrolling

_Implement a component that loads and displays more content as the user scrolls down the page._

**Create an Infinite Scrolling Component:**

- Implement a component that fetches and displays a list of items.
- Use an event listener to detect when the user scrolls near the bottom of the page.

**Load More Content:**

- Fetch additional content when the user scrolls close to the bottom.
- Append the new content to the existing list.

**Handle Loading States:**

- Show a loading indicator while new content is being fetched.
- Handle cases where no more content is available to load.

### 21. Random Quote Generator

_Develop a component that generates and displays random quotes on the screen._

**Create a Quote Generator Component:**

- Implement a button to generate a new random quote.
- Use state to manage and display the current quote.

**Fetch Quotes:**

- Integrate a method to fetch or generate random quotes.
- Display the fetched quote when the button is clicked.

**Display and Refresh Quotes:**

- Render the current quote on the screen.
- Allow users to refresh the quote by clicking the button.
