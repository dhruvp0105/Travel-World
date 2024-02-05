import tourImg01 from '../images/tour-img01.jpg'
import tourImg02 from '../images/tour-img02.jpg'
import tourImg03 from '../images/tour-img03.jpg'
import tourImg04 from '../images/tour-img04.jpg'
import tourImg05 from '../images/tour-img05.jpg'
import tourImg06 from '../images/tour-img06.jpg'
import tourImg07 from '../images/tour-img07.jpg'
import tourImg08 from '../images/tour-img08.jpg'
import tourImg09 from '../images/tour-img09.jpg'
import tourImg10 from '../images/tour-img10.jpg'


const tours = [
    {
        id: "01",
        title: "Westminister Bridge",
        city: "London",
        address: "Somewhere on the Earth",
        distance: 300,
        price: 99,
        maxGroupSize: 10,
        desc: "Westminster Bridge is a road-and-foot-traffic bridge over the River Thames in London, linking Westminster on the west side and Lambeth on the east side.",
        reviews: [
            {
                name: "Jhon Doe",
                rating: 4.6
            },
            {
                name: "dhruv",
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
        address: "Somewhere on the Earth",
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
        address: "Somewhere on the Earth",
        distance: 500,
        price: 149,
        maxGroupSize: 8,
        desc: "Thailand, officially the Kingdom of Thailand and historically known as Siam, is a country in Southeast Asia on the Indochinese Peninsula.",
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
        address: "Somewhere on the Earth",
        distance: 500,
        price: 149,
        maxGroupSize: 8,
        desc: "Driving in Thailand is an adventure, but the rewards are massive. Visit backwater villages and outlying temple towns on these top road trips in Thailand.",
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
        address: "Somewhere on the Earth",
        distance: 400,
        price: 119,
        maxGroupSize: 8,
        desc: "Explore Indonesia's diverse beauty, culture, and adventure on Indonesia Travel. Plan your journey to this tropical paradise.",
        reviews: [
            {
                name: "Jhon Doe",
                rating: 4.6
            }
        ],
        avgRating: 4.5,
        photo: tourImg05,
        featured: true
    },
    {
        id: "06",
        title: "Cherry Blossoms Spring",
        city: "Japan",
        address: "Somewhere on the Earth",
        distance: 600,
        price: 199,
        maxGroupSize: 10,
        desc: "Japan is an archipelago, or string of islands, on the eastern edge of Asia. There are four main islands: Hokkaido, Honshu, Shikoku, and Kyushu.",
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
        address: "Somewhere on the Earth",
        distance: 600,
        price: 199,
        maxGroupSize: 10,
        desc: "France, the largest country in Western Europe, has long been a gateway between the continent's northern and southern regions.",
        reviews: [],
        avgRating: 4.5,
        photo: tourImg07,
        featured: true
    }, {
        id: "08",
        title: "Pashupatinath Temple",
        city: "Nepal",
        address: "Somewhere on the Earth",
        distance: 300,
        price: 99,
        maxGroupSize: 10,
        desc: "The Pashupatinath Temple is a Hindu temple dedicated to Pashupati, a form of Shiva, and is located in Kathmandu, Nepal near the Bagmati River. This temple was classified as a World Heritage Site in 1979.",
        reviews: [],
        avgRating: 4.5,
        photo: tourImg08,
        featured: true
    },
    {
        id: "09",
        title: "Burj Al Arab Jumeirah",
        city: "Dubai",
        address: "Somewhere on the Earth",
        distance: 250,
        price: 79,
        maxGroupSize: 8,
        desc: "Burj Al Arab stands on an artificial island that is 280 m (920 ft) from Jumeirah Beach and is connected to the mainland by a private curving bridge.",
        reviews: [],
        avgRating: 4.5,
        photo: tourImg09,
        featured: false
    },
    {
        id: "10",
        title: "Marina Bay",
        city: "Singapore",
        address: "Somewhere on the Earth",
        distance: 250,
        price: 79,
        maxGroupSize: 6,
        desc: "Luxury unfolds at every turn at Marina Bay Sands, a landmark in the heart of Singapore. Experience elevated luxury living and unparalleled hospitality unlike any other.",
        reviews: [],
        avgRating: 4.5,
        photo: tourImg10,
        featured: true
    }


]

export default tours;