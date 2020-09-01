const MAX_USERS = 10;

const FIRST_NAMES = [
    "Luna",
    "Olivia",
    "Aurora",
    "Maeve",
    "Isla",
    "Charlotte",
    "Ava",
    "Evelyn",
    "Ophelia",
    "Eloise",
    "Eleanor",
    "Amelia",
    "Cora",
    "Genevieve",
    "Aurelia",
    "Maya",
    "Hazel",
    "Ivy",
    "Alice",
    "Iris",
    "Isabella",
    "Adelaide",
    "Amara",
    "Rose",
    "Elodie",
    "Violet",
    "Clara",
    "Lucy",
    "Audrey",
    "Ada",
    "Freya",
    "Penelope",
    "Aria",
    "Nora",
    "Esme",
    "Elizabeth",
    "Anna",
    "Anastasia",
    "Chloe",
    "Arabella",
    "Mia",
    "Adeline",
    "Evangeline",
    "Imogen",
    "Astrid",
    "Maisie",
    "Claire",
    "Emma",
    "Jane",
    "Milo",
    "Asher",
    "Oliver",
    "Silas",
    "Levi",
    "Theodore",
    "Jasper",
    "Atticus",
    "Arlo",
    "Leo",
    "Henry",
    "Finn",
    "Kai",
    "Jack",
    "Liam",
    "Ezra",
    "Oscar",
    "Felix",
    "Ethan",
    "Theo",
    "Jude",
    "Kobe",
    "Wyatt",
    "Jayden",
    "Atlas",
    "Eli",
    "Rowan",
    "Caleb",
    "Benjamin",
    "Aarav",
    "Aaron",
    "Elijah",
    "Arthur",
    "Sebastian",
    "Tobias",
    "Cassius",
    "Miles",
    "Julian",
    "Declan",
    "Soren",
    "Axel",
    "Zachary",
    "James",
    "Hugo",
    "Emmett",
    "Aryan",
    "Bodhi",
    "Archie",
    "John",
];

const LAST_NAMES = [
    "Ritter",
    "Shaw",
    "Orozco",
    "Clarke",
    "Trujillo",
    "Howell",
    "Neal",
    "Burnett",
    "Lucas",
    "Ward",
    "Fritz",
    "Chaney",
    "Goodwin",
    "Clayton",
    "Medina",
    "Burke",
    "Carson",
    "Salazar",
    "Tapia",
    "Howard",
    "Mcgee",
    "Cline",
    "House",
    "Fleming",
    "Horn",
    "Hooper",
    "Preston",
];

const LISTING_TITLES = [
    "Rustic Private Cottage w/ King Bed + Oceanside View",
    "Spacious 4 BR Near Eiffel Tour – 7 Min Walk",
    "Luxury Beach House Perfect for Romantic Weekend Getaway",
    "Enjoy Sunsets at Fully Equipped 2BR Condo at the Beach",
    "Rustic Loft w/ Breakfast + Gym",
    "Charming Chalet w/ a Washer + Gym",
];

const LISTING_DESCRIPTIONS = [
    "Bacon ipsum dolor amet pork loin shoulder beef, brisket ham bacon meatloaf. Ground round swine shoulder tail pastrami, buffalo venison meatball corned beef hamburger beef pork strip steak. Burgdoggen tail biltong turducken, kevin chicken beef ribs cow. Landjaeger cow pig ground round bresaola, beef ribs prosciutto cupim flank kevin jowl bacon boudin tail spare ribs.",
    "Ribeye ham hock doner bacon. Cupim salami hamburger chislic. Pig pastrami turducken tail t-bone beef ribs biltong kielbasa landjaeger. Pig short loin shank biltong pork belly filet mignon turkey pancetta prosciutto bacon rump ground round ball tip salami. Beef ribs pork belly picanha, chuck kevin pork tri-tip boudin beef ball tip bacon ground round bresaola short ribs chislic. Flank turducken kielbasa, andouille jowl pork turkey cupim alcatra pork chop shank.",
    "Cupim pork chop pork belly frankfurter leberkas. Shank landjaeger pork belly porchetta jowl picanha kielbasa buffalo ball tip jerky swine tongue hamburger tail. Buffalo doner tenderloin chuck filet mignon, bacon pork chop chicken fatback. Turkey tenderloin shoulder beef, capicola buffalo tail.",
    "T-bone filet mignon short ribs leberkas. Sirloin flank spare ribs landjaeger biltong kevin shankle pork loin. Tail doner ham hock andouille short ribs meatball. Kielbasa pork loin frankfurter landjaeger burgdoggen ground round prosciutto, andouille shank swine cupim drumstick tenderloin porchetta meatloaf.",
    "Tri-tip venison shank chislic andouille, pancetta jerky tongue swine salami strip steak shoulder. Pork boudin burgdoggen, pork belly rump shoulder venison ham. Capicola fatback pork belly pancetta. Spare ribs salami pork pastrami drumstick turkey. Capicola jowl porchetta, ham hock shankle kielbasa tri-tip pancetta chislic chicken. Andouille corned beef buffalo turkey landjaeger doner alcatra flank tongue.",
];

