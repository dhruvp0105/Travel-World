import tourImg01 from '../images/tour-img01.jpg'
import tourImg02 from '../images/tour-img02.jpg'
import tourImg03 from '../images/tour-img03.jpg'
import tourImg04 from '../images/tour-img04.jpg'
import tourImg05 from '../images/tour-img05.jpg'
import tourImg06 from '../images/tour-img06.jpg'
import tourImg07 from '../images/tour-img07.jpg'

const tours = [
    {
        id: "01",
        title: "Westminister Bridge",
        city: "London",
        address:"Somewhere on the Earth",
        distance: 300,
        price: 99,
        maxGroupSize: 10,
        desc: "Hello",
        reviews: [
            {
                name: "Jhon Doe",
                rating: 4.6
            },
            {
                name: "Jhon Doe",
                rating: 5
            }
        ],
        avgRating: 4.5,
        photo: tourImg01,
        featured: true
    },
    {
        id: "02",
        title: "Bali, Indonesia",
        city: "Indonesia",
        address:"Somewhere on the Earth",
        distance: 400,
        price: 119,
        maxGroupSize: 8,
        desc: "Hello",
        reviews: [
            {
                name: "Jhon Doe",
                rating: 4.6
            }
        ],
        avgRating: 4.5,
        photo: tourImg02,
        featured: true
    },
    {
        id: "03",
        title: "Snowy Mountains, Thailand",
        city: "Thailand",
        address:"Somewhere on the Earth",
        distance: 500,
        price: 149,
        maxGroupSize: 8,
        desc: "Hello",
        reviews: [
            {
                name: "Jhon Doe",
                rating: 4.6
            }
        ],
        avgRating: 4.5,
        photo: tourImg03,
        featured: true
    },
    {
        id: "04",
        title: "Beautiful Sunrise, Thailand",
        city: "Thailand",
        address:"Somewhere on the Earth",
        distance: 500,
        price: 149,
        maxGroupSize: 8,
        desc: "Hello",
        reviews: [
            {
                name: "Jhon Doe",
                rating: 4.6
            }
        ],
        avgRating: 4.5,
        photo: tourImg04,
        featured: false
    },
    {
        id: "05",
        title: "Nusa Pendia Bali, Indonesia",
        city: "Indonesia",
        address:"Somewhere on the Earth",
        distance: 400,
        price: 119,
        maxGroupSize: 8,
        desc: "Hello",
        reviews: [
            {
                name: "Jhon Doe",
                rating: 4.6
            }
        ],
        avgRating: 4.5,
        photo: tourImg05,
        featured: false
    },
    {
        id: "06",
        title: "Cherry Blossoms Spring",
        city: "Japan",
        address:"Somewhere on the Earth",
        distance: 600,
        price: 199,
        maxGroupSize: 10,
        desc: "Hello",
        reviews: [
            {
                name: "Jhon Doe",
                rating: 4.6
            }
        ],
        avgRating: 4.5,
        photo: tourImg06,
        featured: false
    },
    {
        id: "07",
        title: "Holmen Lofoten",
        city: "France",
        address:"Somewhere on the Earth",
        distance: 600,
        price: 199,
        maxGroupSize: 10,
        desc: "Hello",
        reviews: [],
        avgRating: 4.5,
        photo: tourImg07,
        featured: false
    },
]

export default tours;