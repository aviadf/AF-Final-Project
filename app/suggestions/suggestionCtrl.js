// Suggestion Constructor
hcApp.controller("suggestionCtrl", function($scope, $http, activeUser){
    function Suggestion(plainObject) {
        this.suggestion = plainObject.message;
    };

$http.get("data/suggestions.json").then(
    function mysuccess(response){
         $scope.suggestions = response.data 
    }
)
$scope.sortBy = function(prop) {
    $scope.orderProp = prop;
  }

  $scope.isHouseComunityMember = function() {
      return activeUser.get().houseComunityMember;
  }
});
