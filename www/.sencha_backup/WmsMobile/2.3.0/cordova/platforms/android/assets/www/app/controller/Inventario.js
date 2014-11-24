Ext.define('WmsMobile.controller.Inventario', {
    extend: 'WmsMobile.controller.ControllerBase',

    requires:[
    	'WmsMobile.model.Documento'
    ],

    stores:[
        'Inventario'
    ],
    config: {
        refs: {
            mainPanel: {
                selector: 'mainpanel',
                xtype: 'Ext.Panel'
            },
            inventarioListarPlanejadosView: {
                selector: 'inventarioListarPlanejadosView',
                xtype: 'Ext.List'
            },
            inventarioListarProdutosView: {
                selector: 'inventarioListarProdutosView',
                xtype: 'Ext.List'
            },
            inventarioListarEnderecosView: {
                selector: 'inventarioListarEnderecosView',
                xtype: 'Ext.List'
            },
            inventarioLancarInventarioProdutoView: {
                selector: 'inventarioLancarInventarioProdutoView',
                xtype: 'Ext.List'
            },

        },

        control: {
            "inventarioListarPlanejadosView": {
                itemsingletap: 'inventarioListarPlanejadosView_onItemsingletapDocumento',
                load: 'inventarioListarPlanejadosView_onload'
            },
            "inventarioListarPlanejadosView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "inventarioListarProdutosView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "inventarioListarEnderecosView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "inventarioLancarInventarioProdutoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "inventarioListarProdutosView": {
                itemsingletap: 'inventarioListarProdutosView_onItemsingletap',
            },
            "inventarioListarEnderecosView": {
                itemsingletap: 'inventarioListarEnderecosView_onItemsingletap',
            },
            "inventarioLancarInventarioProdutoView #botaoCancelar": {
                tap: 'inventarioLancarInventarioProdutoView_botaoCancelar_onTap'
            },
            "inventarioLancarInventarioProdutoView #botaoConfirmar": {
                tap: 'inventarioLancarInventarioProdutoView_botaoConfirmar_onTap'
            },
        }
    },

    inventarioListarPlanejadosView_onload:function(view){

        var wmstoolbar = Ext.ComponentQuery.query('inventarioListarPlanejadosView #wmstoolbar');
        wmstoolbar[0].setTitle('Inventarios Planejados');

        var _store = Ext.getStore('inventarioStore');
        _store.add({descricao:'DORBA DORBA'});
    },

    launch:function(){

    },

    inventarioListarPlanejadosView_onItemsingletapDocumento: function() {

        var router = this.getRouter();
        var listaItensDoInventario = this.getInventarioListarProdutosView();
        router.params = {id:22};
        router.changeView(listaItensDoInventario);
    },

    inventarioListarProdutosView_onItemsingletap: function() {
        var router = this.getRouter();
        var listaEnderecos = this.getInventarioListarEnderecosView();
        router.params = {id:22};
        router.changeView(listaEnderecos);

    },

    inventarioListarEnderecosView_onItemsingletap: function() {
        var router = this.getRouter();
        var lancarEstoque = this.getInventarioLancarInventarioProdutoView();
        router.params = {id:22};
        router.changeView(lancarEstoque);

    },

    inventarioLancarInventarioProdutoView_botaoCancelar_onTap: function() {
        this.getRouter().back();
    },

    inventarioLancarInventarioProdutoView_botaoConfirmar_onTap: function() {
        this.getRouter().back();
    },
});
