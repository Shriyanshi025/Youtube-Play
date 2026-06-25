import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"
import dns from "dns"

// Use public DNS resolvers for SRV lookups (helps when local network DNS blocks SRV)
dns.setServers(["8.8.8.8", "8.8.4.4"])

const connectDB = async () => {
    try {
        console.log("Using DNS servers:", dns.getServers())
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error ", error)
        process.exit(1)
    }
}


export default connectDB