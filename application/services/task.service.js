angular.module('taskManagerApplicationModule').service("taskService", function ($http) {

    const URL_API = "http://localhost:8081/tasks";

    this.create = function (taskModel) { 
        return $http.post(URL_API, taskModel);
    };

    this.findAll = function () {
        return $http.get(URL_API);
    };

    this.update = function (taskModel) {
        return $http.put(URL_API, taskModel);
    }

});