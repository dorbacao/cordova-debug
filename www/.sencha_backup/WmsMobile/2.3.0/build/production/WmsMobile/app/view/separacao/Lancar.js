Ext.define('WmsMobile.view.separacao.Lancar', {
    extend: 'WmsMobile.component.form.WmsPanel',
    alias:  'widget.separacaoLancarView',

	load:function(){},

	config: {
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
	                /*{
	                    xtype: 'textfield',
	                    name : 'Conferencia',
	                    id : 'conferencia',
	                    label: 'Confe.:',
	                    disabled: true,
	                    visible: false
	                }*/
	            ]
        	},
    		{
	            xtype: 'fieldset',
	            id: 'dadosRecebimento',
	            title: 'Lancamento da Separação',
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
	                // {
	                //     xtype: 'togglefield',
	                //     name : 'Avaria',
	                //     id : 'possuiAvariaToggle',
	                //     label: 'Avaria?:',
	                //     required: true,
	                // },
                    {
                        xtype: 'selectfield',
                        label: 'Carrinho:',
                        name: 'Carrinho',
                        id: 'carrinhoSelectField',
                        store: 'carrinhoStore',
			            displayField: 'Descricao',
			            valueField: 'Id',
			            placeHolder: 'Selecione um carrinho',
			            hidden: true
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