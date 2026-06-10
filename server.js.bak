// server.js
const express = require('express');
const app = express();
const port = 3000;

// Add middleware to parse JSON body
app.use(express.json());

// Example peg data: each entry has a date, peg, character, and associated display time.
// (Fill in all 100 entries; here we list a few for illustration.)
const pegs = [
    { date: "Jan 1", peg: "00", character: "tOOthless", time: "5:00 am" },
    { date: "Jan 2", peg: "01", character: "Oliver Arrow", time: "5:15 am" },
    { date: "Jan 3", peg: "02", character: "OBeryn (martel)", time: "5:30 am" },
    { date: "Jan 4", peg: "03", character: "OrChid", time: "5:45 am" },
    { date: "Jan 5", peg: "04", character: "OzymanDiaz", time: "6:00 am" },
    { date: "Jan 6", peg: "05", character: "Omar Epps", time: "6:15 am" },
    { date: "Jan 7", peg: "06", character: "Oscar iSaac", time: "6:30 am" },
    { date: "Jan 8", peg: "07", character: "OGre (shrek)", time: "6:45 am" },
    { date: "Jan 9", peg: "08", character: "Odin Huugin", time: "7:00 am" },
    { date: "Jan 10", peg: "09", character: "Old/New (god of time)", time: "7:15 am" },
    { date: "Jan 11", peg: "10", character: "Ancient one", time: "7:30 am" },
    { date: "Jan 12", peg: "11", character: "Alita Angel", time: "7:45 am" },
    { date: "Jan 13", peg: "12", character: "Ashley Banks", time: "8:00 am" },
    { date: "Jan 14", peg: "13", character: "ArC", time: "8:15 am" },
    { date: "Jan 15", peg: "14", character: "AllaDin", time: "8:30 am" },
    { date: "Jan 16", peg: "15", character: "Albert Einstein", time: "8:45 am" },
    { date: "Jan 17", peg: "16", character: "Anastasia", time: "9:00 am" },
    { date: "Jan 18", peg: "17", character: "Alan Guinness (Obi-wan)", time: "9:15 am" },
    { date: "Jan 19", peg: "18", character: "Adolf Hitler", time: "9:30 am" },
    { date: "Jan 20", peg: "19", character: "AquamaN", time: "9:45 am" },
    { date: "Jan 21", peg: "20", character: "Barack Obama", time: "10:00 am" },
    { date: "Jan 22", peg: "21", character: "Barry allen", time: "10:15 am" },
    { date: "Jan 23", peg: "22", character: "Bumble Bee", time: "10:30 am" },
    { date: "Jan 24", peg: "23", character: "Brian Cranston", time: "10:45 am" },
    { date: "Jan 25", peg: "24", character: "BuDdy (basketball dog)", time: "11:00 am" },
    { date: "Jan 26", peg: "25", character: "Buzz lightyEar", time: "11:15 am" },
    { date: "Jan 27", peg: "26", character: "Bram Stoker", time: "11:30 am" },
    { date: "Jan 28", peg: "27", character: "Buggy (car character)", time: "11:45 am" },
    { date: "Jan 29", peg: "28", character: "Bishop herald", time: "12:00 pm" },
    { date: "Jan 30", peg: "29", character: "Bill nye (concocting chemical synthesis, then throwing at foe)", time: "12:15 pm" },
{ date: "Jan 31", peg: "30", character: "Captain obvious", time: "12:30 pm" },
{ date: "Feb 1", peg: "31", character: "Captain America", time: "12:45 pm" },
{ date: "Feb 2", peg: "32", character: "Carlton banks", time: "1:00 pm" },
{ date: "Feb 3", peg: "33", character: "Charlie Chaplin", time: "1:15 pm" },
{ date: "Feb 4", peg: "34", character: "Carol Danvers", time: "1:30 pm" },
{ date: "Feb 5", peg: "35", character: "Chrono triggEr", time: "1:45 pm" },
{ date: "Feb 6", peg: "36", character: "Claudia schiffer (runway model)", time: "2:00 pm" },
{ date: "Feb 7", peg: "37", character: "Courtney Galiano/CorG", time: "2:15 pm" },
{ date: "Feb 8", peg: "38", character: "Chelsie Hightower", time: "2:30 pm" },
{ date: "Feb 9", peg: "39", character: "christopher nolan", time: "2:45 pm" },
{ date: "Feb 10", peg: "40", character: "Doc Oc", time: "3:00 pm" },
{ date: "Feb 11", peg: "41", character: "Darrow", time: "3:15 pm" },
{ date: "Feb 12", peg: "42", character: "David Blain/", time: "3:30 pm" },
{ date: "Feb 13", peg: "43", character: "Donkey Cong", time: "3:45 pm" },
{ date: "Feb 14", peg: "44", character: "donald duck", time: "4:00 pm" },
{ date: "Feb 15", peg: "45", character: "Duke Ellington", time: "4:15 pm" },
{ date: "Feb 16", peg: "46", character: "Doctor Strange", time: "4:30 pm" },
{ date: "Feb 17", peg: "47", character: "dave grohl", time: "4:45 pm" },
{ date: "Feb 18", peg: "48", character: "daryl hannah", time: "5:00 pm" },
{ date: "Feb 19", peg: "49", character: "Derian knight", time: "5:15 pm" },
{ date: "Feb 20", peg: "50", character: "eyore", time: "5:30 pm" },
{ date: "Feb 21", peg: "51", character: "mEga mAn x", time: "5:45 pm" },
{ date: "Feb 22", peg: "52", character: "eric bristow", time: "6:00 pm" },
{ date: "Feb 23", peg: "53", character: "edward cullen", time: "6:15 pm" },
{ date: "Feb 24", peg: "54", character: "dad", time: "6:30 pm" },
{ date: "Feb 25", peg: "55", character: "Elsa Eva", time: "6:45 pm" },
{ date: "Feb 26", peg: "56", character: "ebenezer scroodge", time: "7:00 pm" },
{ date: "Feb 27", peg: "57", character: "Elastigirl", time: "7:15 pm" },
{ date: "Feb 28", peg: "58", character: "Elizabeth Holmes", time: "7:30 pm" },
{ date: "Mar 1", peg: "59", character: "Emperor Nero", time: "7:45 pm" },
{ date: "Mar 2", peg: "60", character: "SpyrO", time: "8:00 pm" },
{ date: "Mar 3", peg: "61", character: "Serge Arbiter of time", time: "8:15 pm" },
{ date: "Mar 4", peg: "62", character: "SimBa", time: "8:30 pm" },
{ date: "Mar 5", peg: "63", character: "SoniC", time: "8:45 pm" },
{ date: "Mar 6", peg: "64", character: "carmen San Diego", time: "9:00 pm" },
{ date: "Mar 7", peg: "65", character: "Steve Erkel", time: "9:15 pm" },
{ date: "Mar 8", peg: "66", character: "Sabrina spellman", time: "9:30 pm" },
{ date: "Mar 9", peg: "67", character: "Spider Gwen", time: "9:45 pm" },
{ date: "Mar 10", peg: "68", character: "Sherlock Holmes", time: "10:00 pm" },
{ date: "Mar 11", peg: "69", character: "Samus NaraN", time: "10:15 pm" },
{ date: "Mar 12", peg: "70", character: "Goldman", time: "10:30 pm" },
{ date: "Mar 13", peg: "71", character: "Gemma Anderton", time: "10:45 pm" },
{ date: "Mar 14", peg: "72", character: "Ghost Buster", time: "11:00 pm" },
{ date: "Mar 15", peg: "73", character: "Gumby clokey", time: "11:15 pm" },
{ date: "Mar 16", peg: "74", character: "GoDzilla", time: "11:30 pm" },
{ date: "Mar 17", peg: "75", character: "Glenn Einlanzer", time: "11:45 pm" },
{ date: "Mar 18", peg: "76", character: "GhoSt (ant man)", time: "12:00 am" },
{ date: "Mar 19", peg: "77", character: "Gal Gadot (Wonder Woman)", time: "12:15 am" },
{ date: "Mar 20", peg: "78", character: "Gohan", time: "12:30 am" },
{ date: "Mar 21", peg: "79", character: "Green lanterN", time: "12:45 am" },
{ date: "Mar 22", peg: "80", character: "Howl", time: "1:00 am" },
{ date: "Mar 23", peg: "81", character: "HelA", time: "1:15 am" },
{ date: "Mar 24", peg: "82", character: "Halle Berry (storm)", time: "1:30 am" },
{ date: "Mar 25", peg: "83", character: "HerCules", time: "1:45 am" },
{ date: "Mar 26", peg: "84", character: "Humpty Dumpty", time: "2:00 am" },
{ date: "Mar 27", peg: "85", character: "Marty MckFly", time: "2:15 am" },
{ date: "Mar 28", peg: "86", character: "Han Solo", time: "2:30 am" },
{ date: "Mar 29", peg: "87", character: "Hermione Granger", time: "2:45 am" },
{ date: "Mar 30", peg: "88", character: "Hulk", time: "3:00 am" },
{ date: "Mar 31", peg: "89", character: "Hiro Nakamura", time: "3:15 am" },
{ date: "Apr 1", peg: "90", character: "NOrm", time: "3:30 am" },
{ date: "Apr 2", peg: "91", character: "Niel Armstrong", time: "3:45 am" },
{ date: "Apr 3", peg: "92", character: "Nick Burkart", time: "4:00 am" },
{ date: "Apr 4", peg: "93", character: "Night Crawler", time: "4:15 am" },
{ date: "Apr 5", peg: "94", character: "Napoleon Dynamite", time: "4:30 am" },
{ date: "Apr 6", peg: "95", character: "NEo", time: "4:45 am" },
{ date: "Apr 7", peg: "96", character: "nebula stern", time: "5:00 am" },
{ date: "Apr 8", peg: "97", character: "NeGasonic", time: "5:15 am" },
{ date: "Apr 9", peg: "98", character: "Niel Harris (card tricks)", time: "5:30 am" },
{ date: "Apr 10", peg: "99", character: "Nhe-Zha", time: "5:45 am" },
{ date: "Apr 11", peg: "00", character: "tOOthless", time: "5:00 am" },
{ date: "Apr 12", peg: "01", character: "Oliver Arrow", time: "5:15 am" },
{ date: "Apr 13", peg: "02", character: "OBeryn (martel)", time: "5:30 am" },
{ date: "Apr 14", peg: "03", character: "OrChid", time: "5:45 am" },
{ date: "Apr 15", peg: "04", character: "OzymanDiaz", time: "6:00 am" },
{ date: "Apr 16", peg: "05", character: "Omar Epps", time: "6:15 am" },
{ date: "Apr 17", peg: "06", character: "Oscar iSaac", time: "6:30 am" },
{ date: "Apr 18", peg: "07", character: "OGre (shrek)", time: "6:45 am" },
{ date: "Apr 19", peg: "08", character: "Odin Huugin", time: "7:00 am" },
{ date: "Apr 20", peg: "09", character: "Old/New (god of time)", time: "7:15 am" },
{ date: "Apr 21", peg: "10", character: "Ancient one", time: "7:30 am" },
{ date: "Apr 22", peg: "11", character: "Alita Angel", time: "7:45 am" },
{ date: "Apr 23", peg: "12", character: "Ashley Banks", time: "8:00 am" },
{ date: "Apr 24", peg: "13", character: "ArC", time: "8:15 am" },
{ date: "Apr 25", peg: "14", character: "AllaDin", time: "8:30 am" },
{ date: "Apr 26", peg: "15", character: "Albert Einstein", time: "8:45 am" },
{ date: "Apr 27", peg: "16", character: "Anastasia", time: "9:00 am" },
{ date: "Apr 28", peg: "17", character: "Alan Guinness (Obi-wan)", time: "9:15 am" },
{ date: "Apr 29", peg: "18", character: "Adolf Hitler", time: "9:30 am" },
{ date: "Apr 30", peg: "19", character: "AquamaN", time: "9:45 am" },
{ date: "May 1", peg: "20", character: "Barack Obama", time: "10:00 am" },
{ date: "May 2", peg: "21", character: "Barry allen", time: "10:15 am" },
{ date: "May 3", peg: "22", character: "Bumble Bee", time: "10:30 am" },
{ date: "May 4", peg: "23", character: "Brian Cranston", time: "10:45 am" },
{ date: "May 5", peg: "24", character: "BuDdy (basketball dog)", time: "11:00 am" },
{ date: "May 6", peg: "25", character: "Buzz lightyEar", time: "11:15 am" },
{ date: "May 7", peg: "26", character: "Bram Stoker", time: "11:30 am" },
{ date: "May 8", peg: "27", character: "Buggy (car character)", time: "11:45 am" },
{ date: "May 9", peg: "28", character: "Bishop herald", time: "12:00 pm" },
{ date: "May 10", peg: "29", character: "Bill nye (concocting chemical synthesis, then throwing at foe)", time: "12:15 pm" },
{ date: "May 11", peg: "30", character: "Captain obvious", time: "12:30 pm" },
{ date: "May 12", peg: "31", character: "Captain America", time: "12:45 pm" },
{ date: "May 13", peg: "32", character: "Carlton banks", time: "1:00 pm" },
{ date: "May 14", peg: "33", character: "Charlie Chaplin", time: "1:15 pm" },
{ date: "May 15", peg: "34", character: "Carol Danvers", time: "1:30 pm" },
{ date: "May 16", peg: "35", character: "Chrono triggEr", time: "1:45 pm" },
{ date: "May 17", peg: "36", character: "Claudia schiffer (runway model)", time: "2:00 pm" },
{ date: "May 18", peg: "37", character: "Courtney Galiano/CorG", time: "2:15 pm" },
{ date: "May 19", peg: "38", character: "Chelsie Hightower", time: "2:30 pm" },
{ date: "May 20", peg: "39", character: "christopher nolan", time: "2:45 pm" },
{ date: "May 21", peg: "40", character: "Doc Oc", time: "3:00 pm" },
{ date: "May 22", peg: "41", character: "Darrow", time: "3:15 pm" },
{ date: "May 23", peg: "42", character: "David Blain/", time: "3:30 pm" },
{ date: "May 24", peg: "43", character: "Donkey Cong", time: "3:45 pm" },
{ date: "May 25", peg: "44", character: "donald duck", time: "4:00 pm" },
{ date: "May 26", peg: "45", character: "Duke Ellington", time: "4:15 pm" },
{ date: "May 27", peg: "46", character: "Doctor Strange", time: "4:30 pm" },
{ date: "May 28", peg: "47", character: "dave grohl", time: "4:45 pm" },
{ date: "May 29", peg: "48", character: "daryl hannah", time: "5:00 pm" },
{ date: "May 30", peg: "49", character: "Derian knight", time: "5:15 pm" },
{ date: "May 31", peg: "50", character: "eyore", time: "5:30 pm" },
{ date: "Jun 1", peg: "51", character: "mEga mAn x", time: "5:45 pm" },
{ date: "Jun 2", peg: "52", character: "eric bristow", time: "6:00 pm" },
{ date: "Jun 3", peg: "53", character: "edward cullen", time: "6:15 pm" },
{ date: "Jun 4", peg: "54", character: "dad", time: "6:30 pm" },
{ date: "Jun 5", peg: "55", character: "Elsa Eva", time: "6:45 pm" },
{ date: "Jun 6", peg: "56", character: "ebenezer scroodge", time: "7:00 pm" },
{ date: "Jun 7", peg: "57", character: "Elastigirl", time: "7:15 pm" },
{ date: "Jun 8", peg: "58", character: "Elizabeth Holmes", time: "7:30 pm" },
{ date: "Jun 9", peg: "59", character: "Emperor Nero", time: "7:45 pm" },
{ date: "Jun 10", peg: "60", character: "SpyrO", time: "8:00 pm" },
{ date: "Jun 11", peg: "61", character: "Serge Arbiter of time", time: "8:15 pm" },
{ date: "Jun 12", peg: "62", character: "SimBa", time: "8:30 pm" },
{ date: "Jun 13", peg: "63", character: "SoniC", time: "8:45 pm" },
{ date: "Jun 14", peg: "64", character: "carmen San Diego", time: "9:00 pm" },
{ date: "Jun 15", peg: "65", character: "Steve Erkel", time: "9:15 pm" },
{ date: "Jun 16", peg: "66", character: "Sabrina spellman", time: "9:30 pm" },
{ date: "Jun 17", peg: "67", character: "Spider Gwen", time: "9:45 pm" },
{ date: "Jun 18", peg: "68", character: "Sherlock Holmes", time: "10:00 pm" },
{ date: "Jun 19", peg: "69", character: "Samus NaraN", time: "10:15 pm" },
{ date: "Jun 20", peg: "70", character: "Goldman", time: "10:30 pm" },
{ date: "Jun 21", peg: "71", character: "Gemma Anderton", time: "10:45 pm" },
{ date: "Jun 22", peg: "72", character: "Ghost Buster", time: "11:00 pm" },
{ date: "Jun 23", peg: "73", character: "Gumby clokey", time: "11:15 pm" },
{ date: "Jun 24", peg: "74", character: "GoDzilla", time: "11:30 pm" },
{ date: "Jun 25", peg: "75", character: "Glenn Einlanzer", time: "11:45 pm" },
{ date: "Jun 26", peg: "76", character: "GhoSt (ant man)", time: "12:00 am" },
{ date: "Jun 27", peg: "77", character: "Gal Gadot (Wonder Woman)", time: "12:15 am" },
{ date: "Jun 28", peg: "78", character: "Gohan", time: "12:30 am" },
{ date: "Jun 29", peg: "79", character: "Green lanterN", time: "12:45 am" },
{ date: "Jun 30", peg: "80", character: "Howl", time: "1:00 am" },
{ date: "Jul 1", peg: "81", character: "HelA", time: "1:15 am" },
{ date: "Jul 2", peg: "82", character: "Halle Berry (storm)", time: "1:30 am" },
{ date: "Jul 3", peg: "83", character: "HerCules", time: "1:45 am" },
{ date: "Jul 4", peg: "84", character: "Humpty Dumpty", time: "2:00 am" },
{ date: "Jul 5", peg: "85", character: "Marty MckFly", time: "2:15 am" },
{ date: "Jul 6", peg: "86", character: "Han Solo", time: "2:30 am" },
{ date: "Jul 7", peg: "87", character: "Hermione Granger", time: "2:45 am" },
{ date: "Jul 8", peg: "88", character: "Hulk", time: "3:00 am" },
{ date: "Jul 9", peg: "89", character: "Hiro Nakamura", time: "3:15 am" },
{ date: "Jul 10", peg: "90", character: "NOrm", time: "3:30 am" },
{ date: "Jul 11", peg: "91", character: "Niel Armstrong", time: "3:45 am" },
{ date: "Jul 12", peg: "92", character: "Nick Burkart", time: "4:00 am" },
{ date: "Jul 13", peg: "93", character: "Night Crawler", time: "4:15 am" },
{ date: "Jul 14", peg: "94", character: "Napoleon Dynamite", time: "4:30 am" },
{ date: "Jul 15", peg: "95", character: "NEo", time: "4:45 am" },
{ date: "Jul 16", peg: "96", character: "nebula stern", time: "5:00 am" },
{ date: "Jul 17", peg: "97", character: "NeGasonic", time: "5:15 am" },
{ date: "Jul 18", peg: "98", character: "Niel Harris (card tricks)", time: "5:30 am" },
{ date: "Jul 19", peg: "99", character: "Nhe-Zha", time: "5:45 am" },
{ date: "Jul 20", peg: "00", character: "tOOthless", time: "5:00 am" },
{ date: "Jul 21", peg: "01", character: "Oliver Arrow", time: "5:15 am" },
{ date: "Jul 22", peg: "02", character: "OBeryn (martel)", time: "5:30 am" },
{ date: "Jul 23", peg: "03", character: "OrChid", time: "5:45 am" },
{ date: "Jul 24", peg: "04", character: "OzymanDiaz", time: "6:00 am" },
{ date: "Jul 25", peg: "05", character: "Omar Epps", time: "6:15 am" },
{ date: "Jul 26", peg: "06", character: "Oscar iSaac", time: "6:30 am" },
{ date: "Jul 27", peg: "07", character: "OGre (shrek)", time: "6:45 am" },
{ date: "Jul 28", peg: "08", character: "Odin Huugin", time: "7:00 am" },
{ date: "Jul 29", peg: "09", character: "Old/New (god of time)", time: "7:15 am" },
{ date: "Jul 30", peg: "10", character: "Ancient one", time: "7:30 am" },
{ date: "Jul 31", peg: "11", character: "Alita Angel", time: "7:45 am" },
{ date: "Aug 1", peg: "12", character: "Ashley Banks", time: "8:00 am" },
{ date: "Aug 2", peg: "13", character: "ArC", time: "8:15 am" },
{ date: "Aug 3", peg: "14", character: "AllaDin", time: "8:30 am" },
{ date: "Aug 4", peg: "15", character: "Albert Einstein", time: "8:45 am" },
{ date: "Aug 5", peg: "16", character: "Anastasia", time: "9:00 am" },
{ date: "Aug 6", peg: "17", character: "Alan Guinness (Obi-wan)", time: "9:15 am" },
{ date: "Aug 7", peg: "18", character: "Adolf Hitler", time: "9:30 am" },
{ date: "Aug 8", peg: "19", character: "AquamaN", time: "9:45 am" },
{ date: "Aug 9", peg: "20", character: "Barack Obama", time: "10:00 am" },
{ date: "Aug 10", peg: "21", character: "Barry allen", time: "10:15 am" },
{ date: "Aug 11", peg: "22", character: "Bumble Bee", time: "10:30 am" },
{ date: "Aug 12", peg: "23", character: "Brian Cranston", time: "10:45 am" },
{ date: "Aug 13", peg: "24", character: "BuDdy (basketball dog)", time: "11:00 am" },
{ date: "Aug 14", peg: "25", character: "Buzz lightyEar", time: "11:15 am" },
{ date: "Aug 15", peg: "26", character: "Bram Stoker", time: "11:30 am" },
{ date: "Aug 16", peg: "27", character: "Buggy (car character)", time: "11:45 am" },
{ date: "Aug 17", peg: "28", character: "Bishop herald", time: "12:00 pm" },
{ date: "Aug 18", peg: "29", character: "Bill nye (concocting chemical synthesis, then throwing at foe)", time: "12:15 pm" },
{ date: "Aug 19", peg: "30", character: "Captain obvious", time: "12:30 pm" },
{ date: "Aug 20", peg: "31", character: "Captain America", time: "12:45 pm" },
{ date: "Aug 21", peg: "32", character: "Carlton banks", time: "1:00 pm" },
{ date: "Aug 22", peg: "33", character: "Charlie Chaplin", time: "1:15 pm" },
{ date: "Aug 23", peg: "34", character: "Carol Danvers", time: "1:30 pm" },
{ date: "Aug 24", peg: "35", character: "Chrono triggEr", time: "1:45 pm" },
{ date: "Aug 25", peg: "36", character: "Claudia schiffer (runway model)", time: "2:00 pm" },
{ date: "Aug 26", peg: "37", character: "Courtney Galiano/CorG", time: "2:15 pm" },
{ date: "Aug 27", peg: "38", character: "Chelsie Hightower", time: "2:30 pm" },
{ date: "Aug 28", peg: "39", character: "christopher nolan", time: "2:45 pm" },
{ date: "Aug 29", peg: "40", character: "Doc Oc", time: "3:00 pm" },
{ date: "Aug 30", peg: "41", character: "Darrow", time: "3:15 pm" },
{ date: "Aug 31", peg: "42", character: "David Blain/", time: "3:30 pm" },
{ date: "Sep 1", peg: "43", character: "Donkey Cong", time: "3:45 pm" },
{ date: "Sep 2", peg: "44", character: "donald duck", time: "4:00 pm" },
{ date: "Sep 3", peg: "45", character: "Duke Ellington", time: "4:15 pm" },
{ date: "Sep 4", peg: "46", character: "Doctor Strange", time: "4:30 pm" },
{ date: "Sep 5", peg: "47", character: "dave grohl", time: "4:45 pm" },
{ date: "Sep 6", peg: "48", character: "daryl hannah", time: "5:00 pm" },
{ date: "Sep 7", peg: "49", character: "Derian knight", time: "5:15 pm" },
{ date: "Sep 8", peg: "50", character: "eyore", time: "5:30 pm" },
{ date: "Sep 9", peg: "51", character: "mEga mAn x", time: "5:45 pm" },
{ date: "Sep 10", peg: "52", character: "eric bristow", time: "6:00 pm" },
{ date: "Sep 11", peg: "53", character: "edward cullen", time: "6:15 pm" },
{ date: "Sep 12", peg: "54", character: "dad", time: "6:30 pm" },
{ date: "Sep 13", peg: "55", character: "Elsa Eva", time: "6:45 pm" },
{ date: "Sep 14", peg: "56", character: "ebenezer scroodge", time: "7:00 pm" },
{ date: "Sep 15", peg: "57", character: "Elastigirl", time: "7:15 pm" },
{ date: "Sep 16", peg: "58", character: "Elizabeth Holmes", time: "7:30 pm" },
{ date: "Sep 17", peg: "59", character: "Emperor Nero", time: "7:45 pm" },
{ date: "Sep 18", peg: "60", character: "SpyrO", time: "8:00 pm" },
{ date: "Sep 19", peg: "61", character: "Serge Arbiter of time", time: "8:15 pm" },
{ date: "Sep 20", peg: "62", character: "SimBa", time: "8:30 pm" },
{ date: "Sep 21", peg: "63", character: "SoniC", time: "8:45 pm" },
{ date: "Sep 22", peg: "64", character: "carmen San Diego", time: "9:00 pm" },
{ date: "Sep 23", peg: "65", character: "Steve Erkel", time: "9:15 pm" },
{ date: "Sep 24", peg: "66", character: "Sabrina spellman", time: "9:30 pm" },
{ date: "Sep 25", peg: "67", character: "Spider Gwen", time: "9:45 pm" },
{ date: "Sep 26", peg: "68", character: "Sherlock Holmes", time: "10:00 pm" },
{ date: "Sep 27", peg: "69", character: "Samus NaraN", time: "10:15 pm" },
{ date: "Sep 28", peg: "70", character: "Goldman", time: "10:30 pm" },
{ date: "Sep 29", peg: "71", character: "Gemma Anderton", time: "10:45 pm" },
{ date: "Sep 30", peg: "72", character: "Ghost Buster", time: "11:00 pm" },
{ date: "Oct 1", peg: "73", character: "Gumby clokey", time: "11:15 pm" },
{ date: "Oct 2", peg: "74", character: "GoDzilla", time: "11:30 pm" },
{ date: "Oct 3", peg: "75", character: "Glenn Einlanzer", time: "11:45 pm" },
{ date: "Oct 4", peg: "76", character: "GhoSt (ant man)", time: "12:00 am" },
{ date: "Oct 5", peg: "77", character: "Gal Gadot (Wonder Woman)", time: "12:15 am" },
{ date: "Oct 6", peg: "78", character: "Gohan", time: "12:30 am" },
{ date: "Oct 7", peg: "79", character: "Green lanterN", time: "12:45 am" },
{ date: "Oct 8", peg: "80", character: "Howl", time: "1:00 am" },
{ date: "Oct 9", peg: "81", character: "HelA", time: "1:15 am" },
{ date: "Oct 10", peg: "82", character: "Halle Berry (storm)", time: "1:30 am" },
{ date: "Oct 11", peg: "83", character: "HerCules", time: "1:45 am" },
{ date: "Oct 12", peg: "84", character: "Humpty Dumpty", time: "2:00 am" },
{ date: "Oct 13", peg: "85", character: "Marty MckFly", time: "2:15 am" },
{ date: "Oct 14", peg: "86", character: "Han Solo", time: "2:30 am" },
{ date: "Oct 15", peg: "87", character: "Hermione Granger", time: "2:45 am" },
{ date: "Oct 16", peg: "88", character: "Hulk", time: "3:00 am" },
{ date: "Oct 17", peg: "89", character: "Hiro Nakamura", time: "3:15 am" },
{ date: "Oct 18", peg: "90", character: "NOrm", time: "3:30 am" },
{ date: "Oct 19", peg: "91", character: "Niel Armstrong", time: "3:45 am" },
{ date: "Oct 20", peg: "92", character: "Nick Burkart", time: "4:00 am" },
{ date: "Oct 21", peg: "93", character: "Night Crawler", time: "4:15 am" },
{ date: "Oct 22", peg: "94", character: "Napoleon Dynamite", time: "4:30 am" },
{ date: "Oct 23", peg: "95", character: "NEo", time: "4:45 am" },
{ date: "Oct 24", peg: "96", character: "nebula stern", time: "5:00 am" },
{ date: "Oct 25", peg: "97", character: "NeGasonic", time: "5:15 am" },
{ date: "Oct 26", peg: "98", character: "Niel Harris (card tricks)", time: "5:30 am" },
{ date: "Oct 27", peg: "99", character: "Nhe-Zha", time: "5:45 am" },
{ date: "Oct 28", peg: "00", character: "tOOthless", time: "5:00 am" },
{ date: "Oct 29", peg: "01", character: "Oliver Arrow", time: "5:15 am" },
{ date: "Oct 30", peg: "02", character: "OBeryn (martel)", time: "5:30 am" },
{ date: "Oct 31", peg: "03", character: "OrChid", time: "5:45 am" },
{ date: "Nov 1", peg: "04", character: "OzymanDiaz", time: "6:00 am" },
{ date: "Nov 2", peg: "05", character: "Omar Epps", time: "6:15 am" },
{ date: "Nov 3", peg: "06", character: "Oscar iSaac", time: "6:30 am" },
{ date: "Nov 4", peg: "07", character: "OGre (shrek)", time: "6:45 am" },
{ date: "Nov 5", peg: "08", character: "Odin Huugin", time: "7:00 am" },
{ date: "Nov 6", peg: "09", character: "Old/New (god of time)", time: "7:15 am" },
{ date: "Nov 7", peg: "10", character: "Ancient one", time: "7:30 am" },
{ date: "Nov 8", peg: "11", character: "Alita Angel", time: "7:45 am" },
{ date: "Nov 9", peg: "12", character: "Ashley Banks", time: "8:00 am" },
{ date: "Nov 10", peg: "13", character: "ArC", time: "8:15 am" },
{ date: "Nov 11", peg: "14", character: "AllaDin", time: "8:30 am" },
{ date: "Nov 12", peg: "15", character: "Albert Einstein", time: "8:45 am" },
{ date: "Nov 13", peg: "16", character: "Anastasia", time: "9:00 am" },
{ date: "Nov 14", peg: "17", character: "Alan Guinness (Obi-wan)", time: "9:15 am" },
{ date: "Nov 15", peg: "18", character: "Adolf Hitler", time: "9:30 am" },
{ date: "Nov 16", peg: "19", character: "AquamaN", time: "9:45 am" },
{ date: "Nov 17", peg: "20", character: "Barack Obama", time: "10:00 am" },
{ date: "Nov 18", peg: "21", character: "Barry allen", time: "10:15 am" },
{ date: "Nov 19", peg: "22", character: "Bumble Bee", time: "10:30 am" },
{ date: "Nov 20", peg: "23", character: "Brian Cranston", time: "10:45 am" },
{ date: "Nov 21", peg: "24", character: "BuDdy (basketball dog)", time: "11:00 am" },
{ date: "Nov 22", peg: "25", character: "Buzz lightyEar", time: "11:15 am" },
{ date: "Nov 23", peg: "26", character: "Bram Stoker", time: "11:30 am" },
{ date: "Nov 24", peg: "27", character: "Buggy (car character)", time: "11:45 am" },
{ date: "Nov 25", peg: "28", character: "Bishop herald", time: "12:00 pm" },
{ date: "Nov 26", peg: "29", character: "Bill nye (concocting chemical synthesis, then throwing at foe)", time: "12:15 pm" },
{ date: "Nov 27", peg: "30", character: "Captain obvious", time: "12:30 pm" },
{ date: "Nov 28", peg: "31", character: "Captain America", time: "12:45 pm" },
{ date: "Nov 29", peg: "32", character: "Carlton banks", time: "1:00 pm" },
{ date: "Nov 30", peg: "33", character: "Charlie Chaplin", time: "1:15 pm" },
{ date: "Dec 1", peg: "34", character: "Carol Danvers", time: "1:30 pm" },
{ date: "Dec 2", peg: "35", character: "Chrono triggEr", time: "1:45 pm" },
{ date: "Dec 3", peg: "36", character: "Claudia schiffer (runway model)", time: "2:00 pm" },
{ date: "Dec 4", peg: "37", character: "Courtney Galiano/CorG", time: "2:15 pm" },
{ date: "Dec 5", peg: "38", character: "Chelsie Hightower", time: "2:30 pm" },
{ date: "Dec 6", peg: "39", character: "christopher nolan", time: "2:45 pm" },
{ date: "Dec 7", peg: "40", character: "Doc Oc", time: "3:00 pm" },
{ date: "Dec 8", peg: "41", character: "Darrow", time: "3:15 pm" },
{ date: "Dec 9", peg: "42", character: "David Blain/", time: "3:30 pm" },
{ date: "Dec 10", peg: "43", character: "Donkey Cong", time: "3:45 pm" },
{ date: "Dec 11", peg: "44", character: "donald duck", time: "4:00 pm" },
{ date: "Dec 12", peg: "45", character: "Duke Ellington", time: "4:15 pm" },
{ date: "Dec 13", peg: "46", character: "Doctor Strange", time: "4:30 pm" },
{ date: "Dec 14", peg: "47", character: "dave grohl", time: "4:45 pm" },
{ date: "Dec 15", peg: "48", character: "daryl hannah", time: "5:00 pm" },
{ date: "Dec 16", peg: "49", character: "Derian knight", time: "5:15 pm" },
{ date: "Dec 17", peg: "50", character: "eyore", time: "5:30 pm" },
{ date: "Dec 18", peg: "51", character: "mEga mAn x", time: "5:45 pm" },
{ date: "Dec 19", peg: "52", character: "eric bristow", time: "6:00 pm" },
{ date: "Dec 20", peg: "53", character: "edward cullen", time: "6:15 pm" },
{ date: "Dec 21", peg: "54", character: "dad", time: "6:30 pm" },
{ date: "Dec 22", peg: "55", character: "Elsa Eva", time: "6:45 pm" },
{ date: "Dec 23", peg: "56", character: "ebenezer scroodge", time: "7:00 pm" },
{ date: "Dec 24", peg: "57", character: "Elastigirl", time: "7:15 pm" },
{ date: "Dec 25", peg: "58", character: "Elizabeth Holmes", time: "7:30 pm" },
{ date: "Dec 26", peg: "59", character: "Emperor Nero", time: "7:45 pm" },
{ date: "Dec 27", peg: "60", character: "SpyrO", time: "8:00 pm" },
{ date: "Dec 28", peg: "61", character: "Serge Arbiter of time", time: "8:15 pm" },
{ date: "Dec 29", peg: "62", character: "SimBa", time: "8:30 pm" },
{ date: "Dec 30", peg: "63", character: "SoniC", time: "8:45 pm" },
{ date: "Dec 31", peg: "64", character: "carmen San Diego", time: "9:00 pm" },

];

