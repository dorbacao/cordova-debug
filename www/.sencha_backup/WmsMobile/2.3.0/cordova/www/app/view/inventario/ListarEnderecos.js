Ext.define('WmsMobile.view.inventario.ListarEnderecos', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.inventarioListarEnderecosView',

	load:function(){
        var wmstoolbar = Ext.ComponentQuery.query('inventarioListarEnderecosView #wmstoolbar');
        wmstoolbar[0].setTitle('Endereços à conferir');
	},

    config:{
    	itemTpl:'Localização: {item_name}',
    	store:'enderecoStore',

    }
});
