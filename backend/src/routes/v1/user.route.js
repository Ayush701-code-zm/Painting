const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

// Bulk fetch by IDs
router.get('/by-ids', auth(), validate(userValidation.getUsersByIds), userController.getUsersByIds);

// Admin CRUD
router
  .route('/admin')
  .post(auth('create-employees'), validate(userValidation.createUser), userController.createUser)
  .get(auth('read-employees'), validate(userValidation.getUsers), userController.getUsers);

router
  .route('/admin/:userId')
  .get(auth('read-employees'), validate(userValidation.getUser), userController.getUser)
  .patch(auth('update-employees'), validate(userValidation.updateUser), userController.updateUser)
  .delete(auth('delete-employees'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
