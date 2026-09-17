import fs from "fs";

const readStream = fs.createReadStream("input.txt", {
    encoding: "utf-8"
});

const writeStream = fs.createWriteStream("output.txt");

readStream.on("data", (chunk) => {
    console.log("Data Received");
    console.log("Data:", chunk);
});

readStream.on("end", () => {
    console.log("END");
});

readStream.on("error", (err) => {
    console.log("Read Error:", err.message);
});

writeStream.on("finish", () => {
    console.log("Data Written");
});

writeStream.on("error", (err) => {
    console.log("Write Error:", err.message);
});

readStream.pipe(writeStream);