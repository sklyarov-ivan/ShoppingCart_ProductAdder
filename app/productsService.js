(function () {
    'use strict';

    var serviceId = 'productsService';
    app.factory(serviceId, ['$http', productsService]);
    function productsService($http) {
        var product = {
            name: 'SW Jacket',
            rrp: 90.95,
            imageUrl:'',
            options: [
                {
                    id: 2345, name: 'Colour', type: 1, picks: [
                        { id: 3478, label: 'Red', imageUrl: 'https://pbs.twimg.com/media/A3kzb-GCQAE4oKA.jpg', unitSurcharge: 0 },
                        { id: 3479, label: 'Blue', imageUrl: 'http://www.sydneybowls.com.au/catalog/images/DSC05184.JPG', unitSurcharge: 0 },
                        { id: 3480, label: 'Green', imageUrl: 'http://www.midocean.com.au/ProductImages/Products/KC1447_09.jpg', unitSurcharge: 1 },
                        { id: 3481, label: 'Gold', imageUrl: 'http://ohsnapbacks.com/wp-content/uploads/2013/08/1st-class-classic-logo-gold-snapback-cap_2.jpg', unitSurcharge: 4 }
                    ]
                },
                {
                    id: 2345, name: 'Size', type: 2, picks: [
                        { id: 3482, label: 'Small', imageUrl: '', unitSurcharge: -2 },
                        { id: 3483, label: 'Medium', imageUrl: '', unitSurcharge: -1 },
                        { id: 3484, label: 'Standard', imageUrl: '', unitSurcharge: 0 },
                        { id: 3485, label: 'Large', imageUrl: '', unitSurcharge: 4 }
                    ]
                }
            ]
        }
        var service = {
            get: get,
        }

        return service;

        function get(productId, callback) {
            callback(product);
        }
    };
})();
