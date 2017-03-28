define([
    'text!src/brand/brand.html',
    'jquery',
    'css!src/brand/brand.css'
], function(html, $) {
    'use strict';
    function add(){
        $('#container').html(html);
    }
    
    return{
        add:add
    }
});