const express = require("express")

const User = require('./user')
const app = express()

const client = require('./eureka')

client.start()

app.use(express.json())

app.post('/user', async(req,res)=>{
    try {
        const { id, email, fullname, age, employed } = req.body
        const user = await User.create({
            id,
            email,
            fullname,
            age,
            employed
        })
        res.send(user)
    } catch (error) {
        console.log(error)
    }
})

app.get('/user',async(req,res)=>{
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})

app.patch('/user/:id',async(req,res)=>{
    try {
        const id = req.params.id
        await User.update(req.body,{where:{id:id}})
        const user = await User.findByPk(id)
        res.json(user)
    } catch (error) {
        console.log(error)
    }
})

app.delete('/user/:id',async(req,res)=>{
    try {
        const id = Number(req.params.id) 
        const user = await User.destroy({where:{id:id}})
        res.send("deleted")
    } catch (error) {
        res.send(error)
        console.log(error)
    }
})

app.listen(3001,()=>{
    console.log("server running on 3001")
})
