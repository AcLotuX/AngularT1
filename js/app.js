//Example:
//function StoreController(){
//    alert('Welcome to AngularJS!!!...');
//}
//----------------------------------------------------------------------------------------//
//Closure!
(function(){
    //        AngujarJS      AppName  Dependencies
    var app = angular.module('gemStore', [ ]);
    
    app.controller('StoreController',function(){
        this.product = gem;
    });
    
    var gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex quaerat beatae nam quisquam recusandae aliquam nisi                         molestias, exercitationem possimus numquam corporis quo perspiciatis atque. Dolorem deleniti, doloribus sed quae.',
        canPurchase:false,
        soldOut:false,
    }
})();