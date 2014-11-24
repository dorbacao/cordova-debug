
Ext.define('WmsMobile.view.abastecimento.Lancar', {
    extend: 'Ext.form.Panel',
    alias:  'widget.abastecimentoLancarView',

	load:function(){
	    var wmstoolbar = Ext.ComponentQuery.query('abastecimentoLancarView #wmstoolbar');
	    wmstoolbar[0].setTitle('Abastecimento');
	},

    config:{
    	items:[
    		{
    	 		xtype:'wmstoolbar',    	 
                id:'wmstoolbar'    	 				
    	 	},
    		{
	            xtype: 'fieldset',
	            title: 'Abastecimento de Produto',
	            //instructions: 'Informe a quantidade e o Vencimento.',
	            items: [	                
	                {
	                    xtype: 'textfield',
	                    name : 'nomeProdutoTextField',
	                    label: 'Nome:'
	                },
	                {
	                    xtype: 'textfield',
	                    name : 'planejadoTextField',
	                    label: 'Planejado:'
	                },
	                {
	                    xtype: 'textfield',
	                    name : 'atualTextField',
	                    label: 'Atual:'
	                }
	            ]
        	},
    		{
	            xtype: 'fieldset',
	            title: 'Abastecimento',
	            instructions: 'Quantidade à abastecer',
	            items: [	                
	                {
	                    xtype: 'textfield',
	                    name : 'quantidade',
	                    label: 'Qtd.:'
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
		            	width:'4px'
		            },
		        	{
		            	xtype:'button',
		            	name:'botaoConfirmar',
		            	itemId:'botaoConfirmar',
		            	text:'Confirmar',
		            	ui: 'confirm',
		            	width:'48%',

		            },
		            {
		            	xtype:'spacer',
		            	width:'4px'
		            },
		            {
		            	xtype:'button',
		            	name:'botaoCancelar',
		            	itemId:'botaoCancelar',
		            	text:'Cancelar',
		            	ui: 'decline',
		            	width:'48%',
		            	
		            },
		            {
		            	xtype:'spacer',
		            	width:'4px'
		            },
        		]
        	}
            
    	]
    }
});
