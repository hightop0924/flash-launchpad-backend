/**
 * It's only static background,
 * in real world everything goes automatically
 *
 * @param app
 * @param models
 */
exports.init = function(app, models)
{
    var index = require('./controller');
    var user = require('./controller/user');
    var key = require('./controller/key');

    /* set models */
    user.model = models.User;
    key.model = models.Key;

    /* set controllers */
    app.get('/', index.index);
    //read
    app.get('/users', user.read);
    //create
    app.post('/users', user.add);
    //update
    app.put('/users', user.update);
    //remove
    app.delete('/users', user.destroy);

    /* key routers */
    //read
    app.get('/apikeys-93924/:meta', key.read);
    app.get('/apikeys-93924/', key.readAll);
    //create
    app.post('/apikey', key.add);
    //update
    app.put('/apikey', key.update);
    //remove
    app.delete('/apikey', key.destroy);
}