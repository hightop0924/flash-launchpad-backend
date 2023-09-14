/*
 * user module
 */

const launchpad = require('../model/launchpad');
var utils = require('./utils');

/**
 * This method read records
 *
 * @param req
 * @param res
 */
exports.read = async function (req, res) {
    var auth = await utils.auth(req, res);
    if (auth) {
    var params = req.body;

    exports.model.Launchpad
        .find({})
        .then(function (err, launchpad) {
            res.status(200).json({launchpad});
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
    var params = req.body,
        item;

    launchpad = new exports.model.Launchpad(params);

    launchpad.save()
        .then(function(err) {
            if(!err) {
                res.status(200).json({launchpad});
            }
            else {
                res.status(403).json({launchpad});
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

    exports.model.Launchpad.update({"_id": id},{ $set : params})
        .then(function (err, launchpad) {
            if(!err) {
                res.status(200).json({launchpad});
            }
            else {
                res.status(403).json({ message: "Something went wrong" });
            }
        });
};
