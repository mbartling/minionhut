var keystone = require('keystone');

exports = module.exports = function(req, res) {
  
  var view = new keystone.View(req, res),
    locals = res.locals;
  
  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'minions';
  // locals.filters = {
  //   user: req.params.user
  // };
  // locals.data = {
  //   user: []
  // };

  // // Load the posts
  // view.on('init', function(next) {
    
  //   var q = keystone.list('User').paginate({
  //       page: req.query.page || 1,
  //       perPage: 10,
  //       maxPages: 10
  //     })
  //     // .where('isMinion', true)
  //     .populate('name');
    
    
  //   q.exec(function(err, results) {
  //     locals.data.user = results;
  //     next(err);
  //   });
    
  // });
  view.query('minions', keystone.list('User').model.find().sort('sortOrder'));

  // Render the view
  view.render('minions');
  
};
