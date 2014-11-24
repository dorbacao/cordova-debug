var itemTemplate = new Ext.XTemplate(
    '<tpl for=".">',
    '   <div class="master">',
    '      <div class="status">',
    '          <img class="x-icon-status-cor{Status}">',
    '      </div>',
    '      <div class="codigo">        ',
    '          #{CodigoProduto}',
    '          <span class="unidade">',
    '              <b>( <tpl if="Quantidade == undefined">*</tpl>{Quantidade} ) Itens</b>',
    '          </span>',
    '      </div>',
    '      <div class="splited">',
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
    extend: 'WmsMobile.component.form.WmsPanel',
    alias: 'widget.movimentacaoListarProdutosView',

    load:function(){},

    required: [
        'Ext.dataview.List',
        'Ext.data.Store',
    ],

    config:{

        layout: 'vbox',

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
                style: "background-color: #DCF0BA;display:none;font-size:10px;heigth:30px;",
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
                        id: 'produtoMovimentacaoTextField',
                        placeHolder: 'Código de barras do produto',
                        hasFocus: true
                    }
                ]
            },
            {
                xtype: "list",
                flex: 1, // define flex
                store: 'movimentacaoStore',
                itemTpl:itemTemplate,
                emptyText:'Não há produtos a serem movidos',
                styleHtmlCls:'listaStatusContainer',
                itemId: 'listProdutoListar',
                autoLoad: true,
                styleHtmlContent:true,
            },
        ]
    }
});