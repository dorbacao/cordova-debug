Ext.define('WmsMobile.Config',{
    singleton:true,
    Host:'127.0.0.1',

    getApiUrl:function(combinePath){
        // return "http://" + Config.Host + ":9967/" + combinePath;
        return "http://localhost:9002/" + combinePath;
    }

});