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
    { peg: "29", character: "BilL Nye", time: "12:15 pm" },
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


const week_creatures = [
    // ==========================================
    // ARC 1: GREEK CREATURES (Weeks 1–10)
    // ==========================================
    {
        week: "01",
        creature: "Pegasus",
        creature_description: "A magnificent winged horse with pure white feathers and hooves that glow with celestial light. This divine entity soars high in the heavens, watching over the skies to protect the lands below from harm. Its majestic presence brings hope and safety to all who look up."
    },
    {
        week: "02",
        creature: "Centaur",
        creature_description: "A noble creature with the upper body of a human and the lower body of a powerful horse. Serving as a guardian spirit of the ancient woods, this wise entity patrols the forest boundaries, watching over the flora and fauna as if to protect them from invaders. Its sharp eyes and steady bow ensure the sanctuary remains undisturbed."
    },
    {
        week: "03",
        creature: "Cerberus",
        creature_description: "A colossal, three-headed hound with eyes like burning coals and a mane of writhing serpents. This fearsome entity stands sentinel at the gates of the underworld, watching over the threshold to protect the boundary between life and death. Its terrifying presence ensures that no soul escapes and no living being enters uninvited."
    },
    {
        week: "04",
        creature: "Minotaur",
        creature_description: "A massive, powerful entity with the muscular body of a man and the head of a fierce bull. Wandering the shifting corridors of the great labyrinth, this guardian entity watches over the deep chambers as if to protect its secrets from intruders. Its heavy hooves and resonant snorts echo through the darkness, keeping the maze safe."
    },
    {
        week: "05",
        creature: "Hydra",
        creature_description: "A terrifying, multi-headed water serpent whose breath is poisonous and whose severed heads immediately regrow. This primordial entity dwells within the murky depths of the swamp, watching over the dark waters as if to protect its ancient territory. Its many eyes scan the misty horizon, ensuring no trespassers cross its swampy domain."
    },
    {
        week: "06",
        creature: "Satyr",
        creature_description: "A playful yet powerful goat-man with curved horns and nimble hooves, playing a wooden pan flute. This woodland deity dances through the sunlit groves, watching over the wild groves and keeping them safe from harm. Its enchanting music brings life to the trees and keeps destructive forces at bay."
    },
    {
        week: "07",
        creature: "Harpy",
        creature_description: "A fierce creature with the wings and claws of a giant bird and the sharp features of a human. This avian entity patrols the stormy mountain peaks, watching over the high winds as if to protect the skies from unwanted travelers. Its piercing shrieks warn intruders that the heavens are fiercely guarded."
    },
    {
        week: "08",
        creature: "Chimera",
        creature_description: "A hybrid beast breathing fire, featuring the head of a lion, the body of a goat, and a venomous snake for a tail. This mythical entity guards the volcanic highlands, watching over the fiery crags as if to protect the ancient earth. Its roaring breath keeps all who would disturb the mountains at a distance."
    },
    {
        week: "09",
        creature: "Siren",
        creature_description: "A beautiful sea enchantress with shimmering wings, perched on a rocky cliffside above crashing waves. This mystical entity sings haunting melodies that echo across the sea, watching over the ocean depths as if to protect its aquatic kingdom. Her beautiful voice guides lost sailors away from dangerous reefs while keeping invaders out."
    },
    {
        week: "10",
        creature: "Cyclops",
        creature_description: "A towering, one-eyed giant of immense strength, standing before a smoky forge built into a volcano. This ancient blacksmith entity watches over the subterranean caverns, protecting the divine forge and the weapons of the gods. His singular, burning eye keeps constant vigil over the glowing magma."
    },

    // ==========================================
    // ARC 2: MONSTERS & GUARDIANS (Weeks 11–20)
    // ==========================================
    {
        week: "11",
        creature: "Sphinx",
        creature_description: "A majestic creature with the body of a lion and the wings and head of a human. Perched atop a sun-drenched dune, this riddle-weaving entity watches over the desert sands to protect the sacred tombs. Its intense gaze and analytical mind challenge all who seek to uncover the mysteries of the ancient ruins."
    },
    {
        week: "12",
        creature: "Griffin",
        creature_description: "A majestic beast with the body of a lion and the head and wings of a giant eagle. This noble guardian entity nests on the highest mountain tops, watching over the valley below to protect the gold and treasures of the earth. Its keen eyesight and powerful wings allow it to defend its sanctuary from any threat."
    },
    {
        week: "13",
        creature: "Basilisk",
        creature_description: "A legendary king of serpents, marked by a crown-like crest and a deadly gaze that can turn stone to dust. This lethal entity crawls through the deep caverns, watching over the subterranean world as if to protect its dark secrets. Its presence establishes an absolute domain, keeping the underworld secure."
    },
    {
        week: "14",
        creature: "Cockatrice",
        creature_description: "A bizarre beast with the head of a rooster and the wings and tail of a scaly dragon. This strange entity guards the desolate badlands, watching over the rocky terrain as if to protect the balance of the desert. Its petrifying gaze stops any potential threat in its tracks, keeping the wilderness safe."
    },
    {
        week: "15",
        creature: "Manticore",
        creature_description: "A terrifying hybrid with the body of a red lion, the face of a human, and a scorpion's stinger tail. This formidable entity rules the jagged canyons, watching over the rocky passes as if to protect the territory from outside forces. Its lethal tail and sharp claws stand ready to defend the rugged landscape."
    },
    {
        week: "16",
        creature: "Golem",
        creature_description: "A giant animated defender crafted from solid stone and clay, inscribed with ancient runes of power. This stoic entity stands motionless at the gates of the sanctuary, watching over the citizens to protect them from external threats. It only moves when danger approaches, using its massive strength to shield the innocent."
    },
    {
        week: "17",
        creature: "Lamassu",
        creature_description: "A divine protector with the body of a winged bull and the crowned head of a human. Standing at the city gates, this celestial entity watches over the kingdom to protect it from malevolent spirits. Its serene expression and giant wings project a shield of absolute safety over the civilization."
    },
    {
        week: "18",
        creature: "Anzu",
        creature_description: "A massive storm bird with the head of a lion, capable of breathing fire and summoning hurricanes with its wings. This Mesopotamian storm entity watches over the high clouds to protect the heavens and the cosmic order. Its thundering cries echo across the sky, reminding all of its supreme power."
    },
    {
        week: "19",
        creature: "Roc",
        creature_description: "A giant bird of prey so immense that its wingspan can blot out the sun. This colossal avian entity nests in the highest mountain ranges, watching over the skies and valleys to protect the natural ecosystem. Its powerful shadow brings awe and guards the wilderness from destructive forces."
    },
    {
        week: "20",
        creature: "Kraken",
        creature_description: "A colossal sea monster with massive tentacles, dwelling in the dark abyss of the ocean. This ancient leviathan watches over the deep ocean trenches to protect the secrets of the sea. Its rising form warns ships to respect the power of the ocean, keeping the deep waters undisturbed."
    },

    // ==========================================
    // ARC 3: BIRDS & BEASTS (Weeks 21–30)
    // ==========================================
    {
        week: "21",
        creature: "Phoenix",
        creature_description: "A legendary bird of flame and golden feathers, symbolizing eternal rebirth. This radiant entity nests in the sunlit peaks, watching over the valleys as if to protect the cycle of life and renewal. Its fiery warmth heals the sick and drives away shadows from the land."
    },
    {
        week: "22",
        creature: "Thunderbird",
        creature_description: "A mythical storm bird that creates thunder by flapping its wings and shoots lightning from its eyes. This powerful weather deity watches over the plains, protecting the land by bringing life-giving rain. Its flashing eyes ward off malevolent forces from the sky."
    },
    {
        week: "23",
        creature: "Unicorn",
        creature_description: "A pure white horse with a single spiral horn glowing with soft, magical light. This gentle entity walks through the deepest forests, watching over the streams and trees to protect the purity of nature. Its healing touch cleanses the waters and shields the woods from decay."
    },
    {
        week: "24",
        creature: "Bigfoot",
        creature_description: "A massive, hairy forest beast that walks silently among the giant redwoods. This elusive entity watches over the deep wilderness, protecting the ancient forests from human destruction. Its quiet presence blends into the trees, guarding the secrets of the wild."
    },
    {
        week: "25",
        creature: "Yeti",
        creature_description: "A large snow beast covered in white fur, adapted to the freezing temperatures of the high peaks. This ancient entity watches over the snow-covered mountains, protecting the alpine ecosystem from harm. Its heavy footsteps warn travelers to treat the icy wilderness with respect."
    },
    {
        week: "26",
        creature: "Loch Ness Monster",
        creature_description: "A mysterious, long-necked lake beast swimming gracefully through deep, dark waters. This ancient aquatic entity watches over the misty lake, protecting the underwater caves and their long-forgotten secrets. Its silent movements keep the lake peaceful and protected."
    },
    {
        week: "27",
        creature: "Selkie",
        creature_description: "A gentle seal-human creature that shed its skin to walk on the sandy shores. This ocean-born entity watches over the coastal waters, protecting the sea life and the beaches from harm. Its dual nature bridges the land and sea, keeping both in harmony."
    },
    {
        week: "28",
        creature: "Mermaid",
        creature_description: "A beautiful sea creature with a shimmering fish tail, swimming among colorful coral reefs. This aquatic entity watches over the marine kingdom, protecting the fish and ocean life from danger. Her soothing voice calls out to protect the oceans from being harmed."
    },
    {
        week: "29",
        creature: "Kelpie",
        creature_description: "A magical water horse that lures travelers to ride before dragging them into the depths. This powerful entity watches over the rivers and lochs, protecting the freshwater channels from invaders. Its wild form serves as a warning, keeping the waterways clean and safe."
    },
    {
        week: "30",
        creature: "Dragon",
        creature_description: "A massive, scaled dragon breathing golden fire, sitting atop a mountain of treasure. This king of beasts watches over the realm from the highest peaks, acting as a god-like guardian to protect the land. Its immense power and wise eyes keep all threats far away."
    },

    // ==========================================
    // ARC 4: ASIAN MYTHOLOGY (Weeks 31–40)
    // ==========================================
    {
        week: "31",
        creature: "Naga",
        creature_description: "A divine serpent deity with multiple snake hoods, rising from the sacred waters. This powerful entity watches over the rivers and temple gates, protecting the spiritual balance of the land. Its coils shield the sacred springs from being polluted."
    },
    {
        week: "32",
        creature: "Garuda",
        creature_description: "A divine eagle with golden wings and a human torso, soaring through the heavens. This celestial bird deity watches over the skies, protecting the righteous from evil forces and serpents. Its powerful wings generate winds that sweep away negative energies."
    },
    {
        week: "33",
        creature: "Rakshasa",
        creature_description: "A powerful demon entity with shapeshifting abilities and fierce eyes. This ancient guardian watches over the dark forests, protecting the borders of the spiritual realm. Its formidable presence ensures that the balance between worlds is never broken."
    },
    {
        week: "34",
        creature: "Qilin",
        creature_description: "An auspicious beast with scales, antlers, and a body wrapped in holy flames. This gentle deity walks on grass without crushing a single blade, watching over the peaceful valleys to protect them from war. Its presence brings prosperity and safety to the righteous."
    },
    {
        week: "35",
        creature: "Chinese Dragon",
        creature_description: "A majestic, serpentine dragon flying through the clouds without wings. This Eastern deity watches over the weather and agriculture, protecting the farmlands by bringing rain. Its benevolent gaze brings harmony to the entire empire."
    },
    {
        week: "36",
        creature: "Jiangshi",
        creature_description: "A hopping vampire dressed in ancient robes, moving through the night with outstretched arms. This supernatural entity watches over the old burial grounds, protecting the resting places of ancestors from grave robbers. Its stiff posture and talisman keep the cemetery quiet."
    },
    {
        week: "37",
        creature: "Kitsune",
        creature_description: "A mythical nine-tailed fox spirit with glowing tails and wise, ancient eyes. This powerful kitsune entity watches over the sacred shrines, protecting the boundary between spirits and humans. Its mystical illusions keep unwanted intruders from desecrating the sanctuary."
    },
    {
        week: "38",
        creature: "Tanuki",
        creature_description: "A magical shapeshifting raccoon dog with a big belly and a straw hat. This mischievous entity watches over the mountain paths, protecting the forests and travelers from danger. Its shape-shifting tricks keep the woods safe from harm."
    },
    {
        week: "39",
        creature: "Kappa",
        creature_description: "A river yokai with a shell and a water-filled depression on its head. This aquatic entity watches over the flowing rivers, protecting the local fish and riverbeds. Its presence ensures that the community respects the life of the river."
    },
    {
        week: "40",
        creature: "Tengu",
        creature_description: "A crow spirit with black wings and a long nose, carrying a magical fan. This proud mountain entity watches over the high forests, protecting the trees from greedy loggers. Its swift flight and wind magic keep the mountains pure."
    },

    // ==========================================
    // ARC 5: DARK / SUPERNATURAL (Weeks 41–50)
    // ==========================================
    {
        week: "41",
        creature: "Ghost",
        creature_description: "A glowing, ethereal spirit floating silently through the halls of an ancient castle. This spectral entity watches over the historic ruins, protecting the memories and history of the past. Its haunting presence keeps the ancient walls safe from destruction."
    },
    {
        week: "42",
        creature: "Vampire",
        creature_description: "A noble, pale vampire standing on a high balcony, wrapped in a velvet cloak. This immortal entity watches over the dark valleys, protecting the night domain from chaos. Its sharp senses and commanding presence keep the shadows in perfect order."
    },
    {
        week: "43",
        creature: "Werewolf",
        creature_description: "A powerful beast howling under the full moon, with thick fur and sharp claws. This lupine entity watches over the wild woodlands, protecting the territory from intruders. Its fierce strength and loyalty to the pack keep the forests safe."
    },
    {
        week: "44",
        creature: "Zombie",
        creature_description: "A tireless, undead guardian walking through the overgrown graveyard. This ancient entity watches over the silent tombs, protecting the sanctuary of the dead from intruders. Its relentless presence ensures that the cemetery remains undisturbed."
    },
    {
        week: "45",
        creature: "Banshee",
        creature_description: "A sorrowful spirit with flowing hair, wailing under the starlit sky. This mystical entity watches over the family line, protecting their legacy and warning of danger. Her chilling cry acts as a shield to prepare the household for what is to come."
    },
    {
        week: "46",
        creature: "Djinn",
        creature_description: "A powerful spirit of fire and wind, rising from a brass lamp in a swirl of smoke. This ancient entity watches over the desert sands, protecting the hidden treasures and secrets of the dunes. Its magical power keeps the desert balance intact."
    },
    {
        week: "47",
        creature: "Ifrit",
        creature_description: "A massive demon of pure fire, with glowing horns and skin made of lava. This fiery entity watches over the volcanic caves, protecting the deep fires of the earth. Its intense heat deters any who would try to steal the planet's core energy."
    },
    {
        week: "48",
        creature: "Oni",
        creature_description: "A fierce demon with red skin, horns, and a giant iron club. This powerful entity watches over the mountain gates, protecting the paths from malevolent invaders. Its terrifying strength keeps the mountain passes secure."
    },
    {
        week: "49",
        creature: "Jorogumo",
        creature_description: "A spider spirit that can transform into a beautiful woman, weaving golden webs. This cunning entity watches over the misty waterfalls, protecting the secluded valley from intruders. Her webs act as a natural barrier to keep the environment safe."
    },
    {
        week: "50",
        creature: "Frost Giant",
        creature_description: "A colossal giant made of ice and snow, holding a frosted war club. This ancient entity watches over the frozen north, protecting the glaciers from melting. Its freezing breath keeps the arctic lands safe from warm winds."
    },

    // ==========================================
    // ARC 6: RAGNAROK FINALE (Weeks 51–52)
    // ==========================================
    {
        week: "51",
        creature: "Jormungandr",
        creature_description: "The massive World Serpent, coiled around the entire ocean floor and biting its own tail. This titanic entity watches over the deep oceans, protecting the structural integrity of the world. Its steady coils keep the seas from swallowing the lands."
    },
    {
        week: "52",
        creature: "Fenrir",
        creature_description: "A colossal, legendary wolf with eyes like fire and jaws that can reach the heavens. This god-like entity watches over the icy wilderness, protecting the wild packs from external threats. Its wild strength stands as a guardian of the natural order."
    }
];

