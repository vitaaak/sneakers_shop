const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id_user: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING},
})

const Category = sequelize.define('category',{
    id_category: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    category_name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Sneakers = sequelize.define('sneakers',{
    id_sneakers: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique:true},
    article: {type: DataTypes.INTEGER,allowNull: false, unique:true},
    material: {type: DataTypes.STRING,allowNull: false},
    description: {type: DataTypes.TEXT,allowNull: false},
    price: {type: DataTypes.INTEGER,allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img1: {type: DataTypes.STRING, allowNull: false},
    img2: {type: DataTypes.STRING, allowNull: false},
    img3: {type: DataTypes.STRING, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const UsersAddresses = sequelize.define('users_addresses',{
    id_users_addresses: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    address: {type: DataTypes.STRING, allowNull: false},
})

const BankCard = sequelize.define('bank_card',{
    id_bank_card: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    card_number: {type: DataTypes.BIGINT, allowNull: false, unique:true},
    validity_month: {type: DataTypes.INTEGER,allowNull: false},
    validity_year: {type: DataTypes.INTEGER,allowNull: false},
    card_owner: {type: DataTypes.STRING, allowNull: false},
    cvv: {type: DataTypes.INTEGER,allowNull: false},
})

const ShopAddresses = sequelize.define('shop_addresses',{
    id_shop_addresses: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    address: {type: DataTypes.STRING, allowNull: false, unique:true},
})

const ShoppingCart = sequelize.define('shopping_cart',{
    id_shopping_cart: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    amount: {type: DataTypes.INTEGER,allowNull: false},
    size: {type: DataTypes.INTEGER,allowNull: false},
})

const Order = sequelize.define('order',{
    id_order: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    sum: {type: DataTypes.INTEGER,allowNull: false},
    date: {type: DataTypes.DATE,allowNull: false},
})

const OrderConsist = sequelize.define('order_consist',{
    id_order_consist: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    amount: {type: DataTypes.INTEGER,allowNull: false},
    size: {type: DataTypes.INTEGER,allowNull: false},
})


User.hasOne(BankCard)
BankCard.belongsTo(User)

User.hasOne(UsersAddresses)
UsersAddresses.belongsTo(User)

User.hasMany(ShoppingCart)
ShoppingCart.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

Category.hasMany(Sneakers)
Sneakers.belongsTo(Category)

Sneakers.hasMany(ShoppingCart)
ShoppingCart.belongsTo(Sneakers)

Sneakers.hasMany(Rating)
Rating.belongsTo(Sneakers)

Sneakers.hasMany(OrderConsist)
OrderConsist.belongsTo(Sneakers)

Order.hasMany(OrderConsist)
OrderConsist.belongsTo(Order)

ShopAddresses.hasMany(Order)
Order.belongsTo(ShopAddresses)

module.exports = {
    User,
    UsersAddresses,
    BankCard,
    Category,
    Sneakers,
    Rating,
    ShopAddresses,
    ShoppingCart,
    OrderConsist,
    Order
}