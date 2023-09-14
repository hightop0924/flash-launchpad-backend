/**
 * Notification: lukasz
 * Date: 10/9/13
 * Time: 8:04 PM
 */

module.exports = function (mongoose) {

    var NotificationSchema = new mongoose.Schema({
        userwallet: { type: String, required: true },
        chain: { type: String, required: true},
        token: { type: String, required: true},
        service: { type: String, required: true}, // create launchpad, create token, flash audit ...
        amount: { type: Number, required: true},
        paid: { type: String, required: true}, // paid, pending, not paid
    });

    var Notification = mongoose.model('Notification', NotificationSchema);

    //put custom methods here

    return {
        Notification: Notification
    }
}