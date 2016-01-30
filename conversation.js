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
        text: "Hi, I've been having to deal with my Ukrainian friend, he hates me, It's been giving me alot of psychological stress, he claims that I have an exaggerated self-esteem but he doesn't understand that my positivity is what keeps things moving",
        options: [{
            text: "Have you tried kicking him in the balls?",
            next: 'kickHim'
        }, {
            text: "Why do you think he hates you?",
            next: "friendship"
        }, {
            text: "Do you think you treat him terribly?",
            next: "challengeThought"
        }, ],
    },

    kickHim: {
        deltaStress: +5,
        text: "I did consider it a number of times, I don't know where he put his balls, he is always so worried and can't execute",
        options: [{
            text: "Please understand that most people are like that. It's not his fault.",
            next: "friendship"
        }, {
            text: "Oh I see, I could probably help you find his balls but lets start again.",
            next: "start",
        }, ]
    },

    friendship: {
        deltaStress: -1,
        text: "Well, he doesn't understand that I'm very stubborn because I like to get things finished without worrying about silly things",
        options: [{
            text: "Do you think you are too harsh?",
            next: "harsh"
        }, {
            text: "Maybe he just wants you to listen to him.",
            next: "challengeThought"
        }, ],
    },
    harsh: {
        deltaStress: +5,
        text: "I believe that I can harsh be at times, but its always with good intentions.",
        options: [{
            text: "Have you tried kicking him in the balls?",
            next: 'kickHim'
        }, {
            text: "Why do you think he hates you?",
            next: "challengeThought"
        }],
    },

    challengeThought: {
        deltaStress: -1,
        text: "Well, I try to listen to him. However on top of the thick Ukrainian accent that he has, I think we are both equally as stubborn",
        options: [{
            text: "Do you suppose it could be a bad thing?",
            next: "harsh"
        }, {
            text: "Ah, that explains everything. Maybe a little vodka might fix his tension levels",
            next: "vodka"
        }, ],
    },

    vodka: {
        deltaStress: -20,
        text: "Thanks, I always knew he always just needed to chill and have a drink.",
        winner: true,
    }
}];
