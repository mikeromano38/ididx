angular.module('ididX').directive('modal', function(){
	return {

		scope: true,

		template: 	'<div ng-show="show" class="animate-show">' +
					'<div class="modal"><div ng-transclude></div></div>' +
					'<div class="modal-backdrop"></div>' +
					'</div>',

		transclude: true,

		controller: function($scope){
			$scope.show = false;
			
			$scope.showModal = function(){
				$scope.show = true;
			};

			$scope.hideModal = function(){
				$scope.show = false;
			};
		},

		link: function( scope, el, attr ){
			var config = scope.$eval( attr.config );

			if ( config ){
				config.showModal = scope.showModal;
				config.hideModal = scope.hideModal;
			}
		}
	}
});