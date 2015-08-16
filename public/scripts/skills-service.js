angular.module('ididX').factory('SkillsService', function(){
	
	function getAvailableSkills(){

		return [
			{ name: 'Marketing' },
			{ name: 'Communications' },
			{ name: 'Journalism' },
			{ name: 'Public Relations' },
			{ name: 'Social Media' },
			{ name: 'Education' },
		];
	
	}

	return {
		getAvailableSkills: getAvailableSkills
	};
});