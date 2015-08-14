angular.module('ididX').directive('modal', function(){
	return {

		scope: true,

		template: 	'<div ng-show="show" class="animate-show">' +
					'<div class="modal"><div ng-transclude></div></div>' +
					'<div class="modal-backdrop"></div>' +
					'</div>',

		transclude: true,

		controller: function( $scope, $element ){
			var config = $scope.$eval( $element.attr('config') );

			$scope.show = false;
			
			$scope.showModal = function(){
				$scope.show = true;

				if ( config && typeof config.onOpen === 'function' ){
					config.onOpen();
				}
			};

			$scope.hideModal = function(){
				$scope.show = false;

				if ( config && typeof config.onClose === 'function' ){
					config.onClose();
				}
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