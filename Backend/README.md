# Todo App Backend

## API Documentation

### Create a Task

**Endpoint:** `/todo/task`

**Method:** `POST`

**Description:** This endpoint is used to create a new task in the database.

**Validation:**

- `taskName` should be at least 3 characters long.
- `description` should be at least 10 characters long.

**Request Body:**

```json
{
  "taskName": "string (required, minLength: 3)",
  "description": "string (required, minLength: 10)",
  "markAsDone": "boolean (optional, default: false)"
}
```

**Response Body:**

- **201 Created**
  ```json
  {
    "task": {
      "_id": "string",
      "taskName": "string",
      "description": "string",
      "markAsDone": "boolean",
      "__v": 0
    }
  }
  ```
- **400 Bad Request**
  ```json
  {
    "errors": [
      {
        "msg": "string",
        "param": "string",
        "location": "string"
      }
    ]
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

**Example Request:**

```json
{
  "taskName": "Buy groceries",
  "description": "Buy milk, bread, and eggs from the store",
  "markAsDone": false
}
```

**Example Response:**

- **201 Created**
  ```json
  {
    "task": {
      "_id": "60c72b2f9b1e8a001c8e4c8b",
      "taskName": "Buy groceries",
      "description": "Buy milk, bread, and eggs from the store",
      "markAsDone": false,
      "__v": 0
    }
  }
  ```

### Get All Tasks

**Endpoint:** `/todo/task`

**Method:** `GET`

**Description:** This endpoint is used to fetch all tasks from the database.

**Response Body:**

- **200 OK**
  ```json
  {
    "tasks": [
      {
        "_id": "string",
        "taskName": "string",
        "description": "string",
        "markAsDone": "boolean",
        "__v": 0
      }
      // ...more tasks
    ]
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

**Example Response:**

- **200 OK**
  ```json
  {
    "tasks": [
      {
        "_id": "60c72b2f9b1e8a001c8e4c8b",
        "taskName": "Buy groceries",
        "description": "Buy milk, bread, and eggs from the store",
        "markAsDone": false,
        "__v": 0
      },
      {
        "_id": "60c72b2f9b1e8a001c8e4c8c",
        "taskName": "Clean the house",
        "description": "Vacuum and dust all rooms",
        "markAsDone": true,
        "__v": 0
      }
    ]
  }
  ```

### Mark Task as Done

**Endpoint:** `/todo/task/:id`

**Method:** `PUT`

**Description:** This endpoint is used to mark a task as done.

**Response Body:**

- **200 OK**
  ```json
  {
    "task": {
      "_id": "string",
      "taskName": "string",
      "description": "string",
      "markAsDone": "boolean",
      "__v": 0
    }
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

**Example Response:**

- **200 OK**
  ```json
  {
    "task": {
      "_id": "60c72b2f9b1e8a001c8e4c8b",
      "taskName": "Buy groceries",
      "description": "Buy milk, bread, and eggs from the store",
      "markAsDone": true,
      "__v": 0
    }
  }
  ```

### Delete Task

**Endpoint:** `/todo/task/:id`

**Method:** `DELETE`

**Description:** This endpoint is used to delete a task from the database.

**Response Body:**

- **200 OK**
  ```json
  {
    "deletedTask": {
      "_id": "string",
      "taskName": "string",
      "description": "string",
      "markAsDone": "boolean",
      "__v": 0
    }
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

**Example Response:**

- **200 OK**
  ```json
  {
    "deletedTask": {
      "_id": "60c72b2f9b1e8a001c8e4c8b",
      "taskName": "Buy groceries",
      "description": "Buy milk, bread, and eggs from the store",
      "markAsDone": false,
      "__v": 0
    }
  }
  ```
