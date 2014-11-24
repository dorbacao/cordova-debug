
Ext.define('WmsMobile.view.abastecimento.ListarEndereco', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.abastecimentoListarEnderecoView',

	load:function(){
        var wmstoolbar = Ext.ComponentQuery.query('abastecimentoListarEnderecoView #wmstoolbar');
        wmstoolbar[0].setTitle('Endereços deficitários (pickin\'s)');
	},

    config:{
    	itemTpl:'Endereço: {Descricao}<b>({QtdItens})</b> ',
    	store:'enderecoAbastecimentoStore',
        emptyText:'Não há endereços a serem listados.',
    }
});
