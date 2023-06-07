const sequelize = require("./db")
const { DataTypes } = require("sequelize")

sequelize.authenticate()

const User = sequelize.define("user",{
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
        allowNull:false,
        defaultValue:DataTypes.UUIDV4
    },
    email:{
        type:DataTypes.STRING,
    },
    fullname:{
        type:DataTypes.STRING,
    },
    age:{
        type:DataTypes.INTEGER,
    },
    employed:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
    }
})

User.sync().then(()=>{
    console.log("user model synced")
})

module.exports = User