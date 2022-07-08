const { verify } = require('jsonwebtoken')

const Authorization = async (req, res, next) => {
    const { authorization } = req.headers

    if(!authorization) {
        res.status(401).json({ error: "Unauthorized" })
        return
    }

    try {
        const token = authorization.split(' ')[1]
        const user = verify(token, process.env.TOKEN_SECRET)

        req.user = user
        console.log(req.user)
        next()

    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = Authorization