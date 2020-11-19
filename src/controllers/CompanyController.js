var Company = require('../models/Company')
var Branch = require('../models/Branch')

class CompanyController {
    async getAllBranches(context) {
      const { companyId } = context.params
      const allBranches = await Branch.aggregate([{ $match: { companyId: companyId } }])
      context.body = allBranches
  }

    async createCompany(context) {
      const { name } = context.request.body
      const createCompany = new Company({ name: name })
      const createdCompany = await createCompany.save()
      context.body = createdCompany   
    }

    async getCompanies(context) {
      const allCompanies = await Company.find({})
      context.body = allCompanies     
    }

    async getCompany(context) {
      const { id } = context.params  
      const company = await Company.findById(id)
      const allBranches = await Branch.aggregate([{ $match: { companyId: id } }])
      context.body = { 
        name: company.name, 
        branchesAmount: allBranches.length,
        branches: allBranches
      }
    }
    

    async updateCompany(context) {
      const { id } = context.params
      const findCompany = await Company.findById({ _id: id })
      const { name } = context.request.body
      const updateCompany = { name: name }
      const updatedCompany = await findCompany.updateOne(updateCompany)
        
      context.body = updatedCompany   
    }
    
    async deleteCompany(context) {
      const { id } = context.params
      const deletedCompany = await Company.findByIdAndDelete(id)
      
      context.body = deletedCompany  
    }
    
}

module.exports = new CompanyController()