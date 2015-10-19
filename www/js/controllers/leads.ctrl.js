angular.module('refugees-work-mobile.controllers')
.controller('LeadsCtrl', function($scope, Leads) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.approved_leads = [];

  function getLeads() {
    Leads.all()
      .then(function (result) {
        $scope.leads = result.data['leads'];
        $scope.new_leads = result.data['leads'];
      });
  }

  getLeads();
  $scope.skip = function(lead) {
    $scope.new_leads.pop(lead);
  };
  $scope.approve = function(lead) {
    console.log(lead);
    $scope.approved_leads.push(lead);
  };
  $scope.destroy = function(lead) {
    Leads.destroy(lead);
  };
  $scope.addCard = function() {
    var newCard = leads[Math.floor(Math.random() * leads.length)];
    newCard.id = Math.random();
    $scope.leads.push(angular.extend({}, newCard));
  }
  $scope.cardSwipedLeft = function(index, lead) {
    console.log('LEFT SWIPE');
  };
  $scope.cardSwipedRight = function(index, lead) {
    console.log('RIGHT SWIPE');
    $scope.approve(lead);
  };
})
.controller('LeadDetailCtrl', function($scope, $stateParams, Leads) {
  function getLead() {
    Leads.get($stateParams.leadId)
      .then(function (result) {
        console.log(result);
        $scope.lead = result.data;
      });
  }
  getLead();
})
