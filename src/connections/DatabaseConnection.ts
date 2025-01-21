import mongoose from "mongoose";


export class DatabaseConnection{

    static async DbConnection(url:string|null){
        try {
            if(!url) throw "Incorrect Db Url"
            await mongoose.connect(url);
            return "Connected to MongoDB";
        } catch (error) {
            throw error
        }
    }
}