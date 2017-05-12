angular.module('starter.services', [])

    .service('testService', function ($http) {
        userslist = []

        $http.get('https://jsonplaceholder.typicode.com/users').then(function (data) {

            userslist = data.data
        })
        setTimeout(function () {
            console.log(userslist)
        }, 200)


        var addUser = function (newObj) {
            userslist.push(newObj);
        };

        var getUser = function () {
            return userslist;
        };

        return {
            addUser: addUser,
            getUser: getUser
        };

    })