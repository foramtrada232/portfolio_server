const brochureService = require('../services/brochure.service');

module.exports = {
	addBrochure: (req, res) => {
		console.log("req.body===========>", req.body);		
		if (typeof req.body.hashtag === 'string') {
			req.body.hashtag = req.body.hashtag.split(',');
		}
		const file = req.file('uploadFile');
		// const pdfFile = req.file('uploadPdf');
		// const fileData = {
		// 	file : file,
		// 	pdfFile : pdfFile
		// }
		// console.log("files==========>", req.file('uploadFile'));
		return brochureService.addBrochure(req.body, file).then((data) => {
			res.status(200).json({
				code: 200,
				message: "Brochures Added successfully",
			})
		}).catch((err) => {
			console.log("on line 36 >>>>>>>>>>>>", err);
			res.status(500).json({
				code: 500,
				message: "Internal server error"
			});
		})
	},

	getBrochure: (req, res) => {
		return brochureService.getBrochure().then((data) => {
			res.status(200).json({
				code: 200,
				message: "got the data",
				data: data
			})
		}).catch((err) => {
			console.log("on line 36 >>>>>>>>>>>>", err);
			res.status(500).json({
				code: 500,
				message: "Internal server error"
			});
		})
	},

	addLandingPage: (req, res) => {
		console.log("req.body===========>", req.body);
		if (typeof req.body.hashtag === 'string') {
			req.body.hashtag = req.body.hashtag.split(',');
		}
		const file = req.file('uploadFile');
		// console.log("files==========>", req.file.length, file);
		return brochureService.addLandingPage(req.body, file).then((data) => {
			res.status(200).json({
				code: 200,
				message: "Landing page Added successfully",
			})
		}).catch((err) => {
			console.log("on line 36 >>>>>>>>>>>>", err);
			res.status(500).json({
				code: 500,
				message: "Internal server error"
			});
		})
	},

	getLandingPage: (req, res) => {
		console.log("=========================")
		return brochureService.getLandingPage().then((data) => {
			res.status(200).json({
				code: 200,
				message: "got the data",
				data: data
			})
		}).catch((err) => {
			console.log("on line 36 >>>>>>>>>>>>", err);
			res.status(500).json({
				code: 500,
				message: "Internal server error"
			});
		})
	},

	addLogoDesign: (req, res) => {
		console.log("req.body===========>", req.body);
		if (typeof req.body.hashtag === 'string') {
			req.body.hashtag = req.body.hashtag.split(',');
		}
		const file = req.file('uploadFile');
		// console.log("files==========>", req.file.length, file);
		return brochureService.addLogoDesign(req.body, file).then((data) => {
			res.status(200).json({
				code: 200,
				message: "Logo Added successfully",
			})
		}).catch((err) => {
			console.log("on line 36 >>>>>>>>>>>>", err);
			res.status(500).json({
				code: 500,
				message: "Internal server error"
			});
		})
	},

	getLogoDesign: (req, res) => {
		return brochureService.getLogoDesign().then((data) => {
			res.status(200).json({
				code: 200,
				message: "got the data",
				data: data
			})
		}).catch((err) => {
			console.log("on line 36 >>>>>>>>>>>>", err);
			res.status(500).json({
				code: 500,
				message: "Internal server error"
			});
		})
	},

	addFlyer: (req, res) => {
		console.log("req.body===========>", req.body);
		if (typeof req.body.hashtag === 'string') {
			req.body.hashtag = req.body.hashtag.split(',');
		}
		const file = req.file('uploadFile');
		// console.log("files==========>", req.file.length, file);
		return brochureService.addFlyer(req.body, file).then((data) => {
			res.status(200).json({
				code: 200,
				message: "Flyer Added successfully",
			})
		}).catch((err) => {
			console.log("on line 36 >>>>>>>>>>>>", err);
			res.status(500).json({
				code: 500,
				message: "Internal server error"
			});
		})
	},

	getFlyer: (req, res) => {
		return brochureService.getFlyer().then((data) => {
			res.status(200).json({
				code: 200,
				message: "got the data",
				data: data
			})
		}).catch((err) => {
			console.log("on line 36 >>>>>>>>>>>>", err);
			res.status(500).json({
				code: 500,
				message: "Internal server error"
			});
		})
	},
}