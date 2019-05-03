const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Item");

// @route           GET api/items
// @description     Get All Items
// @access          Public
router.get("/", (req, res) => {
  Item.find() //returns a promise
    .sort({ date: -1 }) //sort descending. A MONGO method
    .then(items => res.json(items));
}); //instead of api/items

// @route           POST api/items
// @description     POST an Items
// @access          Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name //we can do this only with body parser
  });

  newItem.save().then(item => res.json(item)); //gives us back the saved item
}); //instead of api/items

// @route           DELETE api/items
// @description     DELETE An Items
// @access          Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id) //returns a promise
    .then(item => item.remove().then(() => res.json({ success: true }))) //its the response
    .catch(err => res.status(404).json({success: false}));
}); //instead of api/items

module.exports = router;
