
Ext.define('WmsMobile.view.inventario.LancarInventarioProduto', {
    extend: 'Ext.form.Panel',
    alias: 'widget.inventarioLancarInventarioProdutoView',

    config:{
    	items:[
    		{
    	 		xtype:'wmstoolbar',
                id:'wmstoolbar',
                title:'Endereço: #A22.B64.P10',
    	 	},
    		{
	            xtype: 'fieldset',
	            title: 'Dados do Produto',
	            //instructions: 'Informe a quantidade e o Vencimento.',
	            items: [
	                {
	                    xtype: 'textfield',
	                    name : 'nomeProduto',
	                    label: 'Produto:',
	                    disabled: true
	                }
	            ]
        	},
    		{
	            xtype: 'fieldset',
	            title: 'Definindo Estoque real',
	            instructions: 'Informe a quantidade e o Vencimento.',
	            items: [
	                {
	                    xtype: 'textfield',
	                    name : 'quantidade',
	                    label: 'Qtd.:',
	                    disabled: true
	                },
	                {
	                    xtype: 'textfield',
	                    name : 'vencimento',
	                    label: 'Venc.:',
	                    disabled: true
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
