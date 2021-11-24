const {
    Router
} = require('express');

const {
    Country,
    Tourist_Act
} = require('../db')

const {
    Op, Model
} = require('sequelize');


// const {
//     conn
// } = require('../index.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const axios = require('axios');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//------------------------------------------------------------------------------------------------
// router.get('/countries', async (req,res,next)=>{
    
// })

//------------------------------------------------------------------------------------------------
router.get('/countries', async (req, res, next) => {
    //     //obtener paises que coincidan con el nombre dado con query aparameter
    //     //si no existe ningun pais mostrar mensaje adecuado
    // tyr cathc, error handler
    const {
        name
    } = req.query;
    try {
        if (!name) {
            const countries = await Country.findAll({
                inclide: Tourist_Act
            })
            res.status(200).send(countries)
        } else {
            const country = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            });
                res.status(200).send(country) 
        }
    } catch (error) {
        next(error)
    }

})



//------------------------------------------------------------------------------------------------
router.get("/countries/:id", async (req, res, next) => {
    const {
        id
    } = req.params;
    try {
        const countries = await Country.findOne({
            where: {
                id: id.toUpperCase()
            },
            include: Tourist_Act
        })

        res.status(200).send(countries)

    } catch (error) {
        next(error)
    }
});

//------------------------------------------------------------------------------------------------

router.post('/activity', async (req, res) => {
    const {
        name,
        difficulty,
        duration,
        season,
        countries
    } = req.body

    const postActivity = await Tourist_Act.create({
        name,
        difficulty,
        duration,
        season,
        countries
    })

    await postActivity.addCountries(countries);

    const findActivity = await Tourist_Act.findOne({
        where: {
            name: name.toUpperCase()
        },
        include:[{
            model: Country,
            attributes:['name']
        }]
        
    })
    return res.status(200).json(findActivity)
})

//------------------------------------------------------------------------------------------------

router.get('/activity', async (req, res) => {
    const createdActivities = await Tourist_Act.findAll()
    res.status(200).json(createdActivities)
})



module.exports = router;