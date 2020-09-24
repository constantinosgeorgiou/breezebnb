require("dotenv").config();
const bcrypt = require("bcrypt"); // Used to hash and compare passwords of users

const { Pool } = require('pg');
const database = new Pool({
    connectionString: process.env.DATABASE_URI,
})


function CreateAdmin() {
    const user = {};
    const address = {};

    user.first_name = "Arnold";
    user.last_name = "Schwarzenegger";
    user.email = "admin@breezebnb.com";
    user.user_name = "admin";
    user.password = bcrypt.hashSync("admin", 10);
    user.phone = "123456789";
    user.user_role = "admin";
    user.photo = "photo";
    user.birthday = "30/7/1947";
    user.about = "Hello i am administrator";
    address.country = "US"
    address.state = "New York"
    address.city = "New York"
    address.zipCode = "1234"
    address.streetAddress = "Wall street 21"
    address.apartmentNumber = "2"
        // database.query(
        //     "INSERT INTO users (user_name, first_name, last_name, email, password, phone, user_role, photo, birthday,about) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,$10)", [
        //         user.user_name,
        //         user.first_name,
        //         user.last_name,
        //         user.email,
        //         user.password,
        //         user.phone,
        //         user.user_role,
        //         user.photo,
        //         user.birthday,
        //         user.about,
        //     ]
        // );
        // Store address of user
    database.query(
        "INSERT INTO addresses (country,state,city,zip_code,street_address,apartment_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING address_id", [
            address.country,
            address.state,
            address.city,
            address.zipCode,
            address.streetAddress,
            address.apartmentNumber,
        ],
        (error, addressQuery) => {
            if (error) {
                // Error while retrieving user id
                response.status(error.status || 500).json({
                    error: {
                        message: error.message,
                    },
                });
            } else {
                // Store address id to pass as parameter in INSET INTO USERS query
                const addressId = addressQuery.rows[0].address_id;
                const about = "Welcome to my profile";

                // Create new user
                database.query(
                    "INSERT INTO users (user_name, first_name, last_name, email, password, phone, user_role, photo, birthday,about, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING user_id, joined_on", [
                        user.user_name,
                                user.first_name,
                                user.last_name,
                                user.email,
                                user.password,
                                user.phone,
                                user.user_role,
                                user.photo,
                                user.birthday,
                                user.about,
                        addressId,
                    ],
                );

            }
        });


    console.log("Admin user created succesfuly");
}

CreateAdmin();