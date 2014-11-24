
Ext.define('WmsMobile.view.separacao.ListarCarrinho', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.separacaoListarCarrinhoView',

	load:function(){
        var wmstoolbar = Ext.ComponentQuery.query('separacaoListarCarrinhoView #wmstoolbar');
        wmstoolbar[0].setTitle('Selecione o carrinho');
	},

    
    config:{
    	itemTpl:'Carrinho: {Descricao}',
    	store:'carrinhoStore',

    }
});
