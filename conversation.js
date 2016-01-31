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
            text: "Meh, more pain more gain.",
            next: "doPunchHim"
        }, {
            text: "Oh I see, we need to come up with something else",
            next: "start",
        }, ]
    },

    doPunchHim: {
        deltaStress: -30,
        text: "I feel much better. Thanks Doc",
        winner: true,
        options: [{
            text: "Glad I could help. Have a nice day.",
            farewell: true,}],
        good: true,
        morale: -2,
    },

    friendship: {
        deltaStress: -1,
        text: "Well, we can't agree on how to tackle our project",
        options: [{
            text: "Have you tried punching him in the face?",
            next: 'punchHim'
        }, {
            text: "Are there reasons why he could actually know about psychology?",
            next: "challengeThought"
        }, ],
    },

    challengeThought: {
        deltaStress: -1,
        text: "He says he spends a lot of time with a friend who's been through psychological help",
        options: [{
            text: "You know nothing, Jon Snow",
            next: "hesaclown"
        }, {
            text: "I think he's crazy, maybe punch him",
            next: 'punchHim'
        }, ],
    },

    hesaclown: {
        deltaStress: -20,
        text: "Thanks, I always knew he's a clown, but it's great to know your professional opinion on his mental illness.",
        winner: true,
        options: [{
            text: "Glad I could help. Have a nice day.",
            farewell: true,}],
        good: true,
        morale: 1,
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
            next: "challengeThought"
        }, {
            text: "Maybe he just wants you to listen to him.",
            next: "challengeThought"
        }, ],
    },

    challengeThought: {
        deltaStress: -1,
        text: "Well, I try to listen to him. However on top of the thick Ukrainian accent that he has, I think we are both equally as stubborn",
        options: [{
            text: "Do you suppose it could be a bad thing?",
            next: "friendship"
        }, {
            text: "Ah, that explains everything. Maybe a little vodka might fix his tension levels",
            next: "vodka"
        }, ],
    },

    vodka: {
        deltaStress: -20,
        text: "Thanks, I always knew he always just needed to chill and have a drink.",
        winner: true,
        options: [{
            text: "Glad I could help. Have a nice day.",
            farewell: true,}],
        good: true,
        morale: 1,
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
        winner: true,
        options: [{
            text: "Glad I could help. Have a nice day.",
            farewell: true,}],
        good: true,
        morale: -2,
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
        options: [{
            text: "Glad I could help. Have a nice day.",
            farewell: true,}],
        good: true,
        morale: 1,
    },

    boom: {
        deltaStress: +50,
        text: "I FUCKING HATE YOU. I'll KILL YOU! I'LL KILL YOU!",
        winner: true,
        options: [{
            text: "Glad I could help. Have a nice day.",
            farewell: true,}],
        good: false,
        morale: -2,
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

    challengeThought: {
        deltaStress: -5,
        text: "Sometimes. Although -- I'm a very nice guy all the time. No, I don't think I treat him terribly. I think I'm perfect.",
        options: [{
            text: "You don't look like a very nice guy",
            next: 'screw'
        }, {
            text: "So why do you think Aaron is mean to you?",
            next: "friendship"
        }, ],
    },

    screw: {
        deltaStress: +5,
        text: "Screw you.",
        winner: true,
        options: [{
            text: "Glad I could help. Have a nice day.",
            farewell: true,}],
        good: false,
        morale: -2,
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
        winner: true,
        options: [{
            text: "Glad I could help. Have a nice day.",
            farewell: true,}],
        good: true,
        morale: 1,
    }
}, {
    start: {
        text: "Doctor, I don't know what to do, everytime I look at myself in the mirror, I feel sad.",
        options: [{
            text: "I would feel sad too if I were you.",
            next: 'screw'
        }, {
            text: "You know, sometimes I feel the same way too.",
            next: "friendship"
        }, {
            text: "Do you feel inadequate?",
            next: "challengeThought"
        }, ],
    },

    challengeThought: {
        deltaStress: -5,
        text: "I just don't understand why the world hates me so much. What have I done to deserve this?",
        options: [{
            text: "I would understand why if I were you. Have you seen the mirror lately?",
            next: 'screw'
        }, {
            text: "Often times we feel very small in this world. We think the world hates us but we fail to see the good things in life.",
            next: "friendship"
        }, ],
    },

    screw: {
        deltaStress: +5,
        text: "Why would you say such a thing!",
        winner: true,
        options: [{
            text: "Glad I could help. Have a nice day.",
            farewell: true,}],
        good: false,
        morale: -2,
    },

    friendship: {
        deltaStress: -5,
        text: "What good things have I got in my life? I've never hurt anyone and done anything bad.",
        options: [{
            text: "Why do you feel that way?",
            next: "inter"
        }, {
            text: "Come to think about it, not alot I guess.",
            next: "screw"
        }, ],
    },
    inter: {
        deltaStress: -5,
        text: "I feel that way because I feel all alone in this world. No one even knows I'm alive.",
        options: [{
            text: "That is not true August. I care, and I want to be there to help you.",
            next: 'thanks'
        }, {
            text: "What was your name again?",
            next: "screw"
        }],
    },

    thanks: {
        deltaStress: -1,
        text: "Thank you Doctor, I'll definitely come back to get your help",
        options: [{
            text: "Please do.",
            next: "win"
        }, {
            text: "Nah, You make me depressed.",
            next: "screw"
        }, ],
    },

    win: {
        deltaStress: -20,
        text: "Thank you.",
        winner: true,
        good: true,
        morale: 1,
        options: [{
            text: "Glad I could help. Have a nice day.",
            farewell: true,
            next: 'nextVisit',
        }]
    },

    nextVisit: {
        deltaStress: -10,
        text: "I'm back Doctor, thank you for seeing me. I'm glad I talked to you before, I've been feeling slightly better since then.",
        options: [{
          text: "Ofcourse. Lets talk.",
          next: "talk",
        }, {
          text: "What are you doing here? I thought I told you not to come back!",
          next: "angry",
        }]
    },

    talk: {
      deltaStress: -20,
      text: "*talk talk talk talk*. I feel much better now. Thank you so much.",
      winner: true,
      options: [{
          text: "Glad I could help. Have a nice day.",
          farewell: true,}],
      good: true,
      morale: 1,
    }

},{
    start: {
        text: "Hey man, there is something I need you to do for me.",
        options: [{
            text: "What can I help you with?",
            next: 'screw'
        }, {
            text: "This seems alittle dodgy. What do you want?",
            next: "challenge"
        }, {
            text: "Go away.",
            next: "away"
        }, ],
    },

    challenge: {
        deltaStress: -5,
        text: "Nothing, I just need you to pass a message to somebody for me",
        options: [{
            text: "I would understand why if I were you. Have you seen the mirror lately?",
            next: 'screw'
        }, {
            text: "Often times we feel very small in this world. We think the world hates us but we fail to see the good things in life.",
            next: "friendship"
        }, ],
    },

    screw: {
        deltaStress: +5,
        text: "Why would you say such a thing!",
        winner: true,
        options: [{
            text: "Glad I could help. Have a nice day.",
            farewell: true,}],
        good: false,
        morale: -2,
    },

    friendship: {
        deltaStress: -5,
        text: "What good things have I got in my life? I've never hurt anyone and done anything bad.",
        options: [{
            text: "Why do you feel that way?",
            next: "inter"
        }, {
            text: "Come to think about it, not alot I guess.",
            next: "screw"
        }, ],
    },
    inter: {
        deltaStress: -5,
        text: "I feel that way because I feel all alone in this world. No one even knows I'm alive.",
        options: [{
            text: "That is not true August. I care, and I want to be there to help you.",
            next: 'thanks'
        }, {
            text: "What was your name again?",
            next: "screw"
        }],
    },

    thanks: {
        deltaStress: -1,
        text: "Thank you Doctor, I'll definitely come back to get your help",
        options: [{
            text: "Please do.",
            next: "win"
        }, {
            text: "Nah, You make me depressed.",
            next: "screw"
        }, ],
    },

    win: {
        deltaStress: -20,
        text: "Thank you.",
        winner: true,
        good: true,
        morale: 1,
        options: [{
            text: "Glad I could help. Have a nice day.",
            farewell: true,
            next: 'nextVisit',
        }]
    },

    nextVisit: {
        deltaStress: -10,
        text: "I'm back Doctor, thank you for seeing me. I'm glad I talked to you before, I've been feeling slightly better since then.",
        options: [{
          text: "Ofcourse. Lets talk.",
          next: "talk",
        }, {
          text: "What are you doing here? I thought I told you not to come back!",
          next: "angry",
        }]
    },

    talk: {
      deltaStress: -20,
      text: "*talk talk talk talk*. I feel much better now. Thank you so much.",
      winner: true,
      options: [{
          text: "Glad I could help. Have a nice day.",
          farewell: true,}],
      good: true,
      morale: 1,
    }

}];
