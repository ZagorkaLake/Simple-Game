const homeController = require('./../controllers/home');
const userController = require('./../controllers/user');
const gameController = require('./../controllers/game/game');


module.exports = (app) => {

    //user routes

    app.get('/', homeController.index);
    app.get('/register',userController.registerGet);
    app.post('/register',userController.registerPost);
    app.get('/login',userController.loginGet);
    app.post('/login',userController.loginPost);
    app.get('/logout',userController.logout);
    app.get('/game',gameController.gameGet);


    app.use((req, res, next) => {
        if(req.isAuthenticated()) {
            req.user.isInRole('Admin').then(isAdmin => {
                if (isAdmin) {
                    next();
                } else {
                    res.redirect('/');
                }
            })
        } else {
            res.redirect('/user/login');
        }
    });

   //admin routes
};
