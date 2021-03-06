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

Ext.define('WmsMobile.view.expedicao.ListarDocumento', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.expedicaoListarView',

	load:function(){},

    config:{
        itemTpl:itemTemplate,
        store:'documentoStore',
        emptyText:'Não há documentos a serem expedidos',
        styleHtmlCls:'listaStatusContainer',
        itemId: 'listExpedicaoListarItemDocumento',

        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        }
    }
});
