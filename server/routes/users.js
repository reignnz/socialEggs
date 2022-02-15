import express from 'express';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import Auth from './Auth.js';
import jsonwebtoken from 'jsonwebtoken';

const router = express.Router()

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));
})


// matches the route in signup.js 
router.post("/signup", (req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    let password = req.body.password;

    // hashes the password - to ensure that raw passwords are not stored in database
    password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    
    const newUser = new User({
        userName,
        email,
        password,
    });

    newUser.save()
        .then(() => res.json('User added succesfully!'))
        .catch(err => res.status(400).json('Error:' + err));

})

router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user) {
            res.status(404).json('User not found!');
            return;
        }

        // compare function removes the salt from the hashed password
        const validPassword = await bcrypt.compareSync(req.body.password, user.password);
        if(!validPassword) {
            res.status(400).json("Wrong Password!");
            return;
        }

        //res.status(200).json(user);
        //console.log(user);

        return res.status(200).json({token: jsonwebtoken.sign({email: user.email, _id: user._id}, 'RESTFULapi', { expiresIn: '1h'})});

    } catch (err) {
        res.status(500).json(err);
    }
})

// future posts requests can use Auth to verify the token
// Check if the token is valid/expired

router.post("/posts", Auth, async(req, res) => {
    try {
        console.log("Successfully submitted post");
    } catch {

    }
});

export default router;