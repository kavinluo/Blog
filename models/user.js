const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 声明一个数据集 对象
let userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    createAt: {
        type: Date,
        default : Date.now()
    }
});
// 导出数据模型、
module.exports = mongoose.model('users', userSchema);
