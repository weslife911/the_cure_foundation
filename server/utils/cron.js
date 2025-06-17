const { config } = require("dotenv");
const cron = require("cron");
const https = require("https");

config();

const job = new cron.CronJob("*/14 * * * *", function() {
    https
    .get(process.env.API_URL || "https://the-cure-foundation.onrender.com", (res) => {
        if(res.statusCode === 200) console.log("GET request sent successfully");
        else console.log("GET request failed", res.statusCode);
    })
    .on("error", (e) => console.error("Error while sending request", e));
});

module.exports = job;