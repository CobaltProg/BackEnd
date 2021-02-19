// USERS
module.exports = [
  {
    'id': '1',
    'pseudo':'titi',
    'email': 'jaimal@gmail.com',
    'password': '123456789',
    'image_profil': 'https://randomAdmin.me/api/portraits/men/85.jpg',
    'friends': ['5e694caab39e5f28b8525259', '5e694caab39e5f28b8525259', '5e694caab39e5f28b8525259']

  },
  {
    'id': '2',
    'pseudo': 'Régis',
    'email': 'pareisien@gmail.com',
    'password': '123456789',
    'image_profil': 'https://randomAdmin.me/api/portraits/men/84.jpg'
  },
  {
    'id': '3',
    'pseudo': 'tata',
    'email': 'pareisien@gmail.com',
    'password': '123456789',
    'image_profil': 'https://randomAdmin.me/api/portraits/women/84.jpg'
  },
 
]

// Group
module.exports = [
  {
    'id': '0',
    'name': 'Timmy',
    'description': 'I love the planet',
    'icon': 'urlOfTheIcon.com',
    'photo': 'urlOfTheImage',
    'group_type': 1,
    'membersCanPubli': true,
    'membersCanEvent': false,
    'admins': ['idOfAdmin', 'idOfAdmin', 'idOfAdmin'],
    'members': ['idOfMember', 'idOfMember', 'idOfMember']
  }
]

// Challenge
module.exports = [
  {
    'name': 'Timmy',
    'description': 'I love the planet',
    'date_start': '2020-04-22T14:56:59.301Z',
    'date_end': '2020-04-22T14:56:59.301Z',
    'photo': true,
    'author': '562b2649b2e70464f113c04d',
    'guest': '562b2649b2e70464f113c04d'
  }
]

/*
const factory = require('fakingoose')
const albumSchema = require('./album.js')
const albumFactory = factory(albumSchema, {})
const mock = albumFactory.generate
console.log(mock) */

/* module.exports = [
  {
    'photos': [
      {
        'author': 'idddddd',
        'url': 'okay.com'
      },
      {
        'author': 'iddddd1',
        'url': 'okay1.com'
      },
      {
        'author': 'iddddd2',
        'url': 'okay2.com'
      }
    ]
  }
] */
