var itemTemplate = new Ext.XTemplate(
    '<tpl for=".">',
    '   <div class="master">',
    '      <div class="codigo">',
    '          #{Codigo}',
    '      </div>',
    '      <div class="splited">',
    '          <div class="unidade">',
    // '              <b>( {TotalEstoque}<tpl if="TotalEstoque &gt; 1"> itens</tpl> <tpl if="TotalEstoque &lt; 2"> item</tpl> )</b>',
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

Ext.define('WmsMobile.view.abastecimento.ListarEnderecosPicking', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.abastecimentoListarEnderecosPickingView',

	load:function(){},

    config:{
    	itemTpl:itemTemplate,
    	store:'enderecoStore',
        styleHtmlCls:'listaStatusContainer',
        emptyText:'Não há endereços a serem listados.',

        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        }
    }
});
