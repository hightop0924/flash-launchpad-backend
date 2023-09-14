/*
 * user module
 */

var utils = require('./utils');

/**
 * This method read records
 *
 * @param req
 * @param res
 */
exports.read = async function (req, res) {
    const auth =  await utils.auth(req, res);
    if (auth) {
        var params = req.body;

        exports.model.Action
            .find({})
            .then(function (err, actions) {
                res.status(200).json({actions});
            });
    } else {
        res.status(403).json({ message : "Not allowed administrator" });
    }
};

/**
 * This method create records
 *
 * @param req
 * @param res
 */
exports.add = function (req, res) {
    var params = req.body;

    action = new exports.model.Action(params);

    action.save()
        .then(function(err) {
            if(!err) {
                res.status(200).json({action});
            }
            else {
                res.status(404).json({ message: "Something went wrong"});
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

    exports.model.Action.update({"_id": id},{ $set : params})
        .then(function (err, action) {
            if(!err) {
                res.status(200).json({action});
            }
            else {
                res.status(403).json({ message: "Something went wrong" });
            }
        });
};
