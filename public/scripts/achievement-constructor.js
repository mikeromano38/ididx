angular.module('ididX').factory('AchievementConstructor', function( DateService ){

	function Achievement( config ){
		var now = new Date(); 

		this.media = { 
			url: '' 
		};
		
		this.text = { 
			headline: '',
			text: ''
		};
		
		this.availableSkills = this.getAvailableSkills();
		
		this.availableDays = DateService.days;
		this.availableMonths = DateService.months;
		this.availableYears = DateService.years;

		this.start_date = {
			month: now.getMonth() + 1,
			day: now.getDate(),
			year: now.getFullYear()
		};

	}

	Achievement.fn = Achievement.prototype;

	Achievement.fn.getAvailableSkills = function(){
		return [
			{ name: 'Marketing', selected: false },
			{ name: 'Communications', selected: false },
			{ name: 'Journalism', selected: false },
			{ name: 'Public Relations', selected: false },
			{ name: 'Social Media', selected: false },
			{ name: 'Education', selected: false },
		]
	}

	return {
		create: function(){
			return new Achievement();
		}
	};

});