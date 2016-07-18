angular.module('TabsApp', [])
.controller('TabsCtrl', ['$scope', function ($scope) {
    $scope.tabs = [{
            title: 'Apps',
            url: '/partials/apps.html'
        }, {
            title: 'Content',
            url: '/partials/content.html'
        }, {
            title: 'Websites',
            url: '/partials/websites.html'
    }, {
            title: 'Software',
            url: '/partials/software.html'
        }];

    $scope.currentTab = '/partials/intial.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}]);

$mainsecondary1: #00B75F;
$mainsecondary2: #008E4A;
$mainsecondary0: #026E3A;
$mainsecondary3: #014122;
$mainsecondary4: #072B1A;