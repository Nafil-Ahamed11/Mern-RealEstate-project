import Listing from "../models/listing.model.js";


export const createListing = async (req,res,next) => {
    console.log("entering inside of the listing function")
    try {
        const listing = await Listing.create(req.body);
        console.log("body",req.body);
        return res.status(201).json(listing);
    } catch (error) {
        console.error("Error creating listing:", error); 
        next(error);
    }
}