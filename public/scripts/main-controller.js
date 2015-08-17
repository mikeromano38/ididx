angular.module('ididX').controller('MainController', function( $scope, $timeout, AchievementConstructor, TimelineModel, SkillsService, $rootScope, $window, $sce ){

	$rootScope.printData = $window.printData;

	$scope.timeline = {};

	$scope.skillsModal = {};

	$scope.shareModal = {};

	$scope.trustAsSafe = function( html ){
		return $sce.trustAsHtml( html );
	};

	$scope.getDateFromStartDate = function( date ){
		var dateString;
		var dateData = ( date.year ) ? date : date.data;
		dateString = dateData.month + '/' + dateData.day + '/' + dateData.year;

		return new Date( dateString ).toString().split(' ').slice(1, 4).join(' ');
	};

	$scope.skillsMatrixModal = {
		onOpen: function(){
			if ( !$scope._unfilteredAchievements  ){
				$scope._unfilteredAchievements = angular.copy( $scope.timeline.timeline.config.events );
			}
		},

		onClose: function(){
			if ( !$scope.timeline.filterActive ){
				$scope._unfilteredAchievements.forEach(function( achievement ){
					achievement.selected = false;
				});
			}
		}
	};

	$scope.getPrintMediaLink = function( achievement ){
		if ( achievement.media && achievement.media.url ){
			var url;

			//TODO: fix this, this logic will not work under all circumstances
			//Only for demo purposes
			if ( achievement.media.url.match(/youtube|youtu\.be/) ){
				url = '//img.youtube.com/vi/' + achievement.media.url.match(/\?v=(.*)&|\?v=(.*)$|youtu\.be\/(.*)$/)[1]  + '/0.jpg'	
			}  else if ( achievement.media.url.match(/vimeo/) ) {
				url = '//i.vimeocdn.com/video/508652593_640.jpg'
			} else if ( achievement.media.url.match(/jpg|jpeg|png|gif/gi ) ){
				url = achievement.media.url;
			}
			
			return url;
		}
	};

	$scope.markSelected = function( achievement ){
		achievement.selected = !achievement.selected;
	};

	$scope._unfilteredAchievements;

	$scope.numSkillsShown = SkillsService.getAvailableSkills().length;

	$scope.visibleSkills = SkillsService.getAvailableSkills().map(function( skill ){
		skill.visible = true;
		return skill;
	});

	$scope.shareForPrint = function(){
		var win = $window.open('/');

		if ( $scope.timeline.filterActive ){
			win.printData = $scope._unfilteredAchievements.filter(function( ach ){
				return ach.selected
			});
			debugger
		} else {
			win.printData = $scope._unfilteredAchievements || $scope.timeline.timeline.config.events;
		}
	};

	$scope.$watch('_unfilteredAchievements', function( data ){
		if ( data ){
			$scope._numSelected = data.filter(function( achievement ){
				return achievement.selected;
			}).length;
		}
	}, true );

	$scope.truncate = function( text, number ){
		return text.slice( 0, number ) + '...';
	};

	$scope.updateTimelineForSelected = function(){
		$scope.timeline.filterActive = $scope._numSelected > 0;

		$scope.timeline.init( { events: $scope._unfilteredAchievements } );	

		$scope.skillsMatrixModal.hideModal();
	};

	$scope.removeAllSelections = function(){
		var achievements = $scope._unfilteredAchievements;

		 achievements.forEach(function( achievement ){
		 	achievement.selected = false;
		 });	

		 $scope.timeline.filterActive = false;

		 $scope.timeline.init( { events: $scope._unfilteredAchievements } );	
	};

	$scope.makeDatesValid = function( achievements ){
		achievements.forEach(function( achievement ){
			
			if ( achievement.start_date.data ){

				var date = achievement.start_date.data;

				achievement.start_date = {};

				achievement.start_date.day = date.day || 1; 
				achievement.start_date.month = date.month || 1; 
				achievement.start_date.year = date.year || new Date().getFullYear();	
			}

		});

		return achievements;
	};

	$scope.modal = {
		
		onOpen: function(){
			$scope.modalAction = 'New';
			$scope.newAchievement = AchievementConstructor.create();
		},
		
		onClose: function(){
			$scope.newAchievement = null;
		}
	};

	$scope.$watch('visibleSkills', function( data ){
		if ( !data ) return;

		$scope.numSkillsShown = data.filter(function( skill ){
			return skill.visible;
		}).length;
	}, true );

	$scope.filterSkills = function(){
		
		if ( !$scope._unfilteredAchievements  ){
			$scope._unfilteredAchievements = angular.copy( $scope.timeline.timeline.config.events );
		}

		var achievements = angular.copy( $scope._unfilteredAchievements );
		var skillsToShow = $scope.visibleSkills.filter(function( skill ){
		
			return skill.visible;
		
		}).map(function( skill ){ 

			return skill.name ;
		});

		var visibleAchievements = [];

		achievements.forEach(function( achievement ){
			
			var removeAchievement = true;

			var skillsForAchievement = achievement.availableSkills.filter(function( aSkill ){
				return aSkill.selected;
			}).map(function( aSkill ){
				return aSkill.name;
			});

			var present;

			skillsToShow.forEach(function( skill ){
				if (  skillsForAchievement.indexOf( skill ) > -1 && visibleAchievements.indexOf( achievement ) < 0  ){
					if ( present ) return;
					visibleAchievements.push( AchievementConstructor.create( achievement ) );
					present = true;
				}
			});

		});
		
		if ( visibleAchievements.length === 0 ){
			alert( "This will result in no items on your timeline. Please refine your filter criteria.");
			return;
		}

		$scope.timeline.init( angular.copy( { events: visibleAchievements } ) );

		$timeout(function(){
			$scope.skillsModal.hideModal();
		});
	};

	// $scope.removeFilters = function(){
	// 	$scope.visibleSkills.forEach(function( skill ){
	// 		skill.visible = true;
	// 	});

	// 	$scope.filterSkills();

	// 	$scope._unfilteredAchievements = undefined;
	// };

	$scope.addAchievementToTimeline = function( achievement ){
		var tmpAchievement = AchievementConstructor.create( achievement );
		tmpAchievement.renderSkillsInText();

		achievement.text.text = tmpAchievement.text.text;
		TimelineModel.data.events.push( achievement );

		if ( $scope._unfilteredAchievements ){
			$scope._unfilteredAchievements.push( achievement );
		}

		$scope.timeline.timeline.add( achievement );
		$scope.modal.hideModal();
	};

	$scope.removeAchievement = function(){
		var removeId = $scope.timeline.timeline.current_id;
		$scope.timeline.timeline.removeId( removeId );

		if ( $scope._unfilteredAchievements ){
			$scope._unfilteredAchievements.forEach(function( achievement, index ){
				if ( achievement.uniqueid && achievement.uniqueid === removeId ){
					$scope._unfilteredAchievements.splice( index, 1 );
				}
			});
		}
	};

	$scope.confirmEdit = function(){
		var slide = $scope.timeline.timeline.getCurrentSlide();
		var removeId = $scope.timeline.timeline.current_id;

		$scope.addAchievementToTimeline( $scope.newAchievement );

		$timeout(function(){
			
			$scope.timeline.timeline.removeId( removeId );

			if ( $scope._unfilteredAchievements ){
				$scope._unfilteredAchievements.forEach(function( achievement, index ){
					if ( achievement.uniqueid && achievement.uniqueid === removeId ){
						$scope._unfilteredAchievements.splice( index, 1 );
					}
				});
			}

			$scope.modal.hideModal();


		}, 500 );
	};

	$scope.editAchievement = function(){
		$scope.modal.showModal();
		$scope.modalAction = 'Edit';

		$scope.newAchievement = AchievementConstructor.create( $scope.timeline.timeline.getCurrentSlide().data );

		$scope.newAchievement.text.text = $scope.newAchievement.text.text.replace(/<ul rel="__tag_string__">.*<\/ul>/g, '');

		var date = $scope.newAchievement.start_date;

		$scope.newAchievement.start_date.day = String( date.data.day ) || String( 1 ); 
		$scope.newAchievement.start_date.month = String( date.data.month ) || String( 1 ); 
		$scope.newAchievement.start_date.year = String( date.data.year ) || String( new Date().getFullYear() );
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