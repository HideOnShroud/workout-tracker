const User = require('../models/userModel')

// login user
const loginUser = async (req, res) => {
    res.json({ msg: "login" })
}


// singup user
const singupUser = async (req, res) => {
    res.json({ msg: "singup" })

}

module.exports = { loginUser, singupUser }