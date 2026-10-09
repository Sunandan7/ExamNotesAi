import mongoose from "mongoose";
import dns from "dns";

const connectDb = async () => {
    try {
        const rawUrl = process.env.MONGODB_URL || "";
        const url = rawUrl.replace(/^"|"$/g, "").trim();
        if (!url) {
            console.log("DB Error: MONGODB_URL is not set or empty");
            return;
        }
        const hostPart = url.split('@')[1]?.split('/')[0] || url;
        console.log("Connecting to MongoDB host:", hostPart);
        await mongoose.connect(url);
        console.log("✅ DB Connected Successfully");
    } catch (error) {
        console.log("⚠️ DB Connection Error:", error.message);
        console.log("Backend server will continue running. Please check MONGODB_URL in server/.env");
    }
}
export default connectDb