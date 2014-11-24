Ext.define('WmsMobile.component.ViewList', {
    extend: 'WmsMobile.component.ViewBase',
    alias: 'widget.viewlist',
    
    config:{

		items:[
            {
                xtype:'wmstoolbar',
                id:'wmstoolbar'
            },
    	 	{
				xtype: 'titlebar',
				docked: 'top',
				ui: 'neutral',
				items: [
					{
                    	xtype: 'searchfield',
                    	itemId:'documentoSearchfield',
                    	name: 'query',
                        placeHolder:'  código do documento',
                    	value:'',
	                }
				]
    	 	},
            {
                xtype:'titlebar',                
                
                id:'messageTitlebar',
                title:'Cadastrado com sucesso!',
                ui:'yellow',
                style: "background-color: #DCF0BA;display:none;",                
                docked:'top',
                layout:{
                    pack:'end',
                    type:'hbox'
                },
                
            },
    	],
	}
});