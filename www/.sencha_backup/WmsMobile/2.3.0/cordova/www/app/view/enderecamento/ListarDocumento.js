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


Ext.define('WmsMobile.view.enderecamento.ListarDocumento', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.enderecamentoListarView',

    load:function(){},

    config:{
        itemTpl:'{Descricao}',
    	store:'documentoStore',
        emptyText:'Não há documentos a serem endereçados',
        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        }
    }
});