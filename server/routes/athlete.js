const express = require('express');
const Athlete = require('../models/athletes');
const router = express.Router();

const errorCheck = require('../util/errorCheck');
// const checkToken = require('../util/checkToken');

router.post('/', errorCheck(async(req, res) => {
  let newAthlete = new Athlete({
    athleteName: req.body.athleteName,
    parentName: req.body.parentName,
    parentAddress: req.body.parentAddress,
    parentAddressCity: req.body.parentAddressCity,
    parentAddressZip: req.body.parentAddressZip,
    parentAddressState: req.body.parentAddressState,
    parentEmail: req.body.parentEmail,
    parentPhone: req.body.parentPhone,
    emergencyName: req.body.emergencyName,
    emergencyPhone: req.body.emergencyPhone,
    athleteShirtSize: req.body.athleteShirtSize
  });

  let saveAthlete = await newAthlete.save();
  if(!saveAthlete){
    throw {message: "There was a problem registering this athlete.", code: 500 }
  }

  res.send(saveAthlete);
}))

router.get('/', errorCheck(async(req, res) => {
  let athletes = await Athlete.find();
  if(athletes.length == 0){
    throw {message: "There are no athletes currently found.", code: 500 }
  }
  res.send(athletes);
}))



module.exports = router;
