angular.module('starter.controllers', ['ionic.contrib.ui.tinderCards'])

.controller('DashCtrl', function($scope) {})

.controller('LeadsCtrl', function($scope, Leads) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.leads = Leads.all();
  $scope.remove = function(lead) {
    Leads.remove(lead);
  };

  $scope.addCard = function() {
    var newCard = Leads.all()[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }
})

.controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    $scope.addCard();
  };
})

.controller('LeadDetailCtrl', function($scope, $stateParams, Leads) {
  $scope.lead = Leads.get($stateParams.leadId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
