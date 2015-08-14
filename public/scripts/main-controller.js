angular.module('ididX').controller('MainController', function( $scope, $timeout, AchievementConstructor, TimelineModel ){
	
	$scope.timeline = {};

	$scope.modal = {
		
		onOpen: function(){
			$scope.newAchievement = AchievementConstructor.create();
		},
		
		onClose: function(){
			$scope.newAchievement = null;
		}
	};

	$scope.addAchievementToTimeline = function( achievement ){
		TimelineModel.data.events.push( achievement );
		$scope.timeline.timeline.add( achievement );
		$scope.modal.hideModal();

		var timeline = $scope.timeline.timeline;

		$timeout(function(){
			timeline.goToId(timeline.config.events[timeline.config.events.length - 1].uniqueid)
		});
	};

	$scope.populateSampleAchievementData = function(){
		var achievement = AchievementConstructor.create();

		achievement.media.url = 'https://cbssanfran.files.wordpress.com/2011/11/csu-east-bay.jpg?w=420';

		achievement.text.headline = 'Graduated MBA Program';
		achievement.text.text = ' East Bay prepares graduates for the new realities of today\'s rapidly changing, globally competitive and financially challenging environment... or something.';
		
		var skill = achievement.availableSkills.filter(function(skill){
			return skill.name === 'Education';
		})[0];

		if ( skill ) skill.selected = true;

		$scope.newAchievement = achievement;
	};

});