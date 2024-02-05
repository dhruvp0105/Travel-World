const mongoose = require('mongoose')

mongoose.set("strictQuery",false)
const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        })

        console.log('Database Connected')
    } catch (error) {
        console.log("error")
    }
}

module.exports = Connection;