/**
 * Created by Emir on 18/03/2019.
 */
var express = require('express');
var router = express.Router();
/* GET users listing. */
Listevents=["Formation Node.js","conference e-learning"]

router.get('/', function(req, res, next) {
    res.render('events.twig',{events:Listevents});
});
router.post('/', function(req, res, next) {
    console.log(req.body.newOne)

    Listevents.push(req.body.newOne)
    res.render('events.twig',{events:Listevents});

});
router.get('/delete/:nom', function(req, res, next) {
    console.log(req.params.nom)
    //res.render('events.twig',{events:Listevents});
    Listevents.splice(Listevents.indexOf(req.params.nom))
    res.redirect('/events');
});
module.exports = router;
