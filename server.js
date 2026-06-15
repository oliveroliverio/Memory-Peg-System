const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const pegs = [
    { peg: "00", character: "tOOthless", time: "5:00 am" },
    { peg: "01", character: "Oliver Arrow", time: "5:15 am" },
    { peg: "02", character: "OBeryn (martel)", time: "5:30 am" },
    { peg: "03", character: "OrChid", time: "5:45 am" },
    { peg: "04", character: "OzymanDiaz", time: "6:00 am" },
    { peg: "05", character: "Omar Epps", time: "6:15 am" },
    { peg: "06", character: "Oscar iSaac", time: "6:30 am" },
    { peg: "07", character: "OGre (shrek)", time: "6:45 am" },
    { peg: "08", character: "Odin Huugin", time: "7:00 am" },
    { peg: "09", character: "Old/New (god of time)", time: "7:15 am" },
    { peg: "10", character: "Ancient one", time: "7:30 am" },
    { peg: "11", character: "Alita Angel", time: "7:45 am" },
    { peg: "12", character: "Ashley Banks", time: "8:00 am" },
    { peg: "13", character: "ArC", time: "8:15 am" },
    { peg: "14", character: "AllaDin", time: "8:30 am" },
    { peg: "15", character: "Albert Einstein", time: "8:45 am" },
    { peg: "16", character: "Anastasia", time: "9:00 am" },
    { peg: "17", character: "Alan Guinness (Obi-wan)", time: "9:15 am" },
    { peg: "18", character: "Adolf Hitler", time: "9:30 am" },
    { peg: "19", character: "AquamaN", time: "9:45 am" },
    { peg: "20", character: "Barack Obama", time: "10:00 am" },
    { peg: "21", character: "Barry allen", time: "10:15 am" },
    { peg: "22", character: "Bumble Bee", time: "10:30 am" },
    { peg: "23", character: "Brian Cranston", time: "10:45 am" },
    { peg: "24", character: "BuDdy (basketball dog)", time: "11:00 am" },
    { peg: "25", character: "Buzz lightyEar", time: "11:15 am" },
    { peg: "26", character: "Bram Stoker", time: "11:30 am" },
    { peg: "27", character: "The Love BuG", time: "11:45 am" },
    { peg: "28", character: "Bishop herald", time: "12:00 pm" },
    { peg: "29", character: "Bill nye (concocting chemical synthesis, then throwing at foe)", time: "12:15 pm" },
    { peg: "30", character: "Captain obvious", time: "12:30 pm" },
    { peg: "31", character: "Captain America", time: "12:45 pm" },
    { peg: "32", character: "Carlton banks", time: "1:00 pm" },
    { peg: "33", character: "Charlie Chaplin", time: "1:15 pm" },
    { peg: "34", character: "Carol Danvers", time: "1:30 pm" },
    { peg: "35", character: "Chrono triggEr", time: "1:45 pm" },
    { peg: "36", character: "Claudia schiffer (runway model)", time: "2:00 pm" },
    { peg: "37", character: "Courtney Galiano/CorG", time: "2:15 pm" },
    { peg: "38", character: "Chelsie Hightower", time: "2:30 pm" },
    { peg: "39", character: "christopher nolan", time: "2:45 pm" },
    { peg: "40", character: "Doc Oc", time: "3:00 pm" },
    { peg: "41", character: "Darrow", time: "3:15 pm" },
    { peg: "42", character: "David Blain/", time: "3:30 pm" },
    { peg: "43", character: "Donkey Cong", time: "3:45 pm" },
    { peg: "44", character: "donald duck", time: "4:00 pm" },
    { peg: "45", character: "Duke Ellington", time: "4:15 pm" },
    { peg: "46", character: "Doctor Strange", time: "4:30 pm" },
    { peg: "47", character: "dave grohl", time: "4:45 pm" },
    { peg: "48", character: "daryl hannah", time: "5:00 pm" },
    { peg: "49", character: "Derian knight", time: "5:15 pm" },
    { peg: "50", character: "eyore", time: "5:30 pm" },
    { peg: "51", character: "mEga mAn x", time: "5:45 pm" },
    { peg: "52", character: "eric bristow", time: "6:00 pm" },
    { peg: "53", character: "edward cullen", time: "6:15 pm" },
    { peg: "54", character: "dad", time: "6:30 pm" },
    { peg: "55", character: "Elsa Eva", time: "6:45 pm" },
    { peg: "56", character: "ebenezer scroodge", time: "7:00 pm" },
    { peg: "57", character: "Elastigirl", time: "7:15 pm" },
    { peg: "58", character: "Elizabeth Holmes", time: "7:30 pm" },
    { peg: "59", character: "Emperor Nero", time: "7:45 pm" },
    { peg: "60", character: "SpyrO", time: "8:00 pm" },
    { peg: "61", character: "Serge Arbiter of time", time: "8:15 pm" },
    { peg: "62", character: "SimBa", time: "8:30 pm" },
    { peg: "63", character: "SoniC", time: "8:45 pm" },
    { peg: "64", character: "carmen San Diego", time: "9:00 pm" },
    { peg: "65", character: "Steve Erkel", time: "9:15 pm" },
    { peg: "66", character: "Sabrina spellman", time: "9:30 pm" },
    { peg: "67", character: "Spider Gwen", time: "9:45 pm" },
    { peg: "68", character: "Sherlock Holmes", time: "10:00 pm" },
    { peg: "69", character: "Samus NaraN", time: "10:15 pm" },
    { peg: "70", character: "GladiatOr", time: "10:30 pm" },
    { peg: "71", character: "Gemma Anderton", time: "10:45 pm" },
    { peg: "72", character: "Ghost Buster", time: "11:00 pm" },
    { peg: "73", character: "Gumby clokey", time: "11:15 pm" },
    { peg: "74", character: "GoDzilla", time: "11:30 pm" },
    { peg: "75", character: "Glenn Einlanzer", time: "11:45 pm" },
    { peg: "76", character: "GhoSt (ant man)", time: "12:00 am" },
    { peg: "77", character: "Gal Gadot (Wonder Woman)", time: "12:15 am" },
    { peg: "78", character: "Gohan", time: "12:30 am" },
    { peg: "79", character: "Green lanterN", time: "12:45 am" },
    { peg: "80", character: "Howl", time: "1:00 am" },
    { peg: "81", character: "HelA", time: "1:15 am" },
    { peg: "82", character: "Halle Berry (storm)", time: "1:30 am" },
    { peg: "83", character: "HerCules", time: "1:45 am" },
    { peg: "84", character: "Humpty Dumpty", time: "2:00 am" },
    { peg: "85", character: "Marty MckFly", time: "2:15 am" },
    { peg: "86", character: "Han Solo", time: "2:30 am" },
    { peg: "87", character: "Hermione Granger", time: "2:45 am" },
    { peg: "88", character: "Hulk", time: "3:00 am" },
    { peg: "89", character: "Hiro Nakamura", time: "3:15 am" },
    { peg: "90", character: "NOrm", time: "3:30 am" },
    { peg: "91", character: "Niel Armstrong", time: "3:45 am" },
    { peg: "92", character: "Nick Burkart", time: "4:00 am" },
    { peg: "93", character: "Night Crawler", time: "4:15 am" },
    { peg: "94", character: "Napoleon Dynamite", time: "4:30 am" },
    { peg: "95", character: "NEo", time: "4:45 am" }
];

