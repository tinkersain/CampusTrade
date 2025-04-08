const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listings.controller");
const upload = require("../middleware/fileUpload.middleware");

router.post("/listing", upload.single("image"), listingController.addListing);
router.get("/listing", listingController.getAllListings);
router.get("/listing/:id", listingController.getListingById);
router.put("/listing/:id", listingController.updateListingDetails);
router.put(
  "/listing/image/:id",
  upload.single("image"),
  listingController.updateListingImage
);
router.delete("/listing/:id", listingController.deleteListing);

module.exports = router;
