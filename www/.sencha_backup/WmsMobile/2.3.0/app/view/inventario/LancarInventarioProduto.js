Ext.define('WmsMobile.view.inventario.LancarInventarioProduto', {
    extend: 'WmsMobile.view.LancarBase',
    alias: 'widget.inventarioLancarInventarioProdutoView',

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
	            instructions: 'Informe os dados solicitados.',
	            items: [
					{
					    xtype: 'textfield',
					    name : 'Descricao',
					    label: 'Produto:',
					    disabled: true
					},
	                {
	                    xtype: 'textfield',
	                    id: 'quantidadeTextfield',
	                    name : 'QuantidadeLancada',
	                    label: 'Qtd.:',
	                    required:true,
	                    disabled: false
	                },
                    {
	                    xtype: 'textfield',
	                    id: 'codigoEnderecoTextfield',
	                    name : 'CodigoEndereco',
	                    label: 'End.:',
	                    required:true,
	                    disabled: false
	                },
                    {
	                    xtype: 'textfield',
	                    id: 'loteTextfield',
	                    name : 'Lote',
	                    label: 'Lote:',
	                    disabled: false
	                }
	                ,
                    {
	                    xtype: 'textfield',
	                    id: 'serieTextfield',
	                    name : 'Serie',
	                    label: 'Série:',
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
	                    placeHolder: 'Data de validade',
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
                        store: 'avariaStore',
			            displayField: 'NomeAvaria',
			            valueField: 'Id',
			            placeHolder: 'Selecione uma avaria'
                    },
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
