# Student Management System

Build a basic student management system API using ExpressJS. The system should have the following features:

## Features

- Need endpoints for both Admin panel and student interface.
- Admin Panel:
  - Admin should be able to log.
  - Allow the admin to add students with their name, email ID, department, and password.
  - The admin should also be able to assign tasks to students with a due time.
- Student Interface:
  - Students should be able to log in and see the tasks assigned to them.
  - They should be able to see the status of each task (pending, overdue, completed).
- Additional details:
  - The admin panel should be accessible only by the admin.
  - Students should be able to log in using their email ID and password.
  - Set predefined credential for admin ( email : admin@admin.com, Password : admin ).
  - Admin should be able to log in using their email ID and password.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js]
- [npm]
- [express]
- [nodemon]
- [ts-node]
- [typescript]
- [mongoose]
- [jsonwebtoken]
- [dotenv]
- [bcryptjs]

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sajinskumar132/ye_task.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. The server will run on `http://localhost:5000` by default. You can configure the port in the `.env` file.

## API Endpoints

### Create all status

**GET** `/api/V0/status/get_all_status`

**Response:**

```json
[
  {
    "_id": "678fc5ad245b802d74424ff0",
    "status_name": "Active",
    "__v": 0
  }
]
```

### Create new status

**GET** `/api/V0/status/create_new_status`

**Response:**

```json
{
    "status_name":"InActive"
}
```




## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

Made with ❤️ by [Your Name](https://github.com/sajinskumar132)
