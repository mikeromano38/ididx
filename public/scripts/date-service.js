angular.module('ididX').service('DateService', function(){

	this.days = [];
	this.months = [];
	this.years = [];

	for ( var i = 1; i <= 31; i++ ){
		this.days.push( i );
	}

	for ( var i = 1900; i <= new Date().getFullYear(); i++ ){
		this.years.push( i );
	}

	for ( var i = 1; i <= 12; i++ ){
		this.months.push( i );
	}
});