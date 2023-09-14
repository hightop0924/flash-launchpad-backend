/**
 * Launchpad: lukasz
 * Date: 10/9/13
 * Time: 8:04 PM
 */

module.exports = function (mongoose) {

    var LaunchpadSchema = new mongoose.Schema({
        ownerwallet: { type: String, required: true },  // owner wallet address
        chain: { type: String, required: true},         // token presale blockchain
        token: { type: String, required: true},         // presale token
        start: { type: Date, required: true},           // presale start date
        end: { type: Date, required: true},             // presale end date
        service: { type: String, required: true},       // create launchpad, create token, flash audit ...
        amount: { type: Number, required: true},        // payroll amount
        paid: { type: Number},                          // 0: not paid, pending, paid
        badge: { type: Number},                         // 0:NONE, Audit, Cash, Bubblemaps, Doxxed, KYB, KYC
    });

    var Launchpad = mongoose.model('Launchpad', LaunchpadSchema);

    //put custom methods here

    return {
        Launchpad: Launchpad
    }
}