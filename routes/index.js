var express = require('express');
var router = express.Router();

const game_controller = require("../controllers/gameController");

/* GET home page. */
router.get('/', game_controller.index);

/* GET leaderboard page. */
router.get('/Leaderboard', game_controller.leaderboard);

router.get('/Leaderboard/data', game_controller.leaderboardData);

/* GET mario game page. */
router.get('/Mario-Castle', game_controller.marioCastle);

router.get('/Mario-Castle/data', game_controller.marioCastleData);

router.post('/Mario-Castle', game_controller.leaderboardPost);

/* GET cyber game page. */
router.get('/Cyber-City', game_controller.cyberCity);

router.get('/Cyber-City/data', game_controller.cyberCityData);

router.post('/Cyber-City', game_controller.leaderboardPost);

/* GET game three page. */
router.get('/Space-Party', game_controller.spaceParty);

router.get('/Space-Party/data', game_controller.spacePartyData);

router.post('/Space-Party', game_controller.leaderboardPost);

module.exports = router;