const Listing = require("../models/listings.model");
const connectDB = require("../utils/db");

async function addListing(req, res) {
  try {
    await connectDB();
    let listingData = req.body;
    if (req.file) {
      listingData.imageName = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    }
    let listing = await Listing.create(listingData);
    res.status(201).send(listing);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getAllListings(req, res) {
  try {
    await connectDB();
    let listings = await Listing.find().populate("owner");
    res.status(200).send(listings);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getListingById(req, res) {
  try {
    await connectDB();
    let listing = await Listing.findById(req.params.id).populate("owner");
    if (listing) {
      res.status(200).send(listing);
    } else {
      res.status(404).send("Listing not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function updateListingDetails(req, res) {
  try {
    await connectDB();
    let listingData = req.body;
    let updatedListing = await Listing.findByIdAndUpdate(req.params.id, listingData, {
      new: true
    });
    if (updatedListing) {
      res.status(200).send(updatedListing);
    } else {
      res.status(404).send("Listing not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function updateListingImage(req, res) {
  try {
    await connectDB();
    if (!req.file) return res.status(400).send("No file uploaded");
    let updatedListing = await Listing.findByIdAndUpdate(
      req.params.id, {
        imageName: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,
      }, {
        new: true
      }
    );
    if (updatedListing) {
      res.status(200).send(updatedListing);
    } else {
      res.status(404).send("Listing not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function deleteListing(req, res) {
  try {
    await connectDB();
    let listing = await Listing.findByIdAndDelete(req.params.id);
    if (listing) {
      res.status(200).send(listing);
    } else {
      res.status(404).send("Listing not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function searchListings(req, res) {
  try {
    await connectDB();
    const {
      query
    } = req.query;
    if (!query) {
      return res.status(400).send("Missing search query parameter.");
    }
    const listings = await Listing.find({
      itemName: {
        $regex: query,
        $options: "i"
      }
    }).populate("owner");
    res.status(200).send(listings);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  addListing,
  getAllListings,
  getListingById,
  updateListingDetails,
  updateListingImage,
  deleteListing,
  searchListings,
};