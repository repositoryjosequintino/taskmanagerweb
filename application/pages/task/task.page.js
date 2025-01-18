angular.module('taskManagerApplicationModule').controller('taskController', function ($scope) {

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

    $scope.showModal = function () {
        modal.classList.add('active');
        modalBackground.classList.add('active');
    }

    $scope.hideModal = function () {
        modal.classList.remove('active');
        modalBackground.classList.remove('active');
    }

});
