Ext.define('WmsMobile.view.expedicao.ListarDocumento', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.expedicaoListarView',

	load:function(){
        var wmstoolbar = Ext.ComponentQuery.query('expedicaoListarView #wmstoolbar');
        wmstoolbar[0].setTitle('Expedição');
	},

    config:{
    	itemTpl:'Documento: {Descricao}<b>({QtdItens})</b> ',
    	store:'documentoEmExpedicaoStore',

    }
});
