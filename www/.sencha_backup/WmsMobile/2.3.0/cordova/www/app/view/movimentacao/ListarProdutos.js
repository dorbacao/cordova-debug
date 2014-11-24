Ext.define('WmsMobile.view.movimentacao.ListarProdutos', {
    extend: 'Ext.Container',
    alias: 'widget.movimentacaoListarProdutosView',

    load:function(){
        var wmstoolbar = Ext.ComponentQuery.query('movimentacaoListarProdutosView #wmstoolbar');
        wmstoolbar[0].setTitle('Produto');

        var listaProdutos = Ext.ComponentQuery.query('movimentacaoListarProdutosView > #listaProdutos')
        var textProduto = Ext.ComponentQuery.query('movimentacaoListarProdutosView > #textProduto')
        //var segBtn = Ext.ComponentQuery.query('movimentacaoListarProdutosView > #segBtn')

        if(this.params != undefined)
        {
            switch(this.params.tipo)
            {
                case ItemMenuEnum.MovimentacaoAvulsa:
                    listaProdutos[0].hide();
                    //segBtn[0].hide();
                    textProduto[0].show();
                    break;

                case ItemMenuEnum.MovimentacaoPlanejada:
                    listaProdutos[0].show();
                    //segBtn[0].show();
                    textProduto[0].hide();
                    break;
            }
        }
    },

    required: [
        'Ext.dataview.List',
        'Ext.data.Store',
    ],

    config:{
        layout: 'vbox',
        items:[
            {
                xtype:'wmstoolbar',
                id:'wmstoolbar'
            },
            {
                xtype: 'fieldset',
                title: 'Dados do produto',
                itemId: 'textProduto',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'produto',
                        placeHolder: 'Informe o código de barras do produto',
                    }
                ]
            },
            {
                xtype: "list",
                itemId: 'listaProdutos',
                //layout: "fit", // take as much space as available
                flex: 1, // define flex
                items: [{
                    xtype: 'titlebar',
                    docked: 'top',
                    ui: 'neutral',
                    items: [{
                        xtype: 'segmentedbutton',
                        itemId: 'segBtn',
                        allowMultiple: false,
                        //style: 'padding: 20px;',
                        items: [
                            {
                                text: 'Hoje',
                                value: 'hoje',
                                pressed: true,
                                hoje: true
                            },
                            {
                                text: 'Futuras',
                                value: 'futuras',
                                hoje: false
                            }
                        ],
                        listeners: {
                            toggle: function (segBtn, btn, isPressed) {
                                //var listaProdutos = Ext.ComponentQuery.query('movimentacaoListarProdutosView > #listaProdutos')[0]
                                var store = Ext.getStore('movimentacaoStore');
                                store.clearFilter();
                                store.filter('hoje', btn.hoje);
                            }
                        }
                    }]
                }],
                store: 'movimentacaoStore',
                itemTpl: '{produto} - ({qtd}) - {datahora}',
                autoLoad: true
            },
            // {
            //     xtype:'container',
            //     layout:{
            //         type:'hbox',
            //     },
            //     items:[
            //         {
            //             xtype:'spacer',
            //             width:'4px'
            //         },
            //         {
            //             xtype:'button',
            //             name:'botaoConfirmar',
            //             itemId:'botaoConfirmar',
            //             text:'Confirmar',
            //             ui: 'confirm',
            //             width:'48%',
            //         },
            //         {
            //             xtype:'spacer',
            //             width:'4px'
            //         },
            //         {
            //             xtype:'button',
            //             name:'botaoCancelar',
            //             itemId:'botaoCancelar',
            //             text:'Cancelar',
            //             ui: 'decline',
            //             width:'48%',
            //         },
            //         {
            //             xtype:'spacer',
            //             width:'4px'
            //         },
            //     ]
            // }
        ]
    }
});