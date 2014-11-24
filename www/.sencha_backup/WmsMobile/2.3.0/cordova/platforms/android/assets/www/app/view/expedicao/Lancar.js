
Ext.define('WmsMobile.view.expedicao.Lancar', {
    extend: 'WmsMobile.view.LancarBase',
    alias:  'widget.expedicaoLancarView',

	load:function(){
	    var wmstoolbar = Ext.ComponentQuery.query('expedicaoLancarView #wmstoolbar');
	    wmstoolbar[0].setTitle('Expedição');
	},
});