function getWeekNumber(date) {
    const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

    // ISO week starts Monday. Thursday determines the ISO year/week.
    const dayNumber = target.getUTCDay() || 7;
    target.setUTCDate(target.getUTCDate() + 4 - dayNumber);

    const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
    const weekNumber = Math.ceil((((target - yearStart) / 86400000) + 1) / 7);

    return weekNumber;
}



function getWeekCreature(date) {
    const weekNumber = getWeekNumber(date);
    const creatureEntry = week_creatures[weekNumber - 1] || week_creatures[0];

    return {
        week: weekNumber,
        weekFormatted: String(weekNumber).padStart(2, "0"),
        creature: creatureEntry.creature,
        creature_description: creatureEntry.creature_description,
        note: "Week-based mythical creature"
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
    const weekCreature = getWeekCreature(dateObj);
    const dayTheme = getDayTheme(dateObj);

    const timePegIndex = getTimePegIndex(dateObj);
    const timeCharacter = pegs[timePegIndex];
    const computedTimeStr = getComputedTimeString(timePegIndex);

    return {
        weekCreature,
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

if (require.main === module) {
    app.listen(port, '0.0.0.0', () => {
        console.log(`API server is listening at http://0.0.0.0:${port}`);
    });
}

module.exports = {
    app,
    pegs,
    dayThemes,
    getWeekNumber,
    getWeekCreature,
    getDayTheme,
    getTimePegIndex,
    getComputedTimeString,
    parseDateTimeInput,
    buildCharacterResponse
};