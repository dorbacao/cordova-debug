Ext.define('WmsMobile.view.expedicao.ListarItemDocumento', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.expedicaoListarItemDocumentoView',

	load:function(){
        var wmstoolbar = Ext.ComponentQuery.query('expedicaoListarItemDocumentoView #wmstoolbar');
        wmstoolbar[0].setTitle('Expedição');
	},

    config:{
    	itemTpl:'Item: {Descricao}',
    	store:'itemDocumentoEmExpedicaoStore',
    }
});