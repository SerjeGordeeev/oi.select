angular.module('selectDemo')
    .controller('selectMultipleController', function ($scope, ShopArr, ShopObjShort) {
        
        $scope.shopArr =/* [{name: "one"}, {name: "two"}, {name: "three"}, {name: "for"}, {name: "five"}];*/ ShopArr.query();
        $scope.shopObjShort = ShopObjShort.get();

        $scope.bundle = ["1"];
        $scope.bundle2 = [];
        $scope.bundle3 = [];
    });
