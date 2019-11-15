const broucherModel = require('../models/brochure');
const flyerModel = require('../models/flyer');
const fileUploader = require("./fileUpload");
const landingPageModel = require("../models/landingpage");
const logoDesignModel = require("../models/logoDesign");
const hashtagModel = require("../models/hashtag");
const _ = require('lodash');

module.exports = {
    addBrochure: (data, file) => {
        return new Promise((resolve, reject) => {
            const brochure = new broucherModel(data);
            brochure.save((err, saveBrochure) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('in else', saveBrochure);
                    console.log('data.hashtag=============>', data.hashtag)
                    _.forEach(data.hashtag, function (tag) {
                        console.log('tag===============>', tag);
                        hashtagModel.findOneAndUpdate({ hashtag: tag }, { upsert: true, new: true })
                            .exec((err, foundTag) => {
                                if (err) {
                                    reject(err);
                                    console.log('err------------------>', err);
                                } else if (!foundTag) {
                                    console.log('foundTag===============>', foundTag);
                                    let obj = {
                                        hashtag: tag,
                                    }
                                    let hashnew = new hashtagModel(obj);
                                    hashnew.save();
                                }
                            })
                    })
                    const uploadPath = "/brochure/"
                    return fileUploader.uploadFile(uploadPath, file).then((uploadFiles) => {
                        if (uploadFiles.length) {
                            let images = saveBrochure.images;
                            for (let i = 0; i < uploadFiles.length; i++) {
                                images = uploadFiles[0].fd.split('/uploads/').reverse()[0];
                            }
                            broucherModel.findOneAndUpdate({ _id: saveBrochure._id }, { images: images }, { upsert: true, new: true }).exec((error, updated) => {
                                if (error) {
                                    reject(error);
                                } else {
                                    resolve(updated);
                                }
                            })
                        } else {
                            resolve(saveBrochure);
                        }
                    })
                }
            })
        })
    },

    getBrochure: () => {
        return new Promise((resolve, reject) => {
            broucherModel.aggregate([
                {
                    $project: {
                        images: 1,
                        title: 1,
                        _id: 0
                    }
                }
            ])
                .exec((err, brochure) => {
                    if (err) {
                        reject(err);
                    } else {
                        console.log("landing pages===>", brochure);
                        resolve(brochure)
                    }
                })

        })
    },

    getLandingPage: () => {
        console.log("in service")
        return new Promise((resolve, reject) => {
            landingPageModel.aggregate([
                {
                    $project: {
                        images: 1,
                        title: 1,
                        _id: 0
                    }
                }
            ])
                .exec((err, landingPage) => {
                    if (err) {
                        reject(err);
                    } else {
                        console.log("landing pages===>", landingPage);
                        resolve(landingPage)
                    }
                })

        })
    },

    addLandingPage: (data, file) => {
        return new Promise((resolve, reject) => {
            const landingPage = new landingPageModel(data);
            landingPage.save((err, saveLandingPage) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('in else', saveLandingPage);
                    console.log('data.hashtag=============>', data.hashtag)
                    _.forEach(data.hashtag, function (tag) {
                        console.log('tag===============>', tag);
                        hashtagModel.findOneAndUpdate({ hashtag: tag }, { upsert: true, new: true })
                            .exec((err, foundTag) => {
                                if (err) {
                                    reject(err);
                                    console.log('err------------------>', err);
                                } else if (!foundTag) {
                                    console.log('foundTag===============>', foundTag);
                                    let obj = {
                                        hashtag: tag,
                                    }
                                    let hashnew = new hashtagModel(obj);
                                    hashnew.save();
                                }
                            })
                    })
                    const uploadPath = "/landingPages/"
                    return fileUploader.uploadFile(uploadPath, file).then((uploadFiles) => {
                        if (uploadFiles.length) {
                            let images = saveLandingPage.images;
                            for (let i = 0; i < uploadFiles.length; i++) {
                                images = uploadFiles[0].fd.split('/uploads/').reverse()[0];
                            }
                            landingPageModel.findOneAndUpdate({ _id: saveLandingPage._id }, { images: images }, { upsert: true, new: true }).exec((error, updated) => {
                                if (error) {
                                    reject(error);
                                } else {
                                    resolve(updated);
                                }
                            })
                        } else {
                            resolve(saveLandingPage);
                        }
                    })
                }
            })
        })
    },

    addLogoDesign: (data, file) => {
        return new Promise((resolve, reject) => {
            const logoDesign = new logoDesignModel(data);
            logoDesign.save((err, saveLogoDesign) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('in else', saveLogoDesign);
                    console.log('data.hashtag=============>', data.hashtag)
                    _.forEach(data.hashtag, function (tag) {
                        console.log('tag===============>', tag);
                        hashtagModel.findOneAndUpdate({ hashtag: tag }, { upsert: true, new: true })
                            .exec((err, foundTag) => {
                                if (err) {
                                    reject(err);
                                    console.log('err------------------>', err);
                                } else if (!foundTag) {
                                    console.log('foundTag===============>', foundTag);
                                    let obj = {
                                        hashtag: tag,
                                    }
                                    let hashnew = new hashtagModel(obj);
                                    hashnew.save();
                                }
                            })
                    })
                    const uploadPath = "/logoDesign/"
                    return fileUploader.uploadFile(uploadPath, file).then((uploadFiles) => {
                        if (uploadFiles.length) {
                            let images = saveLogoDesign.images;
                            for (let i = 0; i < uploadFiles.length; i++) {
                                images = uploadFiles[0].fd.split('/uploads/').reverse()[0];
                            }
                            logoDesignModel.findOneAndUpdate({ _id: saveLogoDesign._id }, { images: images }, { upsert: true, new: true }).exec((error, updated) => {
                                if (error) {
                                    reject(error);
                                } else {
                                    resolve(updated);
                                }
                            })
                        } else {
                            resolve(saveLogoDesign);
                        }
                    })
                }
            })
        })
    },

    getLogoDesign: () => {
        return new Promise((resolve, reject) => {
            logoDesignModel.aggregate([
                {
                    $project: {
                        images: 1,
                        title: 1,
                        _id: 0
                    }
                }
            ])
                .exec((err, logo) => {
                    if (err) {
                        reject(err);
                    } else {
                        console.log("logo design ===>", logo);
                        resolve(logo)
                    }
                })

        })
    },

    addFlyer: (data, file) => {
        return new Promise((resolve, reject) => {
            const flyer = new flyerModel(data);
            flyer.save((err, saveFlyer) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('in else', saveFlyer);
                    console.log('data.hashtag=============>', data.hashtag)
                    _.forEach(data.hashtag, function (tag) {
                        console.log('tag===============>', tag);
                        hashtagModel.findOneAndUpdate({ hashtag: tag }, { upsert: true, new: true })
                            .exec((err, foundTag) => {
                                if (err) {
                                    reject(err);
                                    console.log('err------------------>', err);
                                } else if (!foundTag) {
                                    console.log('foundTag===============>', foundTag);
                                    let obj = {
                                        hashtag: tag,
                                    }
                                    let hashnew = new hashtagModel(obj);
                                    hashnew.save();
                                }
                            })
                    })
                    const uploadPath = "/flyer/"
                    return fileUploader.uploadFile(uploadPath, file).then((uploadFiles) => {
                        if (uploadFiles.length) {
                            let images = saveFlyer.images;
                            for (let i = 0; i < uploadFiles.length; i++) {
                                images = uploadFiles[0].fd.split('/uploads/').reverse()[0];
                            }
                            flyerModel.findOneAndUpdate({ _id: saveFlyer._id }, { images: images }, { upsert: true, new: true }).exec((error, updated) => {
                                if (error) {
                                    reject(error);
                                } else {
                                    resolve(updated);
                                }
                            })
                        } else {
                            resolve(saveFlyer);
                        }
                    })
                }
            })
        })
    },

    getFlyer: () => {
        return new Promise((resolve, reject) => {
            flyerModel.aggregate([
                {
                    $project: {
                        images: 1,
                        title: 1,
                        _id: 0
                    }
                }
            ]).exec((err, flyer) => {
                if (err) {
                    reject(err);
                } else {
                    console.log("flyer===========>", flyer);
                    resolve(flyer)
                }
            })
        })
    },

}