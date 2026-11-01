/* ---- EVIL SPLIT GENERATOR ---- */

const DAYS = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];

/* one accent hue per row, like the cursed posters */
const HUES = [45, 280, 215, 170, 0, 28, 115];

/* ---------- ROW ART ----------
   Want the real AI muscle-demon slop? Drop image files into ./img and list
   the filenames below. The moment this array has anything in it, the drawn
   art below is ignored and your images are used instead.

   e.g. const CUSTOM_ART = ["demon1.png", "pitbull.jpg", "skullguy.webp"];
------------------------------- */
const CUSTOM_ART = [];

/* hand-drawn fallbacks: black silhouettes, rim-lit in the row's colour */
const ART_SVG = [

  /* skull */
  `<svg viewBox="0 0 100 100"><g fill="currentColor"><path d="M50 6C27 6 14 21 14 40c0 11 4 19 10 25l-2 16c-.4 5 3 9 8 9h40c5 0 8.4-4 8-9l-2-16c6-6 10-14 10-25C86 21 73 6 50 6z"/></g><g fill="#000"><path d="M21 28l27 13-5 21-25-13z"/><path d="M79 28L52 41l5 21 25-13z"/><path d="M50 58l-8 15h16z"/><rect x="32" y="77" width="7" height="14"/><rect x="46" y="77" width="7" height="14"/><rect x="60" y="77" width="7" height="14"/></g></svg>`,

  /* horned demon */
  `<svg viewBox="0 0 100 100"><g fill="currentColor"><path d="M26 32C14 24 6 12 6 2c14 0 26 10 32 24z"/><path d="M74 32c12-8 20-20 20-30-14 0-26 10-32 24z"/><path d="M50 16c-19 0-32 13-32 30 0 19 15 34 32 48 17-14 32-29 32-48 0-17-13-30-32-30z"/></g><g fill="#000"><path d="M28 46l20 6-2 12-18-8z"/><path d="M72 46L52 52l2 12 18-8z"/><path d="M36 74h28l-14 12z"/></g></svg>`,

  /* snarling beast */
  `<svg viewBox="0 0 100 100"><g fill="currentColor"><path d="M24 30L12 4l24 12z"/><path d="M76 30L88 4 64 16z"/><path d="M50 14c-18 0-28 12-28 27 0 9 3 16 9 22l-5 12 12-4c4 2 8 3 12 3s8-1 12-3l12 4-5-12c6-6 9-13 9-22 0-15-10-27-28-27z"/></g><g fill="#000"><path d="M28 42l18 5-2 11-16-7z"/><path d="M72 42L54 47l2 11 16-7z"/><path d="M37 67h26l-5 10H42z"/></g><g fill="currentColor"><path d="M41 77l3 8 3-8z"/><path d="M53 77l3 8 3-8z"/></g></svg>`,

  /* goat skull */
  `<svg viewBox="0 0 100 100"><g fill="currentColor"><path d="M30 30C18 26 8 16 6 4c16 0 28 8 32 20z"/><path d="M70 30c12-4 22-14 24-26-16 0-28 8-32 20z"/><path d="M50 20c-14 0-24 9-24 22 0 9 4 16 9 21l6 28c1 5 4 8 9 8s8-3 9-8l6-28c5-5 9-12 9-21 0-13-10-22-24-22z"/></g><g fill="#000"><path d="M32 42l16 7-3 12-15-8z"/><path d="M68 42l-16 7 3 12 15-8z"/><path d="M46 70h8l-4 11z"/></g></svg>`,

  /* flame */
  `<svg viewBox="0 0 100 100"><path fill="currentColor" d="M54 2c5 17-4 25-13 34-8 8-15 18-15 30 0 18 13 32 28 32s28-14 28-32c0-11-5-20-12-28-2 9-6 13-10 13 5-19-2-37-6-49z"/><path fill="#000" d="M53 52c2 9-2 13-6 17-4 5-7 10-7 15 0 8 6 14 13 14s13-6 13-14c0-5-3-10-7-15-4-4-8-9-6-17z"/></svg>`,

  /* bolt */
  `<svg viewBox="0 0 100 100"><path fill="currentColor" d="M58 2L18 56h22L34 98l46-58H56z"/></svg>`,

  /* claw marks */
  `<svg viewBox="0 0 100 100"><g fill="currentColor"><path d="M14 4c6 26 10 54 8 92 8-6 12-14 12-26C34 46 26 20 14 4z"/><path d="M40 2c6 28 10 58 8 96 8-6 13-15 13-28C61 46 52 18 40 2z"/><path d="M68 8c5 24 9 50 7 84 8-6 12-14 12-26 0-20-7-42-19-58z"/></g></svg>`,

  /* grim hood */
  `<svg viewBox="0 0 100 100"><g fill="currentColor"><path d="M50 4C28 4 14 20 14 42c0 22 8 38 10 54h52c2-16 10-32 10-54C86 20 72 4 50 4z"/></g><ellipse cx="50" cy="56" rx="18" ry="27" fill="#000"/><g fill="currentColor"><path d="M37 48l12 5-2 10-11-7z"/><path d="M63 48l-12 5 2 10 11-7z"/></g></svg>`
];

