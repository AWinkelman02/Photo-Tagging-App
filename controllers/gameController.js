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

exports.marioCastle = asyncHandler(async (req, res, next) => {
    //query database for the data
    res.render("mario-castle", { title: 'Mario-Castle' });
});

exports.marioCastleData = asyncHandler(async (req, res, next) => {
    //game data
    const data = [
        {
            "object": "Luigi",
            "x": 967,
            "y": 1869,
            "pinX": 955,
            "pinY": 1850,
            "found": false,
            "game": "Mario-Castle"
        },
        {
            "object": "Blue Toad",
            "x": 1080,
            "y": 662,
            "pinX": 1067,
            "pinY": 645,
            "found": false,
            "game": "Mario-Castle"
        },
        {
            "object": "Super Leaf",
            "x": 128,
            "y": 698,
            "pinX": 116,
            "pinY": 682,
            "found": false,
            "game": "Mario-Castle"
        },
    ];

    res.send({ data: data });
});

exports.gameThree = asyncHandler(async (req, res, next) => {
    //query database for the data
    res.render("gameThree", { title: 'Downtown' });
});