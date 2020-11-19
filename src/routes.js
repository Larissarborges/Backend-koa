const koaRouter = require('koa-router')
const router = koaRouter()

const CompanyController = require('./controllers/CompanyController')
const BranchController = require('./controllers/BranchController')
const AssetsController = require('./controllers/AssetsController')
const UserController = require('./controllers/UserController')

// CRUD - COMPANIES
router.post('/companies', CompanyController.createCompany)
router.get('/companies', CompanyController.getCompanies)
router.get('/companies/:id', CompanyController.getCompany)
router.put('/companies/:id', CompanyController.updateCompany)
router.delete('/companies/:id', CompanyController.deleteCompany)
router.get('/companies/:companyId/branches', CompanyController.getAllBranches)


// CRUD - BRANCHES
router.post('/branches', BranchController.createBranch)
router.get('/branches', BranchController.getBranches)
router.get('/branches/:id', BranchController.getBranch)
router.put('/branches/:id', BranchController.updateBranch)
router.delete('/branches/:id', BranchController.deleteBranch)

// CRUD - ASSETS
router.post('/branches/:branchId/assets', AssetsController.createAssets)
router.get('/branches/:branchId/assets', AssetsController.getAllAssets)
router.get('/branches/:branchId/assets/:id', AssetsController.getAsset)
router.put('/branches/:branchId/assets/:id', AssetsController.updateAssets)
router.delete('/branches/:branchId/assets/:id', AssetsController.deleteAssets)

// CRUD - USERS
router.post('/users', UserController.createUser)
router.get('/users', UserController.getUsers)
router.get('/users/:id', UserController.getUser)
router.put('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)

module.exports = router
