const express = require('express');
const router = express.Router();

// blog controller routes import from controller
const {
  create: createBlog,
  read: readBlog,
  delete: deleteBlog,
  update: updateBlog,
} = require('../Controllers/blogController');

// blog details routes import from controller
const {
    create: createBlogDetails,
    read: readBlogDeatils,
    delete: deleteBlogDetails,
    update: updateBlogDetails,
} = require('../Controllers/blogDetailsController');

// comment routes import from controller
const {
    create: createcommentController,
    read: readcommentController,
    delete: deletecommentController,
    update: updatecommentController,
} = require('../Controllers/commentController');

//message routes import from controller
const {
    create: createMessage,
    read: readMessage,
    delete: deleteMessage,
    update: updateMessage,
} = require('../Controllers/messageController');

//portfolio routes import from controller
const {
    create: createPortfolio,
    read: readPortfolio,
    delete: deletePortfolio,
    update: updatePortfolio,
} = require('../Controllers/portfolioController');


//products routes import from Controller 
const {
    create:createProduct,
    read: readProduct,
    delete: deleteProduct,
    update: updateProduct,
} = require('../Controllers/productController');


//profit Controller routes import from Controller 
const {
    create: createProfit,
    read: readProfit,
    delete: deleteProfit,
    update: updateProfit,
} = require('../Controllers/profitController');

//projects Controller routes import from Controller
const {
    create: createProject,
    read: readProject,
    delete: deleteProject,
    update: updateProject,
} = require('../Controllers/projectController');

//service controller routes import from Controller
const {
    create: createService,
    read: readService,
    delete: deleteService,
    update: updateService,
} = require('../Controllers/serviceController');

//title Controller routes import from Controller
const {
    create: createtitle,
    read: readtitle,
    delete: deletetitle,
    update: updatetitle,
} = require('../Controllers/titleController');


// blog Create Controller
router.get('/blog/create', createBlog)
router.get('/blog/read', readBlog);
router.get('/blog/delete', deleteBlog);
router.get('/blog/update', updateBlog);


// blog Details Controller
router.get('/blogDetails/create', createBlogDetails);
router.get('/blogDetails/read', readBlogDeatils);
router.get('/blogDetailes/delete', deleteBlogDetails);
router.get('/blogDetails/update', updateBlogDetails);


//comment controller 
router.get('/comment/create', createcommentController);
router.get('/comment/read', readcommentController);
router.get('/comment/delete', deletecommentController);
router.get('/comment/update', updatecommentController);


//Message controller 
router.get('/message/create', createMessage);
router.get('/message/read', readMessage);
router.get('/message/delete', deleteMessage);
router.get('/message/update', updateMessage);


//portfolio controller 
router.get('/portfolio/create', createPortfolio);
router.get('/portfolio/read', readPortfolio);
router.get('/portfolio/delete', deletePortfolio);
router.get('/portfolio/update', updatePortfolio);

//products controller 
router.get('/products/create', createProduct);
router.get('/products/read', readProduct);
router.get('/products/delete', deleteProduct);
router.get('/products/update', updateProduct);

//profit controller 
router.get('/profit/create', createProfit);
router.get('/profit/read', readProfit);
router.get('/profit/delete', deleteProfit);
router.get('/profit/update', updateProfit);

//project controller 
router.get('/project/create', createProject);
router.get('/project/read', readProject);
router.get('/project/delete', deleteProject);
router.get('/project/update', updateProject);

//service controller 
router.get('/service/create', createService);
router.get('/service/read', readService);
router.get('/service/delete', deleteService);
router.get('/service/update', updateService);

//title controller 
router.get('/title/create', createtitle);
router.get('/title/read', readtitle);
router.get('/title/delete', deletetitle);
router.get('/title/update', updatetitle);


module.exports = router;
