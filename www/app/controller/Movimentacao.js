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
            movimentacaoListarDestinoView: {
                selector: 'movimentacaoListarDestinoView',
                xtype: 'Ext.List'
            },
        },

        control: {
            "movimentacaoListarProdutosView": {
                load: 'movimentacaoListarProdutosView_onLoad'
            },
            "movimentacaoListarProdutosView #produtoMovimentacaoTextField": {
                change: 'movimentacaoListarProdutosView_produtoMovimentacaoTextField_onChange'
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
        var produto = cm.getCtrl('produtoMovimentacaoTextField');
        var listProdutoListar = cm.getCtrl('listProdutoListar');
        var Searchfield = cm.getCtrl('documentoSearchfield');
        var textProduto = cm.getCtrl('textProduto');
        var baseTitlebar = cm.getCtrl('baseTitlebar');

        console.log(view.params);

        if(view.params != undefined)
        {
            var store;
            switch(view.params.tipo)
            {
                case ItemMenuEnum.MovimentacaoAvulsa:
                    store = Ext.getStore('produtoStore');
                    listProdutoListar.hide();
                    baseTitlebar.hide();
                    textProduto.show();
                    produto.setValue('');
                    this.setFocus(produto);
                    break;

                case ItemMenuEnum.MovimentacaoPlanejada:
                    store = Ext.getStore('movimentacaoStore');
                    listProdutoListar.show();
                    baseTitlebar.show();
                    textProduto.hide();
                    break;
            }
            store.clearFilter();
            store.load();
        }

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
            store.filter('CodigoVolume', newValue);
            store.load(function(records, operation, success){
                if(records.length == 1)
                    self.toViewListarDestino(records[0].data);

            }, this);
        };

        this.setSelect(sender.element.dom);
    },

    movimentacaoListarProdutosView_produtoMovimentacaoTextField_onChange:function(sender, newValue, oldValue, eOpts){
        console.log('movimentacaoListarProdutosView_produtoMovimentacaoTextField_onChange');
        var self = this;
        var cm = this.getComponentManager("movimentacaoListarProdutosView");
        var textProduto = cm.getCtrl('textProduto');

        if (newValue != '') {

            var store = Ext.getStore("produtoStore");
            store.filter('CodigoVolume', newValue);

            store.load(function(records, operation, success){
                if(records.length == 1)
                    this.toViewListarDestino(records[0].data);
                else if (records.length == 0)
                    textProduto.setInstructions("Nenhum produto encontrado para o código informado.");

            }, this);
        };

        var produtoMovimentacaoTextField = cm.getCtrl("produtoMovimentacaoTextField")
        this.setFocusAndSelect(produtoMovimentacaoTextField);
    },

    movimentacaoListarProdutosView_onItemsingletaplistaProdutos: function(sender, index, target, record, e, eOpts) {
        this.toViewListarDestino(record.data);
    },

    //VIEW: movimentacaoListarDestinoView
    movimentacaoListarDestinoView_onLoad:function(view) {
        var cm = this.getComponentManager('movimentacaoListarDestinoView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var movimentacaoModel = Ext.create('WmsMobile.model.Movimentacao');

        if(view.params.tipo == ItemMenuEnum.MovimentacaoAvulsa) {
            var CodigoEnderecoOrigem = cm.getCtrl('CodigoEnderecoOrigem');
            var CodigoEnderecoDestino = cm.getCtrl('CodigoEnderecoDestino');
            var Quantidade = cm.getCtrl('quantidadeTextField');

            CodigoEnderecoOrigem.setDisabled(false);
            CodigoEnderecoDestino.setDisabled(false);
            Quantidade.setDisabled(false);
            this.setFocus(Quantidade);

            movimentacaoModel.set('CodigoProduto', view.params.Movimentacao.Codigo);
            movimentacaoModel.set('IdVolume', view.params.Movimentacao.Id);
        } else {
            movimentacaoModel.set('Id', view.params.Movimentacao.Id);
            movimentacaoModel.set('IdVolume', view.params.Movimentacao.IdProduto);
            movimentacaoModel.set('Quantidade', view.params.Movimentacao.Quantidade);
            movimentacaoModel.set('CodigoEnderecoOrigem', view.params.Movimentacao.CodigoEnderecoOrigem);
            movimentacaoModel.set('CodigoEnderecoDestino', view.params.Movimentacao.CodigoEnderecoDestino);
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
        var store = Ext.getStore('movimentacaoStore');
        var botaoConfirmar = cm.getCtrl('botaoConfirmar');
        botaoConfirmar.setDisabled(true);

        var habilitar = function(){botaoConfirmar.setDisabled(false);};

        var success = function(records, operation){
            var message = Mensagem.getSucesso("Movimentação efetuada com sucesso!");
            self.getRouter().backTo(1, message);
            habilitar();
        };

        var failure = function(records, operation, response){
            Ext.Msg.alert("Erro", response.responseText);
            habilitar();
        };

        switch(view.params.tipo)
        {
            case ItemMenuEnum.MovimentacaoAvulsa:

                var movimentacaoModel = view.getModel();
                if(movimentacaoModel.isValid()) {
                    movimentacaoModel.salvar(success, failure);
                }
                else
                    self.showErrosFromModel(movimentacaoModel, cm);
                break;

            case ItemMenuEnum.MovimentacaoPlanejada:

                var movimentacao = store.getById(view.params.Movimentacao.Id);
                movimentacao.salvar(success, failure);
                break;
        }
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