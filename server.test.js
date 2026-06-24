// server.test.js
const request = require('supertest');
const {
    app,
    getWeekNumber,
    getWeekCreature,
    getDayTheme,
    getTimePegIndex,
    getComputedTimeString,
    parseDateTimeInput,
    buildCharacterResponse
} = require('./server');

describe('Number System API Endpoints', () => {
    test('GET / should return api description and endpoints', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('name', 'Memory Peg System API');
        expect(response.body).toHaveProperty('endpoints');
    });

    test('GET /getCharacters should return character data with creature_description', async () => {
        const response = await request(app).get('/getCharacters');
        expect(response.statusCode).toBe(200);
        
        expect(response.body).toHaveProperty('weekCreature');
        expect(response.body).toHaveProperty('dayTheme');
        expect(response.body).toHaveProperty('timeCharacter');
        expect(response.body).toHaveProperty('computedTime');
        expect(response.body).toHaveProperty('currentDate');
        
        // Verify weekCreature properties
        expect(response.body.weekCreature).toHaveProperty('week');
        expect(response.body.weekCreature).toHaveProperty('weekFormatted');
        expect(response.body.weekCreature).toHaveProperty('creature');
        expect(response.body.weekCreature).toHaveProperty('creature_description');
        expect(typeof response.body.weekCreature.creature_description).toBe('string');
        expect(response.body.weekCreature.creature_description).toMatch(/watch/i);
        expect(response.body.weekCreature.creature_description).toMatch(/protect|safe/i);
    });

    test('POST /getCharactersByDate should validate and return exact characters', async () => {
        const response = await request(app)
            .post('/getCharactersByDate')
            .send({ date: '06-24', time: '10:30 am' });
            
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('inputDate', '06-24');
        expect(response.body).toHaveProperty('inputTime', '10:30 am');
        
        expect(response.body).toHaveProperty('weekCreature');
        expect(response.body.weekCreature).toHaveProperty('creature');
        expect(response.body.weekCreature).toHaveProperty('creature_description');
        expect(response.body.weekCreature.creature_description).toMatch(/watch/i);
        expect(response.body.weekCreature.creature_description).toMatch(/protect|safe/i);
    });

    test('POST /getCharactersByDate should return 400 on missing or invalid params', async () => {
        const response1 = await request(app)
            .post('/getCharactersByDate')
            .send({ date: '06-24' });
        expect(response1.statusCode).toBe(400);

        const response2 = await request(app)
            .post('/getCharactersByDate')
            .send({ date: 'invalid', time: '10:30 am' });
        expect(response2.statusCode).toBe(400);
    });
});

describe('Helper Functions', () => {
    test('getWeekNumber returns correct ISO week number', () => {
        // Jan 1, 2026 is a Thursday, so it should be in week 1
        const jan1 = new Date(2026, 0, 1);
        expect(getWeekNumber(jan1)).toBe(1);
    });

    test('getWeekCreature returns creature details with description', () => {
        const jan1 = new Date(2026, 0, 1);
        const result = getWeekCreature(jan1);
        expect(result).toHaveProperty('creature');
        expect(result).toHaveProperty('creature_description');
        expect(result.creature_description).toMatch(/watch/i);
        expect(result.creature_description).toMatch(/protect|safe/i);
    });

    test('getDayTheme returns theme based on weekday', () => {
        // June 24, 2026 is a Wednesday
        const wednesday = new Date(2026, 5, 24);
        const theme = getDayTheme(wednesday);
        expect(theme.weekday).toBe('Wednesday');
        expect(theme.theme).toBe('Thanksgiving');
    });

    test('getTimePegIndex returns correct index', () => {
        const time5am = new Date(2026, 5, 24, 5, 0);
        expect(getTimePegIndex(time5am)).toBe(0);

        const time515am = new Date(2026, 5, 24, 5, 15);
        expect(getTimePegIndex(time515am)).toBe(1);
    });

    test('getComputedTimeString converts index back to time string', () => {
        expect(getComputedTimeString(0)).toBe('5:00 am');
        expect(getComputedTimeString(22)).toBe('10:30 am');
    });

    test('parseDateTimeInput parses various formats correctly', () => {
        const result = parseDateTimeInput('06-24', '10:30 am');
        expect(result.getMonth()).toBe(5); // June (0-indexed)
        expect(result.getDate()).toBe(24);
        expect(result.getHours()).toBe(10);
        expect(result.getMinutes()).toBe(30);
    });
});