/* nothing on this page is allowed to match anything else */
const ROW_FONTS = ["Anton","Bangers","'Rubik Dirt'","'Metal Mania'","Bungee","Creepster","Impact"];

const BURSTS = ["FREE!!","NEW!!","HOT!!","#1 !!","WOW","GO!!","100%","OMG","NSFW"];

const SUB_JANK = [" !!!", " \u{1F525}\u{1F525}", " (IMPORTANT)", " ‼️", " <<<", " (TRUST)"];

const NAME_DECOR = ["\u{1F525}","\u{1F480}","⚡","\u{1F608}","\u{1F4AF}"];

/* ---------- WORKOUT POOLS ----------
   tier 0 = NATTY     (almost a real program, slightly wrong)
   tier 1 = ENHANCED  (classic meme split energy)
   tier 2 = DEMONIC   (fully unhinged)
   tier 3 = GOONMODE  (the stuff that gets the account banned)
   higher tiers also draw from the lower ones.
------------------------------------ */

const POOLS = [
  [ /* --- NATTY --- */
    ["PUSH",            "CHEST, SHOULDERS, EGO"],
    ["PULL",            "BACK, BICEPS, GRUDGES"],
    ["LEGS",            "QUADS, HAMSTRINGS, REGRET"],
    ["REST",            "REST ISN'T LAZY. YOU ARE, BUT REST ISN'T."],
    ["ARMS DAY",        "AND ALSO ARMS"],
    ["CARDIO",          "ZONE 2. 12 MIN. CHECKED THE CLOCK 40 TIMES."],
    ["UPPER BODY",      "AND THE TOP HALF OF THE LOWER BODY"],
    ["CORE",            "SUCK IT IN FOR TIME"],
    ["ACTIVE RECOVERY", "STRETCHING, FOAM ROLLING, DOOMSCROLLING"],
    ["FULL BODY",       "EXCEPT CALVES. NEVER CALVES."],
    ["MOBILITY",        "TOUCH YOUR TOES. ONE OF THEM."],
    ["DELOAD",          "FROM WHAT, EXACTLY"],
    ["CALVES",          "GENETIC. SKIP. GRIEVE."]
  ],
  [ /* --- ENHANCED --- */
    ["HEAD SHOULDERS",          "KNEES AND TOES. KNEES AND TOES."],
    ["RIGHT TRAP",              "THE LEFT ONE CAN GET FUCKED"],
    ["LOWER ABS",               "UPPER ABS ARE ON A REST DAY"],
    ["EVIL WORKOUT",            "PAIN. SUFFERING. PROGRESS."],
    ["THINK ABOUT HITTING LEGS","DO NOT HIT LEGS"],
    ["LEFT PEC",                "AND TIBIALIS"],
    ["MIND TO MUSCLE",          "0 SETS. 400 REPS OF THINKING."],
    ["MIRROR WORK",             "ANGLES 8X12. LIGHTING TO FAILURE."],
    ["PUMP COVER DAY",          "HOODIE STAYS ON. 10X10. 94 DEGREES."],
    ["CHEST AND LEFT ARM",      "THE RIGHT ARM IS GENETICS. COPE."],
    ["EGO LIFT",                "FORM IS A CONSTRUCT. SO IS YOUR SPINE."],
    ["PRE-WORKOUT ONLY",        "SCOOP #4. NO TRAINING. PURE VIBRATION."],
    ["NECK DAY",                "6X15. YOU LOOK LIKE A THUMB NOW."],
    ["GRIP STRENGTH",           "GOON TIME IS TIME UNDER TENSION"],
    ["FOREARM SPECIALIZATION",  "SAME MOTION AS LAST NIGHT. 4X20."],
    ["PROTEIN SHAKE PR",        "CHUG. GAG. REPEAT. THAT IS THE SET."],
    ["TOM PLATZ LEG DAY",       "PAIN IS MY REST"],
    ["SHRUG",                   "JUST SHRUG. ALL DAY. ABOUT EVERYTHING."],
    ["MAXIMUM INTENSITY",       "REST 2-3 BUSINESS DAYS BETWEEN SETS"],
    ["LAT SPREAD",              "IN PUBLIC. UNPROMPTED. 3X TO FAILURE."],
    ["TRAP BAR TRAP DAY",       "TRAPS ONLY. NO BAR. NO TRAP BAR."],
    ["PERSONAL TRAINER SCAM",   "$400/HR. HE'S 19. HE'S WRONG."],
    ["HALF REPS ONLY",          "FULL RANGE IS FOR COWARDS AND PHYSIOS"],
    ["SKULL CRUSHERS",          "NAMED HONESTLY. 4X10. GODSPEED."],
    ["DROP SET TO NOTHING",     "THE BAR. JUST THE BAR. CRYING."],
    ["GYM SELFIE",              "47 TAKES | 1 POST | 0 LIKES"]
  ],
  [ /* --- DEMONIC --- */
    ["DEMON MODE",              "NO SPOTTER. NO MERCY. NO WITNESSES."],
    ["SOUL CRUSHING",           "YOURS. 5X5."],
    ["SCREAM AT GOD",           "6 SETS. HE IS NOT PICKING UP."],
    ["BLEED ON THE EQUIPMENT",  "DO NOT WIPE IT DOWN. LET THEM KNOW."],
    ["THE FORBIDDEN SPLIT",     "DO NOT ASK. DO NOT GOOGLE IT."],
    ["ASCEND",                  "LEAVE THE MORTAL PLANE. 3X8. NO RETURN."],
    ["YELLING",                 "6 SETS. BETWEEN EVERY SINGLE REP."],
    ["CHALK APPLICATION",       "4X20. DO NOT LIFT ANYTHING. EVER."],
    ["STARE AT THE SQUAT RACK", "8 SETS. 0 REPS. 1000 YARD GAZE."],
    ["UNLEARN LEG DAY",         "RECOVER FROM THE IDEA OF LEGS"],
    ["WATER WEIGHT CUT",        "LOOK SHREDDED FOR ELEVEN MINUTES"],
    ["VASCULARITY TRAINING",    "FLEX DIRECTLY INTO A BOX FAN"],
    ["GOBLIN MODE",             "NO PLAN. NO SHOES. NO LEASE."],
    ["BENCH SOMEONE ELSE",      "THEIR BODYWEIGHT. 1X1. THEY SAID NO."],
    ["NEGATIVE REPS ONLY",      "ALSO A DEEPLY NEGATIVE ATTITUDE"],
    ["FIGHT THE MIRROR",        "YOU WILL LOSE. HE IS BUILT. 4 ROUNDS."],
    ["BREATHE",                 "ADVANCED ONLY. 1 SET TO FAILURE."],
    ["SUMMON SOMETHING",        "BRING IT BACK WITH YOU. 1 REP."],
    ["DIE A LITTLE",            "3X12. RETURN SLIGHTLY WRONG."],
    ["LAWSUIT PREVENTION",      "SIGN THE WAIVER. 1X1. NO WITNESSES."],
    ["PROTEIN POWDER RECALL",   "DRINK IT ANYWAY. 3 SCOOPS. GODSPEED."],
    ["GRUNT LOUDER THAN HIM",   "7 SETS. ESTABLISH DOMINANCE. NO WORDS."],
    ["SWEAT ON THE BENCH",      "LEAVE IT THERE. IT IS A GIFT."],
    ["SNAP A TENDON",           "1 REP. IT WAS ALWAYS GOING TO HAPPEN."],
    ["REST",                    "YOU HAVE NOT EARNED THIS"]
  ],
  [ /* --- GOONMODE --- */
    ["GOON DAY",               "10 SETS | 7 REPS | DO NOT TEXT ME"],
    ["OIL CHECK",              "STAY GREASY. ASK NO QUESTIONS."],
    ["SHIT YOURSELF",          "SCOOP #6. IT IS ALREADY TOO LATE."],
    ["BACKSHOTS",              "AND ALSO BACK. MOSTLY BACK. 4X12."],
    ["EDGING",                 "THE SQUAT RACK. DO NOT RERACK."],
    ["GOONMAXXING",            "0 SETS | 0 STEPS | BLACKOUT CURTAINS"],
    ["GOON CAVE CARDIO",       "0 STEPS. ROOM TEMPERATURE: HOSTILE."],
    ["RAW DOG THE STAIRMASTER","NO MUSIC. NO HOPE. 45 MIN."],
    ["PISS OFF A POWERLIFTER", "CURL IN HIS RACK. 5X5. THEN RUN."],
    ["THE THURSDAY INCIDENT",  "WE DO NOT FUCKING DISCUSS THURSDAY"],
    ["CHOKE A MAN OUT",        "CONSENSUALLY. IT IS BJJ NIGHT. 3 ROUNDS."],
    ["MEWING",                 "JAW DAY. DO NOT SPEAK TO ME. EVER."],
    ["LOOKSMAXXING",           "MIRROR 10X10 | BONE SMASH 0X0 | CRY 1X1"],
    ["APPROACH ANXIETY",       "REHEARSED IT 400 TIMES. SAID NOTHING."],
    ["GET REJECTED",           "3X8. BUILDS CHARACTER. ALLEGEDLY."],
    ["SHE SAW YOUR FORM",      "RERACK. LEAVE. CHANGE YOUR NAME."],
    ["TEXT HER BACK",          "0 SETS | 9 DRAFTS | 0 SENT"],
    ["MOGGING",                "STAND NEAR SMALLER MEN. BREATHE LOUDLY."],
    ["NUT UP",                 "OR SHUT UP. ONE SET. YOUR CALL."],
    ["DICKING AROUND",         "47 MIN ON PHONE | 1 SET | 0 REGRET"],
    ["ASS TO GRASS",           "OR DO NOT COME BACK HERE"],
    ["SIGMA GRINDSET",         "4AM | NO FRIENDS | ALL TRAPS | NO JOY"],
    ["THE WALK OF SHAME",      "DROP TO THE 20S. EVERYONE CLOCKED IT."],
    ["SHIT TALK A BIGGER MAN", "8 SETS. THEN APOLOGIZE FOR 8 SETS."],
    ["SPONSORED BY GOONADE",   "ELECTROLYTES AND SOMETHING ELSE"],
    ["FREE TRIAL CANCELLED",   "THEY TOOK THE MONEY ANYWAY. 5X5."],
    ["HAND STRENGTH PHASE 2",  "SEE MONDAY. SEE ALSO: GRIP STRENGTH."],
    ["POST NUT CLARITY",       "45 MIN ZONE 2. VERY REFLECTIVE."],
    ["DELETE YOUR HISTORY",    "3 SETS. BEFORE SHE GETS HOME."],
    ["NO NUT NOVEMBER",        "FAILED NOV 2ND. TRAIN ANYWAY. 4X12."]
  ]
];

