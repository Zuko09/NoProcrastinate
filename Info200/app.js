(function() {
    'use strict';

    angular.module('app1', [])
    .controller('appController', appController);

    appController.$inject = ['$scope'];
    function appController($scope) {
        $scope.currentPage = "off-noMenu-main"; //LINK HERE
        $scope.isOn = false;
        $scope.isMenuOpen = false;
        $scope.thisPage = "main";

        $scope.clickOn = function() {
            if($scope.thisPage == "main" && !$scope.isOn){
                var page = $scope.currentPage;
                var result = page.slice(3,page.length);
                result = "on" + result;
                $scope.isOn = true
                $scope.currentPage = result;
            }
        }
        $scope.clickOff = function() {
            if($scope.thisPage == "main" && $scope.isOn) {
                var page = $scope.currentPage;
                var result = page.slice(2,page.length);
                result = "off-noMenu-main";
                $scope.isMenuOpen = false;
                $scope.isOn = false;
                $scope.currentPage = result;
            }
        }
        $scope.clickMain = function() {
            if($scope.isOn && $scope.page != "main"){
                if($scope.isMenuOpen){
                    $scope.currentPage = "on-menu-main";
                    $scope.thisPage = "main";
                } else {
                    $scope.currentPage = "on-noMenu-main";
                    $scope.thisPage = "main";
                }

            }
        }
        $scope.clickMenu = function() {
            if($scope.thisPage == "main" && $scope.isOn) {
                if($scope.isMenuOpen){
                    var page = $scope.currentPage;
                    var result = page.slice(0,3) + "noMenu" +page.slice(7,page.length);
                    $scope.isMenuOpen = false;
                    $scope.currentPage = result;
                } else {
                    var page = $scope.currentPage;
                    var result = page.slice(0,3) + "menu" +page.slice(9,page.length);
                    $scope.isMenuOpen = true;
                    $scope.currentPage = result;
                }
            }
        }
        $scope.clickNotif = function() {
            if($scope.isMenuOpen) {
                var page = $scope.currentPage;
                var result = page.slice(0,8) + "notif";
                $scope.thisPage = "notif";
                $scope.currentPage = result;
            }
        }
        $scope.clickSettings = function() {
            if($scope.isMenuOpen) {
                var page = $scope.currentPage;
                var result = page.slice(0,8) + "settings";
                $scope.thisPage = "settings";
                $scope.currentPage = result;
            }
        }
        $scope.clickRewards = function() {
            if($scope.isMenuOpen) {
                var page = $scope.currentPage;
                var result = page.slice(0,8) + "rewards";
                $scope.thisPage = "rewards";
                $scope.currentPage = result;
            }
        }
        $scope.clickRankings = function() {
            if($scope.isMenuOpen) {
                var page = $scope.currentPage;
                var result = page.slice(0,8) + "lead-today";
                $scope.thisPage = "lead-today";
                $scope.currentPage = result;
            }
        }
        $scope.clickInfo = function() {
            if($scope.isMenuOpen) {
                var page = $scope.currentPage;
                var result = page.slice(0,8) + "info-two";
                $scope.thisPage = "info-two";
                $scope.currentPage = result;
            }
        }
        $scope.clickInfoScroll = function() {
            if($scope.isMenuOpen) {
                var page = $scope.currentPage;
                if($scope.thisPage == "info-two"){
                    var result = page.slice(0,8) + "info-one";
                    $scope.thisPage = "info-one";
                } else if ($scope.thisPage == "info-one") {
                    var result = page.slice(0,8) + "info-two";
                    $scope.thisPage = "info-two";
                }
                $scope.currentPage = result;
            }
        }


        // $scope.printPage = function() {
        //     console.log($scope.currentPage);
        // }



    }
})()
