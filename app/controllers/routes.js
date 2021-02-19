// User
const CreateUser = require('./users/create.js')
const ShowUser = require('./users/show.js')
const UpdateUser = require('./users/update.js')
const DeleteUser = require('./users/delete.js')

// Addiction
const CreateAddiction = require('./addictions/create.js')
const ShowAddiction = require('./addictions/show.js')
const UpdateAddiction = require('./addictions/update.js')
const DeleteAddiction = require('./addictions/delete.js')


// Group
const CreateGroup = require('./groups/create.js')
const ShowGroup = require('./groups/show.js')
const UpdateGroup = require('./groups/update.js')
const DeleteGroup = require('./groups/delete.js')

// Post
const CreatePost = require('./posts/create.js')
const ShowPost = require('./posts/show.js')
const UpdatePost = require('./posts/update.js')
const DeletePost = require('./posts/delete.js')

// Challenge
const CreateChallenge = require('./challenges/create.js')
const ShowChallenge = require('./challenges/show.js')
const UpdateChallenge = require('./challenges/update.js')
const DeleteChallenge = require('./challenges/delete.js')

// Prototype
/* const CreateCamel = require('./minuscules/create.js')
const ShowCamel = require('./minuscules/show.js')
const UpdateCamel = require('./minuscules/update.js')
const DeleteCamel = require('./minuscules/delete.js') */

module.exports = {
  users: {
    CreateUser,
    ShowUser,
    UpdateUser,
    DeleteUser
  },
  addictions: {
    CreateAddiction,
    ShowAddiction,
    UpdateAddiction,
    DeleteAddiction
  },
  groups: {
    CreateGroup,
    ShowGroup,
    UpdateGroup,
    DeleteGroup
  },
  posts: {
    CreatePost,
    ShowPost,
    UpdatePost,
    DeletePost
  },
  challenges: {
    CreateChallenge,
    ShowChallenge,
    UpdateChallenge,
    DeleteChallenge
  }
}

/*
const CreateEvent = require('./groups/create.js')
const ShowEvent = require('./groups/show.js')
const UpdateEvent = require('./groups/update.js')
const DeleteEvent = require('./groups/delete.js')
module.exports = {
  groups: {
    CreateEvent,
    ShowEvent,
    UpdateEvent,
    DeleteEvent
  }
}
*/
