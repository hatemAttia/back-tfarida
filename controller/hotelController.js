const hotelModel = require("../models/hotel");
const mongoose = require("mongoose");

exports.createHotel = async (req, res, next) => {
  let hotel = new hotelModel({
    name: req.body.name,
    nb_chambre: req.body.nb_chambre,
    image: "hotel.png",
    type: req.body.type,
    prix: req.body.prix,
    //  vues: mongoose.Types.ObjectId(req.body.user),
  });

  await hotel.save((err) => {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      res.json({ success: true, hotel });
    }
  });
};

exports.getAllHotels = async (req, res, next) => {
  await hotelModel
    .find()
    // .populate('category')
    .then((objet) => res.status(200).json(objet))
    .catch((err) => res.status(400).json("Error getting objet"));
};

exports.deleteHotel = async (req, res) => {
  const hotel = await hotelModel.findById(req.params.id);
  console.log(req.param.id);

  if (hotel) {
    await hotel.remove();
    res.json({ message: "hotel removed" });
  } else {
    res.status(404);
    throw new Error("hotel. not found");
  }
};

exports.updateHotel = async (req, res) => {
  console.log(req.params.id);
  console.log("hello");

  const hotel = await hotelModel.findById(req.params.id);
  if (hotel) {
    hotel.name = req.body.name || hotel.name;
    hotel.nb_chambre = req.body.nb_chambre || hotel.nb_chambre;
    hotel.description = req.body.description || hotel.description;
    hotel.rate = req.body.rate || hotel.rate;
    hotel.datestart = req.body.datestart || hotel.datestart;
    hotel.dateend = req.body.dateend || hotel.dateend;
    hotel.image = req.body.image || hotel.image;

    const updatedhotel = await hotel.save();

    res.json(updatedhotel);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

exports.updateImage = async(req, res) => {
    console.log(req.file.filename);
    console.log("hello");

    const hotel = await tourModel.findById(req.params.id)
    if (hotel) {

        hotel.image = req.file.filename || hotel.image


        const updatedimage = await hotel.save()

        res.json(updatedimage)


    } else {
        res.status(404)
        throw new Error('User not found')
    }
}