const VOLUMES = [
  "10 SETS | 7 REPS | 0 WITNESSES",
  "4 SETS | INFINITE REPS",
  "1 SET | 1 REP | 1 LAWSUIT",
  "3 SETS | 2 BUSINESS DAYS | 1 APOLOGY",
  "7 SETS | 7 REPS | 7 DEMONS",
  "0 SETS | VIBES ONLY",
  "5X5 | NO REST | NO GOD | NO RERACK",
  "12 SETS | TO FAILURE OF CHARACTER",
  "2 SETS | 400 REPS | 1 PANIC ATTACK",
  "8 SETS | 3 REPS | 0 FORM | 0 SHAME",
  "6 SETS | UNTIL THE LIGHTS GO OUT",
  "9 SETS | 9 REPS | 1 AMBULANCE",
  "3 SETS | 15 REPS | 45 EXCUSES",
  "20 SETS | 1 REP | ALL EGO | NO SPINE",
  "4 SETS | UNTIL SOMEONE ASKS IF YOU'RE OK",
  "1 SET | 100 REPS | 0 SURVIVORS"
];

const SPLIT_NAMES = [
  "THE OIL CHECK PROTOCOL",
  "SIX WEEKS TO A RESTRAINING ORDER",
  "BLOOD, CHALK & LITIGATION",
  "MAXIMUM OVERTRAINING",
  "THE GOON CAVE COVENANT",
  "THE FUCK AROUND & FIND OUT SPLIT",
  "LIABILITY WAIVER LEG PROGRAM",
  "THE LEFT PEC METHOD",
  "HARD TIME HYPERTROPHY",
  "THE GENETICS DENIAL PLAN",
  "THE WIDOWMAKER ROUTINE",
  "PAIN IS MY REST PROGRAM",
  "DIMINISHING RETURNS DELUXE",
  "ZERO EXCUSE DEATH SPLIT",
  "THE 4AM DELUSION PLAN",
  "SPONSORED BY NOBODY",
  "THE UNSPOKEN SPLIT"
];

