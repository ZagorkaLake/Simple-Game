module.exports = {
    gameGet: (req, res) => {
        if (req.isAuthenticated()) {
            res.render('game/main', {title: 'Club Poopie'})
        } else {
            res.redirect('/login');
        }
    },
};