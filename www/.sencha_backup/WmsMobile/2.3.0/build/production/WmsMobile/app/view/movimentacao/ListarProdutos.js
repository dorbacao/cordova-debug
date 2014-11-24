// var itemTemplate = new Ext.XTemplate(
//     '<tpl for=".">',
//     '   <div class="master">',
//     '      <div class="codigo">',
//     '          #{Codigo}',
//     '      </div>',
//     '      <div class="splited">',
//     '          <div class="unidade">',
//     '              <b>( {Quantidade}<tpl if="Quantidade &gt; 1"> itens</tpl> <tpl if="Quantidade &lt; 2"> item</tpl> )</b>',
//     '          </div>',
//     '          <div class="item_descricao">',
//     '              {Descricao}',
//     '          </div>',
//     '      </div>',
//     '      <div class="icon" >',
//     '          <img>',
//     '      </div>',
//     '   </div>',
//     '</tpl>'
// );

var itemTemplate = new Ext.XTemplate(
    '<tpl for=".">',
    '   <div class="master">',
    '      <div class="status">',
    '          <img class="x-icon-status-cor{Status}">',
    '      </div>',
    '      <div class="codigo">        ',
    '          #{Codigo}',
    '      </div>',
    '      <div class="splited">',
    '          <div class="unidade">',
    '              <b>(<tpl if="Quantidade == undefined"> *</tpl> {Quantidade}) Itens</b>',
    '          </div>',
    '          <div class="item_descricao">',
    '              {Descricao}',
    '          </div>',
    '      </div>',
    '      <div class="icon" >',
    '          <img>',
    '      </div>',
    '   </div>',
    '</tpl>'
);

Ext.define('WmsMobile.view.movimentacao.ListarProdutos', {
    // extend: 'Ext.Container',
    extend: 'WmsMobile.component.form.WmsPanel',
    alias: 'widget.movimentacaoListarProdutosView',

    load:function(){},

    required: [
        'Ext.dataview.List',
        'Ext.data.Store',
    ],

    config:{

        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        },

        layout: 'vbox',

        items:[
            {
                xtype:'wmstoolbar',
                id:'wmstoolbar'
            },
            {
                xtype: 'titlebar',
                docked: 'top',
                itemId: 'baseTitlebar',
                ui: 'neutral',
                items: [{
                    xtype: 'searchfield',
                    itemId:'documentoSearchfield',
                    name: 'query',
                    placeHolder:'  código do documento',
                    value:'',
                }]
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
                title: 'Dados do produto',
                itemId: 'textProduto',
                instructions: '',
                items: [
                    {
                        xtype: 'wmstextfield',
                        name : 'Produto',
                        id: 'produtoTextField',
                        placeHolder: 'Código de barras do produto',
                        hasFocus: true
                    }
                ]
            },
            {
                xtype: "list",
                //layout: "fit", // take as much space as available
                flex: 1, // define flex
                // items: [

                // ],

        //         xtype: 'segmentedbutton',
        //         itemId: 'segBtn',
        //         allowMultiple: false,
        //         //style: 'padding: 20px;',
        //         items: [
        //             {
        //                 text: 'Hoje',
        //                 value: 'hoje',
        //                 pressed: true,
        //                 hoje: true
        //             },
        //             {
        //                 text: 'Futuras',
        //                 value: 'futuras',
        //                 hoje: false
        //             }
        //         ],
        //         listeners: {
        //             toggle: function (segBtn, btn, isPressed) {
        //                 console.log('Hoje :' +  btn.hoje);
        //                 console.log(segBtn);

        //                 //var listaProdutos = Ext.ComponentQuery.query('movimentacaoListarProdutosView > #listaProdutos')[0]
        //                 // var store = Ext.getStore('produtoStore');
        //                 // store.clearFilter();
        //                 // store.filter('Hoje', btn.hoje);
        //             }
        //         }

                store: 'movimentacaoStore',
                // itemTpl: '{Descricao}',
                itemTpl:itemTemplate,
                emptyText:'Não há produtos a serem movidos',
                styleHtmlCls:'listaStatusContainer',
                itemId: 'listProdutoListar',
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