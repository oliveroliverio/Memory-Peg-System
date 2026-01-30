// server.test.js
const request = require('supertest');
const express = require('express');

// Import the server app but prevent it from listening on a port
const app = express();
// Copy the routes from server.js
const pegs = require('./server').pegs;
const getDayOfYear = require('./server').getDayOfYear;
const getTimePegIndex = require('./server').getTimePegIndex;

// Recreate the route
app.get('/getCharacters', (req, res) => {
    const now = new Date();

    // Determine the day character:
    const dayOfYear = getDayOfYear(now);
    const dayPegIndex = (dayOfYear - 1) % 100;
    const dayCharacter = pegs[dayPegIndex];

    // Determine the time character:
    const timePegIndex = getTimePegIndex(now);
    const timeCharacter = pegs[timePegIndex];

    // Compute a formatted time string based on the interval:
    const timeMinutes = 300 + (timePegIndex * 15);
    const hours24 = Math.floor(timeMinutes / 60) % 24;
    const minutes = timeMinutes % 60;
    const period = hours24 >= 12 ? "pm" : "am";
    const displayHour = ((hours24 + 11) % 12) + 1;
    const displayMinutes = minutes.toString().padStart(2, '0');
    const computedTimeStr = `${displayHour}:${displayMinutes} ${period}`;

    res.json({
        dayCharacter: {
            peg: dayCharacter.peg,
            character: dayCharacter.character,
            note: "Mature, academic, mentor style"
        },
        timeCharacter: {
            peg: timeCharacter.peg,
            character: timeCharacter.character,
            time: timeCharacter.time,
            note: "Youthful, easy-going, student style"
        },
        computedTime: computedTimeStr,
        currentDate: now.toISOString()
    });
});

describe('Number System API', () => {
    test('GET /getCharacters should return character data', async () => {
        const response = await request(app).get('/getCharacters');
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('dayCharacter');
        expect(response.body).toHaveProperty('timeCharacter');
        expect(response.body).toHaveProperty('computedTime');
        expect(response.body).toHaveProperty('currentDate');
        
        // Check structure of dayCharacter
        expect(response.body.dayCharacter).toHaveProperty('peg');
        expect(response.body.dayCharacter).toHaveProperty('character');
        expect(response.body.dayCharacter).toHaveProperty('note');
        
        // Check structure of timeCharacter
        expect(response.body.timeCharacter).toHaveProperty('peg');
        expect(response.body.timeCharacter).toHaveProperty('character');
        expect(response.body.timeCharacter).toHaveProperty('time');
        expect(response.body.timeCharacter).toHaveProperty('note');
    });
});

describe('Helper Functions', () => {
    test('getDayOfYear returns correct day number', () => {
        // Test for January 1st
        const jan1 = new Date(2025, 0, 1); // Month is 0-indexed
        expect(getDayOfYear(jan1)).toBe(1);
        
        // Test for December 31st (non-leap year)
        const dec31 = new Date(2025, 11, 31);
        expect(getDayOfYear(dec31)).toBe(365);
    });
    
    test('getTimePegIndex returns correct index based on time', () => {
        // Test for 5:00 am (start time)
        const time5am = new Date(2025, 0, 1, 5, 0);
        expect(getTimePegIndex(time5am)).toBe(0);
        
        // Test for 5:15 am (one interval later)
        const time515am = new Date(2025, 0, 1, 5, 15);
        expect(getTimePegIndex(time515am)).toBe(1);
        
        // Test for 4:45 am (should wrap around to end of previous day)
        const time445am = new Date(2025, 0, 1, 4, 45);
        expect(getTimePegIndex(time445am)).toBe(95);
    });
});
