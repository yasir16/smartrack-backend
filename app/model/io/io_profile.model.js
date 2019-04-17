module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define('io_profile', {
        name : {
            type: Sequelize.STRING
        },
        type : {
            type: Sequelize.STRING
        },
        port : {
            type: Sequelize.STRING
        },
        min_value : {
            type: Sequelize.STRING
        },
        max_value : {
            type: Sequelize.STRING
        },
        unit : {
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false,  // I do want timestamps here
    }
    )

    return Profile;
}