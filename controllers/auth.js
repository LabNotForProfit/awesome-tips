module.exports = function (app, passport) {

    app.post('/sign-up', passport.authenticate('local-signup', {
        successRedirect: '/tips', // redirect to the secure profile section
        failureRedirect: '/', // redirect back to the signup page if there is an error
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/tips', // redirect to the secure profile section
        failureRedirect: '/', // redirect back to the signup page if there is an error
    }));

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    function isLoggedIn(req, res, next) {
        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
            return next();
        // if they aren't redirect them to the home page
        res.redirect('/');
    }
};
