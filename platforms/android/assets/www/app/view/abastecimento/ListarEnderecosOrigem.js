var itemTemplate = new Ext.XTemplate(
    '<tpl for=".">',
    '   <div class="master">',
    '      <div class="codigo">',
    '          #{Codigo}',
    '      </div>',
    '      <div class="splited">',
    '          <div class="unidade">',    
    '          </div>',    
    '          <div class="item_descricao">',
    '              {NomeArea}',
    '          </div>',
    '      </div>',
    '      <div class="icon" >',
    '          <img>',
    '      </div>',
    '   </div>',
    '</tpl>'
);

Ext.define('WmsMobile.view.abastecimento.ListarEnderecosOrigem', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.abastecimentoListarEnderecosOrigemView',

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
