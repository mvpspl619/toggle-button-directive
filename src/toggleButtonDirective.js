angular.module('toggleButton', []);
angular.module('toggleButton').run(['$templateCache', function($templateCache){
  $templateCache.put('toggleButtontemplate.html', '<style>.ball-container{border: 1px solid #747474;border-radius: 15px;height: 34px;cursor: pointer;display: inline-block;}.ball-container-active{background: rgb(9, 147, 199);-webkit-transition: background 0.3s;/* Safari 3.1 to 6.0 */ transition: background 0.3s;}.ball{display: inline-block;margin-top: 1px;margin-left: 2px;width: 30px;height: 30px;border: 1px solid #747474;border-radius: 16px;-webkit-transition: float 0.3s;/* Safari 3.1 to 6.0 */ transition: float 0.3s;cursor: pointer;background: white;}.toggle-text{float:right;height: 30px;display: inline-block;}.ball-container-active .ball{float: right;}.ball-container-active .toggle-text{float: left;}</style><div ng-class="getClassForSliderContainer()" style="margin-left: 30px;" ng-click="toggleSlider()"><div class="toggle-text"><span style="font-size: 18px;margin: 6px 10px 6px 10px;">{{toggleText}}</span></div><div class="ball"></div></div>');
}]);
angular.module('toggleButton').directive('toggleButton', function(){
	return {
    restrict: 'E',
    require: 'ngModel',
    scope:{
      model:"=ngModel"
    },
    templateUrl: "toggleButtontemplate.html",
    controller: ['$scope', function($scope){
      $scope.toggleSlider = function(){
        $scope.model = !$scope.model;
      }
      $scope.getClassForSliderContainer = function(){
        if($scope.model) return 'ball-container ball-container-active';
        return 'ball-container';
      }
    }],
    link: function(scope, elem, attrs){
      scope.model ? scope.toggleText = attrs.toggleOnText : scope.toggleText=attrs.toggleOffText;
      scope.$watch('model', function(newValue, oldValue){
        if(newValue !== oldValue){
          newValue ? scope.toggleText=attrs.toggleOnText : scope.toggleText=attrs.toggleOffText;
          elem.toggleClass(attrs.toggleClass);
        }
      });
    }
  }
});