// Message Constructor
hcApp.controller("messageCtrl", function($scope, $http, activeUser){
    function Message(plainObject) {
        this.message = plainObject.message;
    };

$http.get("data/messages.json").then(
    function mysuccess(response){
         $scope.messages = response.data 
    }
)
$scope.sortBy = function(prop) {
    $scope.orderProp = prop;
  }

  $scope.isHouseComunityMember = function() {
      return activeUser.get().houseComunityMember;
  }
});
