/**
 * Action: lukasz
 * Date: 10/9/13
 * Time: 8:04 PM
 */

module.exports = function (mongoose) {

    var ActionSchema = new mongoose.Schema({
        userwallet: { type: String, required: true },
        chain: { type: String, required: true},
        token: { type: String, required: true},
        service: { type: String, required: true}, // create launchpad, create token, flash audit ...
        amount: { type: Number, required: true},
        paid: { type: String, required: true}, // paid, pending, not paid
    });

    var Action = mongoose.model('Action', ActionSchema);

    //put custom methods here

    return {
        Action: Action
    }
}