const REVIEW_LINES = [
  "reviews from guys who do not lift",
  "reviews, 3 of them from the same guy",
  "reviews, 0 of them from a doctor",
  "reviews written entirely in all caps",
  "reviews from people currently in a sling",
  "reviews, 11 lawsuits pending",
  "reviews from his own burner accounts"
];

const STICKERS_A = ["100% REAL","NO CAP","BANNED IN 3 GYMS","AS SEEN ON TIKTOK",
                    "DOCTOR CONCERNED","NOT FDA APPROVED","LAWSUIT PENDING","VIRAL!!"];
const STICKERS_B = ["SAVE THIS","PRINT ME","FREE!!","#1 SPLIT","GO CRAZY",
                    "TAG A FRIEND","DELETE LATER","NSFW"];

/* the comment section is the funniest part of any one of these posts */
const COMMENTS = [
  ["@gooncave2008",    "44.2K", "bro really put GOON DAY on monday AND tuesday \u{1F480}\u{1F480}\u{1F480}"],
  ["@nattyuntil2019",  "12.1K", "ran this for 3 weeks. my doctor has follow up questions"],
  ["@tibialis_tyrone", "8,944", "whoever made this is going to hell and im riding shotgun"],
  ["@she_lifts_more",  "31.7K", "showed my bf this. he cried. he starts monday."],
  ["@legdayliar",      "2,103", "monday goon. tuesday goon. wednesday ??? bro \u{1F62D}"],
  ["@mogged_daily",    "19.4K", "this is the most accurate thing on this entire app fr"],
  ["@preworkout_pete", "6,781", "scoop #6 mentioned. i felt that in my soul AND my colon"],
  ["@rackpuller",      "55.1K", "curling in the squat rack is a lifestyle not a crime"],
  ["@formpolice",      "891",   "every single exercise on here is a lawsuit"],
  ["@trapgod",         "27.3K", "RIGHT TRAP ONLY is genuinely how i train and it shows"],
  ["@thursdayvictim",  "3,409", "what happened on thursday. WHAT HAPPENED ON THURSDAY"],
  ["@wifeleftme",      "71.2K", "started this split in march. she left in april. worth it."],
  ["@notmyrealaccount","15.8K", "my gym banned me for doing wednesday. in the parking lot."],
  ["@zyzzwouldcry",    "40.0K", "saved this to my camera roll. deleted it. saved it again."]
];
/* 1 in 12 commenters gets an odd avatar instead of their initial, picked from
   RARE_AVATARS below -- so with four of them, each shows up around 1 in 48.
   All drawn rather than photographed: at 40px in a circle a face crop turns
   to mush, and it's the silhouette that has to carry it at that size. */
