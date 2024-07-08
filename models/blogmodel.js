const fs = require("fs");

// async function getblog() {
//     try {
//         console.log("testing.....");
//         fs.readFile('./public/data/blogs.json', 'utf8', (err, data) => {
//             if (data) {
//                 return JSON.parse(data);
//             } else {
//                 return [];
//             }
//         });
//     } catch (err) {
//         console.log("Error in reading the data");
//         return [];
//     }
// }
async function addblog(title, description, imageUrl) {
    try {
        // Read existing data
        let datablog = '';
        fs.readFile('./public/data/blogs.json', { encoding: 'utf8' }, (err, data) => {
            if (data) {
                datablog = JSON.parse(data);
                if (!Array.isArray(datablog)) {
                    datablog = [];
                }

                // Add new blog entry
                datablog.push({ title: title, description: description, imageUrl: imageUrl });

                // Write updated data back to the file
                fs.writeFile('./public/data/blogs.json', JSON.stringify(datablog, null, 2), { encoding: 'utf8' }, (err, data) => {
                    if (data) {
                        console.log("Data added successfully...");
                    }
                });

            }
            if (err) {

            }
        });


        // Check if datablog is an array, otherwise initialize it

    } catch (err) {
        console.error("Error reading or writing file", err);
    }
}
module.exports = {
    // getblog,
    addblog
};