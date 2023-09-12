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
    var meta = req.params.meta;
    
    exports.model.Key
        .find({meta: meta})
        .then(function (keys) {
            var results = [];
            keys.map((key) => results.push({
                key: key.key,
                meta: key.meta
            }));
            res.send({success: true, Key: results});
        });
};

exports.readAll = function (req, res) {
    var params = req.body;
    var meta = req.params.meta;
    
    exports.model.Key
        .find({})
        .then(function (keys) {
            var results = [];
            keys.map((key) => results.push({
                key: key.key,
                meta: key.meta
            }));
            res.send({success: true, Key: results});
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

    item = new exports.model.Key(params);
    item.save()
        .then(function(err) {
            res.send({success: true, value: "3s8ds29alkd8919fn135"});
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

    exports.model.Key
        .update({"_id": id},{ $set : params}, {upsert:false})
        .then(function (err) {
            if(!err) {
                res.send({success: true});
            }
            else {
                res.send({success: false});
            }
        });
};

/**
 * This method remove records
 *
 * @param req
 * @param res
 */
exports.destroy = function (req, res) {
    var params = req.body;

    exports.model.Key
        .remove({"_id": params._id})
        .then(function (err) {
            if(!err) {
                res.send({success: true});
            }
            else {
                res.send({success: false});
            }
        });
};