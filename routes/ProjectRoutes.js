const express = require("express");

const router = express.Router();

// Services
const ApiAuthService = require("../services/ApiAuth");

// Controllers
const ProjectController = require("../controller/ProjectController");
const BrochureController = require("../controller/BrochureController");
router.get("/landingpage",BrochureController.getLandingPage);
router.get('/logo-design',BrochureController.getLogoDesign);
router.get('/brochure',BrochureController.getBrochure);
router.get('/flyer',BrochureController.getFlyer);

router.post("/", ProjectController.createProject);
router.get("/", ProjectController.getProjectsByCategory);
router.get("/all", ProjectController.getAllProjects);
router.post("/search-projects", ProjectController.getFilteredProjects);
router.get("/:projectId", ProjectController.getSingleProject);
router.put("/:projectId",ProjectController.updateProject);
router.delete("/:projectId",ProjectController.deleteProject);

router.post("/add-brochure",BrochureController.addBrochure);
router.post("/add-flyer",BrochureController.addFlyer);
router.post("/add-landingpage",BrochureController.addLandingPage);
router.post('/add-logo-design',BrochureController.addLogoDesign);
module.exports = router;
