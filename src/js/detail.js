requirejs.config({
    paths : {
        "jquery" : "../lib/jquery-3.4.1.min"
    }
});  

// 首页业务流程
define(['jquery','../api/server','./modules/banner'],function($ , { getBanner2Data } , { initBanner }){
    // console.log($);

    var type = location.search.match(/type=([^&]+)/)[1];
    var id = location.search.match(/id=([^&]+)/)[1];
    console.log(type , id);

    getBanner2Data().then((res)=>{
        initBanner(res)
    });
});
