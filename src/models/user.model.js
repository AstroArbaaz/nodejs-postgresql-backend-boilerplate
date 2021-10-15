module.exports = (sequelize, Sequelize) => {
    
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                  msg: 'Please enter your first name'
                }
            }
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                  msg: 'Please enter your last name'
                }
            },
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate:{
                is: /^[a-z]+$/i,
                isEmail: true,
                notNull: {
                    msg: 'please enter your valid email address'
                }
            }
        },
        mobile: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                  msg: 'Please enter password'
                }
            }
        },
        emailToken: {
            type: Sequelize.STRING
        },
        isVerified: {
            type: Sequelize.BOOLEAN,
            default: false
        }
    })
  
    return User;
};