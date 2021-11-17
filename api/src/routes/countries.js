const {Router} = require('express');
const {Country,Tourist_Act} = require('../db')
const router = Router();





router.get('/', async (req, res, next) => {
    //traer todos los países desde restcountries  
    //guardarlos en su propia base de datos y utilizarlos desde allí 
    //obtener un listado de los paises
    const allCountries = await Country.findAll();
    res.status(200).send(allCountries)

})

router.get('/countries', async(req, res, next) => {
    //     //obtener paises que coincidan con el nombre dado con query aparameter
    //     //si no existe ningun pais mostrar mensaje adecuado
    const {name} = req.query;
    const allCountries = await Country.findAll()
    try{ 
        if (name) {
            let countryByName = await allCountries.filter(e => e.name.toLowerCase().includes(name.toLocaleLowerCase()));
            countryByName.length ?
            res.status(200).send(countryByName) :
            res.status(404).send('country not found')
        } else {
        res.status(404).send('a name is required')
        }
    } catch(error){
        next(error);
    }
})
   

router.get('/:id', async (req, res,next) => {
    //     //detalle de un pais en particular
    //     //datos de la ruta principal
    //     //incluir actividades turisticas correspondientes
    // const {id} = req.params
    // // const allCountries = await Country.findAll()
     
    // if (id) {
    //    let countryById = await Country.findByPk({
    //         where:{
    //             id: id.toUpperCase()
    //         },
    //         // include: Tourist_Act
    //     })
    //     if(countryById){
    //         const country = {

    //         }
    //     }
    // }
})


module.exports = router