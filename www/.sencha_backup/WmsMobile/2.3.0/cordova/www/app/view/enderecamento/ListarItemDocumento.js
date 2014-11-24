var itemTemplate = new Ext.XTemplate(
    '<tpl for=".">',
    '   <div class="master">',
    '      <div class="status">',
    '          <img class="x-icon-status-cor{StatusEnderecamento}">',
    '      </div>',
    '      <div class="codigo">        ',
    '          #{Codigo}',
    '      </div>',
    '      <div class="splited">',
    '          <div class="unidade">',
    '              <b>({Quantidade} /<tpl if="QuantidadeEnderecada == undefined"> *</tpl> {QuantidadeEnderecada}) {UnidadeMedida}</b>',
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