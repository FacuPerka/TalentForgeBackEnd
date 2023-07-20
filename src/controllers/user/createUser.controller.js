const userSchema = require('../../db/models/user.model')
const mongoose = require('mongoose')

const createUser = async (fullName, username, dateOfBirth, email, password, country, description, profileImage, interactions, accountType, registerWith, disabled) => {
    try {
        const user = await userSchema({
            fullName, 
            username,
            email,
            password,
            dateOfBirth,
            country,
            disabled: false,
            accountType: accountType || 'user',
            description: description || 'Talent forge user',
            profileImage: profileImage || 'null',
            registerWith: registerWith || 'local',
            interactions: interactions || {
                friends:[],
                savedCourses:[],
                puchasedCourses:[],
                posts:[]
            }
        });

        user.save()
 
        return user
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = createUser