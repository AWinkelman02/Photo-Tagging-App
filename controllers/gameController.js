const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
    res.render("index", { title: 'Home Page' });
});

exports.leaderboard = asyncHandler(async (req, res, next) => {
    //query database for the data
    res.render("leaderboard", { title: 'Leaderboard' });
});

exports.gameOne = asyncHandler(async (req, res, next) => {
    //query database for the data
    res.render("gameOne", { title: 'Christmas' });
});

exports.gameTwo = asyncHandler(async (req, res, next) => {
    //query database for the data
    res.render("gameTwo", { title: 'Mario Castle' });
});

exports.gameTwoData = asyncHandler(async (req, res, next) => {
    //game data
    const data = [579, 434];
    res.send({ data: data });
});

exports.gameThree = asyncHandler(async (req, res, next) => {
    //query database for the data
    res.render("gameThree", { title: 'Downtown' });
});