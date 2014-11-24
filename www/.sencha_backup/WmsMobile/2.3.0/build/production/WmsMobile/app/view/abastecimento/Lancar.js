
Ext.define('WmsMobile.view.abastecimento.Lancar', {
    extend: 'WmsMobile.view.LancarBase',
    alias:  'widget.abastecimentoLancarView',

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
                xtype:'titlebar',

                id:'messageTitlebar',
                title:'Cadastrado com sucesso!',
                ui:'yellow',
                style: "background-color: #DCF0BA;display:none;font-size:10px;heigth:30px;",
                docked:'top',
                layout:{
                    pack:'end',
                    type:'hbox'
                },
            },
    		{
	            xtype: 'fieldset',
	            title: 'Abastecimento de Produto',
	            items: [
	                {
	                    xtype: 'textfield',
	                    name : 'IdAbastecimento',
	                    itemId : 'IdAbastecimento',
	                    label: 'Cod.:',
	                    disabled:true
	                },
	                {
	                    xtype: 'textfield',
	                    name : 'NomeProduto',
	                    itemId: 'NomeProduto',
	                    label: 'Nome:',
	                    disabled:true
	                },
	                {
	                    xtype: 'textfield',
	                    name : 'CodigoOrigem',
	                    itemId : 'CodigoOrigem',
	                    label: 'Origem:',
	                    disabled:true
	                },
	                {
	                    xtype: 'textfield',
	                    name : 'CodigoEnderecoPicking',
	                    itemId : 'CodigoEnderecoPicking',
	                    label: 'Picking:',
	                    disabled:true
	                },
	            ]
        	},
    		{
	            xtype: 'fieldset',
	            title: 'Transferência',
	            // instructions: 'Quantidade à abastecer',
	            items: [
	                {
	                    xtype: 'textfield',
	                    id:'quantidadeTextField',
	                    name : 'Quantidade',
	                    label: 'Qtd.:'
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
