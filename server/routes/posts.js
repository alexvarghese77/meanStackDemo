var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')
var db = mongojs('mongodb://xela:xela1234@ds251362.mlab.com:51362/postlist', ['posts'])



//get all post
router.get('/posts', (req, res, next) => {
    db.posts.find((err, posts) => {
        if (err) {
            res.send("error")
        }
        res.json(posts)
        // res.header("Access-Control-Allow-Origin", "*");
        // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    })
});

// Get single post 

router.get('/posts/:id', (req, res) => {
    db.posts.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, post) => {
        if (err) {
            res.send("error")
        }
        res.json(post)
    })
})

//save post

router.post('/savepost', (req, res) => {
    var postcontent = req.body;
    console.log(postcontent)
    if (!postcontent.title || !postcontent.content) {
        res.status(400);
        res.json({ "error": "error" })
    }
    else {
        db.post.save(postcontent, (err, post) => {
            if (err) {
                res.send("erroroccured")
            }
            res.json(post)
        })
    }
})

module.exports = router;