Ext.define('WmsMobile.controller.Recebimento', {
    extend: 'WmsMobile.controller.ControllerBase',

    requires:[
        'WmsMobile.model.Avaria',
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

    //VIEW: recebimentoListarView
    recebimentoListarView_onLoad:function(view) {
        var cm = this.getComponentManager("recebimentoListarView");
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var store = Ext.getStore("documentoStore");

        wmstoolbar.setTitle('Listar');
        store.clearFilter();
        store.filter('Status', Enums.StatusDocumento.EmRecebimento);
        store.filter('Finalizado', false);
        store.load();

        this.setFocusSearchfield('recebimentoListarView');

        if(view.message != undefined)
            cm.showMessage("messageTitlebar",view.message);
    },

    recebimentoListarView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var store = Ext.getStore("documentoStore");
        var cm = this.getComponentManager('recebimentoListarView');
        var documentoSearchfield = cm.getCtrl('documentoSearchfield');

        store.filter('Status', Enums.StatusDocumento.EmRecebimento);
        store.filter('Codigo', newValue);

        store.load(function(records, operation, success){
            if(records.length == 1)
            {
                this.toViewListarItem(records[0].data.Id);
                documentoSearchfield.setValue('');
            }
        }, this);

        this.setFocusSearchfield('recebimentoListarView');
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

    recebimentoListarItemDocumentoView_finalizarButton_onTap:function(){
        var self = this;
        var cm = this.getComponentManager("recebimentoListarItemDocumentoView");
        var finalizarButton = cm.getCtrl('finalizarButton');
        finalizarButton.setDisabled(true);

        var habilitar = function(){finalizarButton.setDisabled(false);};

        var model = Ext.create('WmsMobile.model.DocumentoFinalizado');
        var view = this.getRecebimentoListarItemDocumentoView();

        model.set('IdDocumento', view.params.idDocumento);
        model.set('StatusDocumento', Enums.StatusDocumento.EmRecebimento);

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

        Ext.Msg.confirm('Finalizar o recebimento?', 'Nenhum item mais poderá ser endereçado', function (id, value) {
            if (id === 'yes') {

                model.salvar(function(){

                    var message = Mensagem.getSucesso("Documento finalizado com sucesso!");
                    self.getRouter().back(message);

                    habilitar();

                }, function(records, operation, response){
                    if(response.status == 406) //Not Acceptable
                    {
                        Ext.Msg.confirm(response.responseText, "Deseja finalizar o recebimento com divergências?", function (id, value) {
                            if (id === 'yes')
                                _finalizarComDivergencias();
                            else
                                habilitar();
                        }, this);
                    }
                    else
                    {
                        self.trataResponse(response, function(){
                            var message = Mensagem.getErro(response.responseText);
                            cm.showMessage('messageTitlebar', message);
                            habilitar();
                        });
                    }
                });
            }
            else
                habilitar();
        }, this);
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
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var quantidade = cm.getCtrl('quantidadeTextField');
        var itemDocumentoStore = Ext.getStore('itemDocumentoStore');
        var itemDocumentoModel = itemDocumentoStore.getById(view.params.idItemDocumento);
        var LancamentoRecebimentoModel = Ext.create('WmsMobile.model.LancamentoRecebimento');

        console.log(itemDocumentoModel);

        wmstoolbar.setTitle('Lançar');
        LancamentoRecebimentoModel.set('IdDocumento', itemDocumentoModel.get('IdDocumento'));
        LancamentoRecebimentoModel.set('IdItemDocumento', itemDocumentoModel.get('Id'));
        LancamentoRecebimentoModel.set('Descricao', itemDocumentoModel.get('Descricao'));
        LancamentoRecebimentoModel.set('IdVolume', itemDocumentoModel.get('IdVolume'));
        LancamentoRecebimentoModel.set('Quatidade', '');
        LancamentoRecebimentoModel.set('Vencimento', '');

        view.setRecord(LancamentoRecebimentoModel);
        this.setFocus(quantidade);

        // console.log(Ext.getStore('avariaStore'));
    },

    recebimentoLancarView_botaoConfirmar_onConfirmarRecebimentoLancarView: function(button, e) {
        var self = this;
        var cm = this.getComponentManager('recebimentoLancarView');
        var botaoConfirmar = cm.getCtrl('botaoConfirmar');
        botaoConfirmar.setDisabled(true);

        var habilitar = function(){ botaoConfirmar.setDisabled(false); };

        var view = this.getRecebimentoLancarView();
        var LancamentoRecebimentoModel = view.getModel();

        var sucesso = function(){
            var message = Mensagem.getSucesso("Lançamento efetuado com sucesso!");
            self.getRouter().back(message);
            habilitar();
        };

        var falha = function(records, operation, response){
            habilitar();
            self.trataResponse(response, function(){
                var message = Mensagem.getErro(response.responseText);
                cm.showMessage(message);
            });
        };

        if(LancamentoRecebimentoModel.isValid())
            LancamentoRecebimentoModel.salvar(sucesso, falha);
        else
        {
            self.showErrosFromModel(LancamentoRecebimentoModel, cm);
            habilitar();
        };

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