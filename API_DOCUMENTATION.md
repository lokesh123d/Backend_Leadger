# API Documentation for Frontend Developers

## Base URL
```
/api/auth
```

---

## 1. Register User

- **Endpoint:** `/register`
- **Method:** POST
- **Description:** Register a new user with email, password, and userName.

### Request Body (JSON)
```
{
  "email": "user@example.com",
  "password": "yourpassword",
  "userName": "yourname"
}
```

### Success Response
- **Status:** 201 Created
- **Body:**
```
{
  "message": "User Created Successfully",
  "user": {
    "_id": "<userId>",
    "email": "user@example.com",
    "userName": "yourname"
  },
  "token": "<jwt_token>"
}
```
- **Cookies:**
  - `token`: JWT token (set in response cookies)

### Error Responses
- **Status:** 422 Unprocessable Entity
- **Body:**
```
{
  "message": "with this email user already register",
  "status": "failed"
}
```

---

## 2. Login User

- **Endpoint:** `/login`
- **Method:** POST
- **Description:** Login with email and password.

### Request Body (JSON)
```
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

### Success Response
- **Status:** 200 OK
- **Body:**
```
{
  "message": "User Login Successfully",
  "user": {
    "_id": "<userId>",
    "email": "user@example.com",
    "userName": "yourname"
  },
  "token": "<jwt_token>"
}
```
- **Cookies:**
  - `token`: JWT token (set in response cookies)

### Error Responses
- **Status:** 401 Unauthorized
- **Body:**
```
{
  "message": "email or password is invalid"
}
```

---

## Notes
- All endpoints expect and return JSON.
- JWT token is also set as a cookie named `token` on successful login/register.
- Password must be at least 6 characters.
- Email must be unique and valid.
