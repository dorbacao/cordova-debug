
Ext.define('WmsMobile.view.separacao.Lancar', {
    extend: 'WmsMobile.view.LancarBase',
    alias:  'widget.separacaoLancarView',

	load:function(){
	    var wmstoolbar = Ext.ComponentQuery.query('separacaoLancarView #wmstoolbar');
	    wmstoolbar[0].setTitle('Efetivar Separação');
	},

	
});
