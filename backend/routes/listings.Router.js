const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listings.controller");
const upload = require("../middleware/fileUpload.middleware");
const verifyToken = require("../middleware/auth.middleware");

router.post("/listing", verifyToken, upload.single("image"), listingController.addListing);
router.get("/listing", listingController.getAllListings);
router.get("/listing/search", listingController.searchListings);
router.get("/listing/:id", listingController.getListingById);
router.put("/listing/:id", verifyToken, listingController.updateListingDetails);
router.put(
  "/listing/image/:id",
  verifyToken,
  upload.single("image"),
  listingController.updateListingImage
);
router.delete("/listing/:id", verifyToken, listingController.deleteListing);

module.exports = router;