var Branch = require('../models/Branch')

class BranchController {
    async createBranch(context) {
      const { name, companyId } = context.request.body
      const createBranch = new Branch({ name: name, companyId: companyId })
      const createdBranch = await createBranch.save()
      context.body = createdBranch   
    }

    async getBranches(context) {
      const branches = await Branch.find({})
      context.body = branches        
    }
    

    async getBranch(context) {
      const { id } = context.params  
      const oneBranch = await Branch.findById(id)
      context.body = oneBranch
    }
    

    async updateBranch(context) {
      const { id } = context.params
      const { name, companyId } = context.request.body
      const findBranch = await Branch.findById({ _id: id })
      const updateBranch = { name: name, companyId: companyId }
      const updatedBranch = await findBranch.updateOne(updateBranch)
        
      context.body = updatedBranch      
    }
    

    async deleteBranch(context) {
      const { id } = context.params
      const deletedBranch = await Branch.findByIdAndDelete(id)
      
      context.body = deletedBranch   
    }
}

module.exports = new BranchController()