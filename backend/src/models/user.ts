import { Model, Optional } from 'sequelize';
import { DataType } from 'sequelize-typescript'
import { sequelize } from '.'
import UserAttributes from '../types/user';
import * as bcrypt from 'bcrypt'

/*
  We have to declare the UserCreationAttributes to
  tell Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/

interface UserCreationAttributes
    extends Optional<UserAttributes, 'id'> { }

interface UserInstance
    extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

const User = sequelize.define<UserInstance>(
    'User',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataType.INTEGER,
            unique: true,
        },
        firstName: {
            allowNull: true,
            type: DataType.TEXT,
        },
        lastName: {
            allowNull: false,
            type: DataType.TEXT,
        },
        email: {
            allowNull: true,
            type: DataType.TEXT,
        },
        phone: {
            allowNull: true,
            type: DataType.BIGINT
        },
        password: {
            type: DataType.TEXT,
            get() {
                return () => this.getDataValue('password')
            }
        }
    },
    {
        createdAt: true,
        paranoid: true,
        updatedAt: true,
        tableName: 'user'
    }
);

const setPassword = (user) => {
    if (user.changed('password')) {
        const hash2 = bcrypt.hashSync(user.password(), 10);
        user.password = hash2
    }
}

User.beforeCreate(setPassword)
User.beforeUpdate(setPassword)

// User.prototype.comparePassword = function (enteredPassword) {
//     return bcrypt.compareSync(enteredPassword, this.password)
// }


export default User;