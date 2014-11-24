Ext.define('WmsMobile.view.abastecimento.ListarItemDocumento', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.abastecimentoListarItemDocumentoView',
	
	load:function(){
        var wmstoolbar = Ext.ComponentQuery.query('abastecimentoListarItemDocumentoView #wmstoolbar');
        wmstoolbar[0].setTitle('Produtos deficitários');
	},

    config:{
    	itemTpl:'Produto: {descricao}<b>({qtdItens})</b> ',
    	store:'documentoStore',
    	
    }
});