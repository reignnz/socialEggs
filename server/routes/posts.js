import express from 'express'
import Post from '../models/posts.model.js'

const router = express.Router()

router.post("/createPost", (req, res) => {
    
    const body = req.body.body;
    const userName = req.body.user;

    const newPost = new Post({
        body: body,
        user: userName
    });

    newPost.save()
        .then(() => {
            res.json('Post successfully created');
        })
        .catch(err => {
            res.status(400).json('Error:' + err);
        });
});

export default router;
