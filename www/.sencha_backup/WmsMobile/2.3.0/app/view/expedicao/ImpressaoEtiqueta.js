
Ext.define('WmsMobile.view.expedicao.ImpressaoEtiqueta', {
    extend: 'Ext.form.Panel',
    alias:  'widget.expedicaoImpressaoEtiqueta',

    load:function(){
	    var wmstoolbar = Ext.ComponentQuery.query('expedicaoImpressaoEtiqueta #wmstoolbar');
	    wmstoolbar[0].setTitle('Impressão de Etiquetas');
	},

    config:{
    	items:[
    		{
    	 		xtype:'wmstoolbar',    	 
                id:'wmstoolbar'    	 				
    	 	},
    		{
	            xtype: 'fieldset',
	            title: 'Local de Impressão',
	            //instructions: 'Informe a quantidade e o Vencimento.',
	            items: [
	                {
	                    xtype: 'textfield',
	                    name : 'itemDocumento',
	                    label: 'Impressora:',
	                    value:'Matricial@22'
	                },
	                {
	                    xtype: 'textfield',
	                    name : 'totalVolumesTextField',
	                    label: 'Volumes:',
	                    value:'8 caixas(15cm x 23cm)'
	                },
	                {
	                    xtype: 'textfield',
	                    name : 'intervaloTextField',
	                    label: 'Intervalo:',
	                    value:'A13 à A21 '
	                }
	            ]
        	},
        	{
        		xtype:'toolbar',
				title:'Etiqueta Modelo',

				//docked:'top',
				style:'background:grey',
				layout:{
					pack:'end',
					type:'hbox'
				},
        	},
    		{
	            xtype: 'container',
	            
	            items: [	                
	            	{
					    xtype: 'image',
					    src: 'resources/icons/customizados/icon-etiqueta.jpg',
					    height: 150
					}
	            ]
        	},    		
        	{
        		xtype:'container',
        		layout:{
        			type:'hbox',
        		},
        		items:[
        			{
		            	xtype:'spacer',
		            	height:'20px'
		            },
		        	{
		            	xtype:'button',
		            	name:'finalizarButton',
		            	itemId:'finalizarButton',
		            	text:'Finalizar',
		            	width:'100%',
		            	padding:'10px',
                		ui: 'action-round',
		            	
		            },
        		]
        	}
            
    	]
    }
});
