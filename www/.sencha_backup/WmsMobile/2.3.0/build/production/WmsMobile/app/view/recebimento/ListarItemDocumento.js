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
    '              <b>(<tpl if="QuantidadeLancada == undefined"> *</tpl> {QuantidadeLancada} / {Quantidade} ) {UnidadeMedida}</b>',
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

Ext.define('WmsMobile.view.recebimento.ListarItemDocumento', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.recebimentoListarItemDocumentoView',

	load:function(){},

    config:{
        itemTpl:itemTemplate,
        styleHtmlContent:true,
        styleHtmlCls:'listaStatusContainer',
    	store:'itemDocumentoStore',
        emptyText:'Não há itens neste documento',
        itemId: 'listRecebimentoListarItemDocumento',

        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        }
    }
});