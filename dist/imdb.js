$(document).on('ready',function(){

	var App = Backbone.Router.extend({
		routes: {
			'' : 'home',
			'home' : 'home',
			'search/:query' : 'search'
		},

		home: function(){
			console.log ('home');
			
		},

		search: function(query) {
			console.log ('search/' +query);
			$.get('http://www.omdbapi.com/',
				  { s:query}, onResultsReceived,'json');

			function onResultsReceived(movieResults){
				var newRes =movieResults.Search;

				for (var i =0; i<newRes.length; i++){
					var movie = newRes[i];
					$('#results').append(movie.Title);
					console.log(newRes[i]);
				}
			}	

		
	   }
	 });

	$('button').click(function(e){
		var option = {trigger: true};
		var search = $('input').val();
		console.log(search);
		myRouter.navigate('search/'+search, option)
	});


	var myRouter = new App();
	Backbone.history.start();
});