Ext.define('WmsMobile.controller.Abastecimento', {
    extend: 'WmsMobile.controller.ControllerBase',

    requires:[
    	'WmsMobile.model.Documento',
        'WmsMobile.model.AbastecimentoFinalizado',
        'WmsMobile.model.PosicaoEstoque',
    ],

    config: {
        refs: {
            mainPanel: {
                selector: 'mainpanel',
                xtype: 'Ext.Panel'
            },
            abastecimentoListarProdutosView: {
                selector: 'abastecimentoListarProdutosView',
                xtype: 'Ext.List'
            },

            abastecimentoListarPosicaoEstoqueView: {
                selector: 'abastecimentoListarPosicaoEstoqueView',
                xtype: 'Ext.List'
            },
            abastecimentoListarEnderecosOrigemView: {
                selector: 'abastecimentoListarEnderecosOrigemView',
                xtype: 'Ext.List'
            },
            abastecimentoLancarView: {
                selector: 'abastecimentoLancarView',
                xtype: 'Ext.List'
            },
        },

        control: {
            "abastecimentoListarProdutosView": {
                load:'abastecimentoListarProdutosView_onLoad',
                itemsingletap:'abastecimentoListarProdutosView_onItemsingletap'
            },
            "abastecimentoListarPosicaoEstoqueView": {
                load:'abastecimentoListarPosicaoEstoqueView_onLoad',
                itemsingletap:'abastecimentoListarPosicaoEstoqueView_onItemsingletap'
            },
            "abastecimentoListarProdutosView #documentoSearchfield": {
                change: 'abastecimentoListarProdutosView_documentoSearchfield_onChange'
            },
            "abastecimentoListarEnderecosOrigemView #finalizarButton": {
                tap: 'abastecimentoListarEnderecosOrigemView_finalizarButton_onTap'
            },
            "abastecimentoListarProdutosView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "abastecimentoListarPosicaoEstoqueView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "abastecimentoListarEnderecosOrigemView": {
                load:'abastecimentoListarEnderecosOrigemView_onLoad',
                itemsingletap:'abastecimentoListarEnderecosOrigemView_onItemsingletap'
            },
            "abastecimentoListarEnderecosOrigemView #documentoSearchfield": {
                change: 'abastecimentoListarEnderecosOrigemView_documentoSearchfield_onChange',
            },
            "abastecimentoListarEnderecosOrigemView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "abastecimentoLancarView": {
                load: 'abastecimentoLancarView_onLoad'
            },
            "abastecimentoLancarView #botaoConfirmar": {
                tap: 'abastecimentoLancarView_botaoConfirmar_onConfirmar'
            },
            "abastecimentoLancarView #botaoCancelar": {
                tap: 'abastecimentoLancarView_botaoCancelar_onCancelarExpedicaoLancarView'
            },
            "abastecimentoLancarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView2'
            },
        }
    },

    //VIEW: abastecimentoListarProdutosView
    abastecimentoListarProdutosView_onLoad:function(view) {
        var wmstoolbar = Ext.ComponentQuery.query('abastecimentoListarProdutosView #wmstoolbar');
        wmstoolbar[0].setTitle('Produtos');

        var cm = this.getComponentManager('abastecimentoListarProdutosView');

        this.setFocusSearchfield('abastecimentoListarProdutosView');

        var store = Ext.getStore("abastecimentoStore");
        store.clearFilter();
        store.filter('Finalizado', false);
        store.load();

        if(view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);
    },

    abastecimentoListarProdutosView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var store = Ext.getStore("abastecimentoStore");
        var cm = this.getComponentManager('abastecimentoListarProdutosView');
        var documentoSearchfield = cm.getCtrl('documentoSearchfield');

        store.filter('CodigoVolume', newValue);
        store.load(function(records, operation, success){
            if(records.length == 1){
                this.toViewListarEnderecoOrigem(records[0].data);
                documentoSearchfield.setValue('');
            }

        }, this);

        this.setFocusSearchfield('abastecimentoListarProdutosView');
    },

    abastecimentoListarProdutosView_onItemsingletap: function(sender, index, target, record, e, eOpts) {
        this.toViewListarEnderecoOrigem(record.data);
    },

    //VIEW: abastecimentoListarEnderecosOrigemView
    abastecimentoListarEnderecosOrigemView_onLoad:function(view) {
        var wmstoolbar = Ext.ComponentQuery.query('abastecimentoListarEnderecosOrigemView #wmstoolbar');
        var store = Ext.getStore("enderecoStore");
        var cm = this.getComponentManager('abastecimentoListarEnderecosOrigemView');

        wmstoolbar[0].setTitle('Origem');

        store.clearFilter();
        store.filter('IdAbastecimento', view.params.Abastecimento.Id);
        store.load();

        console.log('Params: ', view.params);
        console.log('IdVolume: ', view.params.Abastecimento.IdVolume);

        this.setFocusSearchfield('abastecimentoListarEnderecosOrigemView');

        if(view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);

        cm.getCtrl('finalizarButton').show();
        cm.getCtrl('bottomContainer').show();
    },

    abastecimentoListarEnderecosOrigemView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var store = Ext.getStore("enderecoStore");
        var view = this.getAbastecimentoListarEnderecosOrigemView();
        var cm = this.getComponentManager('abastecimentoListarEnderecosOrigemView');
        var documentoSearchfield = cm.getCtrl('documentoSearchfield');

        store.filter('IdAbastecimento', view.params.Abastecimento.Id);
        store.filter('Codigo', newValue);

        store.load(function(records, operation, success){
            if(records.length == 1){
                // this.toViewLancar(records[0].data.Id, records[0].data.CodigoVolume);
                this.toViewListarPosicaoEstoque(records[0].data.Id, records[0].data.Codigo, view.params.Abastecimento);
                documentoSearchfield.setValue('');
            }

        }, this);

        this.setFocusSearchfield('abastecimentoListarEnderecosOrigemView');
    },

    abastecimentoListarEnderecosOrigemView_onItemsingletap: function(sender, index, target, record, e, eOpts) {
        var view = this.getAbastecimentoListarEnderecosOrigemView();

        console.log("abastecimentoListarEnderecosOrigemView_onItemsingletap");
        console.log(view.params);

        this.toViewListarPosicaoEstoque(record.data.Id, record.data.Codigo, view.params.Abastecimento);
    },

    abastecimentoListarEnderecosOrigemView_finalizarButton_onTap:function(button, e){
        var self = this;
        var view = this.getAbastecimentoListarEnderecosOrigemView();
        var cm = this.getComponentManager('abastecimentoListarEnderecosOrigemView');
        var abastecimentoFinalizado = Ext.create('WmsMobile.model.AbastecimentoFinalizado');
        console.log(view.params);

        abastecimentoFinalizado.set('Id', view.params.Abastecimento.Id);

        if(abastecimentoFinalizado.isValid()){

            var sucesso = function(records, operation){
                var message = Mensagem.getSucesso("Abastecimento efetuado com sucesso!");
                self.getRouter().back(message);
            };

            var failure = function(records, operation, response){
                Ext.Msg.alert("Não encontrado",response.responseText);
            };

            abastecimentoFinalizado.salvar(sucesso, failure);
        }
        else
            self.showErrosFromModel(abastecimentoFinalizado,cm);
    },

    //VIEW: abastecimentoListarPosicaoEstoqueView
    abastecimentoListarPosicaoEstoqueView_onLoad:function(view) {
        var wmstoolbar = Ext.ComponentQuery.query('abastecimentoListarPosicaoEstoqueView #wmstoolbar');
        wmstoolbar[0].setTitle('Estoque');

        var baseTitlebar = Ext.ComponentQuery.query('abastecimentoListarPosicaoEstoqueView #baseTitlebar');
        baseTitlebar[0].setHidden(true);

        var store = Ext.getStore("posicaoEstoqueStore");
        store.clearFilter();

        store.filter('IdVolume',view.params.idVolume);
        store.filter('IdAbastecimento',view.params.idAbastecimento);
        store.filter('IdEnderecoOrigem',view.params.idOrigem);

        store.load();
    },

    abastecimentoListarPosicaoEstoqueView_onItemsingletap: function(sender, index, target, record, e, eOpts) {
        var view = this.getAbastecimentoListarPosicaoEstoqueView();

        console.log(view.params);
        console.log('registro: ');
        console.log(record.data);
        this.toViewLancar(record.data, view.params);
    },

    //VIEW: abastecimentoLancarView
    abastecimentoLancarView_onLoad:function(view) {
        var origem = this.getAbastecimentoListarEnderecosOrigemView();
        var cm = this.getComponentManager("abastecimentoLancarView");
        var quantidadeTextField = cm.getCtrl('quantidadeTextField');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var NomeProduto = cm.getCtrl('NomeProduto');
        var CodigoOrigem = cm.getCtrl('CodigoOrigem');
        var CodigoEnderecoPicking = cm.getCtrl('CodigoEnderecoPicking');
        var lancamentoModel = Ext.create('WmsMobile.model.LancamentoAbastecimento');
        var self = this;

        console.log('abastecimentoLancarView_onLoad');
        console.log(view.params);

        wmstoolbar.setTitle('Lançamento');
        lancamentoModel.set('IdAbastecimento', view.params.Endereco.idAbastecimento);
        lancamentoModel.set('CodigoVolume', view.params.PosicaoEstoque.CodigoVolume);
        lancamentoModel.set('CodigoOrigem', view.params.Endereco.CodigoOrigem);
        lancamentoModel.set('DataVencimento', view.params.PosicaoEstoque.DataVencimento);
        lancamentoModel.set('Lote', view.params.PosicaoEstoque.Lote);
        lancamentoModel.set('NumeroSerie', view.params.PosicaoEstoque.NumeroSerie);
        lancamentoModel.set('Quantidade', self.getQtdRestante(view));

        NomeProduto.setValue(view.params.PosicaoEstoque.DescricaoProduto);
        CodigoOrigem.setValue(view.params.Endereco.CodigoOrigem);
        CodigoEnderecoPicking.setValue(origem.params.Abastecimento.CodigoPiking);

        view.setRecord(lancamentoModel);
        this.setFocus(quantidadeTextField);
    },

    abastecimentoLancarView_botaoConfirmar_onConfirmar: function(button, e) {
        var self = this;
        var cm = this.getComponentManager('abastecimentoLancarView');
        var view = this.getAbastecimentoLancarView();
        var lancamentoModel = view.getModel();
        var botaoConfirmar = cm.getCtrl('botaoConfirmar');
        botaoConfirmar.setDisabled(true);

        var habilitar = function(){botaoConfirmar.setDisabled(false);};

        var success = function(records, operation){
            var message = Mensagem.getSucesso("Lançamento efetuado com sucesso!");
            self.getRouter().backTo(2, message);
            habilitar();
        };

        var failure = function(records, operation, response){
            Ext.Msg.alert("Erro", response.responseText);
            habilitar();
        };

        if(lancamentoModel.isValid())
            lancamentoModel.salvar(success, failure);
    },

    abastecimentoLancarView_botaoCancelar_onCancelarExpedicaoLancarView: function(button, e) {
        var self = this;
        var x = Ext.Msg.confirm('Confirmação', 'Deseja realmente cancelar o lançamento', function(button){
            if(button == 'yes')
                self.getRouter().backTo(2);
        });
    },

    //FUNÇÕES:
    toViewListarEnderecoOrigem:function(abastecimento){
        var router = this.getRouter();
        var listarEnderecosOrigemView = this.getAbastecimentoListarEnderecosOrigemView();

        console.log("toViewListarEnderecoOrigem");
        console.log(abastecimento);

        router.params = {Abastecimento: abastecimento};
        router.changeView(listarEnderecosOrigemView);
    },

    toViewLancar:function(posicaoEstoque, endereco){
        var router = this.getRouter();
        var lancarView = this.getAbastecimentoLancarView();

        router.params = { PosicaoEstoque: posicaoEstoque, Endereco:endereco };
        console.log(router.params);
        router.changeView(lancarView);
    },

    toViewListarPosicaoEstoque:function(idOrigem, codigoOrigem, abastecimento){
        var router = this.getRouter();
        var listarView = this.getAbastecimentoListarPosicaoEstoqueView();
        console.log('abastecimento:');
        console.log(abastecimento);
        router.params = {
                            Abastecimento: abastecimento,
                            idOrigem: idOrigem,
                            CodigoOrigem: codigoOrigem,
                            idVolume: abastecimento.IdVolume,
                            idAbastecimento: abastecimento.Id,
                            CodigoPiking: abastecimento.CodigoPiking
                        };

        router.changeView(listarView);
    },

    getQtdRestante:function(view) {
        var qtdLancada = view.params.Endereco.Abastecimento.QuantidadeLancada;
        var qtdPrevista = view.params.Endereco.Abastecimento.QuantidadePrevista;
        var qtdDisponivelNoEstoqueSelecionado = view.params.PosicaoEstoque.Quantidade;

        if(qtdLancada == undefined || qtdLancada == null || qtdLancada == "")
            qtdLancada = 0;

        var qtdALancar = qtdPrevista - qtdLancada;

        if(qtdALancar > qtdDisponivelNoEstoqueSelecionado)
            return qtdDisponivelNoEstoqueSelecionado;

        return qtdALancar;
    },

});