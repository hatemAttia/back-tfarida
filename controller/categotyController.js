const categoryModel = require("../models/category");

exports.createCategory = async(req, res, next) => {
    let category = new categoryModel({
        name: req.body.name
    });

    await category.save((err) => {
        if (err) {
            res.json({ success: false, message:err  })

        } else {
            res.json({ success: true, category })
        }
    })


};