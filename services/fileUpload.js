const path = require('path');
const uploadPath = path.join(__dirname, '../uploads/');

module.exports = {
    uploadFile: (path, file) => {
        return new Promise((resolve, reject) => {
            // console.log("FILE:",file)
            file.upload({
                maxBytes: 50000000,
                dirname: uploadPath + path
            }, function whenDone(err, uploadedFiles) {
                console.log("uploadedFiles:",uploadedFiles)
                if (err) {
                    return reject(err);
                } else if (uploadedFiles.length > 0) {
                    return resolve(uploadedFiles);
                } else {
                    return resolve(uploadedFiles);
                }
            });
        })
    }
}