const RARE_ODDS = 12;

const TRAMP_SVG = `<svg viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#c9c3b8"/>
  <path fill="#1a1a1a" d="M50 67c-16 0-30 9-34 22v11h68V89c-4-13-18-22-34-22z"/>
  <path fill="#efece4" d="M41 68l9 9 9-9 4 3-13 13-13-13z"/>
  <path fill="#1a1a1a" d="M50 80l-10-5v10zm0 0l10-5v10z"/>
  <rect x="47.5" y="77" width="5" height="6" rx="1.2" fill="#1a1a1a"/>
  <ellipse cx="33.5" cy="47" rx="3.4" ry="4.8" fill="#e4ddd2"/>
  <ellipse cx="66.5" cy="47" rx="3.4" ry="4.8" fill="#e4ddd2"/>
  <ellipse cx="50" cy="45" rx="16.5" ry="19.5" fill="#e4ddd2"/>
  <path fill="#1a1a1a" d="M34 44c0-6 1-11 3-14 2 3 2 9 1 15zm32 0c0-6-1-11-3-14-2 3-2 9-1 15z"/>
  <path d="M39 40c2-1.5 5-1.5 7 0M54 40c2-1.5 5-1.5 7 0" stroke="#1a1a1a" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <ellipse cx="42.5" cy="46" rx="2.6" ry="3" fill="#1a1a1a"/>
  <ellipse cx="57.5" cy="46" rx="2.6" ry="3" fill="#1a1a1a"/>
  <rect x="44" y="54" width="12" height="6" rx="1.5" fill="#1a1a1a"/>
  <path d="M45.5 64c3 2 6 2 9 0" stroke="#1a1a1a" stroke-width="1.7" fill="none" stroke-linecap="round"/>
  <ellipse cx="50" cy="29" rx="23" ry="4.2" fill="#121212"/>
  <path fill="#1f1f1f" d="M35 29c0-11 6-18 15-18s15 7 15 18z"/>
</svg>`;

