angular.module('taskManagerApplicationModule').service("taskService", function ($http) {

    this.create = function (taskModel) { 
        return $http.post('http://127.0.0.1:8081/api/task', taskModel); 
    };

});