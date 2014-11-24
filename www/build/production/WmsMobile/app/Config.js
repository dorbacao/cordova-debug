Ext.define('WmsMobile.Config',{
    singleton:true,
    Host:'127.0.0.1',

    getApiUrl:function(combinePath){
        // return "http://" + Config.Host + ":9967/" + combinePath;
        return "http://wms-mobile-backend.desenvolvimento.vvssistemas.com.br:8082/" + combinePath;
    }

});
