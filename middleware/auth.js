function checkAuth(req, res, next) {
	// Check req.session.loggedIn to see if the user is logged in
	if (req.session && req.session.isLoggedIn){
		// If the user is logged in, call next()
		return next()
	}
	else {
		res.redirect('/login')
	}
	// If the user is not logged in, redirect to /login
}

module.exports = checkAuth
