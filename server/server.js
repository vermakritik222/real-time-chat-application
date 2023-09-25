import App from "./app"
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    })
    .then(() => {
        console.log('DB is connected to app.....');
    })
    .catch((err) => {
        console.log(`db error ${err.message}`);
    });

const port = process.env.PORT || 8000;

App.listen(port, () => {
    console.log(`server is running on ${port} .......`);
});