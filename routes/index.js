var express = require('express');
var router = express.Router();

const game_controller = require("../controllers/gameController");

/* GET home page. */
router.get('/', game_controller.index);

/* GET leaderboard page. */
router.get('/leaderboard', game_controller.leaderboard);

/* GET game one page. */
router.get('/gameOne', game_controller.gameOne);

/* GET game two page. */
router.get('/Mario-Castle', game_controller.marioCastle);

router.get('/Mario-Castle/data', game_controller.marioCastleData);

/* GET game three page. */
router.get('/gameThree', game_controller.gameThree);

module.exports = router;