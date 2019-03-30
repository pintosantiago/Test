const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const router = express.Router();
const auth = require('../middelware/auth');

const {User, validate, validateUpdate} = require('../models/user');

router.get('/me', auth, async (request, response) => {
  const user = await User.findById(request.user._id)
      .select('-password -__v');

  response.status(200).send(user);
});

router.post('/', async (request, response) => {
  const {error} = validate(request.body);
  if (error) return response.status(400).send(error.details[0].message);

  const {email, password} = request.body;

  let user = await User.findOne({email: email});

  if (user) return response.status(400).send('User already registered.');

   //Salt: String random que se concatena a la password para aumentar
   //la seguridad en el hasheo
  const salt = await bcrypt.genSalt(10);

  //Concatena y hashea password y salt (Encriptamos la password)
  request.body.password = await bcrypt.hash(password, salt);

  /**_.pick(object, [paths])
  Creates an object composed of the picked object properties.

  Arguments
    object (Object): The source object.
    [paths] (...(string|string[])): The property paths to pick.

    Basicamente, de todos los campos que tiene object, toma los especificados
    por path y crea un nuevo objeto

    Ejemplo:
    var object = { 'a': 1, 'b': '2', 'c': 3 };

    _.pick(object, ['a', 'c']);
    // => { 'a': 1, 'c': 3 }
**/
  user = new User(_.pick(request.body,
      [
        'name', 'email', 'nickname', 'password', 'isAdmin', 'photo_url',
        'facebook_log'
      ]
  ));

  await user.save();

  const token = user.getAuthToken();

  response.header('x-auth-token', token).status(200)
      .send(_.pick(user, ['name', 'email']));
});


router.get('/test', auth, async (request, response) => {
  var object = { 'a': 1, 'b': '2', 'c': 3 };

  // => { 'a': 1, 'c': 3 }

  response.status(200).send(_.pick(object, ['a', 'd']));
});


router.put('/me', auth, async (request, response) => {

  const {error} = validateUpdate(request.body);
  if (error) return response.status(400).send(error.details[0].message);
  //const user = await User.findById(request.user._id);

  if (request.body.password){
    const salt = await bcrypt.genSalt(10);
    request.body.password = await bcrypt.hash(request.body.password, salt);
  };

  const user = await User.findByIdAndUpdate(request.user._id, _.pick(request.body,
    [
      'nickname', 'password', 'photo_url'
    ]
  ));

  response.status(200).send(_.pick(user, ['name', 'email']));
});


module.exports = router;
