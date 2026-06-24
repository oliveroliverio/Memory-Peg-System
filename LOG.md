# Number System API Change Log

## 2025-04-03: Added AM/PM Time Format Support

### Changes:
- Enhanced the POST endpoint `/getCharactersByDate` to accept both 24-hour and 12-hour (AM/PM) time formats
- Added comprehensive time format validation and parsing
- Updated the API documentation to reflect the new time format options
- Improved error messages to provide clearer guidance on valid input formats

### Files Changed:
- `server.js`: 
  - Modified the POST endpoint to handle AM/PM time formats
  - Enhanced input validation for different time formats
  - Updated root endpoint documentation

### Reason for Changes:
This enhancement makes the API more user-friendly by supporting the familiar 12-hour time format (with AM/PM) in addition to the 24-hour format. Users can now submit times in either format based on their preference, making the API more accessible to a wider audience.

## 2025-04-03: Added POST Endpoint for Date-Time Character Lookup

### Changes:
- Added a new POST endpoint `/getCharactersByDate` that accepts a specific date and time
- Added JSON body parsing middleware to support POST requests
- Implemented input validation for date and time parameters
- Updated the root endpoint documentation to include the new endpoint

### Files Changed:
- `server.js`: 
  - Added express.json() middleware
  - Added new POST endpoint with validation and error handling
  - Updated root endpoint documentation

### Reason for Changes:
This enhancement allows users to look up day and time characters for any specific date and time, rather than only the current date and time. This makes the API more flexible and useful for applications that need to display characters for different dates and times.

## 2025-04-03: Initial Setup and Testing

### Changes:
- Initialized npm project with `package.json`
- Installed required dependencies:
  - express (production)
  - jest and supertest (development)
- Created unit tests in `server.test.js` to test the API endpoints and helper functions
- Added module exports to `server.js` to support testing
- Updated package.json to use Jest for testing

### Files Changed:
- `server.js`: Added module exports for testing
- `server.test.js`: Created new file with unit tests for the API
- `package.json`: Initialized and configured with dependencies and scripts
- `exports.js`: Temporary file used to append exports to server.js

### Reason for Changes:
These changes were made to ensure the Number System API is properly tested and can be deployed reliably. The unit tests verify that the API returns the expected data structure and that the helper functions work correctly for different dates and times.

## 2026-06-24: Add creature_description to week_creatures and refactor tests

### Changes:
- Added a `creature_description` entry to all 52 entries in the `week_creatures` list to support AI image generation.
- Kept the descriptions to 2-3 sentences, mentioning that the creature is a god/entity-like guardian "watching over" its environment as if to protect it.
- Exported the Express `app` object from `server.js` and modified the server code to only run the listener when run directly.
- Refactored `server.test.js` to test the actual application routes directly using supertest, avoiding route logic duplication.
- Created `.env.example` file and updated `.gitignore` to allow tracking it.

### Files Changed:
- `server.js`:
  - Added `creature_description` to `week_creatures` list.
  - Returned `creature_description` in `getWeekCreature(date)` payload.
  - Conditionally started server listener and exported `app`.
- `server.test.js`:
  - Refactored tests to use the exported `app` object.
  - Added assertions to verify `creature_description` values.
- `.env.example`:
  - Created new environment variables template.
- `.gitignore`:
  - Allowed tracking of `.env.example`.

### Reason for Changes:
The user requested adding creature descriptions for AI image generation, specifying that the descriptions define the creature as a god/entity-like guardian protecting its environment. Refactoring tests to use the exported Express app ensures that testing runs cleanly, avoids route logic duplication, and verifies the new data format.
