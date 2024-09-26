# TO-DO LIST APP

A simple To-Do List application that allows users to add, delete, and mark tasks as completed. This app is built using React for the frontend and Node.js with MongoDB for the backend.

## Features

- **Task Creation**: Users can add tasks with a name and description.
- **Task Deletion**: Users can delete tasks.
- **Task Completion**: Users can mark tasks as completed or uncompleted.
- **Task Listing**: All tasks are displayed in a list, showing their name, description, and status.

## Technologies

- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/anilmc02/todo-list-app.git
    ```

2. **Install Backend Dependencies**

    Navigate to the backend directory and install the dependencies:

    ```bash
    cd backend
    yarn install
    ```

3. **Install Frontend Dependencies**

    Navigate to the frontend directory and install the dependencies:

    ```bash
    cd frontend
    yarn install
    ```

4. **Configure Environment Variables**

    Create a `.env` file in the backend directory with the following content:

    ```
    MONGO_URI=your_mongodb_connection_string
    ```

    Replace `your_mongodb_connection_string` with your MongoDB connection string.

5. **Run the Application**

    Start the backend server:

    ```bash
    cd backend
    yarn start
    ```

    Start the frontend development server:

    ```bash
    cd frontend
    yarn start
    ```

6. **Access the Application**

    Open your browser and navigate to `http://localhost:3000` to use the application.

## API Endpoints

- **GET /tasks**: Retrieve all tasks
- **POST /tasks**: Create a new task
- **DELETE /tasks/:id**: Delete a task by ID
- **PATCH /tasks/:id**: Update task completion status by ID

## Contributing

1. **Fork the repository**
2. **Create a feature branch**
3. **Commit your changes**
4. **Push to the branch**
5. **Create a new Pull Request**

## Contact

If you have any questions, feel free to reach out to **[anilmc002@gmail.com](mailto:anilmc002@gmail.com)**.
