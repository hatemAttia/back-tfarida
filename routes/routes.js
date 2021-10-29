const welcomeController = require('../controller/welcomeController');
const tourController = require('../controller/tourController');
const hotelController = require('../controller/hotelController');
const categoryController = require('../controller/categotyController');
import { uploadimages } from "../config/multer"

export default (app) => {
    
    ////////////////////////TOUR CONTROLLER///////////////////////////
    app.route("/").get(welcomeController.welcome);
    app.route("/tour").post(tourController.createTour);
    app.route("/tour").get(tourController.getAllTours);
    app.route("/tour/:id").delete(tourController.deleteTour);
    app.route("/tour/:id").put(tourController.updateTour);
    app.route("/tour-img/:id").post(uploadimages.single("file"),tourController.updateImage);

    ////////////////////////HOTEL CONTROLLER///////////////////////////
    app.route("/hotel").post(hotelController.createHotel);
    app.route("/hotel").get(hotelController.getAllHotels);
    app.route("/hotel/:id").delete(hotelController.deleteHotel);
    app.route("/hotel/:id").put(hotelController.updateHotel);
    app.route("/hotel-img/:id").post(uploadimages.single("file"),hotelController.updateImage);

    ////////////////////////CATEGORY CONTROLLER///////////////////////////
    app.route("/category").post(categoryController.createCategory);
};  