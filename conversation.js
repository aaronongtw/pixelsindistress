window.OurGame.conversations = [{
    start: {
        text: "Hi, I've been hating my frined Aaron lately, because he's incompetent in psychology, but highly exaggerated self-esteem",
        options: [{
            text: "Have you tried punching him in the face?",
            next: 'punchHim'
        }, {
            text: "Does it affect your friendship?",
            next: "friendship"
        }, {
            text: "Then why do you need a friend like that?",
            next: "hesaclown"
        }, ],
    },

    punchHim: {
        deltaStress: +5,
        text: "I did consider it a number of times, but he's wearing stupid glasses, I'm worried glass will cut his eyes",
        options: [{
            text: "That sounds like a good thing to happen",
            next: "doPunchHim"
        }, {
            text: "Oh I see, we need to come up with something else",
            next: "start",
        }, ]
    },

    friendship: {
        deltaStress: -1,
        text: "Well, we can't agree on how to tackle our project",
        options: [{
            text: "Is that an important project?",
            next: "project"
        }, {
            text: "Are there reasons why he could actually know about psychology?",
            next: "challengeThought"
        }, ],
    },

    challengeThought: {
        deltaStress: -1,
        text: "He says he spends a lot of time with a friend who's been through psychological help",
        options: [{
            text: "Does he have any other experience in mental health?",
            next: "challengeThought2"
        }, {
            text: "Now that you've mentioned it, how do you feel about working with him?",
            next: "phase4"
        }, ],
    },

    hesaclown: {
        deltaStress: -20,
        text: "Thanks, I always knew he's a clown, but it's great to know your professional opinion on his mental illness.",
        winner: true,
    }
}, {
    start: {
        text: "Hi, I need drugs. I have depression",
        options: [{
            text: "Okay.",
            next: 'drughim'
        }, {
            text: "Why are you depressed, tell me more?",
            next: "explain"
        }, {
            text: "No",
            next: "declined"
        }, ],
    },

    drughim: {
        deltaStress: -15,
        text: "Thanks Doc, I might be back",
        winner: true
    },

    explain: {
        deltaStress: +10,
        text: "Can't you just give me what I want?",
        options: [{
            text: "I need to understand your situation before I can give you drugs",
            next: "explain2"
        }, {
            text: "Fine.",
            next: "drughim"
        }, ],
    },

    explain2: {
        deltaStress: +15,
        text: "WHY THE FUCK NOT!?",
        options: [{
            text: "It is against protocol",
            next: "declined"
        }, {
            text: "Fine.",
            next: "drughim"
        }, ],
    },
    declined: {
        deltaStress: +5,
        text: "WHY NOT? I'M GOING TO KILL MYSELF",
        options: [{
            text: "Please don't! Have a lollipop",
            next: "lollipop"
        }, {
            text: "Well, I don't like you",
            next: "boom"
        }, ],
    },

    lollipop: {
        deltaStress: -50,
        text: "Thanks, this is amazing",
        winner: true,

    },

    boom: {
        deltaStress: +50,
        text: "I FUCKING HATE YOU. I'll KILL YOU! I'LL KILL YOU!",
        winner: true,

    }
}, {
    start: {
        text: "Hi, I need drugs. I have depression",
        options: [{
            text: "Okay.",
            next: 'drughim'
        }, {
            text: "Why are you depressed, tell me more?",
            next: "explain"
        }, {
            text: "No",
            next: "declined"
        }, ],
    },

    drughim: {
        deltaStress: -15,
        text: "Thanks Doc, I might be back",
        winner: true
    },

    explain: {
        deltaStress: +10,
        text: "Can't you just give me what I want?",
        options: [{
            text: "I need to understand your situation before I can give you drugs",
            next: "explain2"
        }, {
            text: "Fine.",
            next: "drughim"
        }, ],
    },

    explain2: {
        deltaStress: +15,
        text: "WHY THE FUCK NOT!?",
        options: [{
            text: "It is against protocol",
            next: "declined"
        }, {
            text: "Fine.",
            next: "drughim"
        }, ],
    },
    declined: {
        deltaStress: +5,
        text: "WHY NOT? I'M GOING TO KILL MYSELF",
        options: [{
            text: "Please don't! Have a lollipop",
            next: "lollipop"
        }, {
            text: "Well, I don't like you",
            next: "boom"
        }, ],
    },

    lollipop: {
        deltaStress: -50,
        text: "Thanks, this is amazing",
        winner: true,

    },

    boom: {
        deltaStress: +50,
        text: "I FUCKING HATE YOU. I'll KILL YOU! I'LL KILL YOU!",
        winner: true,

    }
}, {
    start: {
        text: "Today so stupid. Pizza so bad and Aaron is so mean to me.",
        options: [{
            text: "Grow some balls?",
            next: 'screw'
        }, {
            text: "So why do you think Aaron is mean to you?",
            next: "friendship"
        }, {
            text: "Do you think you treat him terribly?",
            next: "challengeThought"
        }, ],
    },

    screw: {
        deltaStress: +5,
        text: "Screw you.",
        winner: true
    },

    friendship: {
        deltaStress: -5,
        text: "I don't know, I'm always so nice to him but he always so rude to me",
        options: [{
            text: "Maybe you're interpretation of nice isn't the way he interpretes it.",
            next: "inter"
        }, {
            text: "Maybe you should grow some balls",
            next: "screw"
        }, ],
    },
    inter: {
        deltaStress: -5,
        text: "But I know I'm nice, I'm always so nice.",
        options: [{
            text: "I think so too.",
            next: 'thanks'
        }, {
            text: "I don't think so",
            next: "screw"
        }],
    },

    thanks: {
        deltaStress: -1,
        text: "See, I told you!",
        options: [{
            text: "I'm sorry Danial, you are the greatest",
            next: "win"
        }, {
            text: "Hah! I lied, you need to grow some balls",
            next: "screw"
        }, ],
    },

    win: {
        deltaStress: -20,
        text: "I know right.",
        winner: true
    }
}];
