Ext.define('WmsMobile.controller.Inventario', {
    extend: 'WmsMobile.controller.ControllerBase',

    requires:[
    	'WmsMobile.model.Documento',
        'WmsMobile.model.LancamentoInventarioPorProduto',
        'WmsMobile.model.LancamentoInventarioPorEndereco',
        'WmsMobile.model.InventarioPorProduto',
        'WmsMobile.model.InventarioPorEndereco',
        'Enums.TipoDeLancamento'
    ],

    stores:[
        'Produto',
        'Endereco',
        'Inventario',
        'InventarioPorProduto',
        'InventarioPorEndereco',
    ],

    config: {
        refs: {
            mainPanel: {
                selector: 'mainpanel',
                xtype: 'Ext.Panel'
            },
            inventarioListarPlanejadosPorProdutoView: {
                selector: 'inventarioListarPlanejadosPorProdutoView',
                xtype: 'Ext.List'
            },
            inventarioListarPlanejadosPorEnderecoView: {
                selector: 'inventarioListarPlanejadosPorEnderecoView',
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
            inventarioLancarInventarioEnderecoView: {
                selector: 'inventarioLancarInventarioEnderecoView',
                xtype: 'Ext.List'
            },
            inventarioListarLancamentosView: {
                selector: 'inventarioListarLancamentosView',
                xtype: 'Ext.List'
            },
        },

        control: {
            "inventarioListarPlanejadosPorProdutoView": {
                itemsingletap: 'inventarioListarPlanejadosPorProdutoView_onItemsingletapDocumento',
                load: 'inventarioListarPlanejadosPorProdutoView_onload'
            },
            "inventarioListarPlanejadosPorProdutoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "inventarioListarPlanejadosPorProdutoView #documentoSearchfield": {
                change: 'inventarioListarPlanejadosPorProdutoView_documentoSearchfield_onChange'
            },
            "inventarioListarPlanejadosPorEnderecoView": {
                itemsingletap: 'inventarioListarPlanejadosPorEnderecoView_onItemsingletapDocumento',
                load: 'inventarioListarPlanejadosPorEnderecoView_onload'
            },
            "inventarioListarPlanejadosPorEnderecoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "inventarioListarPlanejadosPorEnderecoView #documentoSearchfield": {
                change: 'inventarioListarPlanejadosPorEnderecoView_documentoSearchfield_onChange'
            },
            "inventarioListarProdutosView": {
                load: 'inventarioListarProdutosView_onLoad',
                itemsingletap: 'inventarioListarProdutosView_onItemsingletap',
            },
            "inventarioListarProdutosView #produtoTextField": {
                change: 'inventarioListarProdutosView_onLoad_produtoTextField_onChange'
            },
            "inventarioListarProdutosView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "inventarioListarEnderecosView": {
                load:'inventarioListarEnderecosView_onLoad',
                itemsingletap: 'inventarioListarEnderecosView_onItemsingletap'
            },
            "inventarioListarEnderecosView #enderecoTextField": {
                change: 'inventarioListarEnderecosView_enderecoTextField_onChange'
            },
            "inventarioListarEnderecosView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "inventarioLancarInventarioProdutoView": {
                load: 'inventarioLancarInventarioProdutoView_onLoad'
            },
            "inventarioLancarInventarioProdutoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "inventarioLancarInventarioProdutoView #botaoCancelar": {
                tap: 'inventarioLancarInventarioProdutoView_botaoCancelar_onTap'
            },
            "inventarioLancarInventarioProdutoView #botaoConfirmar": {
                tap: 'inventarioLancarInventarioProdutoView_botaoConfirmar_onTap'
            },
            "inventarioLancarInventarioEnderecoView": {
                load: 'inventarioLancarInventarioEnderecoView_onLoad'
            },
            "inventarioLancarInventarioEnderecoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "inventarioLancarInventarioEnderecoView #botaoConfirmar": {
                tap: 'inventarioLancarInventarioEnderecoView_botaoConfirmar_onTap'
            },
            "inventarioLancarInventarioEnderecoView #botaoCancelar": {
                tap: 'inventarioLancarInventarioEnderecoView_botaoCancelar_onTap'
            },
            "inventarioListarLancamentosView": {
                load: 'inventarioListarLancamentosView_onLoad'
            },
            "inventarioListarLancamentosView #lancarButton": {
                tap: 'inventarioListarLancamentosView_lancarButton_onTap'
            },
            "inventarioListarLancamentosView #finalizarButton": {
                tap: 'inventarioListarLancamentosView_finalizarButton_onTap'
            },
            "inventarioListarLancamentosView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
        }
    },

    // VIEW: inventarioListarPlanejadosPorProdutoView
    inventarioListarPlanejadosPorProdutoView_onload:function(view){
        var cm = this.getComponentManager('inventarioListarPlanejadosPorProdutoView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var store = Ext.getStore('inventarioPorProdutoStore');

        wmstoolbar.setTitle('Produtos');
        store.clearFilter();
        store.load();

        this.setFocusSearchfield('inventarioListarPlanejadosPorProdutoView');

        if(view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);
    },

    inventarioListarPlanejadosPorProdutoView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var cm = this.getComponentManager("inventarioListarPlanejadosPorProdutoView");
        var documentoSearchfield = cm.getCtrl('documentoSearchfield');
        var store = Ext.getStore("inventarioPorProdutoStore");

        store.clearFilter();
        console.log(newValue);
        console.log(store);
        store.filter('CodigoVolume', newValue);
        store.load(function(records, operation, success){
            if(records.length == 1){
                this.toViewLancarInventarioPorProduto(
                    records[0].data.IdVolume,
                    records[0].data.Descricao,
                    0,
                    records[0].data.Id,
                    records[0].data.QuantidadeLancada
                );
                documentoSearchfield.setValue('');
            }
        }, this);

        this.setFocusSearchfield('inventarioListarPlanejadosPorProdutoView');
    },

    inventarioListarPlanejadosPorProdutoView_onItemsingletapDocumento: function(sender, index, target, record, e, eOpts) {
        this.toViewLancarInventarioPorProduto(record.raw.IdVolume, record.raw.Descricao, 0, record.raw.Id, 
            record.raw.QuantidadeLancada);
    },

    // VIEW: inventarioListarPlanejadosPorEnderecoView
    inventarioListarPlanejadosPorEnderecoView_onload:function(view){
        var cm = this.getComponentManager('inventarioListarPlanejadosPorEnderecoView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var store = Ext.getStore('inventarioPorEnderecoStore');

        store.load();
        wmstoolbar.setTitle('Inventários');
        this.setFocusSearchfield('inventarioListarPlanejadosPorEnderecoView');

        if(view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);
    },

    inventarioListarPlanejadosPorEnderecoView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var cm = this.getComponentManager("inventarioListarPlanejadosPorEnderecoView");
        var documentoSearchfield = cm.getCtrl('documentoSearchfield');
        var store = Ext.getStore("inventarioPorEnderecoStore");

        store.clearFilter();
        store.filter('CodigoEndereco', newValue);
        console.log(store);
        store.load(function(records, operation, success){
            if(records.length == 1){
                this.toViewLancarInventarioPorEndereco(
                    records[0].data.IdEndereco,
                    records[0].data.Descricao,
                    0,
                    records[0].data.Id,
                    records[0].data.QuantidadeLancada
                );
                documentoSearchfield.setValue('');
            }
        }, this);

        this.setFocusSearchfield('inventarioListarPlanejadosPorEnderecoView');
    },

    inventarioListarPlanejadosPorEnderecoView_onItemsingletapDocumento: function(sender, index, target, record, e, eOpts) {
        this.toViewLancarInventarioPorEndereco(record.raw.IdEndereco, record.raw.Descricao, 0, 
            record.raw.Id, record.raw.QuantidadeLancada);
    },

    // VIEW: inventarioListarLancamentosView
    inventarioListarLancamentosView_onLoad:function(view){
        var cm = this.getComponentManager('inventarioListarLancamentosView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var store = Ext.getStore("lancamentosInventarioStore");

        wmstoolbar.setTitle('Lançamentos');

        store.clearFilter();
        store.filter('IdInventario', view.params.id);
        store.load();

        if(view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);
    },

    inventarioListarLancamentosView_lancarButton_onTap:function(){
        var view = this.getInventarioListarLancamentosView();

        console.log(view.params);

        if (view.params.tipoInventario == 1)
            this.toViewLancarInventarioPorProduto(view.params.idProduto, view.params.descricao, 0, view.params.id);
        else if (view.params.tipoInventario == 2)
            this.toViewLancarInventarioPorEndereco(view.params.idEndereco, view.params.descricao, 0, view.params.id);
    },

    inventarioListarLancamentosView_finalizarButton_onTap:function(){
        var self = this;
        var cm = this.getComponentManager("inventarioListarLancamentosView");
        var finalizarButton = cm.getCtrl('finalizarButton');
        finalizarButton.setDisabled(true);

        var habilitar = function(){ finalizarButton.setDisabled(false); };

        var model = Ext.create('WmsMobile.model.DocumentoFinalizado');
        var view = this.getInventarioListarLancamentosView();

        model.set('IdDocumento', view.params.id);
        model.set('StatusDocumento', Enums.StatusDocumento.EmInventario);

        var _finalizarComDivergencias = function(){
            model.set("FinalizarComDivergencias", true);
            model.salvar(function(){
                var message = Mensagem.getSucesso("Documento finalizado com sucesso!");
                self.getRouter().back(message);

                habilitar();

            }, function(records, operation, response){
                habilitar();
                self.trataResponse(response, function(){
                    var message = Mensagem.getErro(response.responseText);
                    cm.showMessage('messageTitlebar', message);
                });
            });
        };

        Ext.Msg.confirm('Finalizar o inventário?', 'Nenhum item mais poderá ser lançado', function (id, value) {
            if (id === 'yes') {

                model.salvar(function(){

                    var message = Mensagem.getSucesso("Documento finalizado com sucesso!");
                    self.getRouter().back(message);

                    habilitar();

                }, function(records, operation, response){
                    {
                        self.trataResponse(response, function(){
                            var message = Mensagem.getErro(response.responseText);
                            cm.showMessage('messageTitlebar', message);
                            habilitar();
                        });
                    }
                });
            }
            else habilitar();
        }, this);
    },

    // VIEW: inventarioListarProdutosView
    inventarioListarProdutosView_onLoad:function(view){
        var cm = this.getComponentManager('inventarioListarProdutosView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var produtoTextField = cm.getCtrl('produtoTextField');
        var listProduto = cm.getCtrl('listProduto');

        wmstoolbar.setTitle('Produtos');
        this.setFocus(produtoTextField);
        listProduto.hide();

        if(view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);
    },

    inventarioListarProdutosView_onLoad_produtoTextField_onChange:function(sender, newValue, oldValue, eOpts){
        console.log('inventarioListarProdutosView_onLoad_produtoTextField_onChange');
        var self = this;
        var cm = this.getComponentManager("inventarioListarProdutosView");
        var produtoTextField = cm.getCtrl('produtoTextField');
        var listProduto = cm.getCtrl('listProduto');
        var store = Ext.getStore("produtoStore");

        store.clearFilter();
        store.filter('CodigoVolume', newValue);
        store.load(function(records, operation, success){
            if(records.length == 1){
                this.toViewLancarInventarioPorProduto(
                    records[0].data.Id,
                    records[0].raw.CodigoBarras,
                    1
                );
                produtoTextField.setValue('');
            }
        }, this);
        listProduto.show();
    },

    inventarioListarProdutosView_onItemsingletapDocumento: function(sender, index, target, record, e, eOpts) {
        this.toViewLancarInventarioPorProduto(record.raw.Id, record.raw.Descricao, 1);
    },

    // VIEW: inventarioListarEnderecosView
    inventarioListarEnderecosView_onLoad:function(view){
        var cm = this.getComponentManager('inventarioListarEnderecosView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var enderecoTextField = cm.getCtrl('enderecoTextField');
        var listEndereco = cm.getCtrl('listEndereco');

        wmstoolbar.setTitle('Enderecos');
        this.setFocus(enderecoTextField);
        listEndereco.hide();

        if(view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);
    },

    inventarioListarEnderecosView_enderecoTextField_onChange:function(sender, newValue, oldValue, eOpts){
        var self = this;
        var cm = this.getComponentManager("inventarioListarEnderecosView");
        var enderecoTextField = cm.getCtrl('enderecoTextField');
        var listEndereco = cm.getCtrl('listEndereco');
        var store = Ext.getStore("inventarioPorEnderecoStore");

        store.clearFilter();
        store.filter('CodigoEndereco', newValue);
        store.load(function(records, operation, success){
            console.log(records);
            if(records.length == 1){
                this.toViewLancarInventarioPorEndereco(
                    records[0].data.Id,
                    records[0].data.Descricao,
                    1
                );
                enderecoTextField.setValue('');
            }
        }, this);
        listEndereco.show();
    },

    inventarioListarEnderecosView_onItemsingletapDocumento: function(sender, index, target, record, e, eOpts) {
        this.toViewLancarInventarioPorEndereco(record.raw.Id, record.raw.Descricao, 1
            , view.params.QuantidadeLancada);
    },

    // VIEW: inventarioLancarInventarioProdutoView
    inventarioLancarInventarioProdutoView_onLoad:function(view){
        var cm = this.getComponentManager('inventarioLancarInventarioProdutoView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var quantidadeTextField = cm.getCtrl('quantidadeTextfield');
        var model = Ext.create('WmsMobile.model.LancamentoInventarioPorProduto');

        wmstoolbar.setTitle('Lançamento');

        model.set('Id', view.params.id);
        model.set('IdVolume', view.params.idProduto);
        model.set('Descricao', view.params.descricao);
        model.set('TipoDeLancamento', view.params.tipoDeLancamento);

        view.setRecord(model);
        this.setFocus(quantidadeTextField);
    },

    inventarioLancarInventarioProdutoView_botaoConfirmar_onTap: function() {
        var self = this;
        var cm = this.getComponentManager('inventarioLancarInventarioProdutoView');
        var view = this.getInventarioLancarInventarioProdutoView();
        var lancamentoModel = view.getModel();

        var sucesso = function(){
            var message = Mensagem.getSucesso("Lançamento efetuado com sucesso!");
            self.getRouter().back(message);
        };

        var falha = function(records, operation, response){
            self.trataResponse(response, function(){
                var message = Mensagem.getErro(response.responseText);
                cm.showMessage(message);
            });
        };

        if(lancamentoModel.isValid())
            lancamentoModel.salvar(sucesso, falha);
        else
            self.showErrosFromModel(lancamentoModel, cm);
    },

    inventarioLancarInventarioProdutoView_botaoCancelar_onTap: function() {
        var self = this;
        var msg = Mensagem.getAlerta("O Lançamento foi cancelado")
        self.getRouter().back(msg);
    },

    // VIEW: inventarioLancarInventarioEnderecoView
    inventarioLancarInventarioEnderecoView_onLoad:function(view){
        var cm = this.getComponentManager('inventarioLancarInventarioEnderecoView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var quantidadeTextField = cm.getCtrl('quantidadeTextfield');
        var model = Ext.create('WmsMobile.model.LancamentoInventarioPorEndereco');

        wmstoolbar.setTitle('Lançamento');

        model.set('Id', view.params.id);
        model.set('IdEndereco', view.params.idEndereco);
        model.set('Descricao', view.params.descricao);
        model.set('TipoDeLancamento', view.params.tipoDeLancamento);

        view.setRecord(model);
        this.setFocus(quantidadeTextField);
    },

    inventarioLancarInventarioEnderecoView_botaoConfirmar_onTap: function() {
        var self = this;
        var cm = this.getComponentManager('inventarioLancarInventarioEnderecoView');
        var view = this.getInventarioLancarInventarioEnderecoView();
        var lancamentoModel = view.getModel();

        var sucesso = function(){
            var message = Mensagem.getSucesso("Lançamento efetuado com sucesso!");
            self.getRouter().back(message);
        };

        var falha = function(records, operation, response){
            Ext.Msg.alert("Erro", response.responseText);
        };

        if(lancamentoModel.isValid())
            lancamentoModel.salvar(sucesso, falha);
        else
            self.showErrosFromModel(lancamentoModel, cm);
    },

    inventarioLancarInventarioEnderecoView_botaoCancelar_onTap: function(button, e) {
        var self = this;
        var msg = Mensagem.getAlerta("O Lançamento foi cancelado")
        self.getRouter().back(msg);
    },

    // VIEW: Funções
    toViewLancarInventarioPorProduto:function(idProduto, descricao, tipoDeLancamento, id, quantidade){
        var router = this.getRouter();
        var listarView;

        if (quantidade > 0)
            listarView = this.getInventarioListarLancamentosView();
        else
            listarView = this.getInventarioLancarInventarioProdutoView();

        router.params = {
            idProduto : idProduto,
            descricao : descricao,
            tipoDeLancamento: tipoDeLancamento,
            tipoInventario: 1,
            id : id
        }

        router.changeView(listarView);
    },

    toViewLancarInventarioPorEndereco:function(idEndereco, descricao, tipoDeLancamento, id, quantidade){
        var router = this.getRouter();
        var listarView;

        if (quantidade > 0)
            listarView = this.getInventarioListarLancamentosView();
        else
            listarView = this.getInventarioLancarInventarioEnderecoView();

        router.params = {
            idEndereco : idEndereco,
            descricao : descricao,
            tipoDeLancamento : tipoDeLancamento,
            tipoInventario: 2,
            id : id
        }

        router.changeView(listarView);
    },

});