const tour = require("../models/tour")

// create tour
const createTour = async (req, res) => {
    const newTour = new tour(req.body)
    try {
        const savedTour = await newTour.save();
        res.status(200).json({ success: true, message: 'Successfully created', data: savedTour })
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed' })
    }
}

// update tour
const updateTour = async (req, res) => {
    const { id } = req.params;

    try {
        const update = await tour.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ success: true, message: 'Successfully updated', data: update })

    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to Update' })
    }
}

// delete tour
const deleteTour = async (req, res) => {

    const { id } = req.params;

    try {
        const deletedTour = await tour.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Successfully deleted' })

    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to Delete' })
    }
}

// get single tour
const getSingleTour = async (req, res) => {
    const id  = req.params;
    // console.log(id.id);
    try {
        const singleTour = await tour.find({_id:req.params.id}).populate('reviews');
        // console.log(singleTour);
        res.status(200).json({ success: true, message: 'Successfully fetch tour', data: singleTour })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch single tour' })

    }
}

// get all tour
const getAllTours = async (req, res) => {

    // for pagination
    const page = parseInt(req.query.page)
    // console.log(page);

    try {
        const tours = await tour.find({}).populate('reviews').skip(page * 8).limit(8);  // polulare show the review on tours page
        res.status(200).json({ success: true, message: 'Successfully fetch All tours', count: tours.length, data: tours })

    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch All tours' })
    }
}

//get tour by search
const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i') //i means case sensitive...
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {
        const tours = await tour.find({ city, distance: { $gte: distance }, maxGroupSize: { $gte: maxGroupSize } }).populate('reviews')
        res.status(200).json({ success: true, message: 'Successfully search tour', data: tours })
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to search tour' })
    }
}

const getFeaturedTours = async (req, res) => {

    try {
        // console.log("Hello")
        const tours = await tour.find({ featured: true }).populate('reviews').limit(8);
        res.status(200).json({ success: true, message: 'Successfully fetch featured tours', data: tours })

    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch featured tours' })
    }
}

const getTourCount = async (req, res) => {
    try {
        const tourCount = await tour.estimatedDocumentCount()
        res.status(200).json({ success: true, data: tourCount })
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch tourCount' })
    }
}

module.exports = { createTour, updateTour, deleteTour, getSingleTour, getAllTours, getTourBySearch, getFeaturedTours, getTourCount };