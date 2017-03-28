define([
    'text!src/des/des.html',
    'jquery',
    'css!src/des/des.css'
], function(html, $) {
    'use strict';
    function add(){
        $('#container').html(html);
    }
    
    return{
        add:add
    }
});