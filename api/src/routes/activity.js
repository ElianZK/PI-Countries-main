const {Router} = require('express');
const {Tourist_Act} = require('../db')
const axios = require('axios');
const router = Router();


// router.post('/',async(req,res,next)=>{
//     //recibe datos del formulario controlado por body
//      //crea una act turistica en la DB
//     const {name, difficulty, duration, season} = req.body;
//     try{
//         let createAct = await Tourist_Act.create({
//             name,
//             difficulty,
//             duration,
//             season
//         })

//         await character.

//     }catch(error){
//         next(error)
//     }
// })

module.exports = router