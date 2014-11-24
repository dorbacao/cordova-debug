var itemTemplate = new Ext.XTemplate(
    '<tpl for=".">',
    '   <div class="master">',
    '      <div class="status">',
    '          <img class="x-icon-status-cor{Status}">',
    '      </div>',
    '      <div class="codigo">        ',
    '          #{CodigoEndereco}',
    '          <span class="unidade">',
    '              <b>(<tpl if="QuantidadeLancada == undefined">*</tpl>{QuantidadeLancada}) Itens</b>',
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

Ext.define('WmsMobile.view.inventario.ListarPlanejadosPorEndereco', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.inventarioListarPlanejadosPorEnderecoView',

    load:function(){},

    config:{
        itemTpl:itemTemplate,
        styleHtmlContent:true,
        store:'inventarioPorEnderecoStore',
        emptyText:'Não há inventarios a serem executados',
        styleHtmlCls:'listaStatusContainer',
        itemId: 'listInventarioListarEnderecosView',

        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        },
    }
});