const dayThemes = {
    Sunday: {
        theme: "Easter",
        props: ["Eggs", "Bunnies", "Pastels", "Candy", "Church bells"],
        note: "Memory palace scene/theme for today"
    },
    Monday: {
        theme: "Independence Day",
        props: ["Fireworks", "Flags", "BBQ", "Parades"],
        note: "Memory palace scene/theme for today"
    },
    Tuesday: {
        theme: "Mardi Gras",
        props: ["Masks", "Beads", "Music", "Parades", "Dancing", "Purple Green Gold"],
        note: "Memory palace scene/theme for today"
    },
    Wednesday: {
        theme: "Thanksgiving",
        props: ["Turkey", "Pumpkins", "Cornucopia", "Family feast"],
        note: "Memory palace scene/theme for today"
    },
    Thursday: {
        theme: "Lunar New Year",
        props: ["Dragons", "Lion dances", "Firecrackers", "Red lanterns", "Gold coins"],
        note: "Memory palace scene/theme for today"
    },
    Friday: {
        theme: "Halloween",
        props: ["Monsters", "Costumes", "Haunted houses", "Pumpkins"],
        note: "Memory palace scene/theme for today"
    },
    Saturday: {
        theme: "Christmas",
        props: ["Snow", "Santa", "Reindeer", "Lights", "Gifts"],
        note: "Memory palace scene/theme for today"
    }
};

function getWeekNumber(date) {
    const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

    // ISO week starts Monday. Thursday determines the ISO year/week.
    const dayNumber = target.getUTCDay() || 7;
    target.setUTCDate(target.getUTCDate() + 4 - dayNumber);

    const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
    const weekNumber = Math.ceil((((target - yearStart) / 86400000) + 1) / 7);

    return weekNumber;
}

