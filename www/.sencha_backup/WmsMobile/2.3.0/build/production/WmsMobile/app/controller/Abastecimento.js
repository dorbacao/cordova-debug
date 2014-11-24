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
            // abastecimentoListarEnderecoView: {
            //     selector: 'abastecimentoListarEnderecoView',
            //     xtype: 'Ext.List'
            // },
            // abastecimentoListarItemDocumentoView: {
            //     selector: 'abastecimentoListarItemDocumentoView',
            //     xtype: 'Ext.List'
            // },
            abastecimentoListarProdutosView: {
                selector: 'abastecimentoListarProdutosView',
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
            "abastecimentoListarProdutosView #documentoSearchfield": {
                change: 'abastecimentoListarProdutosView_documentoSearchfield_onChange'
            },
            "abastecimentoListarProdutosView #voltarbtn": {
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

        this.setFocusSearchfield('abastecimentoListarProdutosView');

        var store = Ext.getStore("abastecimentoStore");
        store.clearFilter();
        store.load();
    },

    abastecimentoListarProdutosView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var store = Ext.getStore("abastecimentoStore");

        store.filter('Codigo', newValue);
        store.load(function(records, operation, success){
            if(records.length == 1)
                this.toViewListarEnderecoOrigem(records[0].data);

        }, this);

        this.setSelect(sender.element.dom);
    },

    abastecimentoListarProdutosView_onItemsingletap: function(sender, index, target, record, e, eOpts) {
        this.toViewListarEnderecoOrigem(record.data);
    },

    //VIEW: abastecimentoListarEnderecosOrigemView
    abastecimentoListarEnderecosOrigemView_onLoad:function(view)  {
        var wmstoolbar = Ext.ComponentQuery.query('abastecimentoListarEnderecosOrigemView #wmstoolbar');
        var store = Ext.getStore("enderecoStore");

        // console.log(view.params.Abastecimento.IdProduto);

        wmstoolbar[0].setTitle('Origem');
        store.clearFilter();
        store.filter('Produto', view.params.Abastecimento.IdProduto);
        store.load();

        this.setFocusSearchfield('abastecimentoListarEnderecosOrigemView');
    },

    abastecimentoListarEnderecosOrigemView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var store = Ext.getStore("enderecoStore");
        store.filter('Codigo', newValue);

        store.load(function(records, operation, success){
            if(records.length == 1){
                this.toViewLancar(records[0].data.Id, records[0].data.Codigo);
            }

        }, this);

        this.setSelect(sender.element.dom);
    },

    abastecimentoListarEnderecosOrigemView_onItemsingletap: function(sender, index, target, record, e, eOpts) {

        this.toViewLancar(record.data.Id, record.data.Codigo);
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

        wmstoolbar.setTitle('Lançamento');
        lancamentoModel.set('IdAbastecimento', origem.params.Abastecimento.Id);
        lancamentoModel.set('CodigoOrigem', view.params.CodigoOrigem);
        lancamentoModel.set('Quantidade', '');

        NomeProduto.setValue(origem.params.Abastecimento.Descricao);
        CodigoOrigem.setValue(view.params.CodigoOrigem);
        CodigoEnderecoPicking.setValue(origem.params.Abastecimento.CodigoPiking);

        view.setRecord(lancamentoModel);
        this.setFocus(quantidadeTextField);
    },

    abastecimentoLancarView_botaoConfirmar_onConfirmar: function(button, e) {
        var self = this;
        var cm = this.getComponentManager('abastecimentoLancarView');
        var view = this.getAbastecimentoLancarView();
        var lancamentoModel = view.getModel();

        if(lancamentoModel.isValid())
        {
            lancamentoModel.salvar(function(){
                
                var message = Mensagem.getSucesso("Lançamento efetuado com sucesso!");
                self.getRouter().backTo(2, message);
            
            }, function(records, operation, response){

                var msg = Mensagem.getErro(response.responseText);
                cm.showMessage("messageTitlebar", msg);

            });
        }
        else
            self.showErrosFromModel(lancamentoModel, cm);
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
        var listarView = this.getAbastecimentoListarEnderecosOrigemView();

        router.params = {Abastecimento: abastecimento};
        router.changeView(listarView);
    },

    toViewLancar:function(idOrigem, codigoOrigem){
        var router = this.getRouter();
        var listarView = this.getAbastecimentoLancarView();

        router.params = { idOrigem: idOrigem, CodigoOrigem: codigoOrigem };
        router.changeView(listarView);
    },

});
