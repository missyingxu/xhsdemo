define([
    'text!src/home/home.html',
    'jquery',
    'swiper',
    'css!src/home/home.css',
    'css!lib/css/swiper.min'
], function(html, $) {
    'use strict';
    function add(){
        $('#container').html(html);
    }

    function swp(){
       var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true
        });
    }

    function scoll(){
        $('body').on('touchmove',function(){
            var scrollTop = $(this).scrollTop();
            console.log(scrollTop);
            if(scrollTop > 36){
                $('#navigation').addClass('nav-menu');
            }else{
                $('#navigation').removeClass('nav-menu');
            }

        })
    }
    
    return{
        add:add,
        swp:swp
    }
});