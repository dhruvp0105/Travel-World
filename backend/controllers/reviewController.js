const review = require("../models/review");
const tour = require("../models/tour");

const createReview = async (req, res) => {
    const tourId = req.params.tourId;
    const newReview = new review({ ...req.body })
    // console.log(req.body)
    try {
        const savedReview = await newReview.save();
        // console.log(savedReview)
        await tour.findByIdAndUpdate(tourId, {
            $push: { reviews: savedReview._id }
        })

        res.status(200).json({ success: true, message: "Review Submitted", data: savedReview })
    }
    catch (error) {
        // console.log("Error in create review",error)
        res.status(500).json({ success: false, message: "Failed to Submit" })
    }
}

module.exports = createReview;