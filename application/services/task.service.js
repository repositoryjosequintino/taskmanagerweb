angular.module('taskManagerApplicationModule').service("taskService", function ($http) {

    const URL_API = "http://localhost:8081/tasks";

    this.create = function (taskModelParameter) { 
        return $http.post(URL_API, taskModelParameter);
    };

    this.findAll = function () {
        return $http.get(URL_API);
    };

    this.update = function (taskModelParameter) {
        return $http.put(URL_API.concat("/").concat(taskModelParameter.id), taskModelParameter);
    }

    this.delete = function(idParameter) {
        return $http.delete(URL_API.concat("/").concat(idParameter));
    }

    this.completed = function (taskModelParameter) {
        return $http.put(URL_API.concat("/complete/").concat(taskModelParameter.id));
    }

});