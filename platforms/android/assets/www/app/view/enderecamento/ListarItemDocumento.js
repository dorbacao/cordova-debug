var itemTemplate = new Ext.XTemplate(
    '<tpl for=".">',
    '   <div class="master <tpl if="Avaria">avariado</tpl>">',
    '      <div class="status">',
    '          <img class="x-icon-status-cor{Status}">',
    '      </div>',
    '      <div class="codigo">',
    '          #{Codigo}',
    '           <span class="unidade">',
    '              <b>( <tpl if="QuantidadeLancada == undefined">*</tpl>{QuantidadeLancada} / {Quantidade} ) {UnidadeMedida}</b>',
    '           </span>',
    '      </div>',
    '      <div class="splited">',
    '          <div class="item_descricao">',
    '              {Descricao}<tpl if="Avaria"> ({NomeAvaria})</tpl>',
    '          </div>',
    '      </div>',
    '      <div class="icon" >',
    '          <img>',
    '      </div>',
    '   </div>',
    '</tpl>'
);

Ext.define('WmsMobile.view.enderecamento.ListarItemDocumento', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.enderecamentoListarItemDocumentoView',

    load:function(){},

    config:{
    	itemTpl:itemTemplate,
        styleHtmlContent:true,
        emptyText:'Não há itens neste documento',
        styleHtmlCls:'listaStatusContainer',
    	store:'itemDocumentoStore',

        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        }
    }
});