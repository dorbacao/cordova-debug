Ext.define('WmsMobile.view.recebimento.Lancar', {
    //extend: 'WmsMobile.view.LancarBase',
    extend: 'WmsMobile.component.form.WmsPanel',
    alias: 'widget.recebimentoLancarView',

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
	            //instructions: 'Informe a quantidade e o Vencimento.',
	            items: [
	                {
	                    xtype: 'wmstextfield',
	                    name : 'itemDocumento',
	                    id: 'itemDocumentoTextField',
	                    label: 'Prod.:',
	                    disabled: true,
	                },
	                {
	                    xtype: 'wmstextfield',
	                    name : 'nomeProduto',
	                    id : 'nomeProdutoTextField',
	                    label: 'Nome:',
	                    disabled: true
	                },
	                // {
	                //     xtype: 'textfield',
	                //     name : 'conferencia',
	                //     id : 'conferencia',
	                //     label: 'Confe.:',
	                //     disabled: true,
	                //     visible: false
	                // }
	            ]
        	},
    		{
	            xtype: 'fieldset',
	            id: 'dadosRecebimento',
	            title: 'Lancamento do Recebimento',
	            //instructions: 'Informe a quantidade e o Vencimento.',
	            items: [
	                {
	                    //xtype: 'spinnerfield',
	                    xtype: 'wmstextfield',
	                    name : 'quantidade',
	                    id : 'quantidadeTextField',
	                    label: 'Qtd.:',
	                    minValue: 0,
	                    required: true,
	                    placeHolder: 'Informe a quantidade'
	                },
	                {
	                    xtype: 'datepickerfield',
	                    destroyPickerOnHide: true,
	                    name : 'vencimento',
	                    id:'vencimentoTextField',
	                    label: 'Venc.:',
	                    value: new Date(),
	                    // dateFormat: "d/m/Y",
	                    dateFormat: 'd-m-Y',
	                    required:true,
	                    placeHolder: 'Informe a data de validade',
	                    picker:
                    	{
                    		//yearTo: parseInt(Ext.Date.format(new Date(), 'Y'), 10)
	                    	yearFrom: new Date().getFullYear(),
	                    	slotOrder: ['day', 'month', 'year'],
	                    	yearTo: new Date().getFullYear() + 5
                    	}
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