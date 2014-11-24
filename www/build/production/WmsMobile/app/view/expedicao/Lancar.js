Ext.define('WmsMobile.view.expedicao.Lancar', {
    extend: 'WmsMobile.component.form.WmsPanel',
    alias:  'widget.expedicaoLancarView',

	load:function(){},

 	config:{
		listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        },

		items: [
			{
    	 		xtype:'wmstoolbar',
                id:'wmstoolbar'
    	 	},
    		{
	            xtype: 'fieldset',
	            title: 'Dados do Documento',
	            id: 'dadosDocumento',
	            items: [
	                {
	                    xtype: 'wmstextfield',
	                    name : 'Descricao',
	                    id : 'nomeProdutoTextField',
	                    label: 'Nome:',
	                    disabled: true
	                },
	            ]
        	},
    		{
	            xtype: 'fieldset',
	            id: 'dadosExpedicao',
	            title: 'Lancamento do Expedicao',
	            items: [
	                {
	                    xtype: 'wmstextfield',
	                    name : 'Quantidade',
	                    id : 'quantidadeTextField',
	                    label: 'Qtd.:',
	                    minValue: 0,
	                    required: true,
	                    placeHolder: 'Informe a quantidade'
	                },
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