// Utility to compute the day-of-year (1-indexed)
function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// Compute the peg index for the current time.
// The time mapping is defined in 15-minute increments starting at 5:00 am.
// We adjust for times before 5:00 am by adding 24 hours.
function getTimePegIndex(date) {
    let totalMinutes = date.getHours() * 60 + date.getMinutes();
    // 5:00 am is 300 minutes after midnight.
    if (totalMinutes < 300) {
        totalMinutes += 1440; // add 24 hours in minutes
    }
    const minutesSinceFive = totalMinutes - 300;
    // There are 96 intervals in 24 hours when using 15-minute increments.
    return Math.floor(minutesSinceFive / 15) % 96;
}

// Root route to provide API information
app.get('/', (req, res) => {
    res.json({
        name: "Number System API",
        description: "API for retrieving day and time characters based on the current date and time",
        endpoints: [
            {
                path: "/getCharacters",
                method: "GET",
                description: "Get characters based on current day and time"
            },
            {
                path: "/getCharactersByDate",
                method: "POST",
                description: "Get characters based on provided date and time",
                body: {
                    date: "MM-DD (e.g., 04-15)",
                    time: "HH:MM (24-hour format) or HH:MM AM/PM (12-hour format)"
                }
            }
        ]
    });
});

app.get('/getCharacters', (req, res) => {
    const now = new Date();

    // Determine the day character:
    // Compute the day-of-year (1-indexed), subtract 1 to make it zero-indexed,
    // and use modulo 100 to cycle through our 100 pegs.
    const dayOfYear = getDayOfYear(now);
    const dayPegIndex = (dayOfYear - 1) % 100;
    const dayCharacter = pegs[dayPegIndex];

    // Determine the time character:
    const timePegIndex = getTimePegIndex(now);
    // For the time mapping, we use the first 96 pegs.
    const timeCharacter = pegs[timePegIndex];

    // (Optional) Compute a formatted time string based on the interval:
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

// POST endpoint to get characters by specific date and time
app.post('/getCharactersByDate', (req, res) => {
    try {
        const { date, time } = req.body;
        
        if (!date || !time) {
            return res.status(400).json({ 
                error: "Missing required parameters", 
                required: { date: "MM-DD", time: "HH:MM or HH:MM AM/PM" } 
            });
        }
        
        // Parse the date (year doesn't matter, use current year)
        const currentYear = new Date().getFullYear();
        const [month, day] = date.split('-').map(num => parseInt(num, 10));
        
        // Validate date inputs
        if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
            return res.status(400).json({ 
                error: "Invalid date format", 
                required: { date: "MM-DD" } 
            });
        }
        
        // Parse the time (handle both 24-hour and AM/PM formats)
        let hours, minutes;
        let timeStr = time.trim().toUpperCase();
        
        // Check if time is in AM/PM format
        if (timeStr.includes('AM') || timeStr.includes('PM')) {
            const isPM = timeStr.includes('PM');
            // Remove AM/PM and any spaces
            timeStr = timeStr.replace(/\s*(AM|PM)\s*$/i, '');
            
            const timeParts = timeStr.split(':');
            if (timeParts.length !== 2) {
                return res.status(400).json({ 
                    error: "Invalid time format", 
                    required: { time: "HH:MM AM/PM" } 
                });
            }
            
            hours = parseInt(timeParts[0], 10);
            minutes = parseInt(timeParts[1], 10);
            
            // Validate time values for 12-hour format
            if (isNaN(hours) || isNaN(minutes) || hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {
                return res.status(400).json({ 
                    error: "Invalid time values", 
                    required: { time: "Hours (1-12), Minutes (0-59)" } 
                });
            }
            
            // Convert to 24-hour format
            if (isPM && hours < 12) {
                hours += 12;
            } else if (!isPM && hours === 12) {
                hours = 0;
            }
        } else {
            // Assume 24-hour format
            const timeParts = timeStr.split(':');
            if (timeParts.length !== 2) {
                return res.status(400).json({ 
                    error: "Invalid time format", 
                    required: { time: "HH:MM" } 
                });
            }
            
            hours = parseInt(timeParts[0], 10);
            minutes = parseInt(timeParts[1], 10);
            
            // Validate time values for 24-hour format
            if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
                return res.status(400).json({ 
                    error: "Invalid time values", 
                    required: { time: "Hours (0-23), Minutes (0-59)" } 
                });
            }
        }
        
        // Create date object (month is 0-indexed in JavaScript Date)
        const dateObj = new Date(currentYear, month - 1, day, hours, minutes);
        
        // Determine the day character
        const dayOfYear = getDayOfYear(dateObj);
        const dayPegIndex = (dayOfYear - 1) % 100;
        const dayCharacter = pegs[dayPegIndex];
        
        // Determine the time character
        const timePegIndex = getTimePegIndex(dateObj);
        const timeCharacter = pegs[timePegIndex];
        
        // Format time for display
        const timeMinutes = 300 + (timePegIndex * 15);
        const hours24 = Math.floor(timeMinutes / 60) % 24;
        const mins = timeMinutes % 60;
        const period = hours24 >= 12 ? "pm" : "am";
        const displayHour = ((hours24 + 11) % 12) + 1;
        const displayMinutes = mins.toString().padStart(2, '0');
        const computedTimeStr = `${displayHour}:${displayMinutes} ${period}`;
        
        // Format input time for display
        const inputPeriod = hours >= 12 ? "PM" : "AM";
        const inputHour = hours % 12 === 0 ? 12 : hours % 12;
        const inputMinutesStr = minutes.toString().padStart(2, '0');
        const formattedInputTime = `${inputHour}:${inputMinutesStr} ${inputPeriod}`;
        
        res.json({
            inputDate: `${month}-${day}`,
            inputTime: formattedInputTime,
            dayCharacter: {
                peg: dayCharacter.peg,
                character: dayCharacter.character,
                note: "Character based on day of year"
            },
            timeCharacter: {
                peg: timeCharacter.peg,
                character: timeCharacter.character,
                time: timeCharacter.time,
                note: "Character based on time of day"
            },
            computedTime: computedTimeStr
        });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`API server is listening at http://localhost:${port}`);
});

// Export for testing
module.exports = {
    pegs,
    getDayOfYear,
    getTimePegIndex
};