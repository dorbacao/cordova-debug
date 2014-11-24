
Ext.define('WmsMobile.view.LancarBase', {
    extend: 'WmsMobile.component.form.WmsPanel',

    config:{
    	items:[
    		{
    	 		xtype:'wmstoolbar',
                id:'wmstoolbar'
    	 	},
    		{
	            xtype: 'fieldset',
	            title: 'Dados do Documento',
	            id: 'dadosDocumento',
	            //instructions: 'Informe a quantidade e o Vencimento.',
	            items: [
	                {
	                    xtype: 'textfield',
	                    name : 'itemDocumento',
	                    id: 'itemDocumento',
	                    label: 'Item:'
	                },
	                {
	                    xtype: 'textfield',
	                    name : 'nomeProduto',
	                    label: 'Produto:'
	                },
	                {
	                    xtype: 'textfield',
	                    name : 'conferencia',
	                    label: 'Confe.:'
	                }
	            ]
        	},
    		{
	            xtype: 'fieldset',
	            title: 'Lancamento do Recebimento',
	            instructions: 'Informe a quantidade e o Vencimento.',
	            items: [
	                {
	                    // xtype: 'textfield',
	                    xtype: 'numberfield',
	                    name : 'quantidade',
	                    label: 'Qtd.:'
	                },
	                {
	                    xtype: 'textfield',
	                    name : 'vencimento',
	                    label: 'Venc.:'
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
