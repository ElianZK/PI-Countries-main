//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { default: axios } = require('axios')
const server = require('./src/app.js');
const {conn, Country} = require('./src/db.js');

// const Country = require('./src/models/Country.js');
// Syncing all the models at once.
conn.sync({force: false}).then(() => {
  server.listen(3001, async() => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    try  {
      const apiUrl = await axios.get('https://restcountries.com/v3/all');
      const apiData = apiUrl.data.map(e => {
        return {
          name: e.name.common,
          continent: e.continents,
          flag_image: e.flags[0], //.map(e=>e)
          id: e.cca3,
          capital: e.capital,
          subregion: e.subregion,
          area: e.area,
          population: e.population,
        }
      })
      await Country.bulkCreate(apiData)
      return apiData

    } catch (e) {
      console.log('error: ', e)
    }

  });
});