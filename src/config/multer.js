// const multer = require('multer');
// const path = require('path');

// const { checkExt } = require('../models/helpers/filetypes');

// const getExtension = (fname) => {
//     return path.extname(fname);
// }

// const getNameWithoutExt = (ext, fname) => {
//     return fname.split(ext)[0];
// }

// const setStorage = (destination) => {
//     return multer.diskStorage({
//         destination: destination,
//         filename: (req, file, cb) => {
//             let ext = getExtension(file.originalname),
//                 nameWithoutExt = getNameWithoutExt(ext, file.originalname),
//                 timestamp = Date.now();

//             cb(null, nameWithoutExt + '-' + timestamp + ext)
//         }
//     });
// }

// const limits = {
//     fileSize: 18000000,
//     fileFilter: (type = 'std') => ((_req, file, cb) => {
//         return checkExt(file, cb, type);
//     }),
// }

// const singleFile = (destination, field) => {
//     let storage = setStorage(destination);

//     return multer({
//         storage,
//         limits
//     }).single(field);
// }

// const multipleFiles = (destination, fields) => {
//     let storage = setStorage(destination);

//     return multer({
//         storage,
//         limits
//     }).fields(fields);
// }

// module.exports = {
//     limits,
//     setStorage,
//     singleFile,
//     multipleFiles
// };