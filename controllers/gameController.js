var Filter = require('bad-words'),
filter = new Filter();

const Object = require("../models/object");
const Leaderboard = require("../models/leaderboard");

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
    res.render("index", { title: 'Home' });
});

exports.leaderboard = asyncHandler(async (req, res, next) => {
    res.render("leaderboard", { title: 'Leaderboard' });
});

exports.leaderboardData = asyncHandler(async (req, res, next) => {
    //query database for the data
    const leaderboard =  await Leaderboard.find({})
    .sort({ time: 1 })
    .exec();
    console.log()
    res.send({leaderboard: leaderboard });
});

exports.leaderboardPost = [
    body("name", "Name must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
    body("time", "time must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
    body("game", "time must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),

    asyncHandler(async (req, res, next) => {
        let cleanName = filter.clean(req.body.name);
        console.log(cleanName);
        const record = new Leaderboard({
            name: cleanName,
            time: req.body.time,
            game: req.body.game,
        });
        await record.save();
        res.redirect("/");
    })
];

exports.marioCastle = asyncHandler(async (req, res, next) => {
    //query database for the data
    const data =  await Object.find({game: "Mario-Castle"})
    .sort({ title: 1 })
    .exec();

    res.render("game", { title: 'Mario-Castle', name: 'mario-castle', data: data });
});

exports.marioCastleData = asyncHandler(async (req, res, next) => {
    //game data
    const data =  await Object.find({game: "Mario-Castle"})
    .sort({ title: 1 })
    .exec();

    res.send({ data: data });
});

exports.cyberCity = asyncHandler(async (req, res, next) => {
    //query database for the data
    const data =  await Object.find({game: "Cyber-City"})
    .sort({ title: 1 })
    .exec();

    res.render("game", { title: 'Cyber-City', name: 'cyber-city', data: data});
});

exports.cyberCityData = asyncHandler(async (req, res, next) => {
    //game data
    const data =  await Object.find({game: "Cyber-City"})
    .sort({ title: 1 })
    .exec();

    res.send({ data: data });
});

exports.spaceParty = asyncHandler(async (req, res, next) => {
    //query database for the data
    const data =  await Object.find({game: "Space-Party"})
    .sort({ title: 1 })
    .exec();

    res.render("game", { title: 'Space-Party', name: 'space-party', data: data });
});

exports.spacePartyData = asyncHandler(async (req, res, next) => {
    //game data
    const data =  await Object.find({game: "Space-Party"})
    .sort({ title: 1 })
    .exec();

    res.send({ data: data });
});