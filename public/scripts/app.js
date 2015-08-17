angular.module('ididX', ['ngAnimate', 'ngSanitize']);

//could move this to directive
setTimeout(function(){
	var cover = document.getElementById('cover');
	cover.style.opacity = 0;

	setTimeout(function(){
		cover.style.display = 'none';
	}, 400 );
}, 1500 );


