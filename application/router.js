
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
    var action = require('./controller/action');
    var visitor = require('./controller/visitor');
    const launchpad = require('./controller/launchpad');
    const notification = require('./controller/notification');
    
    /* set models */
    user.model = models.User;
    action.model = models.Action;
    visitor.model = models.Visitor;
    launchpad.model = models.Launchpad;

    /* user controllers */
    // admin login
    app.post('/admin/signin', user.signin); 
    // admin add
    app.post('/admin/signup', user.signup);

    /* action controllers */
    // user add action
    app.post('/action/add', action.add);
    // admin get actions
    app.get('/actions', action.read);
    // user update action
    app.get('/action/update', action.update);

    /* visitor controllers */
    // add visitor 
    app.post('/visitor', visitor.add);
    // get visitors
    app.get('/visitors', visitor.read);

    /* launchpad controllers */
    // add launchpad 
    app.post('/launchpad/add', launchpad.add);
    // update launchpad
    app.post('/launchpad/update', launchpad.update);
    // get launchpads
    app.post('/launchpads', launchpad.read);

    /* notification controllers */
    // add notification
    app.post('/notification/add', notification.add);
    // read notifications
    app.get('/notifications', notification.read);
    // update notifications
    app.post('/notification/update', notification.update);
}