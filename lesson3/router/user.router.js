const router = require('express').Router();


const userController = require('../controller/user.controller')


router.get('/', userController.getAllUsers);
const userMiddleware = require('../middleware/user.middleware')
router.get('/:userId', userMiddleware.checkIsIdValid, userController.getSingleUser);
router.post('/', userMiddleware.isUserValid, userController.createUser)

// router.get('/', (req, res) => {
//     res.json('Ok')
// })

// router.post('/', (req, res) => {
//     res.json('user is create')
// })






module.exports = router;
