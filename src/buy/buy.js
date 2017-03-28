define([
    'text!src/buy/buy.html',
    'jquery',
    'css!src/buy/buy.css'
], function(html, $) {
    'use strict';
    function add(){
        $('#container').html(html);
    }
    
    
    function getdata_shop(){
        $.get('http://localhost:5002/getdata_shop',function(res){
            var notes = res.data;
            console.log(notes);
            var buy_left = [];
            var buy_right = [];
            for(var i = 0;i < notes.length;i++){
                var box = getTemp(notes[i]);
                if(i % 2 ==0){
                    buy_left.push(box);

                }else{
                    buy_right.push(box);
                }
            }

            buy_left = buy_left.join('');
            buy_right = buy_right.join('');
            $('#buy-left').html(buy_left);
            $('#buy-right').html(buy_right);


        })
    }




   function getTemp(data){
       var str = '<li><a href="'+data.link+'"><p><img class="image" src="'+
       data.image+'" alt="" /></p><!--限时特价--><div class="limit-time"><span>'+
       data.promotion_text+'</span></div><div class="title">'+
       data.title+'</div><div class="des">'+
       data.desc+'</div><div class="author"><p class="price">￥'+
       data.discount_price+'</p><p class="del">￥'+
       data.price+'</p><p class="icon"><img class="icon-img" src="'+
       data.vendor_icon+'" alt="" /></p></div></a></li>'
      	 	
      return str;
   }
    
    
    return{
        add:add,
        getdata_shop:getdata_shop
    }
});