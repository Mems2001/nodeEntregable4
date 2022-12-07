const bcrypt = require('bcrypt');

const hashPassword = (plainPassword) => {
    const hashPassword = bcrypt.hashSync(plainPassword , 10)
    return hashPassword
}

const comparePassword = (plainPassword , hashedPassword) => {
    return bcrypt.compareSync(plainPassword , hashedPassword)
}

module.exports = {
    hashPassword , 
    comparePassword
}