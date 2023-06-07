const { Sequelize } = require("sequelize")  

const sequlize = new Sequelize("test",'postgres','postgres',{
    host:'localhost',
    port:5432,
    dialect:'postgres',
    operatorsAliases:false,
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    storage:'path/to/database.sqllite',
})

module.exports = sequlize