# hook-em-hardware-fe

Here’s a README file for the front end of your project, Hook Em Hardware:
Welcome to the Hook Em Hardware project! This is the frontend repository for our hardware management system. The website allows users to create accounts, join multiple projects, and manage hardware checkouts and check-ins seamlessly.
Hook'em Hardware is one stop hardware shop
Here is our Project Plan: https://docs.google.com/document/d/1kmE1pjdTlKd4LvHaeC_ubv213oRRwGWsRQKqEAKpi_s/edit?usp=sharing
Find User Documentation here: https://drive.google.com/file/d/1SvA5CnPhXRHWgCIUXwUALterL3YU1Ayo/view?usp=sharing

Project Overview:
Hook Em Hardware is a web application designed to streamline the management of hardware resources. Users can create accounts, manage projects, and track the checkout and check-in of hardware within those projects. The system supports multiple projects, allowing users to collaborate and manage resources efficiently.

Features:
User Authentication: Create an account and securely log in to access the system.
Project Management: Create, join, and manage multiple projects.
Hardware Management: Check out and check in hardware for specific projects.
Responsive Design: Access the application seamlessly across devices.

Code Structure:
The frontend of Hook Em Hardware is built using React and is organized into various components and routes to facilitate a clean and modular codebase.

URL Routes and Components:
Total Components: 7 React components.
Total URLs: 6 different URLs to handle various user interactions.
URL Structure:
/ - Home Component: The landing page of the application.
/login - Login Component: Handles user authentication.
/register - Register Component: Allows new users to create an account.
/CreateNewProjects - Allows users to create projects
/hardware - Hardware Component: Manages the hardware check-in and check-out process.
/SelectExistingProject: Projects Component: Displays a list of projects the user is involved in.

Flow of the Code:
User Interaction: Users navigate through the application using the different URLs. Each URL corresponds to a specific React component.
Component Rendering: Based on the route, the appropriate React component is rendered, handling the UI and user input.
State Management: The application uses React’s state management to track user interactions, such as logging in, selecting a project, or managing hardware.
API Calls: The frontend communicates with the backend via API calls, allowing data to be retrieved or sent based on user actions. For example, when a user logs in, an API call is made to verify their credentials, and upon success, the user is redirected to the Projects page.

Connection to Backend:
The frontend connects to the backend using RESTful API calls. Here’s how the connection is established:
API Endpoints: The backend provides several endpoints that the frontend interacts with. These include endpoints for user authentication, project management, and hardware management.
HTTP Methods: The application uses standard HTTP methods to communicate with the backend:

GET to retrieve data (e.g., fetching the list of projects).
POST to send data (e.g., user registration or hardware checkout).

Getting Started:
To get started with the frontend of Hook Em Hardware, follow these instructions.

Prerequisites:
Ensure you have the following installed on your local machine:

Node.js (v14.x or later)
npm (v6.x or later)

Installation:
Clone the repository:
git clone https://github.com/yourusername/hook-em-hardware-frontend.git
Navigate to the project directory:
cd hook-em-hardware-frontend

Install the dependencies:
npm install

Running the Project:
To build and run the project locally:
Build the project:

npm run build
Start the development server:

npm start
Open your browser and navigate to http://localhost:3000 to view the application.

Technologies Used:
React: JavaScript library for building user interfaces.
CSS: Styling for the application.
npm: Package manager for managing dependencies.

Contributing:
We welcome contributions to the project. Please fork the repository and submit a pull request with your proposed changes.

Fork the repository.
Create a new branch: git checkout -b my-new-feature.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin my-new-feature.
Submit a pull request.

Contributors:
Karen Yin, Shraddha, Gowri Vasista, Alison Quan, Darren Ding, Jess Yang

