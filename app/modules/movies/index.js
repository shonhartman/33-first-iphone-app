import angular from 'angular';

import config from './config';
import controller from './controller';
import service from './service';

let movies = angular.module('tiy.movies', []);

movies.config(config);
movies.controller('MoviesController', controller);
movies.service('MoviesService', service);

export default movies;
