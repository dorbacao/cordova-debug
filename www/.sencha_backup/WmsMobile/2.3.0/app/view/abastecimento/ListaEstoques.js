var itemTemplate = new Ext.XTemplate(
    '<tpl for=".">',
    '   <div class="master">',
    '      <div class="status">',
    '          <img class="x-icon-status-cor{Status}">',
    '      </div>',
    '      <div class="codigo">        ',
    '          #{CodigoEndereco}',
    '      </div>',
    '      <div class="splited">',
    '          <div class="unidade">',
    '              <b>(<tpl if="QuantidadeLancada == undefined"> *</tpl> {QuantidadeLancada} itens)</b>',
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

Ext.define('WmsMobile.view.inventario.ListarEstoques', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.inventarioListarEstoquesView',

	load:function(){},

    config:{

    	store:'itemInventarioPorEnderecoStore',
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
