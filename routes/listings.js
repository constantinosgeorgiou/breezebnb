const express = require("express");
const router = express.Router();
const Listings = require("../controllers/listings");

// Retrieve all listings
router.get("/", Listings.retrieveListings);

// Retrieve all listings
router.get("/available", Listings.retrieveListings);

// Retrieve all available listings on specific search
router.post("/search", Listings.SearchForAvailableListings);

// TODO:
// Retrieve all non-available listings

// Retrieve listing by id
router.get("/:listingId", Listings.retrieveListingById);

// Create listing
router.post("/new", Listings.createListing);

// Update listing
router.put("/:listingId/edit", Listings.updateListing);

// Delete listing
router.delete("/:listingId/delete", Listings.deleteListing);

// Retrieve all listings of certain type
router.get("/type/:property_type", Listings.retrieveListingOfCertainType);

// Retrieve all locations
router.get("/all/locations", Listings.retrieveLocations);

router.post("/bookrental", Listings.bookRental);

module.exports = router;
