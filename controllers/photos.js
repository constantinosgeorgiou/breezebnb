const database = require("../database/index");
const cloudinary = require('cloudinary').v2

const photoUpload = (request, response) => {
    
    const data = {
        listing_id: request.body.listing_id,
        image: request.body.image
      }
    
      // upload image
      cloudinary.uploader.upload(data.image)
      .then((image) => {
        database.query(
            "INSERT INTO photos_listings (photo_id,listing_id,secure_url) VALUES ($1, $2, $3)",
            [
                image.public_id,  data.listing_id,  image.secure_url
            ],
            (error, results) => {
                if (error) {
                    response.status(error.status || 400).json({
                        error: {
                            message: error.message,
                        },
                    });
                }
                response
                    .status(204)
                    .send(`User deleted with id`);
            }
         );
    });
}
    
const photoRetrieve = (request, response) => {
    const { listing_id } = request.params;

    database.query(
        "SELECT * FROM photos_listings WHERE listing_id = $1",
        [listing_id],
        (error, results) => {
            if (error) {
                console.log(error);
                response.status(error.status || 500).json({
                    error: {
                        message: error.message,
                    },
                });
            }

            response.status(200).json(results.rows);
        }
    );
};



module.exports = {
    photoUpload,
    photoRetrieve,
};
