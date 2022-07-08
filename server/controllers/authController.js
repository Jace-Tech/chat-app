const User = require("../models/User")
const { hash, compare } = require("bcrypt")
const { sign } = require("jsonwebtoken")


const handleRegistration = async (req, res) => {
    const { email, name, password } = req.body
    const hashedPassword = await hash(password, 10)

    try {
        const user = await User.create({
            email,
            name,
            password: hashedPassword
        })

        res.status(201).json({ id: user._id, email: user.email, name: user.name })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }

}

const handleLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if(!user && await compare(password, user.password)) {
            res.status(401).json({ error: "Incorrect Credientials" })
            return
        }

        const token = sign({ user }, process.env.TOKEN_SECRET, { expiresIn: "7d" })
        res.status(200).json({
            email: user.email,
            name: user.name,
            id: user._id,
            token
        })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }

}

const handleUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json({ users})
}

module.exports = {
    handleRegistration,
    handleLogin,
    handleUsers
}