# Todo App Backend

## API Documentation

**Description:** This endpoint is used to create a new task in the database.

### Create a Task

**Endpoint:** `/todo/task`

**Method:** `POST`

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