function pickLocation() {
    const locations = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "The Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo, Democratic Republic of the",
        "Congo, Republic of the",
        "Costa Rica",
        "Côte d’Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "East Timor (Timor-Leste)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "The Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea, North",
        "Korea, South",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia, Federated States of",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar (Burma)",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Sudan, South",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ];
    return locations[Math.floor(Math.random() * locations.length)];
}

function pickListingType() {
    const types = [
        "House",
        "Apartment",
        "Bed and Breakfast",
        "Hostel",
        "Hotel",
        "Villa",
    ];

    return types[Math.floor(Math.random() * types.length)];
}

function pickUserRole() {
    const roles = ["admin", "guest", "host", "ghost"];
    return roles[Math.floor(Math.random() * roles.length)];
}

function createPhoneNumber() {
    return Math.floor(Math.random() * 1000000000).toString();
}

function generateUser() {
    const user = {};

    user.first_name =
        FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    user.last_name = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    user.email =
        user.first_name.toLowerCase() +
        "@" +
        user.last_name.toLowerCase() +
        ".com";
    user.user_name =
        user.first_name.toLocaleLowerCase() +
        Math.floor(Math.random() * 10 + 1);
    user.password = "password";
    user.phone = createPhoneNumber();
    user.user_role = pickUserRole();
    user.picture = "picture";

    return user;
}

function generateListing() {
    const listing = {};

    listing.listing_title =
        LISTING_TITLES[Math.floor(Math.random() * LISTING_TITLES.length)];
    listing.listing_description =
        LISTING_DESCRIPTIONS[
            Math.floor(Math.random() * LISTING_DESCRIPTIONS.length)
        ];
    listing.cost = Math.floor(Math.random() * 10 + 100);
    listing.property_type = pickListingType();
    listing.listing_location = pickLocation();
    listing.rating = Math.floor(Math.random() * 10 + 5);
    listing.is_available = Math.random() < 0.5 ? "yes" : "no";
    listing.picture = "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/a0/88/17.jpg";

    return listing;
}

function generateUsers() {
    console.log(
        "INSERT INTO users (user_name, first_name, last_name, email, password, phone, user_role, picture) VALUES"
    );
    for (let index = 0; index < MAX_USERS; index++) {
        let User = generateUser();
        console.log(
            "('" +
                User.user_name +
                "'," +
                "'" +
                User.first_name +
                "'," +
                "'" +
                User.last_name +
                "'," +
                "'" +
                User.email +
                "'," +
                "'" +
                User.password +
                "'," +
                "'" +
                User.phone +
                "'," +
                "'" +
                User.user_role +
                "'," +
                "'" +
                User.picture +
                (index + 1 === MAX_USERS ? "');" : "'),")
        );
    }
}

function generateListings() {
    console.log(
        "INSERT INTO listings (listing_title,listing_description,cost,property_type,listing_location,rating,is_available,picture) VALUES"
    );
    for (let index = 0; index < MAX_USERS; index++) {
        let Listing = generateListing();

        console.log(
            "('" +
                Listing.listing_title +
                "'," +
                "'" +
                Listing.listing_description +
                "'," +
                "'" +
                Listing.cost +
                "'," +
                "'" +
                Listing.property_type +
                "'," +
                "'" +
                Listing.listing_location +
                "'," +
                "'" +
                Listing.rating +
                "'," +
                "'" +
                Listing.is_available +
                "'," +
                "'" +
                Listing.picture +
                (index + 1 === MAX_USERS ? "');" : "'),")
        );
    }
}

generateUsers();
console.log("\n");
generateListings();
