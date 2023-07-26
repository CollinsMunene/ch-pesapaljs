/**
 *  Copyright (c) 2023 Collins Hillary
 *  All rights reserved
 *  Contact: collinshillary1@gmail.com
 *  Website: https://collinsmunene.github.io/collinshillary.github.io/
 *
 *  Project : pesapaljs
 *  File : helpers
 *  Date : 26/07/2023 8:55 AM
 *  Description :
 *
 */

var core = require('./core');

exports.getPaymentMethodByTag = function (tag) {
    var found = null; // TODO: Need a simpler way!!!!
    core.SUPPORTED_PAYMENT_METHODS.forEach(function(method) {
        if(method.tag == tag) found = method;
    });
    return found;
};