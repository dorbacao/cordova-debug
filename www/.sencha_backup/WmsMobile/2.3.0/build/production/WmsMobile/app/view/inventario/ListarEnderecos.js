var itemTemplate = new Ext.XTemplate(
    '<tpl for=".">',
    '   <div class="master">',
    '      <div class="status">',
    '          <img class="x-icon-status-inventario-cor{Status}">',
    '      </div>',
    '      <div class="codigo">        ',
    '          #{Codigo}',
    '      </div>',
    '      <div class="splited">',
    '          <div class="unidade">',
    '              <b>(<tpl if="QuantidadeLancada == undefined"> *</tpl> {QuantidadeLancada} ) {UnidadeMedida}</b>',
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

Ext.define('WmsMobile.view.inventario.ListarEnderecos', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.inventarioListarEnderecosView',

	load:function(){},

    config:{

    	store:'enderecoInventarioStore',
        itemTpl:itemTemplate,
        emptyText:'Não há enderços a serem inventariados.',
        styleHtmlCls:'listaStatusContainer',
        itemId: 'listInventarioListarEnderecosView',

        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        }
    }
});
