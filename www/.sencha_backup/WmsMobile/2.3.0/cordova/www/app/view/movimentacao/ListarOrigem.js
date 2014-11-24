Ext.define('WmsMobile.view.movimentacao.ListarOrigem', {
    extend: 'Ext.Panel',
    alias: 'widget.movimentacaoListarOrigemView',

    load:function(){
        var wmstoolbar = Ext.ComponentQuery.query('movimentacaoListarOrigemView #wmstoolbar');
        wmstoolbar[0].setTitle('Origem');
    },

    requires: ['Ext.List'],

    config:{
        items:[
            {
                xtype:'wmstoolbar',
                id:'wmstoolbar'
            },
            {
                xtype: 'fieldset',
                title: 'Dados da origem',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'produto',
                        label: 'Prod.:',
                        value: '#45689 - Mouse Microsoft',
                        disabled: true
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Origem:',
                        name: 'origem',
                        store: 'enderecoStore',
			            displayField: 'item_name',
			            valueField: 'item_id',
			            placeHolder: 'Select a Value'
                    }
                ]
            },
            {
                xtype: "list",
                layout: "fit", // take as much space as available
                flex: 1, // define flex
                data: [
                    {name: 'Jamie Avins',  age: 100},
                    {name: 'Rob Dougan',   age: 21},
                    {name: 'Tommy Maintz', age: 24},
                    {name: 'Jacky Nguyen', age: 24},
                    {name: 'Ed Spencer',   age: 26}
                ],
                itemTpl: '{name} is {age} years old'
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