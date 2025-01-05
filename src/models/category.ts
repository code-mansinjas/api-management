import { Model, Optional } from 'sequelize';
import { DataType } from 'sequelize-typescript'
import { sequelize } from '.'
import CategoryAttributes from '../types/category';
import Product from './product';

/*
  We have to declare the CategoryCreationAttributes to
  tell Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/

interface CategoryCreationAttributes
    extends Optional<CategoryAttributes, 'id'> { }

interface CategoryInstance
    extends Model<CategoryAttributes, CategoryCreationAttributes>,
    CategoryAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

const Category = sequelize.define<CategoryInstance>(
    'Category',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataType.INTEGER,
            unique: true,
        },
        categoryName: {
            field: 'category_name',
            allowNull: false,
            type: DataType.TEXT,
        },
        categoryDescription: {
            field: 'category_description',
            allowNull: true,
            type: DataType.TEXT,
        },
    },
    {
        createdAt: true,
        paranoid: true,
        updatedAt: true,
        tableName: 'category'
    }
);


export default Category;