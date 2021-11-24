const {
    Router
} = require('express');
const {
    Country,
    Activity
} = require('../db')
const {
    Op,
    Model
} = require('sequelize');
const cors = require ('cors')
// const axios = require('axios');
const router = Router();
router.use(cors())
//------------------------------------------------------------------------------------------------

router.get('/countries', async (req, res, next) => {
    const {
        name
    } = req.query;

    try {
        if (!name) {
            const countries = await Country.findAll({
                include: Activity
            })
            res.status(200).json(countries)
        } else {
            const nameCountry = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: Activity
            })
            res.status(200).json(nameCountry)
        }

    } catch (err) {
        next(err)
    }

})

//------------------------------------------------------------------------------------------------

router.get("/countries/:id", async (req, res, next) => {
    const {
        id
    } = req.params;

    try {
        const idCountry = await Country.findOne({
            where: {
                id: id.toUpperCase()
            },
            include: Activity
        })

        return res.status(200).json(idCountry);

    } catch (err) {
        next(err)
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
    } = req.body;

    const activity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
        countries
    })

    await activity.addCountries(countries);

    const findActivity = await Activity.findAll({
        where: {
            name: name.toUpperCase()
        },
        include: [{
            model: Country,
            attributes: ['name']
        }]
    })
    return res.status(200).json(findActivity)
})

//------------------------------------------------------------------------------------------------

router.get('/activity', async (req, res) => {
    const allActivities = await Activity.findAll({
        include: Country
    })
    res.status(200).json(allActivities)
})

module.exports = router;