/* the gym-influencer archetype: bald, shades, cigar, chain. Deliberately a
   type rather than a named person, so no real individual is on the hook for
   whatever the fake comment next to it says. */
const TOPG_SVG = `<svg viewBox="0 0 100 100">
  <defs>
    <radialGradient id="tg" cx="50%" cy="32%" r="78%">
      <stop offset="0" stop-color="#4b3a1e"/>
      <stop offset="1" stop-color="#0c0a07"/>
    </radialGradient>
  </defs>
  <rect width="100" height="100" fill="url(#tg)"/>
  <path fill="#141414" d="M50 68c-17 0-31 9-35 22v10h70V90c-4-13-18-22-35-22z"/>
  <path fill="#b9825a" d="M41 55h18v14c0 4-4 7-9 7s-9-3-9-7z"/>
  <ellipse cx="31" cy="43" rx="3.4" ry="5" fill="#c9926a"/>
  <ellipse cx="69" cy="43" rx="3.4" ry="5" fill="#c9926a"/>
  <path fill="#cf9a70" d="M50 16c-11 0-18 8-18 19v10c0 11 8 20 18 20s18-9 18-20V35c0-11-7-19-18-19z"/>
  <path fill="#7d5533" opacity=".5" d="M32 45c0 12 8 20 18 20s18-8 18-20c-4 7-10 10-18 10s-14-3-18-10z"/>
  <path d="M38 73c4 6 20 6 24 0" stroke="#e8b43a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  <path fill="#0d0d0d" d="M29 36h42v4c0 6-4 10-10 10h-5c-3 0-5-2-6-4-1 2-3 4-6 4h-5c-6 0-10-4-10-10z"/>
  <path fill="#3a3a3a" d="M32 38h14v2c0 3-2 5-5 5h-3c-3 0-6-2-6-5z"/>
  <path fill="#2a2a2a" d="M54 38h14v2c0 3-3 5-6 5h-3c-3 0-5-2-5-5z"/>
  <rect x="55" y="57" width="26" height="5.5" rx="2.6" fill="#6b4a2a" transform="rotate(11 55 57)"/>
  <circle cx="80" cy="63" r="3" fill="#ff6a1e"/>
  <path d="M82 58c3-4 1-8 5-11" stroke="#d8d2c8" stroke-width="1.6" fill="none" opacity=".4" stroke-linecap="round"/>
</svg>`;

/* the default egg. funny precisely because it is nothing. */
const EGG_SVG = `<svg viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#8299a8"/>
  <path fill="#f6f2e9" d="M50 17c-15 0-25 19-25 36 0 16 11 28 25 28s25-12 25-28c0-17-10-36-25-36z"/>
  <path fill="#ddd6c7" d="M63 24c6 9 9 20 9 29 0 16-11 28-25 28-2 0-4 0-6-1 3 1 6 1 9 1 14 0 25-12 25-28 0-11-5-22-12-29z"/>
  <ellipse cx="41" cy="36" rx="5" ry="8" fill="#fffdf7" opacity=".75" transform="rotate(-18 41 36)"/>
</svg>`;

/* suit, red tie, blonde swoop. a caricature of a type, unlabelled -- nothing
   in the comment next to it is attributed to any named person. */
