Ext.define('WmsMobile.view.recebimento.Lancar', {
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
	                // {
	                //     xtype: 'wmstextfield',
	                //     name : 'itemDocumento',
	                //     id: 'itemDocumentoTextField',
	                //     label: 'Prod.:',
	                //     disabled: true,
	                // },
	                {
	                    xtype: 'wmstextfield',
	                    name : 'Descricao',
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
	                {
	                    xtype: 'datepickerfield',
	                    destroyPickerOnHide: true,
	                    name : 'Vencimento',
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
	                },
	                // {
	                //     xtype: 'togglefield',
	                //     name : 'Avaria',
	                //     id : 'possuiAvariaToggle',
	                //     label: 'Avaria?:',
	                //     required: true,
	                // },
	                {
	                    xtype: "selectfield",
	                    name : 'Avaria',
	                    label: 'Avaria:',
	                    placeHolder: 'Selecione uma avaria',
		                options: [
	                		{text: 'Sem avaria',  value: null},
		                    {text: 'Tipo avaria 1',  value: 1},
		                    {text: 'Tipo avaria 2',  value: 2},
		                    {text: 'Tipo avaria 3',  value: 3},
		                ],
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