angular.module('todoApp', [])
  .controller('TodoListController', function($http ,$interval) {
    var todoList = this;
    
    getiot()
    
    var count = 0
    $interval(function () 
    {
      getchart ()
      getiot()
      count++
      console.log("run :"+count)
    }, 5000)

    todoList.addiot = function (data) 
    {
      $http.post('/api/iot', data)
        .then(function success (response) {
          console.log(response)
          getiot()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })
    }

    function getiot () 
    {
      $http.get('/api/iot')
        .then(function success (response) {
          todoList.iot = response.data
          console.log(response)
        }, function error (response) {
          alert(response.data.message)
        })
    }
function error (response) {
        	console.log("error")
          alert(response.data.message)
        })
    }




  });