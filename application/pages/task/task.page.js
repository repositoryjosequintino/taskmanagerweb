angular.module('taskManagerApplicationModule').controller('taskController', function ($scope, $http, taskService) {

    function init() {
        $scope.findAll();
    }

    const tabArray = document.querySelectorAll(".tab");
    const contentArray = document.querySelectorAll(".content");

    tabArray.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabArray.forEach(tab => tab.classList.remove("active-tab"));
            tab.classList.add("active-tab");
            contentArray.forEach(content => content.classList.remove("active-content"));
            contentArray[index].classList.add("active-content");
        });
    });

    const modal = document.getElementById('modal');
    const modalBackground = document.querySelector('.modal-background');

    $scope.taskModel = {};
    $scope.taskArray = [];

    $scope.showModal = function () {
        modal.classList.add('active');
        modalBackground.classList.add('active');
    }

    $scope.hideModal = function () {
        modal.classList.remove('active');
        modalBackground.classList.remove('active');
    }

    $scope.create = function () {

        if (!$scope.taskModel.id) {
            const taskModel = {
                title: $scope.taskModel.title,
                description: $scope.taskModel.description,
            }
            taskService.create(taskModel).then(function (response) {
                console.log('Tarefa criada com sucesso', response.data);
                $scope.findAll();
                $scope.hideModal();
                this.clearFormulario();
            }, function (error) {
                alert(JSON.stringify(error));
                console.error('Erro ao criar tarefa', error);
            });
        } else {
            taskService.update($scope.taskModel).then(function (response) {
                console.log('Tarefa atualizada com sucesso', response.data);
                $scope.findAll();
                $scope.hideModal();
                this.clearFormulario();
            });
        }

    }

    function clearFormulario() {
        $scope.taskModel = {};
    }

    $scope.findAll = function () {
        taskService.findAll().then(function (response) {
            $scope.taskArray = response.data;
            console.log($scope.taskArray);
        }, function (error) {
            console.error('Erro ao buscar tarefas', error);
        });
    }

    $scope.upload = function (taskModelParameter) {
        $scope.taskModel = angular.copy(taskModelParameter);
        $scope.showModal();
    }

    init();

});
