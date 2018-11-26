//related to login, authenication. ONLY
const express = require('express');
const router = express.Router();
//const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load User model 
const User = require('../../models/User');

// @route   POST api/users/register
// @desc    Register users
// @access  Public
router.post('/register', (req,res) => {
    //From User Model - findOne(mongoose Method) - Look for a record of an email
    User.findOne({ email: req.body.email })
    .then(user => { 
        if(user) {
            return res.status(400).json({email: 'Email already exist'});
        } else {
            //avatar
            //  const avatar = gravatar.url(req.body.email, {
            //      s: "200", //size
            //      r: "pg",  //rating
            //      d: "mm"   //default 
            //  });
            
            //Creating new resource
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                //avatar,
                password: req.body.password
            }); 

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, function(err, hash) {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err)); 
                });
            });
        }
    }); 
});

// @route   POST api/users/login
// @desc    Login User / Returing JWT Token
// @access  public
router.post('/login', (req,res) => {
    const email     = req.body.email;
    const password  = req.body.password;

    //Find user by emai
                    // email: email --- But since same name, could just write "email"
    User.findOne({email}).then(user => {
        //Check for User
        if(!user){
            return res.status(404).json({email: "User not found"});
        }
        //Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch) {
                //User matched
                const payload = {id: user.id, name: user.name} //create JWT payload

                //Sign Token
                jwt.sign(payload, 
                    keys.secretOrKey, 
                    { expiresIn: 3600 }, 
                    (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token     //bearer token - certain type of protocol 
                        });
                     }
                ); 
            } else {
                return res.status(400).json({password: "Password incorrect"});
            }
        })
    })
});

// @route   GET api/users/current
// @desc    Return current user - who ever the token belone to
// @access  Private
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

module.exports = router;