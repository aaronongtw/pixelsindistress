window.OurGame.characters = [{
    name: 'Paul Korzhyk',
    gender: 'M',
    age: 41,
    description: 'Paul is a Ukrainian Robot raised in the Great Mounts of Javascriptuatu, he is extremely argumentative and likes to look at walls. His favourite colour is orange and he loves roses. Some say he turns into a guinea pig at night.',
    startStress: 12,
    maxStress: 35,
    avatarPosition: 1,
    conversation: window.OurGame.conversations[0]
}, {
    name: 'Gaston Coleman',
    gender: 'M',
    age: 38,
    description: 'Gaston, huge drug addict, reknown for going to every psychologist in town and asking for pills. Some say he has murdered a few doctors before he migrated here.',
    startStress: 17,
    maxStress: 40,
    avatarPosition: 4,
    conversation: window.OurGame.conversations[2]
}, {
    name: 'Aaron Ong',
    gender: 'M',
    age: 26,
    description: 'Aaron is a really difficult person. He loves cats, paper planes, and smelly socks.',
    startStress: 17,
    maxStress: 50,
    avatarPosition: 5,
    conversation: window.OurGame.conversations[1]
}, {
    name: 'Daniel Bakhsheshi',
    gender: 'M',
    age: 34,
    description: 'Daniel loves blushers, his hair is made of strands of golden unicorn tears. He is very sensitive, careful not to hurt his feelings.',
    startStress: 5,
    maxStress: 20,
    avatarPosition: 7,
    conversation: window.OurGame.conversations[3]
}, {
    name: 'August Bartkowiak',
    gender: 'M',
    age: 23,
    description: "August has very low self esteem. He also looks like an old avocado.",
    startStress: 45,
    maxStress: 80,
    avatarPosition: 8,
    conversation: window.OurGame.conversations[4]
}, {
    name: 'Andy Colston',
    gender: 'NO INFORMATION',
    age: 35,
    description: 'NO INFORMATION',
    startStress: 35,
    maxStress: 50,
    avatarPosition: 10,
    conversation: window.OurGame.conversations[5]
}, {
    name: 'Huey Hanney',
    gender: 'M',
    age: 35,
    description: '',
    startStress: 35,
    maxStress: 50,
    avatarPosition: 11,
    conversation: window.OurGame.conversations[4]
}, {
    name: 'Omar Groom',
    gender: 'M',
    age: 35,
    description: '',
    startStress: 35,
    maxStress: 50,
    avatarPosition: 12,
    conversation: window.OurGame.conversations[0]
}, {
    name: 'Pricilla Nolte',
    gender: 'F',
    age: 19,
    description: '',
    startStress: 5,
    maxStress: 15,
    avatarPosition: 2,
    conversation: window.OurGame.conversations[0]
}, {
    name: 'Sherrill Deatherage',
    gender: 'F',
    age: 28,
    description: '',
    startStress: 80,
    maxStress: 100,
    avatarPosition: 3,
    conversation: window.OurGame.conversations[0]
}, {
    name: 'Amira Holtkamp',
    gender: 'F',
    age: 32,
    description: '',
    startStress: 40,
    maxStress: 60,
    avatarPosition: 6,
    conversation: window.OurGame.conversations[0]
}, {
    name: 'Daniella Littler',
    gender: 'F',
    age: 22,
    description: '',
    startStress: 20,
    maxStress: 40,
    avatarPosition: 9,
    conversation: window.OurGame.conversations[0]
}, {
    name: 'Carolee Peevy',
    gender: 'F',
    age: 34,
    description: '',
    startStress: 10,
    maxStress: 30,
    avatarPosition: 13,
    conversation: window.OurGame.conversations[0]
}, {
    name: 'Althea Basso',
    gender: 'F',
    age: 34,
    description: '',
    startStress: 10,
    maxStress: 30,
    avatarPosition: 15,
    conversation: window.OurGame.conversations[0]
}]

// Althea Basso
// Timika Delawder
// Amina Witcher
// Arla Armitage
// Vivian Tobey
// Charity Fujimoto
// Ester Wittrock
// Shanon Trundy
// Joann Spinner
// Charise Havard
// Portia Defibaugh
// Afton Wydra
// Maryanna Means
// Nicol Kupfer
// Nadine Majesk 

// var gender: ['M', 'F', 'F', 'M', 'M', 'F', 'M', 'M', 'F', 'M', 'M', 'M', 'F', 'M', 'F15', 'F', 'F', 'F', 'M', 'F', 'M', 'M', 'M', 'F', 'F', 'F', 'F', 'M', 'F', 'M', 'F', 'F', 'F', 'F', 'M', 'M', 'F', 'F', 'M', 'M', 'F', 'M', 'F', 'M', 'F', 'F', 'M', 'F', 'F', 'F', 'M', 'F', 'F', 'M']


// 'Tim Ardon',
// 'Harley Bilby',
// 'Olen Deitch',
// 'Otto Cuenca',
// 'Ignacio Bartol',
// 'Pierre Pantoja',
// 'Franklin Brecht',
// 'Sammie Gerson',
// 'Fermin Mcgarvey',
// 'Johnie Clendenin',
// 'Hiram Speed',
// 'Luke Wolf'

var check_story = function(story, stateName, checked = {}) {
  if (checked[stateName]) {
    return true;
  }
  checked[stateName] = true;

  var state = story[stateName];
  if (!state) {
    console.log('ERROR! Unknown state ', stateName, ' for story ', story);
  }
  if (state.winner) {
    checked[stateName] = true;
    return true;
  }

  for (var i = 0; i < state.options.length; i++) {
    var opt = state.options[i];
    if (!story[opt.next]) {
      console.log('ERROR! Story ', story, ' has no state ', opt.next, ' for ', opt);
    } else {
      check_story(story, opt.next, checked);
    }
  }
};

for (var i = 0; i < window.OurGame.characters.length; i++) {
  var story = window.OurGame.characters[i].conversation;
  check_story(story, "start", {});
}
