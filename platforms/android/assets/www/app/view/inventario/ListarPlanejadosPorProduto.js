var itemTemplate = new Ext.XTemplate(
    '<tpl for=".">',
    '   <div class="master">',
    '      <div class="status">',
    '          <img class="x-icon-status-cor{Status}">',
    '      </div>',
    '      <div class="codigo">        ',
    '          #{CodigoVolume}',
    '          <span class="unidade">',
    '              <b>(<tpl if="QuantidadeLancada == undefined">*</tpl>{QuantidadeLancada}) Itens</b>',
    '          </span>',
    '      </div>',
    '      <div class="splited">',
    '          <div class="item_descricao">',
    '              {Descricao} (<b>{UnidadeMedida}</b>)',
    '          </div>',
    '      </div>',
    '      <div class="icon" >',
    '          <img>',
    '      </div>',
    '   </div>',
    '</tpl>'
);

Ext.define('WmsMobile.view.inventario.ListarPlanejadosPorProduto', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.inventarioListarPlanejadosPorProdutoView',

    load:function(){},

    config:{
        itemTpl:itemTemplate,
        styleHtmlContent:true,
        store:'inventarioPorProdutoStore',
        emptyText:'Não há inventarios a serem executados',
        styleHtmlCls:'listaStatusContainer',
        itemId: 'listInventarioListarProdutoView',

        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        },
    }
});