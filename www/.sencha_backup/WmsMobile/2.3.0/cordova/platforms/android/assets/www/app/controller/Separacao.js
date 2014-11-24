Ext.define('WmsMobile.controller.Separacao', {
    extend: 'WmsMobile.controller.ControllerBase',
    requires:[
    	'WmsMobile.model.Documento'
    ],

    config: {
        refs: {
            mainPanel: {
                selector: 'mainpanel',
                xtype: 'Ext.Panel'
            },
            separacaoListarView: {
                selector: 'separacaoListarView',
                xtype: 'Ext.List'
            },
            separacaoListarItemDocumentoView: {
                selector: 'separacaoListarItemDocumentoView',
                xtype: 'Ext.List'
            },
            separacaoLancarView: {
                selector: 'separacaoLancarView',
                xtype: 'Ext.List'
            },
            separacaoListarCarrinhoView: {
                selector: 'separacaoListarCarrinhoView',
                xtype: 'Ext.List'
            }

        },

        control: {
            "separacaoListarView": {
                itemsingletap: 'separacaoListarView_onItemsingletapDocumento'
            },
            "separacaoListarCarrinhoView": {
                itemsingletap: 'separacaoListarCarrinhoView_onItemsingletapCarrinhoSelecionado'
            },
            "separacaoListarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "separacaoListarItemDocumentoView": {
                itemsingletap: 'separacaoListarItemDocumentoView_onItemsingletapItemDocumento'
            },
            "separacaoListarItemDocumentoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "separacaoLancarView #botaoCancelar": {
                tap: 'separacaoLancarView_botaoCancelar_onCancelar'
            },
            "separacaoLancarView #botaoConfirmar": {
                tap: 'separacaoLancarView_botaoConfirmar_onConfirmar'
            },
            "separacaoLancarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "separacaoListarCarrinhoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },

        }
    },

    //VIEW: separacaoLancarView
    separacaoLancarView_botaoConfirmar_onConfirmar: function(button, e) {
        var self = this;
        self.getRouter().back();
    },

    separacaoLancarView_botaoCancelar_onCancelar: function(button, e) {
        var self = this;
        var x = Ext.Msg.confirm('Confirmação', 'Deseja realmente cancelar o lançamento', function(button){
            if(button == 'yes')
                self.getRouter().back();
        });
    },
    //VIEW

    //VIEW: separacaoLancarView
    separacaoListarCarrinhoView_onItemsingletapCarrinhoSelecionado: function() {

        var router = this.getRouter();
        var listarItemDocumento = this.getSeparacaoListarItemDocumentoView();

        router.changeView(listarItemDocumento);
    },
    //VIEW

    //VIEW: separacaoListarView
    separacaoListarView_onItemsingletapDocumento: function() {

        var router = this.getRouter();
        var listarCarrinhoView = this.getSeparacaoListarCarrinhoView();

        router.changeView(listarCarrinhoView);
    },

    separacaoListarItemDocumentoView_onItemsingletapItemDocumento: function() {

        var router = this.getRouter();
        var lancarView = this.getSeparacaoLancarView();

        router.changeView(lancarView)
    }
    //VIEW
});
