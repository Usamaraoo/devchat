require('dotenv').config()
const express = require('express')
const User = require('./models/User')
const router = express.Router()

const app = express()
const port = process.env.PORT || 5001

const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI
mongoose.connect(uri, {
}).then(() => {
  console.log('Connected to MongoDB')
}).catch((err) => {
  console.error(err)
})

// router.get('/users', async (req, res) => {
//   const users = await User.find()
//   res.json(users)
// })

// router.post('/users', async (req, res) => {
//   const user = new User(req.body)
//   await user.save()
//   res.json(user)
// })

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})