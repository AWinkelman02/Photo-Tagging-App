var express = require('express');
var router = express.Router();

const game_controller = require("../controllers/gameController");

/* GET home page. */
router.get('/', game_controller.index);

/* GET leaderboard page. */
router.get('/leaderboard', game_controller.leaderboard);

/* GET mario game page. */
router.get('/Mario-Castle', game_controller.marioCastle);

router.get('/Mario-Castle/data', game_controller.marioCastleData);

/* GET cyber game page. */
router.get('/Cyber-City', game_controller.cyberCity);

router.get('/Cyber-City/data', game_controller.cyberCityData);

/* GET game three page. */
router.get('/Space-Party', game_controller.spaceParty);

router.get('/Space-Party/data', game_controller.spacePartyData);

module.exports = router;