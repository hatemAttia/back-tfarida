const tourModel = require("../models/tour");
const mongoose = require('mongoose');


exports.createTour = async(req, res, next) => {
    let tour = new tourModel({
        title: req.body.title,
        description: req.body.description,
        image: 'tour.png',
        rate: req.body.rate,
        datestart: req.body.datestart,
        dateend: req.body.dateend,
        amount:req.body.amount,
      //  vues: mongoose.Types.ObjectId(req.body.category),
    });

    await tour.save((err) => {
        if (err) {
            res.json({ success: false, message: err })

        } else {
            res.json({ success: true, tour })
        }
    })
};

exports.getAllTours = async(req, res, next) => {
    await tourModel.find()
    // .populate('category')
        .then(objet => res.status(200).json(objet))
        .catch(err => res.status(400).json("Error getting objet"))
}

exports.deleteTour = async(req, res) => {
    const tour = await tourModel.findById(req.params.id)
    console.log(req.param.id);

    if (tour) {
        await tour.remove()
        res.json({ message: 'tour removed' })
    } else {
        res.status(404)
        throw new Error('tour. not found')
    }
}

exports.updateTour = async(req, res) => {
    console.log(req.params.id);
    console.log("hello");

    const tour = await tourModel.findById(req.params.id)
    if (tour) {
        tour.title = req.body.title || tour.title
        tour.amount = req.body.amount || tour.amount
        tour.description = req.body.description || tour.description
        tour.rate = req.body.rate || tour.rate
        tour.datestart = req.body.datestart || tour.datestart
        tour.dateend = req.body.dateend || tour.dateend
        tour.image = req.body.image || tour.image
       
        const updatedTour = await tour.save()

        res.json(updatedTour)


    } else {
        res.status(404)
        throw new Error('User not found')
    }
}

exports.updateImage = async(req, res) => {
    console.log(req.file.filename);
    console.log("hello");

    const tour = await tourModel.findById(req.params.id)
    if (tour) {

        tour.image = req.file.filename || tour.image


        const updatedimage = await tour.save()

        res.json(updatedimage)


    } else {
        res.status(404)
        throw new Error('User not found')
    }
}