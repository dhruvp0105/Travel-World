const calculateAvgRating = (reviews) => {
    // console.log("Review1 is :",reviews)
        if (!Array.isArray(reviews)) {
            // console.error('Input is not an array:', reviews);

            return { totalRating: 0, avgRating: "" };
          }


    const totalRating = reviews.reduce((acc, item) => acc + item.rating, 0);

    const avgRating = reviews.length === 0 ? "" : totalRating / reviews.length;


    return { totalRating, avgRating }
}

export default calculateAvgRating;