function getWeekCharacter(date) {
    const weekNumber = getWeekNumber(date);
    const pegEntry = pegs[weekNumber] || pegs[0];

    return {
        week: weekNumber,
        peg: pegEntry.peg,
        character: pegEntry.character,
        note: "Week-based memory character"
    };
}

function getDayTheme(date) {
    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
    const theme = dayThemes[weekday];

    return {
        weekday,
        theme: theme.theme,
        props: theme.props,
        note: theme.note
    };
}

function getTimePegIndex(date) {
    let totalMinutes = date.getHours() * 60 + date.getMinutes();

    if (totalMinutes < 300) {
        totalMinutes += 1440;
    }

    const minutesSinceFive = totalMinutes - 300;
    return Math.floor(minutesSinceFive / 15) % 96;
}

function getComputedTimeString(timePegIndex) {
    const timeMinutes = 300 + (timePegIndex * 15);
    const hours24 = Math.floor(timeMinutes / 60) % 24;
    const minutes = timeMinutes % 60;
    const period = hours24 >= 12 ? "pm" : "am";
    const displayHour = ((hours24 + 11) % 12) + 1;
    const displayMinutes = minutes.toString().padStart(2, "0");

    return `${displayHour}:${displayMinutes} ${period}`;
}

function parseDateTimeInput(date, time) {
    if (!date || !time) {
        throw new Error("Missing required parameters");
    }

    const currentYear = new Date().getFullYear();
    const [month, day] = date.split('-').map(num => parseInt(num, 10));

    if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
        throw new Error("Invalid date format");
    }

    let hours, minutes;
    let timeStr = time.trim().toUpperCase();

    if (timeStr.includes('AM') || timeStr.includes('PM')) {
        const isPM = timeStr.includes('PM');
        timeStr = timeStr.replace(/\s*(AM|PM)\s*$/i, '');

        const timeParts = timeStr.split(':');
        if (timeParts.length !== 2) throw new Error("Invalid time format");

        hours = parseInt(timeParts[0], 10);
        minutes = parseInt(timeParts[1], 10);

        if (isNaN(hours) || isNaN(minutes) || hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {
            throw new Error("Invalid time values");
        }

        if (isPM && hours < 12) hours += 12;
        else if (!isPM && hours === 12) hours = 0;
    } else {
        const timeParts = timeStr.split(':');
        if (timeParts.length !== 2) throw new Error("Invalid time format");

        hours = parseInt(timeParts[0], 10);
        minutes = parseInt(timeParts[1], 10);

        if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
            throw new Error("Invalid time values");
        }
    }

    return new Date(currentYear, month - 1, day, hours, minutes);
}

function buildCharacterResponse(dateObj) {
    const weekCharacter = getWeekCharacter(dateObj);
    const dayTheme = getDayTheme(dateObj);

    const timePegIndex = getTimePegIndex(dateObj);
    const timeCharacter = pegs[timePegIndex];
    const computedTimeStr = getComputedTimeString(timePegIndex);

    return {
        weekCharacter,
        dayTheme,
        timeCharacter: {
            peg: timeCharacter.peg,
            character: timeCharacter.character,
            time: timeCharacter.time,
            note: "15-minute quadrant character"
        },
        computedTime: computedTimeStr,
        currentDate: dateObj.toISOString()
    };
}

app.get('/', (req, res) => {
    res.json({
        name: "Memory Peg System API",
        description: "API for retrieving week character, day theme, and time quadrant character",
        endpoints: [
            {
                path: "/getCharacters",
                method: "GET",
                description: "Get current week character, day theme, and time quadrant character"
            },
            {
                path: "/getCharactersByDate",
                method: "POST",
                description: "Get week character, day theme, and time character by date/time",
                body: {
                    date: "MM-DD",
                    time: "HH:MM or HH:MM AM/PM"
                }
            }
        ]
    });
});

app.get('/getCharacters', (req, res) => {
    const now = new Date();
    res.json(buildCharacterResponse(now));
});

app.post('/getCharactersByDate', (req, res) => {
    try {
        const { date, time } = req.body;
        const dateObj = parseDateTimeInput(date, time);

        res.json({
            inputDate: date,
            inputTime: time,
            ...buildCharacterResponse(dateObj)
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            required: {
                date: "MM-DD",
                time: "HH:MM or HH:MM AM/PM"
            }
        });
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`API server is listening at http://0.0.0.0:${port}`);
});

module.exports = {
    pegs,
    dayThemes,
    getWeekNumber,
    getWeekCharacter,
    getDayTheme,
    getTimePegIndex,
    getComputedTimeString,
    parseDateTimeInput,
    buildCharacterResponse
};