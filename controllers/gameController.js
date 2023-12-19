const Object = require("../models/object");
const Leaderboard = require("../models/leaderboard");

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
    res.render("index", { title: 'Home Page' });
});

exports.leaderboard = asyncHandler(async (req, res, next) => {
    res.render("leaderboard", { title: 'Leaderboard' });
});

exports.leaderboardData = asyncHandler(async (req, res, next) => {
    //query database for the data
    const leaderboard =  await Leaderboard.find({})
    .sort({ time: 1 })
    .exec();

    res.send({leaderboard: leaderboard });
});

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