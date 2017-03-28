define([
    'text!src/active/active.html',
    'jquery',
    'css!src/active/active.css'
], function(html, $) {
    'use strict';
    function add(){
        $('#container').html(html);
    }

    function getdata(){
        $.get('http://localhost:5002/getdata',function(res){
            var notes = res.data.notes;
            // console.log(notes);
            var active_left = [];
            var active_right = [];
            for(var i = 0;i < notes.length;i++){
                var box = getTemp(notes[i]);
                if(i % 2 ==0){
                    active_left.push(box);

                }else{
                    active_right.push(box);
                }
            }

            active_left = active_left.join('');
            active_right = active_right.join('');
            $('#ac-left').html(active_left);
            $('#ac-right').html(active_right);


        })
    }


    function getdata_caiz(){
        $.get('http://localhost:5002/getdata_caiz',function(res){
            var notes = res.data.notes;
            // console.log(notes);
            var active_left = [];
            var active_right = [];
            for(var i = 0;i < notes.length;i++){
                var box = getTemp(notes[i]);
                if(i % 2 ==0){
                    active_left.push(box);

                }else{
                    active_right.push(box);
                }
            }

            active_left = active_left.join('');
            active_right = active_right.join('');
            $('#ac-left').html(active_left);
            $('#ac-right').html(active_right);


        })
    }

   function getdata_man(){
        $.get('http://localhost:5002/getdata_human',function(res){
            var notes = res.data.notes;
            // console.log(notes);
            var active_left = [];
            var active_right = [];
            for(var i = 0;i < notes.length;i++){
                var box = getTemp(notes[i]);
                if(i % 2 ==0){
                    active_left.push(box);

                }else{
                    active_right.push(box);
                }
            }

            active_left = active_left.join('');
            active_right = active_right.join('');
            $('#ac-left').html(active_left);
            $('#ac-right').html(active_right);


        })
    }
  
// 穿搭
    function getdata_dress(){
        $.get('http://localhost:5002/getdata_dress',function(res){
            var notes = res.data.notes;
            console.log(notes);
            var active_left = [];
            var active_right = [];
            for(var i = 0;i < notes.length;i++){
                var box = getTemp(notes[i]);
                if(i % 2 ==0){
                    active_left.push(box);

                }else{
                    active_right.push(box);
                }
            }

            active_left = active_left.join('');
            active_right = active_right.join('');
            $('#ac-left').html(active_left);
            $('#ac-right').html(active_right);


        })
    }
 

//  包包
     function getdata_baobao(){
        $.get('http://localhost:5002/getdata_baobao',function(res){
            var notes = res.data.notes;
            console.log(notes);
            var active_left = [];
            var active_right = [];
            for(var i = 0;i < notes.length;i++){
                var box = getTemp(notes[i]);
                if(i % 2 ==0){
                    active_left.push(box);

                }else{
                    active_right.push(box);
                }
            }

            active_left = active_left.join('');
            active_right = active_right.join('');
            $('#ac-left').html(active_left);
            $('#ac-right').html(active_right);


        })
    }
// 鞋子

 function getdata_shoes(){
        $.get('http://localhost:5002/getdata_shoes',function(res){
            var notes = res.data.notes;
            console.log(notes);
            var active_left = [];
            var active_right = [];
            for(var i = 0;i < notes.length;i++){
                var box = getTemp(notes[i]);
                if(i % 2 ==0){
                    active_left.push(box);

                }else{
                    active_right.push(box);
                }
            }

            active_left = active_left.join('');
            active_right = active_right.join('');
            $('#ac-left').html(active_left);
            $('#ac-right').html(active_right);


        })
    }




   function getTemp(data){
       var str = '<li><a href="#"><p><img class="image" src="'+ data.image+'" alt=""></p><div class="title">'+data.title+'</div><div class="desc">'+
       data.desc+'</div><div class="author"><img class="au-image" src="'+
       data.user.image+'" alt=""><div class="name">'+
       data.user.nickname+'</div><div class="icon"><span class=""> <img class="ico-image" src="//s.xiaohongshu.com/s/note-list/*/img/likes-icon-be12924.png" alt=""></span>'+
       data.likes+'</div> </div> </a></li>'
      
      return str;
   }

// 滚动事件
    function scoll(){
      $('body').on('touchmove', function(e) { 
                       //禁用默认滚动行为，需要自己实现滚动
        //    console.log($(this).scrollTop()); // 计算你的屏幕高度
           var scrollTop = $(this).scrollTop();
           console.log(scrollTop);
           if(scrollTop >36){
               $('#ac-menu').addClass('ac-menu');
             
           }else{
               $('#ac-menu').removeClass('ac-menu');
           }
              
           
     });
         
      
   }


    return{
        add:add,
        getdata:getdata,
        getdata_caiz:getdata_caiz,
        getdata_man:getdata_man,
        getdata_dress:getdata_dress,
        getdata_baobao: getdata_baobao,
        getdata_shoes: getdata_shoes,
        scoll:scoll

    }
});