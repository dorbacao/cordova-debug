Ext.define('WmsMobile.view.separacao.ListarItemDocumento', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.separacaoListarItemDocumentoView',

	load:function(){
        var wmstoolbar = Ext.ComponentQuery.query('separacaoListarItemDocumentoView #wmstoolbar');
        wmstoolbar[0].setTitle('Itens do Documento');
	},

    config:{
    	itemTpl:'Item: {Descricao}',
    	store:'itemDocumentoEmSeparacaoStore',
    }
});