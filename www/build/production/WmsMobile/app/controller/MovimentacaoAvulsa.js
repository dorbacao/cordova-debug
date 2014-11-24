Ext.define('WmsMobile.controller.MovimentacaoAvulsa', {
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
            movimentacaoAvulsaProdutoView: {
                selector: 'movimentacaoAvulsaProdutoView',
                xtype: 'Ext.List'
            },
            movimentacaoAvulsaOrigemView: {
                selector: 'movimentacaoAvulsaOrigemView',
                xtype: 'Ext.List'
            },
            movimentacaoAvulsaDestinoView: {
                selector: 'movimentacaoAvulsaDestinoView',
                xtype: 'Ext.List'
            },
        },

        control: {
            "movimentacaoAvulsaProdutoView #botaoConfirmar": {
                tap: 'movimentacaoAvulsaProdutoView_botaoConfirmar_onConfirmar'
            },
            "movimentacaoAvulsaProdutoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "movimentacaoAvulsaOrigemView #botaoConfirmar": {
                tap: 'movimentacaoAvulsaOrigemView_botaoConfirmar_onConfirmar'
            },
            "movimentacaoAvulsaOrigemView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "movimentacaoAvulsaDestinoView #botaoConfirmar": {
                tap: 'movimentacaoAvulsaDestinoView_botaoConfirmar_onConfirmar'
            },
            "movimentacaoAvulsaDestinoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            }
        }
    },

   //VIEW: movimentacaoAvulsaOrigemView
    movimentacaoAvulsaOrigemView_botaoConfirmar_onConfirmar: function(button, e) {
        var router = this.getRouter();
        var destinoView = this.getMovimentacaoAvulsaDestinoView();

        router.changeView(destinoView);
    },

    movimentacaoAvulsaDestinoView_botaoConfirmar_onConfirmar: function(button, e) {
        var self = this;
        var x = Ext.Msg.confirm('Confirmação', 'Deseja realmente efetuar a movimentação?', function(button){
            if(button == 'yes')
                Ext.Msg.alert('Confirmação de movimentação','Movimentação efetuada com sucesso!');
        });
    },
    //VIEW

    //VIEW: movimentacaoAvulsaProdutoView_onConfirmarView
    movimentacaoAvulsaProdutoView_botaoConfirmar_onConfirmar: function() {
        var router = this.getRouter();
        var origemView = this.getMovimentacaoAvulsaOrigemView();

        router.changeView(origemView);
    },

    enderecamentoListarItemDocumentoView_onItemsingletapItemDocumento: function() {

        var router = this.getRouter();
        var lancarView = this.getEnderecamentoLancarView();

        router.changeView(lancarView)
    }
});