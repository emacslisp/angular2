var app = angular.module('demo2', []);

app.controller('DemoCtrl', function($scope) {
    $scope.name = 'world';
});
app.directive('myDirective', ['$parse', function($parse) {
    return {
        restrict: 'A',
        transclude: true,
        template: '<div>transcludedxxxx: <span style="color:red" ng-transclude></span></div>'
    };
}]);
app.directive('myDirective2', ['$parse', function($parse) {
    return {
        restrict: 'A',
        transclude: true,
        template: '<div>transcludedyyyy: </div>',
        controller: function($element, $attrs, $transclude) {
            // modify the transcluded scope then add the cloned node to the template
            $transclude(function(clone, scope) {
                scope.name = 'AngularJS';
                var transcluded = angular.element('<span style="color:red"></span>').append(clone);
                $element.children().append(transcluded);
            });
        }
    };
}]);