const SUIT_SVG = `<svg viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#1d2b42"/>
  <path fill="#141f33" d="M50 68c-17 0-31 9-35 22v10h70V90c-4-13-18-22-35-22z"/>
  <path fill="#f2f2ef" d="M41 69l9 8 9-8 5 3-14 13-14-13z"/>
  <path fill="#c0152a" d="M50 79l-4 4 4 17 4-17z"/>
  <ellipse cx="32" cy="46" rx="3.4" ry="5" fill="#dd9a68"/>
  <ellipse cx="68" cy="46" rx="3.4" ry="5" fill="#dd9a68"/>
  <ellipse cx="50" cy="46" rx="17" ry="20" fill="#eeab72"/>
  <path fill="#efd98f" d="M30 37c0-13 9-22 20-22 9 0 16 5 19 12 2 5 0 9-3 9-4-7-10-9-17-8-8 1-13 5-15 11-2 2-4 1-4-2z"/>
  <path fill="#e0c472" d="M29 35c1 6 3 10 7 11-2-5-1-9 1-12z"/>
  <path fill="#e0c472" d="M66 29c3 3 4 7 3 10-2-1-4-3-5-6z"/>
  <path d="M40 46c2.5-2 6-2 8.5 0M51.5 46c2.5-2 6-2 8.5 0" stroke="#2b1d12" stroke-width="2.1" fill="none" stroke-linecap="round"/>
  <ellipse cx="50" cy="59" rx="5.5" ry="3.2" fill="#b9654a"/>
</svg>`;

const RARE_AVATARS = [
  ["tramp", () => TRAMP_SVG],
  ["topg",  () => TOPG_SVG],
  ["egg",   () => EGG_SVG],
  ["suit",  () => SUIT_SVG]
];

/* default-avatar style: initial on a colour derived from the handle, so the
   same user is always the same colour, the way a real app does it */
function avatarFor(user){
  const name = user.replace(/^@/, "");
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
  return { hue: h, letter: name[0].toUpperCase() };
}

/* CUSTOM_ART wins if you filled it in by hand. Otherwise, if img/_manifest.json
   exists (the generator writes one), whatever it lists gets used. Failing both,
   the drawn SVG art above is the fallback. */
let ART_IMAGES = CUSTOM_ART.length ? CUSTOM_ART.slice()
               : (Array.isArray(window.ART_FILES) ? window.ART_FILES.slice() : []);

async function loadArtManifest(){
  if (ART_IMAGES.length) return false;
  try {
    const res = await fetch("img/_manifest.json", { cache: "no-store" });
    if (!res.ok) return false;
    const list = await res.json();
    if (Array.isArray(list) && list.length){
      ART_IMAGES = list;
      return true;
    }
  } catch { /* file:// or no manifest - stick with the SVGs */ }
  return false;
}

/* ---------- UTIL ---------- */

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const rand = (lo, hi) => lo + Math.random() * (hi - lo);

function pickUnique(pool, n){
  const copy = pool.slice();
  const out = [];
  while (out.length < n && copy.length){
    out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  }
  return out;
}

