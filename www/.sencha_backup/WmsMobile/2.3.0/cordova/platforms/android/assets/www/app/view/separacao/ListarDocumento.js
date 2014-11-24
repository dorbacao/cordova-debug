
Ext.define('WmsMobile.view.separacao.ListarDocumento', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.separacaoListarView',

	load:function(){
        var wmstoolbar = Ext.ComponentQuery.query('separacaoListarView #wmstoolbar');
        wmstoolbar[0].setTitle('Documentos');
	},

    
    config:{
    	itemTpl:'Documento: {Descricao}<b>({QtdItens})</b> ',
    	store:'documentoEmSeparacaoStore',

    }
});
