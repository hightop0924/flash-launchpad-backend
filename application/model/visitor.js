/**
 * Visitor: lukasz
 * Date: 10/9/13
 * Time: 8:04 PM
 */

module.exports = function (mongoose) {

    var VisitorSchema = new mongoose.Schema({
        visitors: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
    });

    var Visitor = mongoose.model('Visitor', VisitorSchema);

    //put custom methods here

    return {
        Visitor: Visitor
    }
}