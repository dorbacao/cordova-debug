Ext.define('WmsMobile.view.inventario.ListarPlanejados', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.inventarioListarPlanejadosView',

    mostrarFinalizar:true,

    config:{
    	itemTpl:'{Descricao}',
    	store:'planejamentoStore',
        emptyText:'Não há inventarios a serem executados',
        styleHtmlCls:'listaStatusContainer',
        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        },


    }
});
