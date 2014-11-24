Ext.define('WmsMobile.component.Toolbar',{
	extend:'Ext.Toolbar',
	alias:'widget.wmstoolbar',

	config:{

		title:'Não Informado',

		docked:'top',

		layout:{
			pack:'end',
			type:'hbox'
		},

		items:[
			{
		    	xtype: 'button',
		    	itemId: 'voltarbtn',
		    	ui:'back',
		    	text: 'Voltar',
			}
		]
	}
});