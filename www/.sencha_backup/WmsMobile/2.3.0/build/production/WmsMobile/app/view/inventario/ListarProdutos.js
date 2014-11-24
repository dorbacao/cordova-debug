var itemTemplate = new Ext.XTemplate(
    '<tpl for=".">',
    '   <div class="master">',
    '      <div class="status">',
    '          <img class="x-icon-status-cor{Status}">',
    '      </div>',
    '      <div class="codigo">        ',
    '          #{CodigoProduto}',
    '      </div>',
    '      <div class="splited">',
    '          <div class="unidade">',
    '              <b>(<tpl if="QuantidadeLancada == undefined"> *</tpl> {QuantidadeLancada} / {Quantidade}) {UnidadeMedida}</b>',
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
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.inventarioListarProdutosView',

	load:function(){},

    config:{
    	itemTpl:itemTemplate,
    	store:'itemPlanejamentoStore',
        emptyText:'Não há produtos a serem inventariados',
        styleHtmlCls:'listaStatusContainer',

        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        }
    }
});
