# Number System API

A RESTful API that provides character mappings based on date and time values. The API maps specific days of the year and times of day to characters from a predefined set, making it useful for applications that need consistent character associations with temporal data.

## Features

- **GET Endpoint**: Retrieve characters based on the current date and time
- **POST Endpoint**: Retrieve characters based on a specific date and time
- **Time Format Support**: Accepts both 24-hour format (HH:MM) and 12-hour format (HH:MM AM/PM)
- **Input Validation**: Comprehensive validation for all input parameters
- **Error Handling**: Clear error messages with guidance on valid input formats

## Installation

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Number-System
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the API

### Development Mode

Start the server on the default port (3000):

```bash
npm start
```

The API will be available at: `http://localhost:3000`

### Testing

Run the test suite to verify functionality:

```bash
npm test
```

## API Documentation

### Root Endpoint

- **URL**: `/`
- **Method**: `GET`
- **Description**: Returns basic information about the API and available endpoints
- **Response Example**:
  ```json
  {
    "name": "Number System API",
    "description": "API for retrieving day and time characters based on the current date and time",
    "endpoints": [
      {
        "path": "/getCharacters",
        "method": "GET",
        "description": "Get characters based on current day and time"
      },
      {
        "path": "/getCharactersByDate",
        "method": "POST",
        "description": "Get characters based on provided date and time",
        "body": {
          "date": "MM-DD (e.g., 04-15)",
          "time": "HH:MM (24-hour format) or HH:MM AM/PM (12-hour format)"
        }
      }
    ]
  }
  ```

### Get Characters (Current Date/Time)

- **URL**: `/getCharacters`
- **Method**: `GET`
- **Description**: Returns characters based on the current date and time
- **Response Example**:
  ```json
  {
    "currentDate": "4-4",
    "currentTime": "4:04 PM",
    "dayCharacter": {
      "peg": "94",
      "character": "Hector Projector",
      "note": "Character based on day of year"
    },
    "timeCharacter": {
      "peg": "44",
      "character": "Droopy",
      "time": "4:00 pm",
      "note": "Character based on time of day"
    },
    "computedTime": "4:00 pm"
  }
  ```

### Get Characters by Date

- **URL**: `/getCharactersByDate`
- **Method**: `POST`
- **Description**: Returns characters based on a provided date and time
- **Request Body**:
  ```json
  {
    "date": "MM-DD",
    "time": "HH:MM" or "HH:MM AM/PM"
  }
  ```
- **Example Request**:
  ```json
  {
    "date": "03-17",
    "time": "4:21 PM"
  }
  ```
- **Response Example**:
  ```json
  {
    "inputDate": "3-17",
    "inputTime": "4:21 PM",
    "dayCharacter": {
      "peg": "75",
      "character": "Glenn Einlanzer",
      "note": "Character based on day of year"
    },
    "timeCharacter": {
      "peg": "45",
      "character": "Duke Ellington",
      "time": "4:15 pm",
      "note": "Character based on time of day"
    },
    "computedTime": "4:15 pm"
  }
  ```

## Usage Examples

### Using curl

#### GET Request (Current Date/Time)

```bash
curl -s http://localhost:3000/getCharacters | jq
```

#### POST Request (Specific Date/Time)

Using 24-hour format:
```bash
curl -s -X POST http://localhost:3000/getCharactersByDate \
  -H "Content-Type: application/json" \
  -d '{"date": "04-15", "time": "14:30"}' | jq
```

Using 12-hour format:
```bash
curl -s -X POST http://localhost:3000/getCharactersByDate \
  -H "Content-Type: application/json" \
  -d '{"date": "04-15", "time": "2:30 PM"}' | jq
```

### Using JavaScript (Fetch API)

```javascript
// GET request
fetch('http://localhost:3000/getCharacters')
  .then(response => response.json())
  .then(data => console.log(data));

// POST request
fetch('http://localhost:3000/getCharactersByDate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    date: '04-15',
    time: '2:30 PM'
  }),
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- **400 Bad Request**: When input parameters are missing or invalid
- **500 Internal Server Error**: When an unexpected error occurs

Example error response:
```json
{
  "error": "Invalid time format",
  "required": {
    "time": "HH:MM AM/PM"
  }
}
```

## License

[MIT](LICENSE)

## Change Log

For a detailed history of changes, see the [LOG.md](LOG.md) file.