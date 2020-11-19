var Assets = require("../models/Assets");
var Branch = require("../models/Branch");
var ObjectID = require('mongodb').ObjectID;

class AssetsController {
    async createAssets(context) {
        const { branchId } = context.params
        const { image, name, description, model, responsableId, status, healthScore  } = context.request.body
        const findBranch = await Branch.findById(branchId)
        findBranch.assets.push({ 
          _id: ObjectID(),
          image: image,
          name: name,
          description: description,
          model: model,
          responsableId: responsableId,
          status: status,
          healthScore: healthScore,
        })
        await findBranch.save()
        context.body = findBranch   
    }

    async getAllAssets(context) {
      const { branchId } = context.params
      const findBranch = await Branch.findById(branchId)
      context.body = findBranch.assets 
    }
    

    async getAsset(context) {
      const { id, branchId } = context.params
      const findBranch = await Branch.findById(branchId)
      const asset = findBranch.assets.filter(asset => asset._id.equals(id))
      
      context.body = asset
    }
    

    async updateAssets(context) {
      const { id, branchId } = context.params
      const findBranch = await Branch.findById(branchId)
      const { image, name, description, model, responsableId, status, healthScore } = context.request.body
      const updatedAssets = findBranch.assets.filter(asset => asset._id && !asset._id.equals(id))
      updatedAssets.push({
        id: new ObjectID(id),
        image: image,
        name: name,
        description: description,
        model: model,
        responsableId: responsableId,
        status: status,
        healthScore: healthScore,
      })
      findBranch.assets = updatedAssets
      await findBranch.save()
        
      context.body = updatedAssets  
    }
    

    async deleteAssets(context) {
      const { branchId, id } = context.params
      const findBranch = await Branch.findById(branchId)
      const deletedAsset = findBranch.assets.filter(asset => !asset._id.equals(id))
      findBranch.assets = deletedAsset
      await findBranch.save()
      
      context.body = deletedAsset  
    }    
}

module.exports = new AssetsController()