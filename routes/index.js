const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => { // when you hear a request for localhost:3000, do the following things
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');

    let query = "SELECT ID, avatar, Name, Logo, JobTitle FROM tbl_card"; // simple sql query

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
        res.render('home', { people: result }); // paint the home view (display all of the stuff)
    })
})

module.exports = router;