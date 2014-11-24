Ext.define('WmsMobile.controller.Movimentacao', {
    extend: 'WmsMobile.controller.ControllerBase',

    requires:[
    	'WmsMobile.model.Select',
        'Enums.StatusDocumento',
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
            // movimentacaoListarOrigemView: {
            //     selector: 'movimentacaoListarOrigemView',
            //     xtype: 'Ext.Panel'
            // },
            movimentacaoListarDestinoView: {
                selector: 'movimentacaoListarDestinoView',
                xtype: 'Ext.List'
            },
        },

        control: {
            "movimentacaoListarProdutosView": {
                load: 'movimentacaoListarProdutosView_onLoad'
            },
            "movimentacaoListarProdutosView #produtoTextField": {
                change: 'movimentacaoListarProdutosView_produtoTextField_onChange'
            },
            "movimentacaoListarProdutosView #documentoSearchfield": {
                change: 'movimentacaoListarProdutosView_documentoSearchfield_onChange',
            },
            "movimentacaoListarProdutosView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "movimentacaoListarProdutosView #botaoConfirmar": {
                tap: 'movimentacaoListarProdutosView_botaoConfirmar_onConfirmar'
            },
            "movimentacaoListarProdutosView #listProdutoListar": {
                itemsingletap: 'movimentacaoListarProdutosView_onItemsingletaplistaProdutos'
            },
            // "movimentacaoListarOrigemView": {
            //     load: 'movimentacaoListarOrigemView_onLoad'
            // },
            // "movimentacaoListarOrigemView #voltarbtn": {
            //     tap: 'controllerBase_onVoltarView'
            // },
            // "movimentacaoListarOrigemView #botaoConfirmar": {
            //     tap: 'movimentacaoListarOrigemView_botaoConfirmar_onConfirmar'
            // },
            // "movimentacaoListarOrigemView #botaoCancelar": {
            //     tap: 'movimentacaoListarOrigemView_botaoCancelar_onCancelar'
            // },
            "movimentacaoListarDestinoView": {
                load: 'movimentacaoListarDestinoView_onLoad'
            },
            "movimentacaoListarDestinoView #botaoConfirmar": {
                tap: 'movimentacaoListarDestinoView_botaoConfirmar_onConfirmar'
            },
            "movimentacaoListarDestinoView #botaoCancelar": {
                tap: 'movimentacaoListarDestinoView_botaoCancelar_onCancelar'
            },
            "movimentacaoListarDestinoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
        }
    },

    //VIEW: movimentacaoListarProdutosView
    movimentacaoListarProdutosView_onLoad:function(view) {
        var cm = this.getComponentManager('movimentacaoListarProdutosView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var produto = cm.getCtrl('produtoTextField');
        var listProdutoListar = cm.getCtrl('listProdutoListar');
        var Searchfield = cm.getCtrl('documentoSearchfield');
        var textProduto = cm.getCtrl('textProduto');
        var baseTitlebar = cm.getCtrl('baseTitlebar');
        // var segBtn = cm.getCtrl('segBtn');

        if(view.params != undefined)
        {
            var store;

            switch(view.params.tipo)
            {
                case ItemMenuEnum.MovimentacaoAvulsa:
                    store = Ext.getStore('produtoStore');
                    listProdutoListar.hide();
                    baseTitlebar.hide();
                    // segBtn.hide();
                    textProduto.show();
                    produto.setValue('');
                    this.setFocus(produto);
                    break;

                case ItemMenuEnum.MovimentacaoPlanejada:
                    store = Ext.getStore('movimentacaoStore');
                    listProdutoListar.show();
                    baseTitlebar.show();
                    // segBtn.show();
                    textProduto.hide();
                    break;
            }

            store.clearFilter();
            store.load();
        }

        // console.log(store);

        wmstoolbar.setTitle('Produto');
        produto.setValue('');
        this.setFocusSearchfield('movimentacaoListarProdutosView');

        if(view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);
    },

    movimentacaoListarProdutosView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var self = this;

        if (newValue != '') {
            var store = Ext.getStore("produtoStore");
            store.filter('Codigo', newValue);
            store.load(function(records, operation, success){
                if(records.length == 1)
                    self.toViewListarDestino(records[0].data);

            }, this);
        };

        this.setSelect(sender.element.dom);
    },

    movimentacaoListarProdutosView_produtoTextField_onChange:function(sender, newValue, oldValue, eOpts){
        var self = this;
        var cm = this.getComponentManager("movimentacaoListarProdutosView");
        var textProduto = cm.getCtrl('textProduto');

        // var focarControle = function(){
        //     var produtoTextField = cm.getCtrl("produtoTextField")
        //     self.setFocusAndSelect(produtoTextField);
        // };

        if (newValue != '') {

            var store = Ext.getStore("produtoStore");
            store.filter('Codigo', newValue);

            store.load(function(records, operation, success){
                if(records.length == 1)
                    this.toViewListarDestino(records[0].data);
                else if (records.length == 0)
                    textProduto.setInstructions("Nenhum produto encontrado para o código informado.");

            }, this);
        };

        var produtoTextField = cm.getCtrl("produtoTextField")
        this.setFocusAndSelect(produtoTextField);
    },

    movimentacaoListarProdutosView_onItemsingletaplistaProdutos: function(sender, index, target, record, e, eOpts) {
        this.toViewListarDestino(record.data);
    },

    // //VIEW: movimentacaoListarOrigemView
    // movimentacaoListarOrigemView_onLoad:function(view) {
    //     var cm = this.getComponentManager('movimentacaoListarOrigemView');
    //     var wmstoolbar = cm.getCtrl('wmstoolbar');
    //     var descricao = cm.getCtrl('descricaoTextField');

    //     wmstoolbar.setTitle('Origem');
    //     descricao.setValue(view.params.Produto.Descricao);

    //     var origem = cm.getCtrl("origemSelectField");
    //     this.setFocus(origem);
    // },

    // movimentacaoListarOrigemView_botaoConfirmar_onConfirmar: function(button, e) {
    //     var cm = this.getComponentManager('movimentacaoListarOrigemView');
    //     var origem = cm.getCtrl('origemSelectField');
    //     var origemView = this.getMovimentacaoListarOrigemView();

    //     this.toViewListarDestino(origemView.params.Produto, origem.getValue());
    // },

    // movimentacaoListarOrigemView_botaoCancelar_onCancelar: function(button, e) {
    //     var self = this;
    //     var msg = Mensagem.getAlerta("O Lançamento foi cancelado")
    //     self.getRouter().back(msg);
    // },

    //VIEW: movimentacaoListarDestinoView
    movimentacaoListarDestinoView_onLoad:function(view) {
        var cm = this.getComponentManager('movimentacaoListarDestinoView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var movimentacaoModel = Ext.create('WmsMobile.model.Movimentacao');

        if(view.params.tipo == '2.0') {
            var CodigoEnderecoOrigem = cm.getCtrl('CodigoEnderecoOrigem');
            var CodigoEnderecoDestino = cm.getCtrl('CodigoEnderecoDestino');
            var Quantidade = cm.getCtrl('quantidadeTextField');

            CodigoEnderecoOrigem.setDisabled(false);
            CodigoEnderecoDestino.setDisabled(false);
            Quantidade.setDisabled(false);
            this.setFocus(Quantidade);

            movimentacaoModel.set('CodigoProduto', view.params.Movimentacao.Codigo);
            movimentacaoModel.set('IdProduto', view.params.Movimentacao.Id);
        } else {
            movimentacaoModel.set('IdProduto', view.params.Movimentacao.IdProduto);
            movimentacaoModel.set('Quantidade', view.params.Movimentacao.Quantidade);
            movimentacaoModel.set('CodigoEnderecoOrigem', view.params.Movimentacao.CodigoEnderecoOrigem);
            movimentacaoModel.set('CodigoEnderecoDestino', view.params.Movimentacao.CodigoEnderecoDestino);
            movimentacaoModel.set('Id', view.params.Movimentacao.Id);
            movimentacaoModel.set('CodigoProduto', view.params.Movimentacao.CodigoProduto);
        }

        wmstoolbar.setTitle('Destino');
        movimentacaoModel.set('Descricao', view.params.Movimentacao.Descricao);
        movimentacaoModel.set('DataHora', new Date());

        view.setRecord(movimentacaoModel);
    },

    movimentacaoListarDestinoView_botaoConfirmar_onConfirmar: function(button, e) {
        var self = this;
        var cm = this.getComponentManager('movimentacaoListarDestinoView');
        var view = this.getMovimentacaoListarDestinoView();
        var movimentacaoModel = view.getModel();

        var success = function(records, operation){
            var message = Mensagem.getSucesso("Movimentação efetuada com sucesso!");
            self.getRouter().backTo(1, message);
        };

        var failure = function(records, operation, response){
            Ext.Msg.alert("Erro", response.responseText);
        };

        if(movimentacaoModel.isValid()) {
            movimentacaoModel.salvar(success, failure);
        }
        else
            self.showErrosFromModel(movimentacaoModel, cm);
    },

    movimentacaoListarDestinoView_botaoCancelar_onCancelar: function(button, e) {
        var self = this;
        var msg = Mensagem.getAlerta("O Lançamento foi cancelado")
        self.getRouter().back(msg);
    },

    // FUNÇÕES
    toViewListarOrigem:function(movimentacao){
        var router = this.getRouter();
        var listarView = this.getMovimentacaoListarOrigemView();
        router.params = {Movimentacao: movimentacao};
        router.changeView(listarView);
    },

    toViewListarDestino:function(movimentacao){
        var router = this.getRouter();
        var listarView = this.getMovimentacaoListarProdutosView();
        var lancarView = this.getMovimentacaoListarDestinoView();
        router.params = {Movimentacao: movimentacao, tipo: listarView.params.tipo};
        router.changeView(lancarView);
    },
});