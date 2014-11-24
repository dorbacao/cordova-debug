Ext.define('WmsMobile.controller.MovimentacaoPlanejada', {
    extend: 'WmsMobile.controller.ControllerBase',

    requires:[
    	'WmsMobile.model.Select'
    ],

    config: {
        refs: {
            mainPanel: {
                selector: 'mainpanel',
                xtype: 'Ext.Panel'
            },
            movimentacaoPlanejadaProdutoView: {
                selector: 'movimentacaoPlanejadaProdutoView',
                xtype: 'Ext.List'
            },
            movimentacaoPlanejadaOrigemView: {
                selector: 'movimentacaoPlanejadaOrigemView',
                xtype: 'Ext.List'
            },
            movimentacaoPlanejadaDestinoView: {
                selector: 'movimentacaoPlanejadaDestinoView',
                xtype: 'Ext.List'
            },
        },

        control: {
            "movimentacaoPlanejadaProdutoView #botaoConfirmar": {
                tap: 'movimentacaoPlanejadaProdutoView_botaoConfirmar_onConfirmar'
            },
            "movimentacaoPlanejadaProdutoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "movimentacaoPlanejadaOrigemView #botaoConfirmar": {
                tap: 'movimentacaoPlanejadaOrigemView_botaoConfirmar_onConfirmar'
            },
            "movimentacaoPlanejadaOrigemView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "movimentacaoPlanejadaDestinoView #botaoConfirmar": {
                tap: 'movimentacaoPlanejadaDestinoView_botaoConfirmar_onConfirmar'
            },
            "movimentacaoPlanejadaDestinoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            }
        }
    },

   //VIEW: movimentacaoPlanejadaOrigemView
    movimentacaoPlanejadaOrigemView_botaoConfirmar_onConfirmar: function(button, e) {
        var router = this.getRouter();
        var destinoView = this.getmovimentacaoPlanejadaDestinoView();

        router.changeView(destinoView);
    },

    movimentacaoPlanejadaDestinoView_botaoConfirmar_onConfirmar: function(button, e) {
        var self = this;
        var x = Ext.Msg.confirm('Confirmação', 'Deseja realmente efetuar a movimentação?', function(button){
            if(button == 'yes')
                Ext.Msg.alert('Confirmação de movimentação','Movimentação efetuada com sucesso!');
        });
    },
    //VIEW

    //VIEW: movimentacaoPlanejadaProdutoView_onConfirmarView
    movimentacaoPlanejadaProdutoView_botaoConfirmar_onConfirmar: function() {
        var router = this.getRouter();
        var origemView = this.getmovimentacaoPlanejadaOrigemView();

        router.changeView(origemView);
    },

    enderecamentoListarItemDocumentoView_onItemsingletapItemDocumento: function() {

        var router = this.getRouter();
        var lancarView = this.getEnderecamentoLancarView();

        router.changeView(lancarView)
    }
});