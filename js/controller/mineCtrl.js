app.service('minemine',function(){
	this.mufl = function(){
		
		$('.login-switch a').on('touchstart',function(){
			var index;
			$('.login-switch a').css({
				color:'#A0A0A0',
				borderBottom:'1px solid transparent'
			})
			
			$(this).css({
				color:'#ff464e',
				borderBottom:'1px solid #ff464e'
			})
			$('.code-container>div').css({
				display:'none'
			})
			index = $(this).index();
			$('.code-container>div').eq(index).css({
				display:'block'
			})
			console.log("ssss")
		})

		$('.user-login>a').on('touchstart',function(){
			console.log('aaaa');
			var index = $(this).index();
			$('.page-container>div').css({
				display:'none',
				zIndex:-1
			})
			$('.page-container').css({
				zIndex:0
			})
			$('.page-container>div').eq(index).css({
				display:'block',
				zIndex:1
			})
		})
		$('.back-mine').on('touchstart',function(){
			console.log('bbb');
			$('.page-container>div').css({
				display:'none',
				zIndex:-1
			})
			$('.page-container').css({
				zIndex:-1
			})
		})








	}





});



app.controller('mineCtrl',['$scope','$css','$http','minemine',function($scope,$css,$http,minemine){
	$css.add('css/mine.css');
	
	minemine.mufl();
}]);