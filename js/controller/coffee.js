
var app = angular.module('myApp',['ngRoute']);
app.service('closead',function(){
	this.closefun = function(){
		console.log($);
		$('.close').on('touchstart',function(){
			console.log('aaa');
			$('.go-app-new').hide(1000);

		})

	}

})
$('.close').on('touchstart',function(){
			console.log($);
			$('.go-app-new').hide(1000);

		})

app.controller('myCtrl', ['$scope','$http','closead', function($scope,$http,closead){
	closead.closefun();
	$http.get('../json/coffee.json').success(function(res){
		console.log(res);
		console.log($);
		$scope.data = res.data;
	});
	


}])

console.log($);