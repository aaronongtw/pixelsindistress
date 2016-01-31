window.OurGame.conversationsPaul= [{
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
            text: "Meh, more pain more gain.",
            next: "doPunchHim"
        }, {
            text: "Oh I see, we need to come up with something else",
            next: "start",
        }, ]
    },
  }
];
