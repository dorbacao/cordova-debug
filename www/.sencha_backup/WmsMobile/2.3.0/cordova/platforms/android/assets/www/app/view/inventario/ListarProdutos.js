Ext.define('WmsMobile.view.inventario.ListarProdutos', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.inventarioListarProdutosView',

	load:function(){
        var wmstoolbar = Ext.ComponentQuery.query('inventarioListarProdutosView #wmstoolbar');
        wmstoolbar[0].setTitle('Produtos para Inventário');
	},

    config:{
    	itemTpl:'{descricao}',
    	store:'itemInventarioStore',
    }
});
