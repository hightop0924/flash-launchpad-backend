/*
 * user module
 */

/**
 * This method read records
 *
 * @param req
 * @param res
 */
exports.read = function (req, res) {
    var params = req.body;

    exports.model.Notification
        .find({})
        .then(function (err, rec) {
            res.send({success: true, Notification: rec});
        });
};

/**
 * This method create records
 *
 * @param req
 * @param res
 */
exports.add = function (req, res) {
    var params = req.body,
        item;

    item = new exports.model.Notification(params);

    item.save()
        .then(function(err) {
            if(!err) {
                res.send({success: true, Notification: item});
            }
            else {
                res.send({success: false, Notification: item});
            }
        });
};

/**
 * This method update records
 *
 * @param req
 * @param res
 */
exports.update = function (req, res) {
    var params = req.body, id = params._id;

    //remove id from values to update
    delete params._id;

    exports.model.Notification.update({"_id": id},{ $set : params})
        .then(function (err, notification) {
            if(!err) {
                res.status(200).json({notification});
            }
            else {
                res.status(403).json({ message: "Something went wrong" });
            }
        });
};