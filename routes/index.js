var express = require('express');
const app = express()

// app.use(express.json())
var router = express.Router();
// var student_schema = require("../model/user");
var user = require('../model/user');

// Use Bodyparser To Require Bodyparser
var bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({ extended: false }));

// const { application, response } = require('express');

router.post('/add_student', function (req, res, next) {
  var data = user.create(req.body);
  res.json({msg: "Success"});
  console.log(data);
});



router.get('/search/:key', async (req, res) => {

  console.log(req.params.key)
  let data = await user.find(
    {
      "$or": [
        { "name": { $regex: req.params.key } },
        { "avg": { $regex: req.params.key } }
      ]
    }
  )
  res.send(data)
})

router.get('viewall',async function (req,res,next){
  var data = await user.find()

  res.status(200).json({
    status:"Success",
    data
  })
})

module.exports = router;
