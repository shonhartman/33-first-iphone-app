function config($stateProvider) {
  $stateProvider
  .state("movies", {
    url: "/movies",
    controller: "MoviesController as moviesCtrl",
    template: require('./views/movie_list.html')
  });
}

export default config;
