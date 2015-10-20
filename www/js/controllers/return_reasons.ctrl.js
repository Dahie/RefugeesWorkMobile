angular.module('refugees-work-mobile.controllers')
.controller('ReturnReasonsCtrl', function($scope, $state, $ionicPopup, $stateParams, $ionicHistory, ReturnReasons) {

  function getReturnReasons() {
    ReturnReasons.all()
      .then(function (result) {
        $scope.return_reasons = result.data['return_reasons'];
        $scope.top_return_reasons = $scope.return_reasons[0]['top_reasons'];
        $scope.additional_return_reasons = $scope.return_reasons[0]['additional_reasons'];
      });
  }

  getReturnReasons();

  $scope.toggleAdditionals = function() {
    if ($scope.areAdditionalsShown()) {
      $scope.showAdditionals = false;
    } else {
      $scope.showAdditionals = true;
    }
  };
  $scope.areAdditionalsShown = function() {
    return $scope.showAdditionals;
  };

  $scope.next = function() {
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    $state.go('tab.leads');
  };

  $scope.showDetailsReasonsPopup = function(checkDetailReasons) {
    if(checkDetailReasons) {
      var detailReasonsPopup = $ionicPopup.confirm({
          title: 'Detail reasons',
          templateUrl: 'templates/return-reason-checkbox.html',
          scope: $scope,
          buttons: [
            {
              text: 'Save',
              type: 'button-positive',
              onTap: function(e) {
                //if (!$scope.data.userPassword) {
                   //don't allow the user to close unless he enters wifi password
                   e.preventDefault();
                //} else {
                   //return $scope.data;
                //}
              }
            }
          ]
       });

      detailReasonsPopup.then(function(res) {
        console.log('Thanks');
      });
    }
  };
});
