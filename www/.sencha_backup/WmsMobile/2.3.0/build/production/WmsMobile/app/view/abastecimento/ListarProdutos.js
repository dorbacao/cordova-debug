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
    '              <b>(<tpl if="QuantidadeLancada == undefined"> *</tpl> {QuantidadeLancada} / {QuantidadePrevista}) Itens</b>',
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

Ext.define('WmsMobile.view.abastecimento.ListarProdutos', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.abastecimentoListarProdutosView',

	load:function(){},

    config:{
    	itemTpl:itemTemplate,
    	store:'abastecimentoStore',
        styleHtmlCls:'listaStatusContainer',
        emptyText:'Não há documentos a serem abastecidos.',

        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        }
    }
});
