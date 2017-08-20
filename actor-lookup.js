/*
* Duplicate of code used on webtask.io
*
*/

module.exports = function(context, cb) {
  var search = context.body.text;
  var request = require("request");
  var options = { method: 'GET',
    url: 'https://api.themoviedb.org/3/search/person',
    qs:
    { include_adult: 'false',
       page: '1',
       language: 'en-US',
       query: search,
       api_key: '<<API_KEY>>' },
    body: '{}' };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    var data = JSON.parse(body);
    cb(null, { image: data['results'][0]['profile_path'] });
  });
};