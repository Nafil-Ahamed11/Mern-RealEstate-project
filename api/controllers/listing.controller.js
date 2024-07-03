import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  console.log("entering inside of the listing function");
  try {
    const listing = await Listing.create(req.body);
    console.log("body", req.body);
    return res.status(201).json(listing);
  } catch (error) {
    console.error("Error creating listing:", error);
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  console.log("entering the delete functionlity");
  const listing = await Listing.findById(req.params.id);
  if (listing) {
    return next(errorHandler(404, "Lisitng not found"));
  }

  if (req.user.id !== listing.useRef()) {
    return next(errorHandler(401, "you can only delete your own listings !"));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
    console.log("entering the function inside");
    const listing = await Listing.findById(req.params.id);
    if (!listing) { // Changed condition
      return next(errorHandler(404, "Listing not found"));
    }
  
    if (req.user.id !== listing.useRef) { // Ensure this matches your model's field name
      return next(errorHandler(401, "You can only update your own listings"));
    }
  
    try {
      const updatedListing = await Listing.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedListing);
    } catch (error) {
      next(error);
    }
  };
  

export const getListing = async (req,res,next)=>{
    try {
        const listing  = await Listing.findById(req.params.id);
        if(!listing){
            return next(errorHandler(402,'Lisitng not found!'))
        }
        res.status(200).json(listing);
    } catch (error) {
        next(error)
    }
}
