require("dotenv").config();
const bcrypt = require("bcryptjs"); // Used to hash and compare passwords of users

const { Pool } = require('pg');
const database = new Pool({
  connectionString:  process.env.DATABASE_URI ,
})


function CreateAdmin() {
    const user = {};

    user.first_name = "Arnold";
    user.last_name = "Schwarzenegger";
    user.email = "admin@breezebnb.com";
    user.user_name = "admin";
    user.password = bcrypt.hashSync("admin", 10);
    user.phone = "123456789"
    user.user_role = "admin"
    user.picture = "picture";
    user.birthday = "30/7/1947";
    database.query(
        "INSERT INTO users (user_name, first_name, last_name, email, password, phone, user_role, picture, birthday) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)", [
            user.user_name,
            user.first_name,
            user.last_name,
            user.email,
            user.password,
            user.phone,
            user.user_role,
            user.picture,
            user.birthday,
        ]
    );
    console.log("Admin user created succesfuly");
}

CreateAdmin();
