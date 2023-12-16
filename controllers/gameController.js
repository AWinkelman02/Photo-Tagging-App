const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
    res.render("index", { title: 'Home Page' });
});

exports.leaderboard = asyncHandler(async (req, res, next) => {
    //query database for the data
    res.render("leaderboard", { title: 'Leaderboard' });
});

exports.marioCastle = asyncHandler(async (req, res, next) => {
    //query database for the data
    const data = [
        {
            "object": "Luigi",
        },
        {
            "object": "Blue Toad",
        },
        {
            "object": "Super Leaf",
        },
    ];
    res.render("game", { title: 'Mario-Castle', name: 'mario-castle', data: data });
});

exports.marioCastleData = asyncHandler(async (req, res, next) => {
    //game data
    const data = [
        {
            "object": "Luigi",
            "x": 966,
            "y": 1917,
            "found": false,
            "game": "Mario-Castle"
        },
        {
            "object": "Blue Toad",
            "x": 1079,
            "y": 710,
            "found": false,
            "game": "Mario-Castle"
        },
        {
            "object": "Super Leaf",
            "x": 129,
            "y": 744,
            "found": false,
            "game": "Mario-Castle"
        },
    ];

    res.send({ data: data });
});

exports.cyberCity = asyncHandler(async (req, res, next) => {
    //query database for the data
    const data = [
        {
            "object": "Jake the Dog",
        },
        {
            "object": "Stewie Griffin",
        },
        {
            "object": "Ash Ketchem",
        },
    ];

    res.render("game", { title: 'Cyber-City', name: 'cyber-city', data: data});
});

exports.cyberCityData = asyncHandler(async (req, res, next) => {
    //game data
    const data = [
        {
            "object": "Jake the Dog",
            "x": 2754,
            "y": 5633,
            "found": false,
            "game": "Cyber-City"
        },
        {
            "object": "Stewie Griffin",
            "x": 3767,
            "y": 3742,
            "found": false,
            "game": "Cyber-City"
        },
        {
            "object": "Ash Ketchem",
            "x": 118,
            "y": 5456,
            "found": false,
            "game": "Cyber-City"
        },
    ];

    res.send({ data: data });
});

exports.spaceParty = asyncHandler(async (req, res, next) => {
    //query database for the data
    const data = [
        {
            "object": "Ice King",
        },
        {
            "object": "Dimple",
        },
        {
            "object": "Six",
        },
    ];

    res.render("game", { title: 'Space-Party', name: 'space-party', data: data });
});

exports.spacePartyData = asyncHandler(async (req, res, next) => {
    //game data
    const data = [
        {
            "object": "Ice King",
            "x": 67,
            "y": 440,
            "found": false,
            "game": "Space-Party"
        },
        {
            "object": "Dimple",
            "x": 1337,
            "y": 2119,
            "found": false,
            "game": "Space-Party"
        },
        {
            "object": "Six",
            "x": 830,
            "y": 3391,
            "found": false,
            "game": "Space-Party"
        },
    ];

    res.send({ data: data });
});