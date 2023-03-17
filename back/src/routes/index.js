const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");
const { postFav, getFav, deleteFav } = require("../controllers/favs");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailid", getCharDetail);

router.post("/favs", postFav);
router.get("/favs", getFav);
router.delete("/favs/:id", deleteFav);

module.exports = router;
