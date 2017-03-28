define([
    'text!src/search/search.html',
    'jquery',
    'css!src/search/search.css'
], function(html, $) {
    'use strict';
    function add(){
        $('#container').html(html);
    }
    
    return{
        add:add
    }
});