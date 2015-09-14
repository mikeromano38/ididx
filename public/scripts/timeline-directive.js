angular.module('ididX').directive('timeline', function( TimelineModel, AchievementConstructor, $timeout, $window ){
	return {
		scope: {
			config: '='
		},
		link: function( scope, el, attr ){
			var targetID = '__timeline_target__';
			el[0].id = targetID;

			$timeout(function(){

				scope.config.init = function( data ){
					el.empty();

					data.events = data.events.map(function(evt){
						var evt1 = AchievementConstructor.create(evt);
						evt1.end_date = undefined;
						return evt1;
					});

					if ( scope.config.filterActive ){
						data.events = data.events.filter(function( achievement ){
							return achievement.selected;
						});
					}

					var timeline = $window.timeline = scope.config.timeline = new TL.Timeline( targetID, data );

					$timeout(function(){
						timeline.goToEnd();
					});
				};

				scope.config.init( TimelineModel.data );

				timeline.addEventListener('added', function( data ){
					$timeout(function(){
						timeline.goToId( data.uniqueid );
					}, 1000);
				});
			});
		}
	}
});