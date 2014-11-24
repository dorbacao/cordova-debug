Ext.define('WmsMobile.component.ViewList', {
    extend: 'WmsMobile.component.ViewBase',
    alias: 'widget.viewlist',


    config:{

        listeners:{
            show:function(view){
                var finalizar =  Ext.ComponentQuery.query(view.xtype + ' #finalizarButton');
                finalizar[0].hide();

                var bottomContainer=  Ext.ComponentQuery.query(view.xtype + ' #bottomContainer');
                bottomContainer[0].hide();                
                
            }
        },
		items:[
            {
                xtype:'wmstoolbar',
                id:'wmstoolbar'
            },
    	 	{
				xtype: 'titlebar',
                itemId: 'baseTitlebar',
				docked: 'top',
				ui: 'neutral',
				items: [
					{
                    	xtype: 'searchfield',
                    	itemId:'documentoSearchfield',
                    	name: 'query',
                        placeHolder:'  código',
                    	value:'',
                        width:'100%',
	                },
                    
				]
    	 	},
            {
                xtype:'titlebar',
                id:'messageTitlebar',
                title:'Cadastrado com sucesso!',
                ui:'yellow',
                style: "background-color: #DCF0BA;display:none;font-size:10px;heigth:30px;",
                docked:'top',
                layout:{
                    pack:'end',
                    type:'hbox'
                },
            },          
             {
                xtype:'titlebar',     
                itemId:'bottomContainer',
                ui:'neutral',                
                items:[
                    {
                        xtype:'button',
                        itemId: 'finalizarButton',
                        text:'Finalizar',
                        width:'300px',
                        ui:'confirm',
                    }
                ],
                docked:'bottom',
                layout:{
                    type:'vbox',
                    pack:'center',
                    align : 'middle'
                }
            },
    	],
	}
});