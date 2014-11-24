Ext.define('WmsMobile.controller.Inventario', {
    extend: 'WmsMobile.controller.ControllerBase',

    requires:[
    	'WmsMobile.model.Documento',
        'WmsMobile.model.LancamentoInventario',
    ],

    stores:[
        'Inventario',
        'ItemPlanejamento',
    ],
    config: {
        refs: {
            mainPanel: {
                selector: 'mainpanel',
                xtype: 'Ext.Panel'
            },
            inventarioListarPlanejadosView: {
                selector: 'inventarioListarPlanejadosView',
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
        },

        control: {
            "inventarioListarPlanejadosView": {
                itemsingletap: 'inventarioListarPlanejadosView_onItemsingletapDocumento',
                load: 'inventarioListarPlanejadosView_onload'
            },
            "inventarioListarPlanejadosView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "inventarioListarPlanejadosView #documentoSearchfield": {
                change: 'inventarioListarPlanejadosView_documentoSearchfield_onChange'
            },
            "inventarioListarProdutosView #documentoSearchfield": {
                change: 'inventarioListarProdutosView_documentoSearchfield_onChange'
            },
            "inventarioListarProdutosView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "inventarioListarEnderecosView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "inventarioLancarInventarioProdutoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "inventarioListarProdutosView": {
                itemsingletap: 'inventarioListarProdutosView_onItemsingletap',
                load: 'inventarioListarProdutosView_onLoad'
            },
            "inventarioListarProdutosView #finalizarButton": {
                tap: 'inventarioListarProdutosView_finalizarButton_onTap',
            },
            "inventarioListarEnderecosView #finalizarButton": {
                tap: 'inventarioListarEnderecosView_finalizarButton_onTap',
            },
            "inventarioListarEnderecosView": {
                itemsingletap: 'inventarioListarEnderecosView_onItemsingletap',
                load:'inventarioListarEnderecosView_onLoad'
            },
            "inventarioLancarInventarioProdutoView #botaoCancelar": {
                tap: 'inventarioLancarInventarioProdutoView_botaoCancelar_onTap'
            },
            "inventarioLancarInventarioProdutoView #botaoConfirmar": {
                tap: 'inventarioLancarInventarioProdutoView_botaoConfirmar_onTap'
            },
            "inventarioLancarInventarioEnderecoView #botaoConfirmar": {
                tap: 'inventarioLancarInventarioEnderecoView_botaoConfirmar_onTap'
            },
            "inventarioLancarInventarioProdutoView": {
                load: 'inventarioLancarInventarioProdutoView_onLoad'
            },
            "inventarioLancarInventarioEnderecoView": {
                load: 'inventarioLancarInventarioEnderecoView_onLoad'
            },
            "inventarioLancarInventarioEnderecoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },

            
        }
    },


    inventarioListarProdutosView_finalizarButton_onTap:function(){
        var self = this;

        var planejamentoStore = Ext.getStore("planejamentoStore");
        var view = this.getInventarioListarProdutosView();
        var cm = this.getComponentManager("inventarioListarProdutosView");
       
        Ext.Msg.confirm('Finalizar o Inventario?', 'Nenhum item mais podera ser inventariado', function (id, value) {
            if (id === 'yes') {

                var model = planejamentoStore.getById(view.params.idPlanejamento);
                model.set('Finalizado', true);

                planejamentoStore.sync({
                    success: function(batch) {
                        var message = Mensagem.getSucesso("Inventario finalizado com sucesso!");
                        self.getRouter().back(message);
                    },
                    failure: function(batch) {
                        var msg = batch.operations[0].request.scope.reader.jsonData["message"];
                        var message = Mensagem.getErro(msg);
                        cm.showMessage('messageTitlebar', message);                        
                    }
                });

            }
        }, this);

    },


    inventarioListarEnderecosView_finalizarButton_onTap:function(){
        var self = this;

        var planejamentoStore = Ext.getStore("planejamentoStore");
        var view = this.getInventarioListarEnderecosView();
        var cm = this.getComponentManager("inventarioListarEnderecosView");
       
        Ext.Msg.confirm('Finalizar o Inventario?', 'Nenhum item mais podera ser inventariado', function (id, value) {
            if (id === 'yes') {

                var model = planejamentoStore.getById(view.params.idPlanejamento);
                model.set('Finalizado', true);

                planejamentoStore.sync({
                    success: function(batch) {
                        var message = Mensagem.getSucesso("Inventario finalizado com sucesso!");
                        self.getRouter().back(message);
                    },
                    failure: function(batch) {
                        var msg = batch.operations[0].request.scope.reader.jsonData["message"];
                        var message = Mensagem.getErro(msg);
                        cm.showMessage('messageTitlebar', message);                        
                    }
                });

            }
        }, this);

    },

    inventarioListarPlanejadosView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var store = Ext.getStore("planejamentoStore");
        store.filter('Descricao',newValue);
        store.filter('Finalizado',false);

        store.load(function(records, operation, success){
            if(records.length == 1){
                this.toViewListarItemPlanejamento(records[0].data.Id);
            }

        }, this);

        this.setFocusSearchfield('inventarioListarPlanejadosView');

    },

    inventarioListarProdutosView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var store = Ext.getStore("itemPlanejamentoStore");
        store.filter('CodigoProduto',newValue);

        store.load(function(records, operation, success){
            if(records.length == 1){
                this.toViewLancarInventario(records[0].data.Id);
            }

        }, this);

        this.setFocusSearchfield('inventarioListarProdutosView');

    },

    toViewListarItemPlanejamento:function(idPlanejamento){
        var router = this.getRouter();
        var listarView = this.getInventarioListarProdutosView();
        router.params = {idPlanejamento : idPlanejamento};
        router.changeView(listarView);
    },


    toViewLancarInventario:function(idItemPlanejamento){
        var router = this.getRouter();
        var listarView = this.getInventarioLancarInventarioProdutoView();
        router.params = {idItemPlanejamento : idItemPlanejamento};
        router.changeView(listarView);
    },

    inventarioLancarInventarioProdutoView_onLoad:function(view){
        console.log(view);
        var cm = this.getComponentManager('inventarioLancarInventarioProdutoView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var quantidadeTextField = cm.getCtrl('quantidadeTextfield');
        var lancamentoFieldset = cm.getCtrl('lancamentoFieldset');
        var confirmarContainer = cm.getCtrl('confirmarContainer');
        var model = Ext.create('WmsMobile.model.LancamentoInventario');

        wmstoolbar.setTitle('Lançamento');
        // console.log(view);

        model.set('IdItemPlanejamento',view.params.idItemPlanejamento);
        model.set('IdPlanejamento',view.params.idPlanejamento);
        model.set('CodigoEndereco','');
        model.set('Quantidade','');
        model.set('DataVencimento','');
        model.set('NomeProduto',view.params.descricao);

        view.setRecord(model);
        this.setFocus(quantidadeTextField);

        //lancamentoFieldset.hide();
        //confirmarContainer.hide();
    },


    inventarioLancarInventarioEnderecoView_onLoad:function(view){
        
        console.log(view);
        var cm = this.getComponentManager('inventarioLancarInventarioEnderecoView');

        var wmstoolbar = cm.getCtrl('wmstoolbar');

        var codigoProdutoTextfield = cm.getCtrl('codigoProdutoTextfield');

        var model = Ext.create('WmsMobile.model.LancamentoInventario');

        wmstoolbar.setTitle('Lançamento');

        model.set('IdPlanejamento',view.params.idPlanejamento);
        model.set('IdEndereco',view.params.idEndereco);
        model.set('CodigoEndereco',view.params.codigoEndereco);
        model.set('IdProduto',view.params.idProduto);

        model.set('CodigoProduto',view.params.idProduto);
        model.set('Quantidade','');
        model.set('DataVencimento','');
        model.set('NomeProduto',view.params.descricao);

        view.setRecord(model);
        this.setFocus(codigoProdutoTextfield);
        
    },

    inventarioListarEnderecosView_onLoad:function(view){
        var cm = this.getComponentManager('inventarioListarEnderecosView');
        
        var wmstoolbar =cm.getCtrl('wmstoolbar');
        
        wmstoolbar.setTitle('Endereços');

        Ext.getStore("enderecoInventarioStore").load();

        if(view.message != undefined )
            cm.showMessage("messageTitlebar",view.message);

        cm.getCtrl('finalizarButton').show();
        cm.getCtrl('bottomContainer').show();
    },

    inventarioListarProdutosView_onLoad:function(view){
        var cm = this.getComponentManager('inventarioListarProdutosView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        wmstoolbar.setTitle('Produtos');

        var store = Ext.getStore('itemPlanejamentoStore');
        store.filter('IdPlanejamento', view.params.idPlanejamento);
        store.load();

        this.setFocusSearchfield('inventarioListarProdutosView');

        if(view.message != undefined )
            cm.showMessage("messageTitlebar",view.message);

        cm.getCtrl('finalizarButton').show();
        cm.getCtrl('bottomContainer').show();
    },


    inventarioListarPlanejadosView_onload:function(view){

        var wmstoolbar = Ext.ComponentQuery.query('inventarioListarPlanejadosView #wmstoolbar');
        wmstoolbar[0].setTitle('Planejamentos');

        var store = Ext.getStore('planejamentoStore');
        store.filter('Finalizado',false);

        var tipoPlanejamento = 0;

        if(view.params.tipo == '6.1.0')
            tipoPlanejamento = 0;
        else if(view.params.tipo == '6.1.1')
            tipoPlanejamento = 1;

        store.filter('TipoPlanejamento',tipoPlanejamento);
        store.load();        

        this.setFocusSearchfield('inventarioListarPlanejadosView');
    },

    inventarioListarPlanejadosView_onItemsingletapDocumento: function(sender, index, target, record, e, eOpts) {

        var router = this.getRouter();
        
        var listaProdutos = this.getInventarioListarProdutosView();
        var listaEnderecos = this.getInventarioListarEnderecosView();

        var viewAtual = this.getInventarioListarPlanejadosView();
        router.params = viewAtual.params;
        router.params.idPlanejamento = record.raw.Id;

        if(viewAtual.params.tipo == '6.1.0')//produto
            router.changeView(listaProdutos);
        else if(viewAtual.params.tipo == '6.1.1')//Endereco
            router.changeView(listaEnderecos);

    },

    inventarioListarProdutosView_onItemsingletap: function(sender, index, target, record, e, eOpts) {
        var router = this.getRouter();
        var listaEnderecos = this.getInventarioLancarInventarioProdutoView();
        var atualView = this.getInventarioListarProdutosView();

        router.params = {
            idPlanejamento:atualView.params.idPlanejamento,
            idItemPlanejamento:record.raw.Id,
            idProduto:record.raw.IdProduto,
            descricao:record.raw.Descricao
        };

        console.log(router.params);

        router.changeView(listaEnderecos);

    },

    inventarioListarEnderecosView_onItemsingletap: function(sender, index, target, record, e, eOpts) {
        var router = this.getRouter();
        var lancarEstoque = this.getInventarioLancarInventarioEnderecoView();
        var listarEnderecos = this.getInventarioListarEnderecosView();

        router.params = {
            idPlanejamento:listarEnderecos.params.idPlanejamento,
            idEndereco:record.data.Id,
            codigoEndereco:record.data.Codigo
        };

        router.changeView(lancarEstoque);

    },

    inventarioLancarInventarioProdutoView_botaoCancelar_onTap: function() {
        this.getRouter().back();
    },


    inventarioLancarInventarioEnderecoView_botaoConfirmar_onTap: function() {

        var self = this;
        var cm = this.getComponentManager('inventarioLancarInventarioEnderecoView');
        var view = this.getInventarioLancarInventarioEnderecoView();

        var lancamentoModel = view.getModel();

        if(lancamentoModel.isValid()){

            lancamentoModel.salvar(function(){

                var message = Mensagem.getSucesso("Lançamento efetuado com sucesso!");
                self.getRouter().back(message);

            }, function(records, operation, response){

                Ext.Msg.alert("Erro", response.responseText);

            });
        }
        else
            self.showErrosFromModel(lancamentoModel,cm);

    },

    inventarioLancarInventarioProdutoView_botaoConfirmar_onTap: function() {

        var self = this;
        var cm = this.getComponentManager('inventarioLancarInventarioProdutoView');
        var view = this.getInventarioLancarInventarioProdutoView();
        var lancamentoModel = view.getModel();

        console.log(lancamentoModel);

        if(lancamentoModel.isValid()){

            lancamentoModel.salvar(function(){

                var message = Mensagem.getSucesso("Lançamento efetuado com sucesso!");
                self.getRouter().back(message);

            }, function(records, operation, response){

                Ext.Msg.alert("Erro", response.responseText);

            });
        }
        else
            self.showErrosFromModel(lancamentoModel,cm);

    },
});
