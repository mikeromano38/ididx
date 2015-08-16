angular.module('ididX').factory('SkillsService', function(){
	
	function getAvailableSkills(){

		return [
			{ name: 'Marketing', color: '#7e296b' },
			{ name: 'Communications', color: '#ac9e44' },
			{ name: 'Journalism', color: '#54585a' },
			{ name: 'Public Relations', color: '#3489b4' },
			{ name: 'Social Media', color: '#c98a1d' },
			{ name: 'Education', color: '#bd1c1c' },
		];
	
	}

	return {
		getAvailableSkills: getAvailableSkills
	};
});