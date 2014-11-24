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
                load: 'recebimentoListarView_onLoad',
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
            "recebimentoListarItemDocumentoView #finalizarButton": {
                tap: 'recebimentoListarItemDocumentoView_finalizarButton_onTap'
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


    recebimentoListarItemDocumentoView_finalizarButton_onTap:function(){
        var self = this;

        var model = Ext.create('WmsMobile.model.DocumentoFinalizado');
        var view = this.getRecebimentoListarItemDocumentoView();
        var cm = this.getComponentManager("recebimentoListarItemDocumentoView");

        model.set('IdDocumento', view.params.idDocumento);

        Ext.Msg.confirm('Finalizar o recebimento?', 'Nenhum item mais poderá ser endereçado', function (id, value) {
            if (id === 'yes') {

                model.salvar(function(){

                    var message = Mensagem.getSucesso("Documento finalizado com sucesso!");
                    self.getRouter().back(message);

                }, function(records, operation, response){
                    
                    if(response.status == 406) //Not Acceptable
                    {
                        Ext.Msg.confirm(response.responseText, "Deseja finalizar o recebimento com divergências?", function (id, value) {
                            
                            if (id === 'yes') {

                                model.set("FinalizarComDivergencias", true);
                                model.salvar(function(){

                                    var message = Mensagem.getSucesso("Documento finalizado com sucesso!");
                                    self.getRouter().back(message);                                    

                                }, function(records, operation, response){

                                    var message = Mensagem.getErro(response.responseText);
                                    cm.showMessage('messageTitlebar', message);    

                                });
                                
                            }

                        }, this);
                    }else
                    {
                        var message = Mensagem.getErro(response.responseText);
                        cm.showMessage('messageTitlebar', message);   
                    }
                   
                });                

            }
        }, this);

    },
    //VIEW: recebimentoListarView
    recebimentoListarView_onLoad:function(view) {
        var cm = this.getComponentManager("recebimentoListarView");
        var wmstoolbar = cm.getCtrl('wmstoolbar');

        wmstoolbar.setTitle('Listar');

        this.setFocusSearchfield('recebimentoListarView');

        var store = Ext.getStore("documentoStore");
        store.clearFilter();
        store.filter('Status', Enums.StatusDocumento.EmRecebimento);
        store.filter('Finalizado', false);
        store.load();

        if(view.message != undefined)
            cm.showMessage("messageTitlebar",view.message);
    },

    recebimentoListarView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var store = Ext.getStore("documentoStore");
        store.filter('Status', Enums.StatusDocumento.EmRecebimento);
        store.filter('Codigo', newValue);

        store.load(function(records, operation, success){
            if(records.length == 1)
                this.toViewListarItem(records[0].data.Id);

        }, this);

        this.setSelect(sender.element.dom);
    },

    recebimentoListarView_onItemsingletapDocumento: function(sender, index, target, record, e, eOpts) {
        this.toViewListarItem(record.raw.Id);
    },

    //VIEW: recebimentoListarItemDocumentoView
    recebimentoListarItemDocumentoView_onLoad:function(view) {
        var cm = this.getComponentManager('recebimentoListarItemDocumentoView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var documentoSearchfield = cm.getCtrl('documentoSearchfield');
        documentoSearchfield.setValue('');

        wmstoolbar.setTitle('Item');

        var store = Ext.getStore("itemDocumentoStore");
        store.clearFilter();
        store.filter('IdDocumento', view.params.idDocumento);
        store.load();

        if(view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);

        this.setFocusSearchfield('recebimentoListarItemDocumentoView');

        cm.getCtrl("finalizarButton").show();
        cm.getCtrl("bottomContainer").show();
    },

    recebimentoListarItemDocumentoView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var store = Ext.getStore("itemDocumentoStore");
        store.filter('Codigo', newValue);

        store.load(function(records, operation, success){
            if(records.length == 1)
                this.toViewLancar(records[0].data.Id);

        }, this);

        this.setSelect(sender.element.dom);
    },

    recebimentomentoListarItemDocumentoView_onItemsingletapItemDocumento: function(sender, index, target, record, e, eOpts) {
        this.toViewLancar(record.data.Id);
    },

    //VIEW: recebimentoLancarView
    recebimentoLancarView_onLoad: function(view) {
        var cm = this.getComponentManager('recebimentoLancarView');
        var wmstoolbar =  cm.getCtrl('wmstoolbar');
        var quantidade  =  cm.getCtrl('quantidadeTextField');
        var itemDocumentoStore = Ext.getStore('itemDocumentoStore');
        var itemDocumentoModel = itemDocumentoStore.getById(view.params.idItemDocumento);
        var LancamentoRecebimentoModel = Ext.create('WmsMobile.model.LancamentoRecebimento');

        // console.log(itemDocumentoModel);

        wmstoolbar.setTitle('Lançar');
        LancamentoRecebimentoModel.set('IdItemDocumento', itemDocumentoModel.get('Id'));
        LancamentoRecebimentoModel.set('Descricao', itemDocumentoModel.get('Descricao'));
        LancamentoRecebimentoModel.set('Quatidade', '');
        LancamentoRecebimentoModel.set('Vencimento', '');

        view.setRecord(LancamentoRecebimentoModel);
        this.setFocus(quantidade);
    },

    recebimentoLancarView_botaoConfirmar_onConfirmarRecebimentoLancarView: function(button, e) {
        var self = this;
        var cm = this.getComponentManager('recebimentoLancarView');
        var view = this.getRecebimentoLancarView();
        var LancamentoRecebimentoModel = view.getModel();

        if(LancamentoRecebimentoModel.isValid()) {
            LancamentoRecebimentoModel.save(function(){
                var message = Mensagem.getSucesso("Lançamento efetuado com sucesso!");
                self.getRouter().back(message);
            });
        }
        else
            self.showErrosFromModel(LancamentoRecebimentoModel, cm);
    },

    recebimentoLancarView_botaoCancelar_onCancelarRecebimentoLancarView: function(button, e) {
        var self = this;
        var msg = Mensagem.getAlerta("O Lançamento foi cancelado")
        self.getRouter().back(msg);
    },

    // FUNÇÕES
    toViewLancar:function(idItemDocumento){
        var router = this.getRouter();
        var lancarView = this.getRecebimentoLancarView();
        var listarItemView = this.getRecebimentoListarItemDocumentoView();
        router.params = {idItemDocumento : idItemDocumento, idDocumento:listarItemView.params.idDocumento};
        router.changeView(lancarView);
    },

    toViewListarItem:function(idDocumento){
        var router = this.getRouter();
        var listarView = this.getRecebimentoListarItemDocumentoView();
        router.params = {idDocumento : idDocumento};
        router.changeView(listarView);
    },
});