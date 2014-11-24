Ext.define('WmsMobile.controller.Abastecimento', {
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
            abastecimentoListarEnderecoView: {
                selector: 'abastecimentoListarEnderecoView',
                xtype: 'Ext.List'
            },
            abastecimentoListarItemDocumentoView: {
                selector: 'abastecimentoListarItemDocumentoView',
                xtype: 'Ext.List'
            },
            abastecimentoLancarView: {
                selector: 'abastecimentoLancarView',
                xtype: 'Ext.List'
            }
            
        },

        control: {            
            "abastecimentoListarEnderecoView": {
                itemsingletap: 'abastecimentoListarEnderecoView_onItemsingletapDocumento'
            },
            "abastecimentoListarEnderecoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "abastecimentoListarItemDocumentoView": {
                itemsingletap: 'abastecimentoListarItemDocumentoView_onItemsingletapItemDocumento'
            },
            "abastecimentoListarItemDocumentoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "abastecimentoLancarView #botaoCancelar": {
                tap: 'abastecimentoLancarView_botaoCancelar_onCancelarExpedicaoLancarView'
            },
            "abastecimentoLancarView #botaoConfirmar": {
                tap: 'abastecimentoLancarView_botaoConfirmar_onConfirmar'
            },
            "abastecimentoLancarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },

        }
    },

  

    //VIEW: abastecimentoLancarView
    abastecimentoLancarView_botaoCancelar_onCancelarExpedicaoLancarView: function(button, e) {
        var self = this;
        var x = Ext.Msg.confirm('Confirmação', 'Deseja realmente cancelar o lançamento', function(button){
            if(button == 'yes')
                self.getRouter().back();
        });
    },

    abastecimentoLancarView_botaoConfirmar_onConfirmar: function(button, e) {
        this.getRouter().backTo(2);    
    },
    //VIEW: 

    //VIEW: abastecimentoListarEnderecoView
    abastecimentoListarEnderecoView_onItemsingletapDocumento: function() {

        var router = this.getRouter();
        var itemDocumentoView = this.getAbastecimentoListarItemDocumentoView();

        router.changeView(itemDocumentoView);
    },

    abastecimentoListarItemDocumentoView_onItemsingletapItemDocumento: function() {

        var router = this.getRouter();
        var lancarView = this.getAbastecimentoLancarView();

        router.changeView(lancarView)
    }
    //VIEW:
});
