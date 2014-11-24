Ext.define('WmsMobile.view.inventario.LancarInventarioEndereco', {
    extend: 'WmsMobile.view.LancarBase',
    alias: 'widget.inventarioLancarInventarioEnderecoView',

    config:{
    	listeners:{
            painted:function()
            {
                this.fireEvent('load', this);
            }
        },
    	items:[
    		{
    	 		xtype:'wmstoolbar',
                id:'wmstoolbar',
                title:'Endereço: #A22.B64.P10',
    	 	},
    		{
	            xtype: 'fieldset',
	            title: 'Dados do Lançamento',
	            itemId: 'lancamentoFieldset',
	            instructions: 'Informe a quantidade e o Vencimento.',
	            items: [
					{
					    xtype: 'textfield',
					    name : 'CodigoEndereco',
					    label: 'Origem:',
					    disabled: true
					},
					{
	                    xtype: 'textfield',
	                    id: 'codigoProdutoTextfield',
	                    name : 'CodigoProduto',
	                    label: 'Produto:',
	                    disabled: false
	                },
	                {
	                    xtype: 'textfield',
	                    id: 'quantidadeTextfield',
	                    name : 'Quantidade',
	                    label: 'Qtd.:',
	                    disabled: false
	                },
	                {
	                    xtype: 'datepickerfield',
	                    destroyPickerOnHide: true,
	                    name : 'DataVencimento',
	                    id:'vencimentoTextField',
	                    label: 'Venc.:',
	                    value: new Date(),
	                    dateFormat: 'd-m-Y',
	                    required:true,
	                    placeHolder: 'data de validade',
	                    picker:
                    	{
                    		//yearTo: parseInt(Ext.Date.format(new Date(), 'Y'), 10)
	                    	yearFrom: new Date().getFullYear(),
	                    	slotOrder: ['day', 'month', 'year'],
	                    	yearTo: new Date().getFullYear() + 5
                    	}
	                },
	                {
                        xtype: 'selectfield',
                        label: 'Avaria:',
                        name: 'IdAvaria',
                        id: 'avariaSelectField',
                        //store: 'enderecoStore',
						options: [
							{
								Descricao: '*Selecione*',
								Id: null
							},
							{
								Descricao: 'Tipo Avaria 0',
								Id: 0
							},
							{
								Descricao: 'Tipo Avaria 1',
								Id: 1
							},
							{
								Descricao: 'Tipo Avaria 2',
								Id: 2
							},

						],
			            displayField: 'Descricao',
			            valueField: 'Id',
			            placeHolder: '*Selecione*'
                    }
                    
	            ]
        	},
        	{
        		xtype:'container',
        		itemId: 'confirmarContainer',
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
