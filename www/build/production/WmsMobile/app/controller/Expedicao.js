Ext.define('WmsMobile.controller.Expedicao', {
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
            expedicaoListarView: {
                selector: 'expedicaoListarView',
                xtype: 'Ext.List'
            },
            expedicaoListarItemDocumentoView: {
                selector: 'expedicaoListarItemDocumentoView',
                xtype: 'Ext.List'
            },
            expedicaoLancarView: {
                selector: 'expedicaoLancarView',
                xtype: 'Ext.List'
            },
            expedicaoImpressaoEtiqueta: {
                selector: 'expedicaoImpressaoEtiqueta',
                xtype: 'Ext.List'
            }
        },

        control: {
            "expedicaoListarView": {
                load: 'expedicaoListarView_onLoad',
                itemsingletap: 'expedicaoListarView_onItemsingletapDocumento',
            },
            "expedicaoListarView #documentoSearchfield": {
                change: 'expedicaoListarView_documentoSearchfield_onChange'
            },
            "expedicaoListarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "expedicaoListarItemDocumentoView": {
                load: 'expedicaoListarItemDocumentoView_onLoad',
                itemsingletap: 'expedicaoListarItemDocumentoView_onItemsingletapItemDocumento'
            },
            "expedicaoListarItemDocumentoView #documentoSearchfield": {
                change: 'expedicaoListarItemDocumentoView_documentoSearchfield_onChange'
            },
            "expedicaoListarItemDocumentoView #finalizarButton": {
                tap: 'expedicaoListarItemDocumentoView_finalizarButton_onTap'
            },
            "expedicaoListarItemDocumentoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "expedicaoLancarView": {
                load: 'expedicaoLancarView_onLoad'
            },
            "expedicaoLancarView #botaoConfirmar": {
                tap: 'expedicaoLancarView_botaoConfirmar_onConfirmar'
            },
            "expedicaoLancarView #botaoCancelar": {
                tap: 'expedicaoLancarView_botaoCancelar_onTap'
            },
            "expedicaoLancarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
        }
    },

    // VIEW: expedicaoListarView
    expedicaoListarView_onLoad:function(view) {
        var cm = this.getComponentManager('expedicaoListarView');

        var wmstoolbar = cm.getCtrl('wmstoolbar');
        wmstoolbar.setTitle('Expedição');

        var store = Ext.getStore("documentoStore");
        store.clearFilter();
        store.filter('Status', Enums.StatusDocumento.EmExpedicao);
        store.filter('Finalizado', false);
        store.load();

        this.setFocusSearchfield('expedicaoListarView');

        if(view.message != undefined)
            cm.showMessage("messageTitlebar", view.message);
    },

    expedicaoListarView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var store = Ext.getStore("documentoStore");
        store.filter('Status', Enums.StatusDocumento.EmExpedicao);
        store.filter('Codigo', newValue);

         var cm = this.getComponentManager('expedicaoListarView');
        var documentoSearchfield = cm.getCtrl('documentoSearchfield');

        store.load(function(records, operation, success){
            if(records.length == 1){
                this.toViewListarItem(records[0].data.Id);
                documentoSearchfield.setValue('');
            }

        }, this);

        this.setFocusSearchfield('expedicaoListarView');
    },

    expedicaoListarView_onItemsingletapDocumento: function(sender, index, target, record, e, eOpts) {
        this.toViewListarItem(record.raw.Id);
    },

    expedicaoListarItemDocumentoView_finalizarButton_onTap:function(){
        var self = this;

        console.log("expedicaoListarItemDocumentoView_finalizarButton_onTap");

        var model = Ext.create('WmsMobile.model.DocumentoFinalizado');
        var view = this.getExpedicaoListarItemDocumentoView();
        var cm = this.getComponentManager("expedicaoListarItemDocumentoView");

        model.set('IdDocumento', view.params.idDocumento);
        model.set('StatusDocumento', Enums.StatusDocumento.EmExpedicao);

        Ext.Msg.confirm('Finalizar a expedição?', 'Nenhum item mais poderá ser expedido', function (id, value) {
            if (id === 'yes') {

                model.salvar(function(){

                    var message = Mensagem.getSucesso("Expedição finalizada com sucesso!");
                    self.getRouter().back(message);

                }, function(records, operation, response){

                    var message = Mensagem.getErro(response.responseText);
                    cm.showMessage('messageTitlebar', message);

                });
            }
        }, this);
    },

    // VIEW: expedicaoListarItemDocumentoView
    expedicaoListarItemDocumentoView_onLoad:function(view)
    {
        var cm = this.getComponentManager('expedicaoListarItemDocumentoView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');

        wmstoolbar.setTitle('Item');

        var store = Ext.getStore("itemDocumentoStore");
        store.filter('IdDocumento', view.params.idDocumento);
        store.load();

        if(view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);

        this.setFocusSearchfield('expedicaoListarItemDocumentoView');

        cm.getCtrl('finalizarButton').show();
        cm.getCtrl('bottomContainer').show();
    },

    expedicaoListarItemDocumentoView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var store = Ext.getStore("itemDocumentoStore");
        store.filter('Codigo', newValue);

        var cm = this.getComponentManager('expedicaoListarItemDocumentoView');
        var documentoSearchfield = cm.getCtrl('documentoSearchfield');

        store.load(function(records){

            if(records.length == 1){
                this.toViewLancar(records[0].data.Id);
                documentoSearchfield.setValue('');
            }

        }, this);

        this.setFocusSearchfield('expedicaoListarItemDocumentoView');
    },

    expedicaoListarItemDocumentoView_onItemsingletapItemDocumento: function(sender, index, target, record, e, eOpts) {

        this.toViewLancar(record.raw.Id);
    },

    //VIEW: expedicaoLancarView
    expedicaoLancarView_onLoad: function(view) {
        var cm = this.getComponentManager('expedicaoLancarView');
        var wmstoolbar =  cm.getCtrl('wmstoolbar');
        var quantidade  =  cm.getCtrl('quantidadeTextField');
        var itemDocumentoStore = Ext.getStore('itemDocumentoStore');
        var itemDocumentoModel = itemDocumentoStore.getById(view.params.idItemDocumento);
        var ExpedicaoModel = Ext.create('WmsMobile.model.LancamentoExpedicao');

        console.log(itemDocumentoModel);

        wmstoolbar.setTitle('Lançar');
        ExpedicaoModel.set('IdItemDocumento', itemDocumentoModel.get('Id'));
        ExpedicaoModel.set('Descricao', itemDocumentoModel.get('Descricao'));
        ExpedicaoModel.set('Quatidade', '');

        view.setRecord(ExpedicaoModel);
        this.setFocus(quantidade);
    },

    expedicaoLancarView_botaoConfirmar_onConfirmar: function(button, e) {
        var self = this;
        var cm = this.getComponentManager('expedicaoLancarView');
        var view = this.getExpedicaoLancarView();
        var expedicaoModel = view.getModel();

        if(expedicaoModel.isValid()) {

            expedicaoModel.salvar(function(){

                var message = Mensagem.getSucesso("Lançamento efetuado com sucesso!");
                self.getRouter().back(message);

                }, function(records, operation, response){

                    Ext.Msg.alert(response.statusText, response.responseText);
            });
        }
        else
            self.showErrosFromModel(expedicaoModel, cm);
    },

    expedicaoLancarView_botaoCancelar_onTap: function(button, e) {
        var self = this;
        var msg = Mensagem.getAlerta("O Lançamento foi cancelado")
        self.getRouter().back(msg);
    },

    //FUNÇÕES
    toViewLancar:function(idItemDocumento){
        var router = this.getRouter();
        var lancarView = this.getExpedicaoLancarView();
        var listarItemView = this.getExpedicaoListarItemDocumentoView();
        router.params = {idItemDocumento : idItemDocumento, idDocumento:listarItemView.params.idDocumento};
        router.changeView(lancarView);
    },

    toViewListarItem:function(idDocumento){
        var router = this.getRouter();
        var listarView = this.getExpedicaoListarItemDocumentoView();
        router.params = {idDocumento : idDocumento};
        router.changeView(listarView);
    },
});