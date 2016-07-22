'use strict';

angular.module('profile')
  .config(['$routeProvider', function ($routeProvider,req, res) {
    $routeProvider

      .when('/me', {
        templateUrl: '/mods/profile/profileViewMain.html',
        controller: 'profileControllerMain'
      })

      .when('/:id/show', {
        templateUrl: '/mods/profile/profileViewEdit.html',
        controller: 'profilebyIdControllerMain'
      })

			.otherwise({
				redirectTo: '/me'
			})
    }

  ]);
