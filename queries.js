const database = require('./database-connection')

module.exports = {
   listAll(){
      return database('locations')
   },
   addLocation(location) {
      return database('locations').insert(location).returning('*')
   },
   deleteLocation(id) {
      return database('locations').where({id: id}).delete().returning('*')
   }
}

