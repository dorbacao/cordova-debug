Ext.define('WmsMobile.view.movimentacao.ListarDestino', {
    // extend: 'Ext.form.Panel',
    extend: 'WmsMobile.component.form.WmsPanel',
    alias: 'widget.movimentacaoListarDestinoView',

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
                title: 'Dados da destino',
                id: 'dadosDestino',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'Descricao',
                        id: 'descricaoTextField',
                        label: 'Desc.:',
                        disabled: true
                    },
                    {
                        xtype: 'wmstextfield',
                        name : 'Quantidade',
                        itemId : 'quantidadeTextField',
                        label: 'Qtd.:',
                        minValue: 1,
                        required: true,
                        placeHolder: 'Informe a quantidade',
                        disabled: true
                    },
                    {
                        xtype: 'textfield',
                        name : 'CodigoEnderecoOrigem',
                        itemId: 'CodigoEnderecoOrigem',
                        placeHolder: 'Informe a origem',
                        label: 'Origem:',
                        required: true,
                        disabled: true
                    },
                    {
                        xtype: 'textfield',
                        name : 'CodigoEnderecoDestino',
                        itemId : 'CodigoEnderecoDestino',
                        placeHolder: 'Informe o destino',
                        label: 'Destino:',
                        disabled: true,
                        required: true,
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