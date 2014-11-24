var itemTemplate = new Ext.XTemplate(
    '<tpl for=".">',
    '   <div class="master">',
    '      <div class="codigo">',
    '          #{Codigo}',
    '           <span class="unidade">',
    '              <b>( {QtdItens}<tpl if="QtdItens &gt; 1"> itens</tpl> <tpl if="QtdItens &lt; 2"> item</tpl> )</b>',
    '           </span>',
    '      </div>',
    '      <div class="splited">',
    '          <div class="item_descricao">',
    '              {Descricao} - {DataCricao}',
    '          </div>',
    '      </div>',
    '      <div class="icon" >',
    '          <img>',
    '      </div>',
    '   </div>',
    '</tpl>'
);

Ext.define('WmsMobile.view.recebimento.ListarDocumento', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.recebimentoListarView',

	load:function(){},

    config:{
        itemTpl:itemTemplate,
        styleHtmlContent:true,
        store:'documentoStore',
        emptyText:'Não há documentos a serem recebidos',
        styleHtmlCls:'listaStatusContainer',
        itemId: 'listRecebimentoListarItemDocumento',

        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        }
    }
});