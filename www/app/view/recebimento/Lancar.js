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
                xtype: 'titlebar',

                id: 'messageTitlebar',
                title: 'Cadastrado com sucesso!',
                ui: 'yellow',
                style: "background-color: #DCF0BA;display:none;font-size:10px;heigth:30px;",
                docked: 'top',
                layout: {
                    pack: 'end',
                    type: 'hbox'
                },
            },
    		{
	            xtype: 'fieldset',
	            title: 'Dados do Documento',
	            id: 'dadosDocumento',
	            //instructions: 'Informe a quantidade e o Vencimento.',
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
	                    xtype: 'wmstextfield',
	                    name : 'Lote',
	                    id : 'loteTextField',
	                    label: 'Lote:',
	                    required: true,
	                    placeHolder: 'Informe o lote'
	                },
	                {
	                    xtype: 'wmstextfield',
	                    name : 'Serie',
	                    id : 'serieTextField',
	                    label: 'Série:',
	                    required: true,
	                    placeHolder: 'Informe o número de série'
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
	                {
	                    xtype: "selectfield",
	                    name : 'IdAvaria',
	                    label: 'Avaria:',
	                    placeHolder: 'Selecione uma avaria',
                    	store:'avariaStore',
	                    valueField:'Id',
       					displayField:'NomeAvaria'
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