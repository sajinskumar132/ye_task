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

### Get all status

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

**POST** `/api/V0/status/create_new_status`

**Request:**

```json
{
  "status_name": "InActive"
}
```

### Get all roles

**GET** `/api/V0/roles/get_all_roles`

**Response:**

```json
[
  {
    "_id": "678fcb0b0b6dd97e6c9f7cd2",
    "role_name": "Admin",
    "role_status": "678fc5ad245b802d74424ff0",
    "createdAt": "2025-01-21T16:27:55.275Z",
    "updatedAt": "2025-01-21T16:27:55.275Z",
    "__v": 0
  },
  {
    "_id": "678fcb6d0e615e021ca73a81",
    "role_name": "Student",
    "role_status": "678fc5ad245b802d74424ff0",
    "createdAt": "2025-01-21T16:29:33.774Z",
    "updatedAt": "2025-01-21T16:29:33.774Z",
    "__v": 0
  }
]
```

### Create new role

**POST** `/api/V0/roles/create_new_role`

**Request:**

```json
{
  "role_name": "Student",
  "role_status_id": "678fc5ad245b802d74424ff0"
}
```

### Get all completion status

**GET** `/api/V0/completion_status/get_all_completion_status`

**Response:**

```json
[
  {
    "_id": "678fe918588e3286b009ee6f",
    "completion_status_name": "Pending",
    "__v": 0
  },
  {
    "_id": "678fe927588e3286b009ee72",
    "completion_status_name": "Overdue",
    "__v": 0
  },
  {
    "_id": "678fe93b588e3286b009ee75",
    "completion_status_name": "Completed",
    "__v": 0
  }
]
```

### Create new completion status

**POST** `/api/V0/completion_status/create_new_completion_status`

**Request:**

```json
{
  "completion_status_name": "Completed"
}
```

### Get all users

**GET** `/api/V0/users/get_all_users`

**Response:**

```json
[
  {
    "_id": "678ffc8bfe1e02fdff64e7f9",
    "user_name": "admin_1",
    "email_id": "admin_1@admin.com",
    "user_role": {
      "_id": "678fcb0b0b6dd97e6c9f7cd2",
      "role_name": "Admin"
    },
    "user_status": {
      "_id": "678fc5ad245b802d74424ff0",
      "status_name": "Active"
    }
  },
  {
    "_id": "678ffc92fe1e02fdff64e7fd",
    "user_name": "student_1",
    "email_id": "student_1@admin.com",
    "user_role": {
      "_id": "678fcb6d0e615e021ca73a81",
      "role_name": "Student"
    },
    "user_status": {
      "_id": "678fc5ad245b802d74424ff0",
      "status_name": "Active"
    }
  }
]
```

### Get all students

**GET** `/api/V0/users/get_all_students`

**Response:**

```json
[
  {
    "_id": "678fe608c124176835573191",
    "user": null,
    "department_name": "Computer_Science",
    "createdAt": "2025-01-21T18:23:04.935Z",
    "updatedAt": "2025-01-21T18:23:04.935Z",
    "__v": 0
  },
  {
    "_id": "678ffc92fe1e02fdff64e7fe",
    "user": {
      "_id": "678ffc92fe1e02fdff64e7fd",
      "user_name": "student_1",
      "email_id": "student_1@admin.com",
      "user_role": "678fcb6d0e615e021ca73a81",
      "user_status": "678fc5ad245b802d74424ff0"
    },
    "department_name": "Computer_Science",
    "createdAt": "2025-01-21T19:59:14.741Z",
    "updatedAt": "2025-01-21T19:59:14.741Z",
    "__v": 0
  }
]
```

### Create new user

**POST** `/api/V0/users/create_new_user`

**Request:**

```json
{
  "user_role": "Admin",
  "user_name": "admin_1",
  "email_id": "admin_1@admin.com",
  "password": "admin@123",
  "user_status": "678fc5ad245b802d74424ff0"
}
```

### User login

**POST** `/api/V0/users/user_login`

**Request:**

```json
{
  "email_id": "admin_1@admin.com",
  "password": "admin@123"
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

Made with ❤️ by [Your Name](https://github.com/sajinskumar132)
