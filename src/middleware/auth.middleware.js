const { jwtSecret } = require('../../config').api;
const { findUserById } = require('../users/users.controllers');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;


module.exports = passport => {
    const options= {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: jwtSecret
    }

    passport.use(
        new JwtStrategy(options, async(decoded , done) => {
            try {
                const response= await findUserById(decoded.id)
                console.log('Decoded JWT' , decoded)
                if (!response) {
                    return done(null , false)
                } 
                return done(null , decoded)
            } catch (error) {
                return done(error , false)
            }
        }) 
    )
}