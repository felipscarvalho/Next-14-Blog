const { default: mongoose } = require("mongoose")

const connection = {}

export const connectMongo = async () => {
    try {
        if(connection.isConnected) {
            console.log("Using existing connection.")
            return
        }
        const db = await mongoose.connect(process.env.MONGO)
        connection.isConnected = db.connection[0].readyState
    } catch (error) {
        throw new Error(error)
    }
}