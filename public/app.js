angular.module('todoApp', [])
  .controller('TodoListController', function($http) {
    var app = this;
      //test
    app.name = "PING"
      //เรียนไฟล์ข้อมูล
      getIot()
      //อัพเดจเวลาอันตโนมัตห
      app.toThaiDateTime = function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
        //add data 
        app.submit = function(input){
          saveIot(input)
          //console.log(input)
        }
          //เรียกดูข้มูล
         function getIot(){
         $http.get('/api/iot'). success(function(response) {
            app.dataiot = response
            console.log(response);
          }).
          error(function(data, status, headers, config) {
           
            console.log('error')
          });
        }
        //save data
       function saveIot(data) {
        $http.post('/api/iot', data)
          .then(function success (response) {
            console.log(response)
            getIot()
            alert('Success')
          }, function error (response) {
            alert(response.data.message)
        })
      }


//graph
app.showGraph = function(){
    app.graphTem()

}
app.graphTem = function(){
      console.log("graph working") 
      $http.get('/api/iot')
              .then(function success (response) {
                //ประกาศเก็บค่าวนรอบและค่าtem
                var tem1avg = 0 , c1=0
                var tem2avg = 0 , c2=0
                var tem3avg = 0 , c3=0
                var tem4avg = 0 , c4=0
                var tem5avg = 0 , c5=0
                var tem6avg = 0 , c6=0
                var tem7avg = 0 , c7=0
                var tem8avg = 0 , c8=0
                var tem9avg = 0 , c9=0
                var tem10avg = 0 , c10=0
                //ประกาศเก็บเฉลี่ยhu
                var hu1avg = 0 
                var hu2avg = 0 
                var hu3avg = 0 
                var hu4avg = 0 
                var hu5avg = 0 
                var hu6avg = 0 
                var hu7avg = 0 
                var hu8avg = 0 
                var hu9avg = 0 
                var hu10avg = 0 
               //วนนับรอบกับเอาข้าในแต่ละรอบม่บวกกัน
                for(var i =0;i<response.data.length;i++){
                      if(response.data[i].iot_id ==0){
                        tem1avg = tem1avg + response.data[i].temperature
                        hu1avg = hu1avg + response.data[i].relative_humidity
                        c1 = c1+ 1 
                      }
                        if(response.data[i].iot_id ==1){
                        tem2avg = tem2avg + response.data[i].temperature                        
                        hu2avg = hu2avg + response.data[i].relative_humidity

                        c2 = c2+ 1
                      }
                        if(response.data[i].iot_id ==2){
                        tem3avg = tem3avg + response.data[i].temperature
                        hu3avg = hu3avg + response.data[i].temperature
                        c3 = c3+ 1
                      }
                        if(response.data[i].iot_id ==3){
                        tem4avg = tem4avg + response.data[i].temperature
                        hu4avg = hu4avg + response.data[i].relative_humidity

                        c4 = c4+ 1
                      }
                        if(response.data[i].iot_id ==4){
                        tem5avg = tem5avg + response.data[i].temperature                        
                        hu5avg = hu5avg + response.data[i].relative_humidity

                        c5 = c5+ 1
                      }
                        if(response.data[i].iot_id ==5){
                        tem6avg = tem6avg + response.data[i].temperature
                        hu6avg = hu6avg + response.data[i].relative_humidity
                        c6 = c6+ 1
                      }
                      if(response.data[i].iot_id ==6){
                        tem7avg = tem7avg + response.data[i].temperature
                        hu7avg = hu7avg + response.data[i].relative_humidity
                        c7 = c7+ 1
                      }
                      if(response.data[i].iot_id ==7){
                        tem8avg = tem8avg + response.data[i].temperature
                        hu8avg = hu8avg + response.data[i].relative_humidity
                        c8 = c8+ 1
                      }
                       if(response.data[i].iot_id ==8){
                        tem9avg = tem9avg + response.data[i].temperature
                        hu9avg = hu9avg + response.data[i].relative_humidity
                        c9 = c9+ 1
                      }
                      if(response.data[i].iot_id == 9){
                        tem10avg = tem10avg + response.data[i].temperature
                        hu10avg = hu10avg + response.data[i].relative_humidity
                        c10 = c10+ 1
                      }
                }
                //หาค่าเฉลี่ยของแต่ละตัว
                tem1avg = tem1avg/c1
                tem2avg = tem2avg/c2
                tem3avg = tem3avg/c3
                tem4avg = tem4avg/c4
                tem5avg = tem5avg/c5
                tem6avg = tem6avg/c6
                tem7avg = tem7avg/c7
                tem8avg = tem8avg/c8
                tem9avg = tem9avg/c9
                tem10avg = tem10avg/c10

                hu1avg = hu1avg/c1
                hu2avg = hu2avg/c2
                hu3avg = hu3avg/c3
                hu4avg = hu4avg/c4
                hu5avg = hu5avg/c5
                hu6avg = hu6avg/c6
                hu7avg = hu7avg/c7
                hu8avg = hu8avg/c8
                hu9avg = hu9avg/c9
                hu10avg = hu10avg/c10


            // bar chart data show data
            var barData = {
                labels : ["IoT-0","IoT-1","IoT-2","IoT-3","IoT-4","IoT-5","IoT-6","IoT-7","IoT-8",'IoT-9'],
                datasets : [
                   
                    {
                        fillColor : "rgba(255,193,193,0.4)",
                        strokeColor : "rgba(205,85,85,0.4)",
                        data : [tem1avg,tem2avg,tem3avg,tem4avg,tem5avg,tem6avg,tem7avg,tem8avg,tem9avg,tem10avg],
                    },
                    {
                        fillColor : "rgba(73,188,170,0.4)",
                        strokeColor : "rgba(72,174,209,0.4)",
                        data : [hu1avg,hu2avg,hu3avg,hu4avg,hu5avg,hu6avg,hu7avg,hu8avg,hu9avg,hu10avg]
                    }

                   
                ]
            }
            
            // get bar chart canvas
            var iot = document.getElementById("iotTem").getContext("2d");
            // draw bar chart
            new Chart(iot).Bar(barData);



           

        })
                 
      
    }

//ลบ

app.deleteiot = function (id, index) {       
  console.log(id)       
  $http.delete('/api/iot/' + id)         
  .success(function (data) {           
    alert('delete')           
    app.dataiot.splice(index, 1)         
  })         
  .error(function (data) {           
    alert('error')           
    console.log('Error: ' + data)         
  })     
}

//register

 app.adduser = function(data) {
  console.log(data);
        $http.post('/api/member', data)
          .then(function success (response) {
            console.log(response)
            alert('Success')
          }, function error (response) {
            alert(response.data.message)
        })
      }

//login

app.login = function(input){
  // console.log(data);
  $http.post('/login' , { username : input.username , password : input.password})
       .then(function success (response) {
            console.log(response.data[0].username)
            if((input.username== response.data[0].username)&&(input.password == response.data[0].password)){
              console.log("have user ");
              
              window.location= "chart.html"
            }else{
              window.location="login.html"
            }

            app.d = response.data
          }, function error (response) {
            alert(response.data.message)
        })

}


  });