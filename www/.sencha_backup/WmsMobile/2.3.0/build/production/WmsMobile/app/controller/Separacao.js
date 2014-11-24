Ext.define('WmsMobile.controller.Separacao', {
    extend: 'WmsMobile.controller.ControllerBase',
    requires:[
    	'WmsMobile.model.Documento',
        'WmsMobile.model.ItemDocumento',
        'Enums.StatusDocumento',
    ],

    config: {
        refs: {
            mainPanel: {
                selector: 'mainpanel',
                xtype: 'Ext.Panel'
            },
            separacaoListarView: {
                selector: 'separacaoListarView',
                xtype: 'Ext.List'
            },
            separacaoListarItemDocumentoView: {
                selector: 'separacaoListarItemDocumentoView',
                xtype: 'Ext.List'
            },
            separacaoLancarView: {
                selector: 'separacaoLancarView',
                xtype: 'Ext.List'
            },
            separacaoListarCarrinhoView: {
                selector: 'separacaoListarCarrinhoView',
                xtype: 'Ext.List'
            }
        },

        control: {
            "separacaoListarView": {
                itemsingletap: 'separacaoListarView_onItemsingletapDocumento',
                load: 'separacaoListarView_onLoad'
            },
            "separacaoListarView #documentoSearchfield": {
                change: 'separacaoListarView_documentoSearchfield_onChange',
            },
            "separacaoListarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "separacaoListarCarrinhoView": {
                itemsingletap: 'separacaoListarCarrinhoView_onItemsingletapCarrinhoSelecionado',
                load: 'separacaoListarCarrinhoView_onLoad'
            },
            "separacaoListarCarrinhoView #documentoSearchfield": {
                change: 'separacaoListarCarrinhoView_documentoSearchfield_onChange',
            },
            "separacaoListarCarrinhoView #btnSemCarrinho": {
                tap: 'separacaoListarCarrinhoView_btnSemCarrinho_onClick',
            },
            "separacaoListarCarrinhoView #listSeparacaoListarCarrinho": {
                itemsingletap: 'separacaoListarCarrinhoView_onItemsingletapCarrinhoSelecionado',
            },
            "separacaoListarCarrinhoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "separacaoListarItemDocumentoView": {
                itemsingletap: 'separacaoListarItemDocumentoView_onItemsingletapItemDocumento',
                load: 'separacaoListarItemDocumentoView_onLoad'
            },
            "separacaoListarItemDocumentoView #documentoSearchfield": {
                change: 'separacaoListarItemDocumentoView_documentoSearchfield_onChange',
            },
            "separacaoListarItemDocumentoView #voltarbtn": {
                tap: 'separacaoListarCarrinhoView_onVoltarView'
            },
            "separacaoLancarView": {
                load: 'separacaoLancarView_onLoad'
            },
            "separacaoLancarView #botaoCancelar": {
                tap: 'separacaoLancarView_botaoCancelar_onCancelar'
            },
            "separacaoLancarView #botaoConfirmar": {
                tap: 'separacaoLancarView_botaoConfirmar_onConfirmar'
            },
            "separacaoLancarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
        }
    },

    //VIEW: separacaoListarView
    separacaoListarView_onLoad:function(view) {
        var wmstoolbar = Ext.ComponentQuery.query('separacaoListarView #wmstoolbar');
        wmstoolbar[0].setTitle('Listar');

        var store = Ext.getStore("documentoStore");
        store.clearFilter();
        store.filter('Status', Enums.StatusDocumento.EmSeparacao);
        store.load();

        this.setFocusSearchfield('separacaoListarView');
    },

    separacaoListarView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var store = Ext.getStore("documentoStore");
        store.filter('Status', Enums.StatusDocumento.EmSeparacao);
        store.filter('Codigo', newValue);

        store.load(function(records, operation, success){
            if(records.length == 1)
                this.toViewListarCarrinho(records[0].data.Id);

        }, this);

        this.setSelect(sender.element.dom);
    },

    separacaoListarView_onItemsingletapDocumento: function(sender, index, target, record, e, eOpts) {
        // var router = this.getRouter();
        // var listarCarrinho = this.getSeparacaoListarCarrinhoView();
        // router.params = {idDocumento : record.data.Id};
        // router.changeView(listarCarrinho);

        this.toViewListarCarrinho(record.data.Id);
    },

    //VIEW: separacaoListarCarrinhoView
    separacaoListarCarrinhoView_onLoad:function(view) {
        var wmstoolbar = Ext.ComponentQuery.query('separacaoListarCarrinhoView #wmstoolbar');
        wmstoolbar[0].setTitle('Carrinho');
        this.setFocusSearchfield('separacaoListarCarrinhoView');
    },

    separacaoListarCarrinhoView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var view = this.getSeparacaoListarCarrinhoView();
        var store = Ext.getStore("carrinhoStore");

        store.filter('Codigo', newValue);
        store.load(function(records, operation, success){
            if(records.length == 1)
                this.toViewListarItem(view.params.idDocumento, records[0].data.Id, true);

        }, this);

        this.setSelect(sender.element.dom);
    },

    separacaoListarCarrinhoView_btnSemCarrinho_onClick: function(button, e) {
        var view = this.getSeparacaoListarCarrinhoView();
        this.toViewListarItem(view.params.idDocumento, '00000000-0000-0000-0000-000000000000', true);
    },

    separacaoListarCarrinhoView_onItemsingletapCarrinhoSelecionado: function(sender, index, target, record, e, eOpts) {
        var view = this.getSeparacaoListarCarrinhoView();
        var store = Ext.getStore('documentoStore');
        var documento = store.getById(view.params.idDocumento);

        documento.set('Carrinho', record.data.Id);
        store.sync();

        // console.log(documento);
        // console.log(store);

        this.toViewListarItem(view.params.idDocumento, record.data.Id);
    },

    separacaoListarCarrinhoView_onVoltarView:function(button, e){
        var view = this.getSeparacaoListarItemDocumentoView();
        var router = this.getRouter();

        console.log(view.params.setCarrinho);

        if (view.params.setCarrinho === false) {
            console.log('indefinido');
            router.back();
        }
        else{
            console.log('definido');
            router.backTo(2);
        }
    },

    //VIEW: separacaoListarItemDocumentoView
    separacaoListarItemDocumentoView_onLoad:function(view) {
        var cm = this.getComponentManager('separacaoListarItemDocumentoView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        wmstoolbar.setTitle('Item');

        var store = Ext.getStore("itemDocumentoStore");
        store.filter('IdDocumento', view.params.idDocumento);
        store.load();

        if(view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);

        this.setFocusSearchfield('separacaoListarItemDocumentoView');
    },

    separacaoListarItemDocumentoView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var view = this.getSeparacaoListarItemDocumentoView();
        var store = Ext.getStore("itemDocumentoStore");
        store.filter('Codigo', newValue);

        store.load(function(records, operation, success){
            if(records.length == 1)
                this.toViewLancar(records[0].data.Id, view.params.idCarrinho);

        }, this);

        this.setSelect(sender.element.dom);
    },

    separacaoListarItemDocumentoView_onItemsingletapItemDocumento: function(sender, index, target, record, e, eOpts) {
        var view = this.getSeparacaoListarItemDocumentoView();
        this.toViewLancar(record.data.Id, view.params.idCarrinho);
    },

    //VIEW: separacaoLancarView
    separacaoLancarView_onLoad:function(view) {
        var cm = this.getComponentManager('separacaoLancarView');
        var wmstoolbar =  cm.getCtrl('wmstoolbar');
        var quantidade  =  cm.getCtrl('quantidadeTextField');
        var carrinho  =  cm.getCtrl('carrinhoSelectField');
        var itemDocumentoStore = Ext.getStore('itemDocumentoStore');
        var itemDocumentoModel = itemDocumentoStore.getById(view.params.idItemDocumento);
        var lancamentoSeparacaotoModel = Ext.create('WmsMobile.model.LancamentoSeparacao');

        wmstoolbar.setTitle('Lançar');
        lancamentoSeparacaotoModel.set('IdItemDocumento', itemDocumentoModel.get('Id'));
        lancamentoSeparacaotoModel.set('Descricao', itemDocumentoModel.get('Descricao'));
        lancamentoSeparacaotoModel.set('Carrinho', view.params.idCarrinho);
        lancamentoSeparacaotoModel.set('Quatidade', '');

        view.setRecord(lancamentoSeparacaotoModel);
        this.setFocus(quantidade);

        // console.log(view.params.idCarrinho);
        // console.log(lancamentoSeparacaotoModel.get('Carrinho'));

        if (view.params.idCarrinho == '')
            carrinho.setHidden(false);
        else
            carrinho.setHidden(true);
    },

    separacaoLancarView_botaoConfirmar_onConfirmar: function(button, e) {
        var self = this;
        var cm = this.getComponentManager('separacaoLancarView');
        var view = this.getSeparacaoLancarView();
        var lancamentoSeparacaotoModel = view.getModel();

        if(lancamentoSeparacaotoModel.isValid()) {
            lancamentoSeparacaotoModel.save(function(){
                var message = Mensagem.getSucesso("Lançamento efetuado com sucesso!");
                self.getRouter().back(message);
            });
        }
        else
            self.showErrosFromModel(lancamentoSeparacaotoModel, cm);
    },

    separacaoLancarView_botaoCancelar_onCancelar: function(button, e) {
        var self = this;
        var msg = Mensagem.getAlerta("O Lançamento foi cancelado")
        self.getRouter().back(msg);
    },

    //FUNÇÕES
    toViewLancar:function(idItemDocumento, idCarrinho){
        var router = this.getRouter();
        var lancarView = this.getSeparacaoLancarView();
        var listarItemView = this.getSeparacaoListarItemDocumentoView();

        router.params = {
            idItemDocumento: idItemDocumento,
            idDocumento: listarItemView.params.idDocumento,
            idCarrinho: idCarrinho
        };

        router.changeView(lancarView);

        // console.log(idItemDocumento);
        // console.log(idCarrinho);
    },

    toViewListarItem:function(idDocumento, idCarrinho, setCarrinho){
        var router = this.getRouter();
        var listarView = this.getSeparacaoListarItemDocumentoView();
        router.params = {
            idDocumento : idDocumento,
            idCarrinho: idCarrinho,
            setCarrinho: setCarrinho
        };
        router.changeView(listarView);
    },

    toViewListarCarrinho:function(idDocumento){
        var store = Ext.getStore('documentoStore');
        var documento = store.getById(idDocumento);

        // console.log(documento.get('Carrinho'));

        if (documento.get('Carrinho') == '00000000-0000-0000-0000-000000000000') {
            var router = this.getRouter();
            var listarCarrinho = this.getSeparacaoListarCarrinhoView();
            router.params = {idDocumento: idDocumento};
            router.changeView(listarCarrinho);
        }
        else
            this.toViewListarItem(idDocumento, documento.get('Carrinho'), false);
    },
});