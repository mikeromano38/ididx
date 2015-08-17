angular.module('ididX').factory('TimelineModel', function( AchievementConstructor ){
	var data = {
		 	"scale": "human",
		    "events": [
		      {
		        "media": {
		          "url": "//image-store.slidesharecdn.com/23d4e55c-05d9-4d43-9315-f2cae8230716-large.jpeg"
		        }, 
		        "start_date": {
		          "month": "8", 
		          "day": "5", 
		          "year": "2015"
		        }, 
		        "text": {
		          "headline": "Design Thinking: Mindfulness of Process Reflection", 
		          "text": "<p>This is an exercise I did as part of a Design Thinking in Innovative Branding class to visualize my design thinking process for a startup idea.</p>"
		        },
		        "type": "image",
		        "availableSkills": [
		        	{ "color": "#7e296b", "name": "Marketing", "selected": true },
					{ "color": "#ac9e44", "name": "Communications", "selected": true  },
					{ "color": "#54585a", "name": "Journalism", "selected": false  },
					{ "color": "#3489b4", "name": "Public Relations", "selected": false  },
					{ "color": "#c98a1d", "name": "Social Media", "selected": false  },
					{ "color": "#bd1c1c", "name": "Education", "selected": false  }
		        ]
		      }, 
		      {
		        "media": {
		          "url": "//vimeo.com/120614114", 
		        }, 
		        "start_date": {
		          "month": "2", 
		          "day": "25",
		          "year": "2015"
		        },
		        "type": "vimeo", 
		        "text": {
		          "headline": "Broad Marketing Objective: The Big Draw 2015", 
		          "text": "This is an advertisement created as part of a Social Media Marketing class for The Big Draw 2015, an annual chalk art festival in Pleasanton, California. This exercise used a broad marketing objective to raise awareness and generate interest for The Big Draw."
		        },
		        "availableSkills": [
		        	{ "color": "#7e296b", "name": "Marketing", "selected": true },
					{ "color": "#ac9e44", "name": "Communications", "selected": true  },
					{ "color": "#54585a", "name": "Journalism", "selected": false  },
					{ "color": "#3489b4", "name": "Public Relations", "selected": false  },
					{ "color": "#c98a1d", "name": "Social Media", "selected": false  },
					{ "color": "#bd1c1c", "name": "Education", "selected": false  }
		        ]
		      }, 
		      {
		        "media": {
		          "url": "//candaceromano.github.io/600_450/preparation_wind_bow.jpg"
		        }, 
		        "start_date": {
		          "month": "3", 
		          "day": "15",
		          "year": "2011"
		        }, 
		        "type": "image",
		        "text": {
		          "headline": "Soundslides: A Lifetime of Music", 
		          "text": "This was a Soundslides project incorporating audio and still photography for an Audio, Photography, and Production course at the University of Washington. <a href='https://candaceromano.github.io/' target='_blank'>View Here</a>"
		        },
		        "availableSkills": [
		        	{ "color": "#7e296b", "name": "Marketing", "selected": false },
					{ "color": "#ac9e44", "name": "Communications", "selected": true  },
					{ "color": "#54585a", "name": "Journalism", "selected": true  },
					{ "color": "#3489b4", "name": "Public Relations", "selected": false  },
					{ "color": "#c98a1d", "name": "Social Media", "selected": false  },
					{ "color": "#bd1c1c", "name": "Education", "selected": false  }
		        ]
		      }, 
		      {
		        "media": {
		          "url": "//candaceromano.files.wordpress.com/2013/08/img_6774.jpg?w=1256&h=836", 
		        }, 
		        "start_date": {
		          "month": "8", 
		          "day": "7",
		          "year": "2013"
		        }, 
		        "type": "image",
		        "text": {
		          "headline": "Personal Blog - Wordpress", 
		          "text": "My blog and insights into my life as a mom to a food-allergic son. <a href='https://candaceromano.wordpress.com/' target='_blank'>View Here</a>"
		        },
		        "availableSkills": [
		        	{ "color": "#7e296b", "name": "Marketing", "selected": false },
					{ "color": "#ac9e44", "name": "Communications", "selected": true  },
					{ "color": "#54585a", "name": "Journalism", "selected": true  },
					{ "color": "#3489b4", "name": "Public Relations", "selected": false  },
					{ "color": "#c98a1d", "name": "Social Media", "selected": true  },
					{ "color": "#bd1c1c", "name": "Education", "selected": false  }
		        ]
		      }, 
		      {
		        "media": {
		          "url": "//scontent.fsnc1-1.fna.fbcdn.net/hphotos-xtf1/v/t1.0-9/1459740_743603019008877_5507839168934526210_n.jpg?oh=8bdedc81e7ce35e1624f03f25bcf8d28&oe=564CFAB3"
		        }, 
		        "type": "image",
		        "start_date": {
		          "month": "1", 
		          "year": "2014"
		        }, 
		        "text": {
		          "headline": "Indigov Facebook page", 
		          "text": "Government. Simplified. <a href='https://www.facebook.com/indigovern'>View Here</a>"
		        },
		        "availableSkills": [
		        	{ "color": "#7e296b", "name": "Marketing", "selected": true },
					{ "color": "#ac9e44", "name": "Communications", "selected": true  },
					{ "color": "#54585a", "name": "Journalism", "selected": false  },
					{ "color": "#3489b4", "name": "Public Relations", "selected": false  },
					{ "color": "#c98a1d", "name": "Social Media", "selected": true  },
					{ "color": "#bd1c1c", "name": "Education", "selected": false  }
		        ]
		      }, 
		      {
		        "media": {
		          "url": "//media.dma.mil/2006/Jan/17/2000569792/670/394/0/060117-F-0000S-006.JPG"
		        }, 
		        "type": "image",
		        "start_date": {
		          "month": "1", 
		          "day": "17",
		          "year": "2006"
		        }, 
		        "text": {
		          "headline": "Trainees learn attention to detail through 'warrior' mindset", 
		          "text": "This was a high profile article detailing the upcoming changes for Air Force Basic Military Training in 2006, garnering local and national news coverage. <a href='http://www.af.mil/News/ArticleDisplay/tabid/223/Article/132227/trainees-learn-attention-to-detail-through-warrior-mindset.aspx' target='_blank'>Read More</a>"
		        },
		        "availableSkills": [
		        	{ "color": "#7e296b", "name": "Marketing", "selected": false },
					{ "color": "#ac9e44", "name": "Communications", "selected": true  },
					{ "color": "#54585a", "name": "Journalism", "selected": true  },
					{ "color": "#3489b4", "name": "Public Relations", "selected": true  },
					{ "color": "#c98a1d", "name": "Social Media", "selected": false  },
					{ "color": "#bd1c1c", "name": "Education", "selected": false  }
		        ]
		      }, 
		      {
		        "media": {
		          "url": "//media.dma.mil/2007/May/11/2000491669/888/591/0/070425-F-0578M-925.JPG", 
		        }, 
		        "type": "image",
		        "start_date": {
		          "month": "4", 
		          "day": "25",
		          "year": "2007"
		        }, 
		        "text": {
		          "headline": "Air Force Week in Photos", 
		          "text": "Photo selected from submissions across the Air Force and featured in \"AF Week in Photos.\""
		        },
		        "availableSkills": [
		        	{ "color": "#7e296b", "name": "Marketing", "selected": false },
					{ "color": "#ac9e44", "name": "Communications", "selected": true  },
					{ "color": "#54585a", "name": "Journalism", "selected": true  },
					{ "color": "#3489b4", "name": "Public Relations", "selected": true  },
					{ "color": "#c98a1d", "name": "Social Media", "selected": false  },
					{ "color": "#bd1c1c", "name": "Education", "selected": false  }
		        ]
		      }, 
		      {
		        "media": {
		          "url": "//media.dma.mil/2007/Apr/23/2000497050/670/394/0/070416-F-0199D-780.JPG"
		        }, 
		        "type": "image",
		        "start_date": {
		          "month": "4", 
		          "day": "23",
		          "year": "2007"
		        }, 
		        "text": {
		          "headline": "News Feature: Phase team keeps F-16s in the fight", 
		          "text": "News feature picked up by multiple military and defense outlets and local media. <a href='http://www.af.mil/News/ArticleDisplay/tabid/223/Article/127120/phase-team-keeps-f-16s-in-the-fight.aspx' target='_blank'>Read Feature</a>"
		        },
		        "availableSkills": [
		        	{ "color": "#7e296b", "name": "Marketing", "selected": false },
					{ "color": "#ac9e44", "name": "Communications", "selected": true  },
					{ "color": "#54585a", "name": "Journalism", "selected": true  },
					{ "color": "#3489b4", "name": "Public Relations", "selected": true  },
					{ "color": "#c98a1d", "name": "Social Media", "selected": false  },
					{ "color": "#bd1c1c", "name": "Education", "selected": false  }
		        ]
		      }, 
		      {
		        "media": {
		          "url": "//media.dma.mil/2007/Mar/30/2000502791/670/394/0/070314-F-0199D-360.JPG"
		        }, 
		        "type": "image",
		        "start_date": {
		          "month": "3", 
		          "day": "30",
		          "year": "2007"
		        }, 
		        "text": {
		          "headline": "Feature: Balad's busy aerial port supports, supplies the fight", 
		          "text": "Feature picked up by local and military news outlets. Direct marketed to featured Airmen's hometown newspapers. <a href='http://www.af.mil/News/Features/Display/tabid/273/Article/143504/balads-busy-aerial-port-supports-supplies-the-fight.aspx' target='_blank'>Read Feature</a>"
		        },
		        "availableSkills": [
		        	{ "color": "#7e296b", "name": "Marketing", "selected": false },
					{ "color": "#ac9e44", "name": "Communications", "selected": true  },
					{ "color": "#54585a", "name": "Journalism", "selected": true  },
					{ "color": "#3489b4", "name": "Public Relations", "selected": true  },
					{ "color": "#c98a1d", "name": "Social Media", "selected": false  },
					{ "color": "#bd1c1c", "name": "Education", "selected": false  }
		        ]
		      }, 
		      {
		        "media": {
		          "url": "http://media.dma.mil/2007/May/01/2000494663/670/394/0/070501-F-0578M-253.JPG"
		        }, 
		        "type": "image",
		        "start_date": {
		          "month": "5", 
		          "day": "1",
		          "year": "2007"
		        }, 
		        "text": {
		          "headline": "News: Tops In Blue put on a show for Airmen, Soldiers at Balad", 
		          "text": "News article serving to boost morale and provide a different perspective of servicemembers' activities overseas. <a href='http://www.af.mil/News/ArticleDisplay/tabid/223/Article/127013/tops-in-blue-put-on-a-show-for-airmen-soldiers-at-balad.aspx' target='_blank'>Read Feature</a>"
		        },
		        "availableSkills": [
		        	{ "color": "#7e296b", "name": "Marketing", "selected": false },
					{ "color": "#ac9e44", "name": "Communications", "selected": true  },
					{ "color": "#54585a", "name": "Journalism", "selected": true  },
					{ "color": "#3489b4", "name": "Public Relations", "selected": true  },
					{ "color": "#c98a1d", "name": "Social Media", "selected": false  },
					{ "color": "#bd1c1c", "name": "Education", "selected": false  }
		        ]
		      }
		    ]
		};

		data.events = data.events.map(function( item ){
			var achievement = AchievementConstructor.create( item );
			achievement.renderSkillsInText();
			return achievement;
		});

		return {
			data: data
		}
});