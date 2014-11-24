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
    '              <b>({Quantidade} /<tpl if="QuantidadeLancada == undefined"> *</tpl> {QuantidadeLancada}) {UnidadeMedida}</b>',
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

Ext.define('WmsMobile.view.separacao.ListarItemDocumento', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.separacaoListarItemDocumentoView',

    load:function(){},

    config:{
        itemTpl:itemTemplate,
        styleHtmlContent:true,
        styleHtmlCls:'listaStatusContainer',
        store:'itemDocumentoStore',
        emptyText:'Não há itens neste documento',
        itemId: 'listSeparacaoListarItemDocumento',

        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        }
    }
});