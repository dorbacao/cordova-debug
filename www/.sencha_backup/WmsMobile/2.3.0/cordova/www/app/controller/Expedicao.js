Ext.define('WmsMobile.controller.Expedicao', {
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
            expedicaoListarView: {
                selector: 'expedicaoListarView',
                xtype: 'Ext.List'
            },
            expedicaoListarItemDocumentoView: {
                selector: 'expedicaoListarItemDocumentoView',
                xtype: 'Ext.List'
            },
            expedicaoLancarView: {
                selector: 'expedicaoLancarView',
                xtype: 'Ext.List'
            },
            expedicaoImpressaoEtiqueta: {
                selector: 'expedicaoImpressaoEtiqueta',
                xtype: 'Ext.List'
            }
        },

        control: {
            "expedicaoListarView": {
                itemsingletap: 'expedicaoListarView_onItemsingletapDocumento'
            },
            "expedicaoListarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "expedicaoListarItemDocumentoView": {
                itemsingletap: 'expedicaoListarItemDocumentoView_onItemsingletapItemDocumento'
            },
            "expedicaoListarItemDocumentoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "expedicaoLancarView #botaoCancelar": {
                tap: 'expedicaoLancarView_botaoCancelar_onTap'
            },
            "expedicaoLancarView #botaoConfirmar": {
                tap: 'expedicaoLancarView_botaoConfirmar_onConfirmar'
            },
            "expedicaoLancarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "expedicaoImpressaoEtiqueta #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "expedicaoImpressaoEtiqueta #finalizarButton": {
                tap: 'expedicaoImpressaoEtiqueta_finalizarButton_onTap'
            },

        }
    },

    //VIEW: expedicaoLancarView
    expedicaoImpressaoEtiqueta_finalizarButton_onTap: function(button, e) {
        var router = this.getRouter();
        router.backTo(2);
    },
    //VIEW:

    //VIEW: expedicaoLancarView
    expedicaoLancarView_botaoCancelar_onTap: function(button, e) {
        var self = this;
        var x = Ext.Msg.confirm('Confirmação', 'Deseja realmente cancelar o lançamento', function(button){
            if(button == 'yes')
                self.getRouter().back();
        });
    },

    expedicaoLancarView_botaoConfirmar_onConfirmar: function(button, e) {

        var router = this.getRouter();
        var viewDestino = this.getExpedicaoImpressaoEtiqueta();

        router.changeView(viewDestino);

    },
    //VIEW:

    //VIEW: expedicaoListarView
    expedicaoListarView_onItemsingletapDocumento: function() {

        var router = this.getRouter();
        var itemDocumentoView = this.getExpedicaoListarItemDocumentoView();

        router.changeView(itemDocumentoView);
    },

    expedicaoListarItemDocumentoView_onItemsingletapItemDocumento: function() {

        var router = this.getRouter();
        var lancarView = this.getExpedicaoLancarView();

        router.changeView(lancarView)
    }
    //VIEW:
});
