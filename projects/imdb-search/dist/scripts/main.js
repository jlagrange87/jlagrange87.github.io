$(document).ready(function(){
	var rowString = $("#movie-row").html();
	var buildResultTable = _.template(rowString);
	var App = Backbone.Router.extend({
		routes:{
			"":     			 "home",

			"search/:query":     "search",

			"watch": 			 "watch" 

		},

		home: function(){
			$("#goBack").hide();
			$(".page").hide();
			$("#home").fadeIn(3000);
			$("#search-query").val("");
			$("#watchBtn").hide();
			$("#watchBtn").fadeIn(3000);
		},

		search: function(SearchQuery){
			$(".page").hide();
			$("h2").remove();
			$("#again-query").val("");
			$("#goBack").show();
			$("#search").show();
			$.get("http://www.omdbapi.com/",
			{
				s: SearchQuery,
				type: "movie"
			},
			onReceivedMovies, 
			"json"
	 		);
			$("#results").hide();
			$("#results").fadeIn(3000);
		},
		watch: function(){
			$("#goBack").show();
			$(".page").hide();
			$("#watch").fadeIn(3000);
			$("#watchBtn").hide();

		}
	});

	var myRouter = new App();
	Backbone.history.start();

	$("#searchform1").on("submit", function(e){
		e.preventDefault();
		var SearchQuery = $("#search-query").val();
		myRouter.navigate("search/"+SearchQuery, {trigger: true});
	});
	$("#searchform2").on("submit", function(e){
		e.preventDefault();
		var SearchQuery = $("#again-query").val();
		myRouter.navigate("search/"+SearchQuery, {trigger: true});
	});
	var movieList = [];
	var watchList = [];
	var movie = {};
	var selection;
	function onReceivedMovies(movies){
		movieList = [];
		var grayedOut=
		$("li").remove();
		for(var i = 0; i < movies.Search.length; i++){
			var mov = movies.Search[i];
			mov.pos = i
			var table = buildResultTable(mov);
			grayedOut= _.find(watchList, function(m){
				if(m.imdbID === movies.Search[i].imdbID){
					return true;
				}
				else{
					return false;
				}
			});
			if(grayedOut === undefined){
				$("#results").append(table);
			}
			else{
				$("#results").append(table);
			}
			movieList.push(movies.Search[i]);
		}
		$("li").click(function(e){
			selection = $(this).attr("data-position");
			movie = movieList[selection];
			var alreadyIn = _.find(watchList, function(m){
				if(m.imdbID === movie.imdbID){
					return true;
				}
				else{
					return false;
				}
			});
			if(alreadyIn === undefined){
				watchList.push(movie);
				console.log(watchList);
			}
			$(this).css("opacity", "0.5");
		});
	}
	$("#watchBtn").click(function(){
		$("li").remove();
		for(var w = 0; w < watchList.length; w++){
			var wat = watchList[w];
			wat.pos = w;
			var table = buildResultTable(wat);
	 		$("#watch-list").append(table);
		}
 	});
});


