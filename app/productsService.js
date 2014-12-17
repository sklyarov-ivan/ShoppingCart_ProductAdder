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
                        { id: 3478, label: 'Red', imageUrl: '', unitSurcharge: 0 },
                        { id: 3479, label: 'Blue', imageUrl: '', unitSurcharge: 0 },
                        { id: 3480, label: 'Green', imageUrl: '', unitSurcharge: 1 },
                        { id: 3481, label: 'Gold', imageUrl: '', unitSurcharge: 4 }
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