function shuffle(arr){
  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* the chosen tier has to actually dominate the week, otherwise the
   lower tiers drown it out and GOONMODE comes back looking like NATTY */
function buildWeek(lvl){
  if (lvl === 0) return pickUnique(POOLS[0], 7);

  const topCount = 4 + Math.floor(Math.random() * 2);   /* 4 or 5 of 7 */
  const top = pickUnique(POOLS[lvl], topCount);

  let lower = [];
  for (let i = 0; i < lvl; i++) lower = lower.concat(POOLS[i]);
  const rest = pickUnique(lower, 7 - top.length);

  return shuffle(top.concat(rest));
}

const fmt = (n) => n.toLocaleString("en-US");

/* ---------- STATE ---------- */

let level = 1;
let current = [];

const splitEl  = document.getElementById("split");
const cardEl   = document.getElementById("card");
const nameEl   = document.getElementById("splitName");
const reviewEl = document.getElementById("reviewCount");
const cmtEl    = document.getElementById("comments");
const toastEl  = document.getElementById("toast");

/* ---------- RENDER ---------- */

/* spread the art across the week so the same face doesn't show up
   three rows running; cycles through a reshuffle if there are under 7 */
function artForWeek(){
  if (!ART_IMAGES.length) return null;
  let out = [];
  while (out.length < 7) out = out.concat(shuffle(ART_IMAGES.slice()));
  return out.slice(0, 7);
}

function roll(){
  const workouts = buildWeek(level);
  const artPicks = artForWeek();

  current = DAYS.map((day, i) => ({
    day,
    name: workouts[i][0],
    sub:  workouts[i][1] + (Math.random() < .32 ? pick(SUB_JANK) : ""),
    vol:  pick(VOLUMES),
    art:  artPicks
            ? `<img src="img/${artPicks[i]}" alt="" loading="lazy">`
            : pick(ART_SVG),
    hue:  HUES[i],
    rot:  rand(-1.6, 1.6).toFixed(2),
    ar:   rand(-16, 16).toFixed(1),
    rf:   pick(ROW_FONTS),
    ls:   rand(-.03, .07).toFixed(3),
    sx:   rand(.88, 1.16).toFixed(2)
  }));

  splitEl.innerHTML = current.map((d, i) => `
    <li class="day" style="--h:${d.hue};--rot:${d.rot}deg;--ar:${d.ar}deg;--rf:${d.rf};--ls:${d.ls}em;--sx:${d.sx};animation-delay:${i * 40}ms">
      <div class="slot">
        <div class="dow">${d.day}</div>
        <div class="vol">${d.vol}</div>
      </div>
      <div class="slot">
        <div class="name">${d.name}</div>
        <div class="sub">${d.sub}</div>
      </div>
      <div class="art">${d.art}</div>
    </li>
  `).join("");

  const deco = Math.random() < .5 ? pick(NAME_DECOR) : "";
  nameEl.textContent   = deco ? `${deco} ${pick(SPLIT_NAMES)} ${deco}` : pick(SPLIT_NAMES);
  reviewEl.textContent = `${fmt(1000 + Math.floor(Math.random() * 9000))} ${pick(REVIEW_LINES)}`;

  document.querySelector("#burst i").textContent  = pick(BURSTS);
  document.getElementById("stickerA").textContent = pick(STICKERS_A);
  document.getElementById("stickerB").textContent = pick(STICKERS_B);
  document.getElementById("s1").textContent = fmt(900000 + Math.floor(Math.random() * 900000));
  document.getElementById("s3").textContent = (88 + Math.floor(Math.random() * 11)) + "%";

  cmtEl.innerHTML = pickUnique(COMMENTS, 5).map(([user, likes, text]) => `
    <li class="cmt">
      ${(() => {
          if (Math.random() >= 1 / RARE_ODDS)
            return `<div class="pfp" style="--ph:${avatarFor(user).hue}">${avatarFor(user).letter}</div>`;
          const [kind, art] = pick(RARE_AVATARS);
          return `<div class="pfp pfp-rare pfp-${kind}">${art()}</div>`;
        })()}
      <div class="cmt-body">
        <p class="cmt-user">${user}</p>
        <p class="cmt-text">${text}</p>
      </div>
      <div class="cmt-likes">♥<b>${likes}</b></div>
    </li>
  `).join("");

  cardEl.classList.remove("is-rolling");
  void cardEl.offsetWidth;           /* restart the shake */
  cardEl.classList.add("is-rolling");
}

/* ---------- COPY ---------- */

function asText(){
  const lines = current.map(d => `${d.day.padEnd(10)} ${d.name} - ${d.sub}  (${d.vol})`);
  return [
    nameEl.textContent,
    "=".repeat(nameEl.textContent.length),
    "",
    ...lines,
    "",
    "CONSISTENCY IS KING. DISCIPLINE IS POWER. THE LAWSUIT IS PENDING.",
    "-- generated by the EVIL SPLIT GENERATOR"
  ].join("\n");
}

function toast(msg){
  toastEl.textContent = msg;
  toastEl.classList.add("is-up");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toastEl.classList.remove("is-up"), 2400);
}

async function copySplit(){
  const text = asText();
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch {}
    ta.remove();
  }
  toast("COPIED. GO RUIN SOMEONE'S ENTIRE WEEK.");
}

/* ---------- WIRING ---------- */

document.getElementById("reroll").addEventListener("click", roll);
document.getElementById("copy").addEventListener("click", copySplit);

document.querySelectorAll(".int").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".int").forEach(b => b.classList.remove("is-on"));
    btn.classList.add("is-on");
    level = Number(btn.dataset.level);
    roll();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "r" && !/input|textarea/i.test(e.target.tagName)) roll();
});

/* ---------- LITE MODE ----------
   All the grain, scanlines, rays and glow cost real frames on slower
   machines. This drops them and keeps the poster. */
const fxBtn = document.getElementById("fx");

function setFx(on){
  document.body.classList.toggle("lite", !on);
  fxBtn.textContent = "effects: " + (on ? "on" : "off");
  try { localStorage.setItem("evilsplit.fx", on ? "1" : "0"); } catch {}
}

let fxOn = true;
try { fxOn = localStorage.getItem("evilsplit.fx") !== "0"; } catch {}
setFx(fxOn);

fxBtn.addEventListener("click", () => { fxOn = !fxOn; setFx(fxOn); });

roll();
loadArtManifest().then(found => { if (found) roll(); });
