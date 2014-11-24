Ext.define('WmsMobile.controller.Recebimento', {
    extend: 'WmsMobile.controller.ControllerBase',

    requires:[
    	'WmsMobile.model.Documento',
        'Enums.StatusDocumento',
    ],

    config: {
        refs: {
            mainPanel: {
                selector: 'mainpanel',
                xtype: 'Ext.Panel'
            },
            recebimentoListarView: {
                selector: 'recebimentoListarView',
                xtype: 'Ext.List'
            },
            recebimentoListarItemDocumentoView: {
                selector: 'recebimentoListarItemDocumentoView',
                xtype: 'Ext.List'
            },
            recebimentoLancarView: {
                selector: 'recebimentoLancarView',
                xtype: 'Ext.form.Panel'
            }
        },

        control: {
            "recebimentoListarView": {
                itemsingletap: 'recebimentoListarView_onItemsingletapDocumento',
                load: 'recebimentoListarView_onLoad'
            },
            "recebimentoListarView #documentoSearchfield": {
                change: 'recebimentoListarView_documentoSearchfield_onChange',
            },
            "recebimentoListarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "recebimentoListarItemDocumentoView": {
                itemsingletap: 'recebimentomentoListarItemDocumentoView_onItemsingletapItemDocumento',
                load: 'recebimentoListarItemDocumentoView_onLoad'
            },
            "recebimentoListarItemDocumentoView #documentoSearchfield": {
                change: 'recebimentoListarItemDocumentoView_documentoSearchfield_onChange'
            },
            "recebimentoListarItemDocumentoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "recebimentoLancarView": {
                load: 'recebimentoLancarView_onLoad'
            },
            "recebimentoLancarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "recebimentoLancarView #botaoConfirmar": {
                tap: 'recebimentoLancarView_botaoConfirmar_onConfirmarRecebimentoLancarView'
            },
            "recebimentoLancarView #botaoCancelar": {
                tap: 'recebimentoLancarView_botaoCancelar_onCancelarRecebimentoLancarView'
            },
        }
    },

    //VIEW: recebimentoListarView
    recebimentoListarView_onLoad:function(view) {
        var wmstoolbar = Ext.ComponentQuery.query('recebimentoListarView #wmstoolbar');
        wmstoolbar[0].setTitle('Listar');
        this.setFocusSearchfield('recebimentoListarView');

        var store = Ext.getStore("documentoStore");
        store.filter('Status', Enums.StatusDocumento.EmRecebimento);
        store.load();
    },

    recebimentoListarView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var router = this.getRouter();
        var listarView = this.getRecebimentoListarDocumentoView();
        var store = Ext.getStore("documentoStore");
        store.filter('Status', Enums.StatusDocumento.EmRecebimento);
        store.filter('Codigo', newValue);
        store.load(function(){
            if (store.getCount() == 1) {
                var record = store.getAt(0);
                router.params = { idDocumento: record.data.Id };
                router.changeView(listarView);
            }
        });
    },

    recebimentoListarView_onItemsingletapDocumento: function(sender, index, target, record, e, eOpts) {
        var router = this.getRouter();
        var listarView = this.getRecebimentoListarItemDocumentoView();
        router.params = { idDocumento: record.data.Id };
        router.changeView(listarView);
    },

    //VIEW: recebimentoListarItemDocumentoView
    recebimentoListarItemDocumentoView_onLoad:function(view) {
        var cm = this.getComponentManager('recebimentoListarItemDocumentoView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');

        wmstoolbar.setTitle('Item');
        this.setFocusSearchfield('recebimentoListarItemDocumentoView');

        if(view.params != undefined)
        {
            var store = Ext.getStore("itemDocumentoStore");
            store.filter('IdDocumento', view.params.idDocumento);
            store.load();
        }

        if(view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);
    },

    recebimentoListarItemDocumentoView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var router = this.getRouter();
        var listarView = this.getRecebimentoListarItemDocumentoView();
        var store = Ext.getStore("documentoStore");
        store.filter('Status', Enums.StatusDocumento.EmRecebimento);
        store.filter('Codigo', newValue);
        store.load(function(){
            if (store.getCount() == 1) {
                var record = store.getAt(0);
                router.params = { idDocumento: record.data.Id };
                router.changeView(listarView);
            }
        });
    },

    recebimentomentoListarItemDocumentoView_onItemsingletapItemDocumento: function(sender, index, target, record, e, eOpts) {
        var router = this.getRouter();
        var recebimentoLancarView = this.getRecebimentoLancarView();
        router.params = { item: record.data };
        router.changeView(recebimentoLancarView)
    },

    recebimentomentoListarItemDocumentoView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var router = this.getRouter();
        var listarView = this.getRecebimentoListarItemDocumentoView();
        var store = Ext.getStore("itemDocumentoStore");
        store.filter('Codigo', newValue);
        store.load(function(){
            if (store.getCount() == 1) {
                var record = store.getAt(0);
                router.params = { idDocumento: record.data.Id };
                router.changeView(listarView);
            }
        });
    },

    //VIEW: recebimentoLancarView
    recebimentoLancarView_onLoad: function(view) {
        var wmstoolbar      =  Ext.ComponentQuery.query('recebimentoLancarView > #wmstoolbar')[0];
        var itemDocumento   =  Ext.ComponentQuery.query('recebimentoLancarView > #dadosDocumento > #itemDocumentoTextField')[0];
        var nomeProduto     =  Ext.ComponentQuery.query('recebimentoLancarView > #dadosDocumento > #nomeProdutoTextField')[0];
        var conferencia     =  Ext.ComponentQuery.query('recebimentoLancarView > #dadosDocumento > #conferenciaTextField')[0];
        var quantidade      =  Ext.ComponentQuery.query('recebimentoLancarView > #dadosRecebimento > #quantidadeTextField')[0];

        wmstoolbar.setTitle('Lançar');
        itemDocumento.setValue(view.params.item.Id);
        nomeProduto.setValue(view.params.item.Descricao);
        // conferencia.setValue(view.params.item.Quantidade);
        this.setFocusAndSelect(quantidade.element.dom);

        var itemDocumentoModel = Ext.create('WmsMobile.model.LancamentoEnderecamento');

        //itemDocumentoModel.set('Id', view.params.item.Id);
        itemDocumentoModel.set('IdItemDocumento', view.params.item.Id);
        itemDocumentoModel.set('IdDocumento', view.params.item.IdDocumento);
        itemDocumentoModel.set('Codigo', view.params.item.IdDocumento);
        itemDocumentoModel.set('Descricao', view.params.item.Descricao);

        view.setRecord(itemDocumentoModel);
        // console.log(itemDocumentoModel);
        // console.log(view);
        // console.log(quantidadeRecebida);
        // console.log(view.params.item);
    },

    recebimentoLancarView_botaoConfirmar_onConfirmarRecebimentoLancarView: function(button, e) {
        var view = this.getRecebimentoLancarView();
        var cm = this.getComponentManager('recebimentoLancarView');
        var quantidade = cm.getCtrl('quantidadeTextField');
        var vencimento = cm.getCtrl('vencimentoTextField');

        //var itemDocumentoModel = Ext.getStore('itemDocumentoStore').getAt(0);
        var itemDocumentoModel = view.getModel();
        itemDocumentoModel.set('Quantidade', quantidade.getValue());
        itemDocumentoModel.set('Vencimento', vencimento.getValue());
        console.log(itemDocumentoModel);

        if(itemDocumentoModel.isValid()) {
            this.addLancamento(itemDocumentoModel);
            //itemDocumentoModel.save();
            view.reset();

            var message = { text:'Lançamento efetuado com sucesso!' };
            this.getRouter().back(message);
        }
        else
        {
            this.showErrosFromModel(itemDocumentoModel, cm);
        }
    },

    recebimentoLancarView_botaoCancelar_onCancelarRecebimentoLancarView: function(button, e) {
        var x = Ext.Msg.confirm('Confirmação', 'Deseja realmente cancelar o recebimento', function(button){
            if(button == 'yes')
                this.getRouter().back();
        });
    }
});