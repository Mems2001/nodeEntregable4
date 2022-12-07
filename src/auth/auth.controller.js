const { findUserByEmail } = require("../users/users.controllers")
const { comparePassword } = require("../utils/crypto")

const loginUser = async(email , password) => {
    try {
        const user = await findUserByEmail (email)
        const verifyPass = comparePassword (password , user.password)

        if (verifyPass) {
            return user
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

module.exports = {
    loginUser
}