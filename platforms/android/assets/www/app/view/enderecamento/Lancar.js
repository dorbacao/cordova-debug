Ext.define('WmsMobile.view.enderecamento.Lancar', {
    extend: 'WmsMobile.view.LancarBase',
    alias:  'widget.enderecamentoLancarView',

	load:function(){},

    config:{
    	listeners:{
	        painted:function(){
	            this.fireEvent('load', this);
	        }
        },
    	items:[
    		{
    	 		xtype:'wmstoolbar',
                id:'wmstoolbar'
    	 	},
    		{
	            xtype: 'fieldset',
	            title: 'Dados do Endereçamento',
	            items: [
	                {
	                    xtype: 'wmstextfield',
	                    name : 'Descricao',
	                    label: 'Prod.:',
	                    itemId:'produtoTextField',
	                    disabled: true,
	                    hasFocus:false,
	                },
	                {
	                    xtype: 'wmstextfield',
	                    name : 'Quantidade',
	                    itemId:'quantidadeTextField',
	                    label: 'Qtd.:',
	                    hasFocus:true,
	                    required:true,
	                    hasSelected:true,
	                    enableKeyEvents: true,
	                    placeHolder:'Informe a quantidade',
	                },
	                {
	                    xtype: 'wmstextfield',
	                    name : 'CodigoEndereco',
	                    itemId:'codigoEnderecoTextField',
	                    required:true,
	                    autoCapitalize:true,
	                    label: 'End.:',
	                    hasFocus:false,
	                    placeHolder:'Informe a localização'

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
