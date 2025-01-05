import { Model, Optional } from 'sequelize';
import { DataType } from 'sequelize-typescript'
import { sequelize } from '.'
import ProductAttributes from '../types/product';
import Category from './category';

/*
  We have to declare the ProductCreationAttributes to
  tell Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/

interface ProductCreationAttributes
    extends Optional<ProductAttributes, 'id'> { }

interface ProductInstance
    extends Model<ProductAttributes, ProductCreationAttributes>,
    ProductAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

const Product = sequelize.define<ProductInstance>(
    'Product',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataType.INTEGER,
            unique: true,
        },
        productName: {
            field: 'product_name',
            allowNull: false,
            type: DataType.TEXT,
        },
        productDescription: {
            field: 'product_description',
            allowNull: true,
            type: DataType.TEXT,
        },
        categoryId: {
            field: 'category_id',
            references: {
                model: Category, // 'Movies' would also work
                key: 'id'
            },
            type: DataType.INTEGER
        }
    },
    {
        createdAt: true,
        paranoid: true,
        updatedAt: true,
        tableName: 'product'
    }
);

Category.hasMany(Product, {as: 'product_data',foreignKey: "categoryId"})
Product.belongsTo(Category, { as:'category_data', foreignKey: "categoryId" })

export default Product;