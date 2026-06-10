cp server.js server.js.bak

python3 <<'PY'
from pathlib import Path
import re

p = Path("server.js")
s = p.read_text()

peg_match = re.search(r"const pegs = \[[\s\S]*?\n\];", s)
if not peg_match:
    raise SystemExit("Could not find const pegs array.")

pegs_block = peg_match.group(0)

new_server = f"""// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

{pegs_block}

const dayColors = {{
    Sunday: "Red",
    Monday: "White",
    Tuesday: "Orange",
    Wednesday: "Yellow",
    Thursday: "Green",
    Friday: "Blue",
    Saturday: "Purple"
}};

function getDayOfYear(date) {{
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}}

function getWeekNumber(date) {{
    const start = new Date(date.getFullYear(), 0, 1);
    const dayOfYear = Math.floor((date - start) / 86400000) + 1;
    return Math.min(52, Math.ceil(dayOfYear / 7));
}}

function getWeekCharacter(date) {{
    const weekNumber = getWeekNumber(date);
    const pegEntry = pegs[weekNumber] || pegs[0];

    return {{
        week: weekNumber,
        peg: pegEntry.peg,
        character: pegEntry.character,
        note: "Week-based memory character"
    }};
}}

function getDayColor(date) {{
    const weekday = date.toLocaleDateString("en-US", {{ weekday: "long" }});
    return {{
        weekday,
        color: dayColors[weekday],
        note: "Color overlay for all characters and scenery today"
    }};
}}

function getTimePegIndex(date) {{
    let totalMinutes = date.getHours() * 60 + date.getMinutes();

    if (totalMinutes < 300) {{
        totalMinutes += 1440;
    }}

    const minutesSinceFive = totalMinutes - 300;
    return Math.floor(minutesSinceFive / 15) % 96;
}}

function getComputedTimeString(timePegIndex) {{
    const timeMinutes = 300 + (timePegIndex * 15);
    const hours24 = Math.floor(timeMinutes / 60) % 24;
    const minutes = timeMinutes % 60;
    const period = hours24 >= 12 ? "pm" : "am";
    const displayHour = ((hours24 + 11) % 12) + 1;
    const displayMinutes = minutes.toString().padStart(2, "0");
    return `${{displayHour}}:${{displayMinutes}} ${{period}}`;
}}

function parseDateTimeInput(date, time) {{
    if (!date || !time) {{
        throw new Error("Missing required parameters");
    }}

    const currentYear = new Date().getFullYear();
    const [month, day] = date.split('-').map(num => parseInt(num, 10));

    if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {{
        throw new Error("Invalid date format");
    }}

    let hours, minutes;
    let timeStr = time.trim().toUpperCase();

    if (timeStr.includes('AM') || timeStr.includes('PM')) {{
        const isPM = timeStr.includes('PM');
        timeStr = timeStr.replace(/\\s*(AM|PM)\\s*$/i, '');

        const timeParts = timeStr.split(':');
        if (timeParts.length !== 2) throw new Error("Invalid time format");

        hours = parseInt(timeParts[0], 10);
        minutes = parseInt(timeParts[1], 10);

        if (isNaN(hours) || isNaN(minutes) || hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {{
            throw new Error("Invalid time values");
        }}

        if (isPM && hours < 12) hours += 12;
        else if (!isPM && hours === 12) hours = 0;
    }} else {{
        const timeParts = timeStr.split(':');
        if (timeParts.length !== 2) throw new Error("Invalid time format");

        hours = parseInt(timeParts[0], 10);
        minutes = parseInt(timeParts[1], 10);

        if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {{
            throw new Error("Invalid time values");
        }}
    }}

    return new Date(currentYear, month - 1, day, hours, minutes);
}}

function buildCharacterResponse(dateObj) {{
    const weekCharacter = getWeekCharacter(dateObj);
    const dayColor = getDayColor(dateObj);

    const timePegIndex = getTimePegIndex(dateObj);
    const timeCharacter = pegs[timePegIndex];
    const computedTimeStr = getComputedTimeString(timePegIndex);

    return {{
        weekCharacter,
        dayColor,
        timeCharacter: {{
            peg: timeCharacter.peg,
            character: timeCharacter.character,
            time: timeCharacter.time,
            note: "15-minute quadrant character"
        }},
        computedTime: computedTimeStr,
        currentDate: dateObj.toISOString()
    }};
}}

app.get('/', (req, res) => {{
    res.json({{
        name: "Number System API",
        description: "API for retrieving week character, day color, and time quadrant character",
        endpoints: [
            {{
                path: "/getCharacters",
                method: "GET",
                description: "Get current week character, day color, and time quadrant character"
            }},
            {{
                path: "/getCharactersByDate",
                method: "POST",
                description: "Get week character, day color, and time character by date/time",
                body: {{
                    date: "MM-DD",
                    time: "HH:MM or HH:MM AM/PM"
                }}
            }}
        ]
    }});
}});

app.get('/getCharacters', (req, res) => {{
    const now = new Date();
    res.json(buildCharacterResponse(now));
}});

app.post('/getCharactersByDate', (req, res) => {{
    try {{
        const {{ date, time }} = req.body;
        const dateObj = parseDateTimeInput(date, time);

        const response = buildCharacterResponse(dateObj);

        res.json({{
            inputDate: date,
            inputTime: time,
            ...response
        }});
    }} catch (error) {{
        res.status(400).json({{
            error: error.message,
            required: {{
                date: "MM-DD",
                time: "HH:MM or HH:MM AM/PM"
            }}
        }});
    }}
}});

app.listen(port, '0.0.0.0', () => {{
    console.log(`API server is listening at http://0.0.0.0:${{port}}`);
}});

module.exports = {{
    pegs,
    dayColors,
    getDayOfYear,
    getWeekNumber,
    getWeekCharacter,
    getDayColor,
    getTimePegIndex,
    buildCharacterResponse
}};
"""

p.write_text(new_server)
print("server.js rewritten. Backup saved as server.js.bak")
PY