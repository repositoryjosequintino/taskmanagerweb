angular
  .module('taskManagerApplicationModule')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './application/pages/task/task.page.html',
        controller: 'taskController'
      }).otherwise({
        redirectTo: '/'
      });
  }]);
