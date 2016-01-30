
window.OurGame.conversations = [
  {
    start: {
      text: "Hi, I've been hating my frined Aaron lately, because he's incompetent in psychology, but highly exaggerated self-esteem",
      options: [
        {
          text: "Have you tried punching him in the face?",
          next: 'punchHim'
        },
        {
          text: "Does it affect your friendship?",
          next: "friendship"
        },
        {
          text: "Then why do you need a friend like that?",
          next: "hesaclown"
        },
      ],
    },

    punchHim: {
      deltaStress: +5,
      text: "I did consider it a number of times, but he's wearing stupid glasses, I'm worried glass will cut his eyes",
      options: [
        {
          text: "That sounds like a good thing to happen",
          next: "doPunchHim"
        },
        {
          text: "Oh I see, we need to come up with something else",
          next: "start",
        },
      ]
    },

    friendship: {
      deltaStress: -1,
      text: "Well, we can't agree on how to tackle our project",
      options: [
        {
          text: "Is that an important project?",
          next: "project"
        },
        {
          text: "Are there reasons why he could actually know about psychology?",
          next: "challengeThought"
        },
      ],
    },

    challengeThought: {
      deltaStress: -1,
      text: "He says he spends a lot of time with a friend who's been through psychological help",
      options: [
        {
          text: "Does he have any other experience in mental health?",
          next: "challengeThought2"
        },
        {
          text: "Now that you've mentioned it, how do you feel about working with him?",
          next: "phase4"
        },
      ],
    },

    hesaclown: {
      deltaStress: -20,
      text: "Thanks, I always knew he's a clown, but it's great to know your professional opinion on his mental illness.",
      winner: true,
    }
  },
];
