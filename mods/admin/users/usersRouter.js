'use strict';

angular.module('users')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider

      .when('/users/', {
        templateUrl: '/mods/admin/users/usersViewMain.html',
        controller: 'usersControllerMain'
      })

      .when('/groups/', {
        templateUrl: '/mods/admin/users/groupsViewMain.html',
        controller: 'usersControllerMain'
      })

      .when('/users/panels', {
        templateUrl: '/mods/admin/users/usersViewPanels.html',
        controller: 'usersControllerMain'
      })

      .when('/directives/', {
        templateUrl: '/mods/admin/users/directiveShow.html',
        controller: 'usersControllerMain'
      });

    }
  ]);
