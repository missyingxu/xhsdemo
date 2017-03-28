define([
    'text!src/buy/buy.html',
    'jquery',
    'css!src/buy/buy.css'
], function(html, $) {
    'use strict';
    function add(){
        $('#container').html(html);
    }
    
    return{
        add:add
    }
});