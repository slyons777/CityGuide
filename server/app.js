const express = require("express"); // to get the dependency into the app
const app = express(); // for the express functionality use app
const PORT = process.env.PORT || 3001; //port to listen make it PORT capitalize because it will be hiden because anything inside the .env file will be hiden so hacker will not know the port using
// will use 3000 if cannot find .env.PORT

app.get("/", () => {
    console.log("App is getting to the Home Page");

}); //create update delete destroy

app.listen(PORT, () => {
    console.log("Listening port: " + PORT);
}); //  take two parameters app is listening on port 3000                                