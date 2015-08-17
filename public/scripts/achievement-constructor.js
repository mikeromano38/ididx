angular.module('ididX').factory('AchievementConstructor', function( DateService, SkillsService ){

	function Achievement( config ){
		var now = new Date(); 

		this.media = { 
			url: ( config && config.media ) ? config.media.url : '' 
		};

		// this.type = ( config && config._media && config._media.options ) ? config._media.options.media_type : 
		// 			( config  && config.type ) ? config.type : null;

		// if ( !this.type && this.media.url ){
		// 	if ( this.media.url.match(/youtube|youtu\.be/) ) this.type = 'youtube';
		// 	if ( this.media.url.match(/vimeo/) ) this.type = 'vimeo';
		// 	if ( this.media.url.match(/jpg|jpeg|png|gif/gi ) ) this.type = 'image';
		// }
		
		this.text = { 
			headline: ( config && config.text ) ? config.text.headline : '',
			text: ( config && config.text ) ? config.text.text : ''
		};

		this.selected = ( config ) ? config.selected : false;

		this.availableSkills = ( config && config.availableSkills ) ? config.availableSkills : this.getAvailableSkills();

		this.availableDays = DateService.days;
		this.availableMonths = DateService.months;
		this.availableYears = DateService.years;

		if ( config && config.start_date ){
			this.start_date = {
				month: ( config.start_date.month ) ? config.start_date.month  : ( config.start_date.data ) ? config.start_date.data.month : String( now.getMonth() + 1 ),
				day: ( config.start_date.day ) ? config.start_date.day  : ( config.start_date.data ) ? config.start_date.data.day : String( now.getDate() ),
				year: ( config.start_date.year ) ? config.start_date.year  : ( config.start_date.data ) ? config.start_date.data.year : String( now.getFullYear() )
			};
		} else {
			this.start_date = {
				month: String( now.getMonth() + 1 ),
				day: String( now.getDate() ),
				year: String( now.getFullYear() )
			};
		}

		console.log( this.start_date );

	}

	Achievement.fn = Achievement.prototype;

	Achievement.fn.getAvailableSkills = function(){
		return SkillsService.getAvailableSkills().map(function( skill ){
			skill.selected = false;
			return skill;
		});
	};

	Achievement.fn.hasSkill = function( skill ){
		var skill = this.availableSkills.filter(function( sk ){
			return sk.name === skill.name;
		})[0];

		return skill && skill.selected;
	};

	Achievement.fn.renderSkillsInText = function(){
		if ( this.availableSkills ){
			//remove current tags if present
			this.text.text.replace(/<ul rel="__tag_string__">.*<\/ul>/g, '');

			//add new tags
			var tagString = '<ul rel="__tag_string__">';

			if ( this.availableSkills.filter(function( skill ){ return skill.selected }).length ) tagString += '<label>Tags:</label>';

			for ( var skill in this.availableSkills ){
				if ( this.availableSkills[ skill ].selected ) tagString += ( '<li class="tag ' + this.availableSkills[ skill ].name + '" style="background-color: ' + this.availableSkills[ skill ].color + '">' + this.availableSkills[ skill ].name + '</li>' );
			}

			tagString += '</ul>';
			this.text.text += tagString;
		}
	}

	return {
		create: function( config ){
			return new Achievement( config );
		}
	};

});