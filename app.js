var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.edit']);

app.controller('MainCtrl', function MainCtrl($scope) {
  var vm = this;

  $scope.inventory = {};
  $scope.update = false;
  $scope.view =false; 
  $scope.addToGrid =(details,Mode)=>{
    if(Mode==='ADD')
     $scope.gridOptions.data.push(details);
    else{
      $scope.gridOptions.data[details.index] = details;
    }
    $scope.inventory = {}
  }

  $scope.gridOptions = {
    enableSorting: true,
    columnDefs: [{
        name: 'Name',
        field: 'name'
      },{
        name: 'DESCRIPTION',
        field: 'description'
      },{
        name: 'PRICE',
        field: 'price'
      },{
        name: 'MANFACTURE',
        field: 'manfacture'
      },{
        name: 'LOCATION',
        field: 'location'
       },{
        name: 'action',
        field: 'Action',
        cellTemplate: '<div class="grid-footer-icons icon-right-margin ui-grid-cell-contents action-row"><i class="fa fa-eye" ng-click="grid.appScope.viewItem(row.entity,rowRenderIndex)"></i><i  class="fa fa-pencil" ng-click="grid.appScope.edit(row.entity,rowRenderIndex)"></i><i class="fa fa-trash" ng-click="grid.appScope.delete(row.entity,rowRenderIndex)"></i></div>'
      }
    ],
    data: []
  };
  
  //clear
  $scope.clear =()=>{
    $scope.inventory = {};
    $scope.view = false;
    $scope.update = false;
  }
   
  //delete
  $scope.delete =(row,index)=>{
    $scope.gridOptions.data.splice(index,1)
  }

  //edit
  $scope.edit =(row,index)=>{
    $scope.update = true;
    $scope.view = false
    $scope.inventory = row;
    $scope.inventory.index = index
  }
  // view
  $scope.viewItem =(row,index)=>{
    $scope.view =true;
    $scope.inventory= row
  }


  
});
