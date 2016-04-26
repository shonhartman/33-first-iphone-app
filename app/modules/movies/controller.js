class MoviesController {
  constructor(MoviesService, $ionicModal, $scope, $http) {
    this._$http = $http;
    this._MoviesService = MoviesService;
    this.movies = [];
    this.movie = "";
    
    this.modal = $ionicModal.fromTemplate(require('./views/form.html'), {
      scope: $scope
    });

  }

  showForm() {
    this.modal.show();
  }

  addMovie() {
    this._$http
    .get(`http://www.omdbapi.com/?t=${this.movie}&y=&plot=short&r=json`)
    .then((response) => {
      this.movies.push(response.data);
      this.modal.hide();
      console.log(this.movies);
    })

  }
}

export default MoviesController;
