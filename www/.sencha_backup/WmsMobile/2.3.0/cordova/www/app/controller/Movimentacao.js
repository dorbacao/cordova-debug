Ext.define('WmsMobile.controller.Movimentacao', {
    extend: 'WmsMobile.controller.ControllerBase',

    requires:[
    	'WmsMobile.model.Select',
        'Ext.util.Filter'
    ],

    config: {
        refs: {
            mainPanel: {
                selector: 'mainpanel',
                xtype: 'Ext.Panel'
            },
            movimentacaoListarProdutosView: {
                selector: 'movimentacaoListarProdutosView',
                xtype: 'Ext.Container'
            },
            movimentacaoListarOrigemView: {
                selector: 'movimentacaoListarOrigemView',
                xtype: 'Ext.Panel'
            },
            movimentacaoListarDestinoView: {
                selector: 'movimentacaoListarDestinoView',
                xtype: 'Ext.List'
            },
            // movimentacaoListarProdutosView: {
            //     selector: 'movimentacaoListarProdutosView',
            //     xtype: 'Ext.List'
            // },
            // movimentacaoPlanejadaOrigemView: {
            //     selector: 'movimentacaoPlanejadaOrigemView',
            //     xtype: 'Ext.List'
            // },
            // movimentacaoPlanejadaDestinoView: {
            //     selector: 'movimentacaoPlanejadaDestinoView',
            //     xtype: 'Ext.List'
            // },
        },

        control: {
            "movimentacaoListarProdutosView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "movimentacaoListarProdutosView #botaoConfirmar": {
                tap: 'movimentacaoListarProdutosView_botaoConfirmar_onConfirmar'
            },
            "movimentacaoListarProdutosView #listaProdutos": {
                itemsingletap: 'movimentacaoListarProdutosView_botaoConfirmar_onConfirmar'
            },
            "movimentacaoListarOrigemView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "movimentacaoListarOrigemView #botaoConfirmar": {
                tap: 'movimentacaoListarOrigemView_botaoConfirmar_onConfirmar'
            },
            "movimentacaoListarDestinoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "movimentacaoListarDestinoView #botaoConfirmar": {
                tap: 'movimentacaoListarDestinoView_botaoConfirmar_onConfirmar'
            },
            // "movimentacaoListarProdutosPlanejadosView #voltarbtn": {
            //     tap: 'controllerBase_onVoltarView'
            // },
            // "movimentacaoListarProdutosPlanejadosView #botaoConfirmar": {
            //     tap: 'movimentacaoListarProdutosPlanejadosView_botaoConfirmar_onConfirmar'
            // },
            // "movimentacaoPlanejadaProdutoView #voltarbtn": {
            //     tap: 'controllerBase_onVoltarView'
            // },
            // "movimentacaoPlanejadaOrigemView #botaoConfirmar": {
            //     tap: 'movimentacaoPlanejadaOrigemView_botaoConfirmar_onConfirmar'
            // },
            // "movimentacaoPlanejadaOrigemView #voltarbtn": {
            //     tap: 'controllerBase_onVoltarView'
            // },
            // "movimentacaoPlanejadaDestinoView #botaoConfirmar": {
            //     tap: 'movimentacaoPlanejadaDestinoView_botaoConfirmar_onConfirmar'
            // },
            // "movimentacaoPlanejadaDestinoView #voltarbtn": {
            //     tap: 'controllerBase_onVoltarView'
            // }
        }
    },

   //VIEW: movimentacaoListarProdutoAvulsosView
    movimentacaoListarProdutosView_botaoConfirmar_onConfirmar: function(button, e) {
        var router = this.getRouter();
        var destinoView = this.getMovimentacaoListarOrigemView();
        router.changeView(destinoView);
    },

    movimentacaoListarOrigemView_botaoConfirmar_onConfirmar: function(button, e) {
        var router = this.getRouter();
        var destinoView = this.getMovimentacaoListarDestinoView();

        router.changeView(destinoView);
    },

    movimentacaoListarDestinoView_botaoConfirmar_onConfirmar: function(button, e) {
        var self = this;
        Ext.Msg.confirm('Confirmação', 'Deseja realmente efetuar a movimentação?', 
          function(btn){
            if(btn == 'yes')
                Ext.Msg.alert('Confirmação de movimentação','Movimentação efetuada com sucesso!');
                self.getRouter().back();
          });
    },

   //  //VIEW

   //  //VIEW: movimentacaoAvulsaProdutoView_onConfirmarView
   //  movimentacaoAvulsaProdutoView_botaoConfirmar_onConfirmar: function() {
   //      var router = this.getRouter();
   //      var origemView = this.getMovimentacaoAvulsaOrigemView();

   //      router.changeView(origemView);
   //  },

   //  enderecamentoListarItemDocumentoView_onItemsingletapItemDocumento: function() {

   //      var router = this.getRouter();
   //      var lancarView = this.getEnderecamentoLancarView();

   //      router.changeView(lancarView)
   //  },
   //     //VIEW: movimentacaoPlanejadaOrigemView
   //  movimentacaoPlanejadaOrigemView_botaoConfirmar_onConfirmar: function(button, e) {
   //      var router = this.getRouter();
   //      var destinoView = this.getmovimentacaoPlanejadaDestinoView();

   //      router.changeView(destinoView);
   //  },

   //  movimentacaoPlanejadaDestinoView_botaoConfirmar_onConfirmar: function(button, e) {
   //      var self = this;
   //      var x = Ext.Msg.confirm('Confirmação', 'Deseja realmente efetuar a movimentação?', function(button){
   //          if(button == 'yes')
   //              Ext.Msg.alert('Confirmação de movimentação','Movimentação efetuada com sucesso!');
   //      });
   //  },
   //  //VIEW

   //  //VIEW: movimentacaoPlanejadaProdutoView_onConfirmarView
   //  movimentacaoPlanejadaProdutoView_botaoConfirmar_onConfirmar: function() {
   //      var router = this.getRouter();
   //      var origemView = this.getmovimentacaoPlanejadaOrigemView();

   //      router.changeView(origemView);
   //  },

   //  enderecamentoListarItemDocumentoView_onItemsingletapItemDocumento: function() {

   //      var router = this.getRouter();
   //      var lancarView = this.getEnderecamentoLancarView();

   //      router.changeView(lancarView)
   //  }
});