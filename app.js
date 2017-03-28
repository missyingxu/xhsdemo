require.config({
     baseURL:'/',
     paths:{
         router:'lib/router.min',
         myroute:'src/myroute',
         jquery:'lib/jquery-1.12.4.min',
         text:'lib/text',
         css:'lib/css.min',
         swiper:'lib/swiper-3.3.1.jquery.min',
         baiduTemplate:'lib/baiduTemplate',
         lazyload:'lib/jquery.lazyload.miny/ '
     }
})

require(['myroute'],function(){
  // console.log('----')
 
  var hash = location.hash;
   location.href = '#/';
  // console.log(hash)
  location.href = hash
})