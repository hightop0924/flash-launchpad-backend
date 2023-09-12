/**
 * User: lukasz
 * Date: 10/9/13
 * Time: 8:04 PM
 */

module.exports = function (mongoose) {

    var KeySchema = new mongoose.Schema({
        id: { type: String },
        key: { type: String },
        meta: {type: String},
    });

    var Key = mongoose.model('Key', KeySchema);

    //put custom methods here

    return {
        Key: Key
    }
}