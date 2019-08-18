const express = require('express');
const router = express.Router();
const Car = require('../models/car');

//get info for all cars
router.get('/', async (req, res) =>{
    try{
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        res.json({message: err});
    }
});

//add(post) new cars
router.post('/', async (req, res) => {
    const car = new Car({
        brand: req.body.brand,
        model: req.body.model
    });
    try{
        const savedCar = await car.save();
        res.json(savedCar);
    } catch(err){
        res.json({message: err});
    }
});

//get info for a specific car by id
router.get('/:carId', async (req, res) => {
    try{
        const car = await Car.findById(req.params.carId);
        res.json(car);
    } catch(err){
        res.json({message: err});
    }
});

//delete a car 
router.delete('/:carId', async (req, res) => {
    try{
    const deleteCar = await Car.remove({_id: req.params.carId});
    res.json(deleteCar);
    } catch(err){
        res.json({message: err});
    }
});

//update a car's model
router.patch('/:carId', async (req, res) => {
    try{
    const updateCarModel = await Car.updateOne({_id: req.params.carId}, {$set: {model: req.body.model}});
    res.json(updateCarModel);
    } catch(err){
        res.json({message: err});
    }
});

module.exports = router;