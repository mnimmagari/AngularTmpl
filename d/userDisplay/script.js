

angular.module('userdisplayDirective', [])
.controller('userdisplayDirectiveControllerMain', ['$scope', '$http', function($scope, $http) {

  if($scope.userModel === undefined || $scope.userModel === "")
    $scope.showFlag = "none";
  else
    $scope.showFlag = "user";

  $scope.getUser = function(){
    if($scope.userId===""){
      $scope.showFlag = "none";
      return;
    }

    $http.get('/api/v1/secure/admin/users/' + $scope.userId).success(function(response) {
      $scope.userModel = response;
      $scope.userId = response._id;
      $scope.showFlag = "user";
    })
    .error(function(response, status){
      $scope.showFlag = "noUser";
      if(status===404)
      {
        message = "User not found";
      }
    });
  }

}])

.directive('userdisplay', function() {
  return {
    controller: 'userdisplayDirectiveControllerMain',
    templateUrl: '/d/userDisplay/templates/userdisplay.html',
    scope: {
      userId: "=userId",
      viewMode: "=viewMode"
    },

    link : function(scope,element,attrs)
    {
      scope.getTemplate = function(){

      var viewmode = scope.viewMode.toLowerCase();

      if(viewmode === "nameonly"){
        return "/d/userDisplay/templates/nameOnlyPanel.html";
      }

      if(viewmode === "summaryonly"){
        return "/d/userDisplay/templates/summaryOnlyPanel.html";
      }

      if(viewmode === "bulletsmallonly"){
        return "/d/userDisplay/templates/bulletSmallOnlyPanel.html";
      }

      if(viewmode === "bulletmediumonly"){
        return "/d/userDisplay/templates/bulletMediumOnlyPanel.html";
      }

      if(viewmode === "emailonly"){
        return "/d/userDisplay/templates/emailOnlyPanel.html";
      }

      if(viewmode === "small")
      {
        return "/d/userDisplay/templates/smallpanel.html";
      }

      if(viewmode === "large")
      {
        return "/d/userDisplay/templates/largepanel.html";
      }

      if(viewmode === "medium")
      {
        return "/d/userDisplay/templates/mediumpanel.html";
      }
    }
  }
};
});
