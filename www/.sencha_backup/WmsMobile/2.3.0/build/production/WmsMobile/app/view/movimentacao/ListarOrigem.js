Ext.define('WmsMobile.view.movimentacao.ListarOrigem', {
    extend: 'WmsMobile.component.form.WmsPanel',
    alias: 'widget.movimentacaoListarOrigemView',

    load:function(){},

    requires: ['Ext.List'],

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
                style: "background-color: #DCF0BA;display:none;",
                docked:'top',
                layout:{
                    pack:'end',
                    type:'hbox'
                },
            },
            {
                xtype: 'fieldset',
                title: 'Dados da origem',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'Descricao',
                        id: 'descricaoTextField',
                        label: 'Prod.:',
                        disabled: true
                    },
                     {
                        xtype: 'textfield',
                        name : 'origem',
                        id: 'origemSelectField',
                        label: 'Origem:',
                        disabled: false
                    }
                ]
            },
            // {
            //     xtype: "list",
            //     layout: "fit", // take as much space as available
            //     flex: 1, // define flex
            //     data: [
            //         {name: 'Jamie Avins',  age: 100},
            //         {name: 'Rob Dougan',   age: 21},
            //         {name: 'Tommy Maintz', age: 24},
            //         {name: 'Jacky Nguyen', age: 24},
            //         {name: 'Ed Spencer',   age: 26}
            //     ],
            //     itemTpl: '{name} is {age} years old'
            // },
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