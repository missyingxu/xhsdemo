define(['router','jquery'], function(Router, $) {
    
     var router = new Router()
      
     .route('#/home',function(req,next){
         console.log('小红帽');
         
        //  $('#container').html('<h2>小红帽</h2>');
        require(['src/home/home.js'],function(home){
             
            home.add();
            home.swp();
        })
     })
     .route('#/active',function(req,next){
        //  $('#container').html('<h2>生活</h2>');
        require(['src/active/active.js'],function(active){
            active.add();
            active.getdata();
            $('#hufu').css('border-bottom','0.085rem solid #ff2741');
            router.route('#/hufu',function(req,next){
                 active.getdata();
                //  底部的滑块
                $('li').css('border','0')
                  $('#hufu').css('border-bottom','0.085rem solid #ff2741');
            })
            

            //   彩妆
           router.route('#/caizh',function(req,next){
               active.getdata_caiz();
               $('li').css('border','0')
               $('#caizh').css('border-bottom','0.085rem solid #ff2741');
                
           })
            // 男人
           router.route('#/human',function(req,next){
            //    console.log('11')
               active.getdata_man();
               $('li').css('border','0')
               $('#human').css('border-bottom','0.085rem solid #ff2741');
                
            
           })
           //穿搭
           router.route('#/dress',function(req,next){
            //    console.log('11')
               active.getdata_dress();
               $('li').css('border','0')
               $('#dress').css('border-bottom','0.085rem solid #ff2741');
               
            
           })
           //包包
           router.route('#/baobao',function(req,next){
            //    console.log('11')
               active.getdata_baobao();
               $('li').css('border','0')
               $('#baobao').css('border-bottom','0.085rem solid #ff2741');
               
            
           })
        //   鞋子
        router.route('#/shoes',function(req,next){
            //    console.log('11')
               active.getdata_shoes();
               $('li').css('border','0')
               $('#shoes').css('border-bottom','0.085rem solid #ff2741');
                
            
           }) 
        
          active.scoll();
        })

     })

    .route('#/des',function(req,next){
        //  $('#container').html('<h2>目的地</h2>');
        require(['src/des/des.js'],function(des){
            des.add();
        })
     })

     .route('#/brand',function(req,next){
     	
        //  $('#container').html('<h2>品牌</h2>');
        require(['src/brand/brand.js'],function(brand){
            brand.add();
        })
     })

     .route('#/buy',function(req,next){
        //  $('#container').html('<h2>购买</h2>');
         require(['src/buy/buy.js'],function(buy){
             buy.add();
         })
     })

     .route('#/search',function(req,next){
        //  $('#container').html('<h2>搜素</h2>');
        require(['src/search/search.js'],function(search){
            search.add();
        })
     })
    

});