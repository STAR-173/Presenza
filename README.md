# Attendance Management System (AMS)

## Overview
AMS (Attendance Management System) is a robust and scalable web application designed to streamline attendance tracking, reporting, and management for organizations. Built with TypeScript, Vite, and TailwindCSS on the frontend, and a secure backend, AMS offers a seamless user experience with advanced features like geofencing and integration capabilities.

## Features
- **User Management**: Role-based access control and management of employee/student profiles.
- **Attendance Tracking**: Manual and automated attendance tracking using biometric devices or geofencing.
- **Absence Management**: Request and approve leaves through an integrated portal.
- **Reports and Analytics**: Generate and export attendance reports in various formats.
- **Notifications and Alerts**: Automated notifications for absenteeism and pending leave approvals.
- **Integration and APIs**: RESTful APIs and third-party integration support.
- **Dashboard**: Overview of attendance metrics and alerts.

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/STAR-173/Presenza.git
   ```
2. Navigate to the project directory:
   ```bash
   cd AMS
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   npm install
   ```

### Running the Project
1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```
2. Start the frontend development server:
   ```bash
   cd .. # Go back to the root folder
   npm run dev
   ```
3. Access the application at `http://localhost:3000`.

## API Endpoints

### Authentication Endpoints
- `POST /api/auth/login`
  - **Description**: User login.
  - **Request Body**:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "token": "string",
      "user": "User"
    }
    ```

- `POST /api/auth/logout`
  - **Description**: User logout.
  - **Requires**: Authentication token
  - **Response**: `200 OK`

- `POST /api/auth/refresh`
  - **Description**: Refresh authentication token.
  - **Requires**: Refresh token
  - **Response**:
    ```json
    {
      "token": "string"
    }
    ```

### User Management Endpoints
- `GET /api/users`
  - **Description**: Fetch all users.
  - **Requires**: Admin role
  - **Response**: `User[]`

- `GET /api/users/:id`
  - **Description**: Fetch details of a specific user.
  - **Response**: `User`

- `POST /api/users`
  - **Description**: Create a new user.
  - **Requires**: Admin role
  - **Request Body**: `CreateUserData`
  - **Response**: `User`

- `PUT /api/users/:id`
  - **Description**: Update a user.
  - **Requires**: Admin role or own profile
  - **Request Body**: `UpdateUserData`
  - **Response**: `User`

- `DELETE /api/users/:id`
  - **Description**: Delete a user.
  - **Requires**: Admin role
  - **Response**: `204 No Content`

### Attendance Endpoints
- `GET /api/attendance`
  - **Description**: Retrieve attendance history.
  - **Query Parameters**:
    - `startDate`: string (optional)
    - `endDate`: string (optional)
    - `userId`: string (optional)
  - **Response**: `AttendanceRecord[]`

- `POST /api/attendance/check-in`
  - **Description**: Record check-in.
  - **Request Body**:
    ```json
    {
      "location": "Location"
    }
    ```
  - **Response**: `AttendanceRecord`

- `POST /api/attendance/check-out`
  - **Description**: Record check-out.
  - **Request Body**:
    ```json
    {
      "location": "Location"
    }
    ```
  - **Response**: `AttendanceRecord`

- `GET /api/attendance/stats`
  - **Description**: Retrieve attendance statistics.
  - **Response**: `AttendanceStats`

- `GET /api/attendance/recent`
  - **Description**: Retrieve recent attendance activity.
  - **Response**: `AttendanceRecord[]`

### Report Endpoints
- `GET /api/reports`
  - **Description**: Retrieve list of reports.
  - **Query Parameters**:
    - `type`: string (optional)
    - `department`: string (optional)
    - `startDate`: string (optional)
    - `endDate`: string (optional)
  - **Response**: `Report[]`

- `POST /api/reports/generate`
  - **Description**: Generate a new report.
  - **Request Body**: `ReportParams`
  - **Response**: `Report`

- `GET /api/reports/export`
  - **Description**: Export a report.
  - **Query Parameters**:
    - `reportId`: string
    - `format`: string (PDF/CSV/Excel)
  - **Response**: Binary file

## License
This project is licensed under the GPL-3.0 License. See the `LICENSE` file for details.