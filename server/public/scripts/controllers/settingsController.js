colorBlocks.controller('SettingsController', ['$scope','DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");

$scope.dataFactory = DataFactory;
$scope.colors = $scope.dataFactory.colors;


  $scope.formColor = '';
$scope.addTheColor = function () {
  console.log("form Color",$scope.formColor )
    $scope.colors.push($scope.formColor);
    $scope.formColor = '';
}

}]);
