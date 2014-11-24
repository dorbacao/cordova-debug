var itemTemplate = new Ext.XTemplate(
    '<tpl for=".">',
    '   <div class="master">',
    '      <div class="codigo">',
    '          #{Codigo}',
    '      </div>',
    '      <div class="splited">',
    // '          <div class="unidade">',
    // '              <b>( {QtdItens}<tpl if="QtdItens &gt; 1"> itens</tpl> <tpl if="QtdItens &lt; 2"> item</tpl> )</b>',
    // '          </div>',
    // '          <div class="item_descricao">',
    // '              {Descricao}',
    // '          </div>',
    '      </div>',
    '      <div class="icon" >',
    '          <img>',
    '      </div>',
    '   </div>',
    '</tpl>'
);

Ext.define('WmsMobile.view.separacao.ListarCarrinho', {
    // extend: 'WmsMobile.component.ViewList',
    extend: 'Ext.Container',
    alias: 'widget.separacaoListarCarrinhoView',

    required: [
        'Ext.dataview.List',
        'Ext.data.Store',
    ],

	load:function(){},

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
                ui: 'neutral',
                items: [
                    {
                        xtype: 'searchfield',
                        itemId:'documentoSearchfield',
                        name: 'query',
                        placeHolder:'  código do documento',
                        value:'',
                    }
                ]
            },
            {
                xtype:'container',
                layout:{
                    type:'hbox',
                },
                items:[
                    // {
                    //     xtype:'spacer',
                    //     width:'4px'
                    // },
                    {
                        xtype:'button',
                        name:'btnSemCarrinho',
                        itemId:'btnSemCarrinho',
                        text:'Continuar sem carrinho',
                        // ui: 'confirm',
                        width:'100%',
                    },
                    // {
                    //     xtype:'spacer',
                    //     width:'4px'
                    // },
                ]
            },
            {
                xtype: "list",
                itemId: 'listaProdutos',
                flex: 1, // define flex

                itemTpl:itemTemplate,
                styleHtmlCls:'listaStatusContainer',

                // itemTpl:'{Descricao}',
                store:'carrinhoStore',
                emptyText:'Não há carrinhos a serem selecionados',
                itemId: 'listSeparacaoListarCarrinho',
            },
        ]
    }
});
