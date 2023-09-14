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

    exports.model.Visitor
        .find({})
        .then(function (err, rec) {
            res.send({success: true, User: rec});
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

    item = new exports.model.Visitor(params);

    item.save()
        .then(function(err) {
            if(!err) {
                res.send({success: true, User: item});
            }
            else {
                res.send({success: false, User: item});
            }
        });
};
