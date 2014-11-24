var itemTemplate = new Ext.XTemplate(
    '<tpl for=".">',
    '   <div class="master">',
    '      <div class="status">',
    '          <img class="x-icon-status-cor{Status}">',
    '      </div>',
    '      <div class="codigo">        ',
    '          #{CodigoVolume}',
    '      </div>',
    '      <div class="splited">',
    '          <div class="unidade">',
    '              <b><tpl if="Quantidade == undefined">*</tpl>{Quantidade} Itens</b>',
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

Ext.define('WmsMobile.view.inventario.ListarProdutos', {
    extend: 'WmsMobile.component.form.WmsPanel',
    alias: 'widget.inventarioListarProdutosView',

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
                xtype: 'fieldset',
                title: 'Dados do produto',
                itemId: 'textEndereco',
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
                xtype: "list",
                flex: 1,
                itemTpl:itemTemplate,
                emptyText:'Não há produtos a serem inventariados',
                styleHtmlCls:'listaStatusContainer',
                itemId: 'listProduto',
                autoLoad: true
            },
        ]
    }
});