const router = require('express').Router();
const { celebrate } = require('celebrate');
const {
  getUser, getUsers, refreshProfile, refreshAvatar, getCurrentUser,
} = require('../controllers/usersControllers'); // важно соблюдать порядок импортируемых объектов
const auth = require('../middleware/auth');
const { profileUserSchema, avatarUserSchema } = require('../models/userSchema');

router.get('/me', auth, getCurrentUser);
router.get('/:userId', auth, getUser);
router.get('/', auth, getUsers);
router.patch('/me', auth, celebrate({ body: profileUserSchema }), refreshProfile);
router.patch('/me/avatar', auth, refreshAvatar);

module.exports = router;
