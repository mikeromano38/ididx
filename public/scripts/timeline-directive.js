angular.module('ididX').directive('timeline', function( TimelineModel, $timeout, $window ){
	return {
		scope: {
			config: '='
		},
		link: function( scope, el, attr ){
			var targetID = '__timeline_target__';
			el[0].id = targetID;

			$timeout(function(){
				var timeline = $window.timeline = scope.config.timeline = new VCO.Timeline( targetID, TimelineModel.data );
				timeline.goToEnd();

				timeline.addEventListener('added', function( data ){
					$timeout(function(){
						timeline.goToId( data.uniqueid );
					}, 1000);
				});
			});
		}
	}
});