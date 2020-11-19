var User = require('../models/User')

class UserController {
    async createUser(context) {
      const { name } = context.request.body
      const createUser = new User({ name: name })
      const createdUser = await createUser.save()
      context.body = createdUser 
    }

    async getUsers(context) {
      const users = await User.find({})
      context.body = users        
    }
    

    async getUser(context) {
      const { id } = context.params  
      const oneUser = await User.findById(id)
      context.body = oneUser
    }
    

    async updateUser(context) {
      const { id } = context.params
      const findUser = await User.findById({ _id: id })
      const { name } = context.request.body
      const updateUser = { name: name }
      const updatedUser = await findUser.updateOne(updateUser)
        
      context.body = updatedUser     
    }
    

    async deleteUser(context) {
      const { id } = context.params
      const deletedUser = await User.findByIdAndDelete(id)
      
      context.body = deletedUser   
    }
}

module.exports = new UserController()