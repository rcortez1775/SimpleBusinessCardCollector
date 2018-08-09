module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        notes: DataTypes.text
    });
 
    return Contact;
 }