/**
 * User: lukasz
 * Date: 10/9/13
 * Time: 8:04 PM
 */

module.exports = function (mongoose) {

    var UserSchema = new mongoose.Schema({
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true},
        name: {type: String, required: true},
        // These are for reset password
        // resetToken:String, 
        // expireToken:Date,
    });

    var User = mongoose.model('User', UserSchema);

    //put custom methods here

    return {
        User: User
    }
}