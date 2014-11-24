Ext.define('WmsMobile.view.inventario.ListarPlanejados', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.inventarioListarPlanejadosView',


    config:{
    	itemTpl:'{descricao}',
    	store:'inventarioStore',
        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        }

    }
});
