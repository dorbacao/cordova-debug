Ext.define('WmsMobile.controller.Enderecamento', {
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
            enderecamentoListarView: {
                selector: 'enderecamentoListarView',
                xtype: 'Ext.List'
            },
            enderecamentoListarItemDocumentoView: {
                selector: 'enderecamentoListarItemDocumentoView',
                xtype: 'Ext.List'
            },
            enderecamentoLancarView: {
                selector: 'enderecamentoLancarView',
                xtype: 'Ext.List'
            }
        },

        control: {
            "enderecamentoListarView": {
                itemsingletap: 'enderecamentoListarView_onItemsingletapDocumento',
                load:'enderecamentoListarView_onLoad'
            },
            "enderecamentoListarView #documentoSearchfield": {
                change: 'enderecamentoListarView_documentoSearchfield_onChange',
            },
            "enderecamentoListarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "enderecamentoListarItemDocumentoView": {
                itemsingletap: 'enderecamentoListarItemDocumentoView_onItemsingletapItemDocumento',
                load:'enderecamentoListarItemDocumentoView_onLoad',
            },
            "enderecamentoListarItemDocumentoView #documentoSearchfield": {
                change: 'enderecamentoListarItemDocumentoView_documentoSearchfield_onChange'
            },
            "enderecamentoListarItemDocumentoView #finalizarButton": {
                tap: 'enderecamentoListarItemDocumentoView_finalizarButton_onTap'
            },
            "enderecamentoListarItemDocumentoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "enderecamentoLancarView": {
                load: 'enderecamentoLancarView_onLoad'
            },
            "enderecamentoLancarView #botaoCancelar": {
                tap: 'enderecamentoLancarView_botaoCancelar_onCancelarEnderecamentoLancarView'
            },
            "enderecamentoLancarView #botaoConfirmar": {
                tap: 'enderecamentoLancarView_botaoConfirmar_onConfirmarenderecamentoLancarView'
            },
            "enderecamentoLancarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
        }
    },

    //VIEW: enderecamentoListarView
    enderecamentoListarView_onLoad:function(view)
    {
        var wmstoolbar = Ext.ComponentQuery.query('enderecamentoListarView #wmstoolbar');
        wmstoolbar[0].setTitle('Documentos');
        var cm = this.getComponentManager("enderecamentoListarView");

        this.setFocusSearchfield('enderecamentoListarView');

        var store = Ext.getStore("documentoStore");
        store.clearFilter();
        store.filter('Status', Enums.StatusDocumento.EmEnderecamento);
        store.filter('Finalizado', false);
        store.load();

        if(view.message != undefined)
            cm.showMessage("messageTitlebar",view.message);
    },

    enderecamentoListarView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var store = Ext.getStore("documentoStore");
        store.filter('Status',Enums.StatusDocumento.EmEnderecamento);
        store.filter('Codigo',newValue);

        var cm = this.getComponentManager('enderecamentoListarView');
        var documentoSearchfield = cm.getCtrl('documentoSearchfield');

        store.load(function(records, operation, success){
            if(records.length == 1){
                this.toViewListarItem(records[0].data.Id);

                documentoSearchfield.setValue('');
            }

        }, this);

        this.setFocusSearchfield('enderecamentoListarView');
    },

    enderecamentoListarView_onItemsingletapDocumento: function(sender, index, target, record, e, eOpts) {

        this.toViewListarItem(record.raw.Id);

    },

    //VIEW: enderecamentoListarItemDocumentoView
    enderecamentoListarItemDocumentoView_onLoad:function(view)
    {
        var cm = this.getComponentManager('enderecamentoListarItemDocumentoView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        wmstoolbar.setTitle('Itens');
        this.setFocusSearchfield('enderecamentoListarItemDocumentoView');

        var store = Ext.getStore("itemDocumentoStore");
        store.clearFilter();
        store.filter('IdDocumento', view.params.idDocumento);
        store.load();

        if(view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);

        cm.getCtrl('finalizarButton').show();
        cm.getCtrl('bottomContainer').show();
    },

    enderecamentoListarItemDocumentoView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var view  = sender.parent.parent.parent;
        var store = Ext.getStore("itemDocumentoStore");

        store.filter('IdDocumento',view.params.idDocumento);
        store.filter('Codigo',newValue);

        store.load(function(records, operation, success){
            if(records.length == 1)
                this.toViewLancar(records[0].data.Id);

        }, this);

        this.setSelect(sender.element.dom);
    },

    enderecamentoListarItemDocumentoView_onItemsingletapItemDocumento: function(sender, index, target, record, e, eOpts) {
        this.toViewLancar(record.data.Id);
    },

    enderecamentoListarItemDocumentoView_finalizarButton_onTap:function(){
        var self = this;
        var model = Ext.create('WmsMobile.model.DocumentoFinalizado');
        var view = this.getEnderecamentoListarItemDocumentoView();
        var cm = this.getComponentManager("enderecamentoListarItemDocumentoView");

        model.set('IdDocumento', view.params.idDocumento);
        model.set('StatusDocumento', Enums.StatusDocumento.EmEnderecamento);

        Ext.Msg.confirm('Finalizar o endereçamento?', 'Nenhum item mais poderá ser endereçado', function (id, value) {
            if (id === 'yes') {

                model.salvar(function(){

                    var message = Mensagem.getSucesso("Documento finalizado com sucesso!");
                    self.getRouter().back(message);

                }, function(records, operation, response){

                    var message = Mensagem.getErro(response.responseText);
                    cm.showMessage('messageTitlebar', message);
                });
            }
        }, this);
    },

    //VIEW: enderecamentoLancarView
    enderecamentoLancarView_onLoad:function(view){
        var viewName = "enderecamentoLancarView";
        var itemDocumentoStore = Ext.getStore('itemDocumentoStore');
        var cm = this.getComponentManager(viewName);
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var quantidadeTextField = cm.getCtrl('quantidadeTextField');
        var itemDocumentoModel = itemDocumentoStore.getById(view.params.idItemDocumento);
        var lancamentoModel = Ext.create('WmsMobile.model.LancamentoEnderecamento');

        console.log(itemDocumentoModel);

        lancamentoModel.set('IdItemDocumento', itemDocumentoModel.get('Id'));
        lancamentoModel.set('IdDocumento', itemDocumentoModel.get('IdDocumento'));
        lancamentoModel.set('Descricao', itemDocumentoModel.get('Descricao'));
        lancamentoModel.set('Vencimento', itemDocumentoModel.get('Vencimento'));
        lancamentoModel.set('IdVolume', itemDocumentoModel.get('IdVolume'));
        lancamentoModel.set('Quantidade','');
        lancamentoModel.set('CodigoEndereco', itemDocumentoModel.get('CodigoEndereco'));

        view.setRecord(lancamentoModel);
        this.setFocus(quantidadeTextField);
        wmstoolbar.setTitle('Lançamento');
    },

    enderecamentoLancarView_botaoConfirmar_onConfirmarenderecamentoLancarView: function(button, e) {
        var self = this;
        var cm = this.getComponentManager('enderecamentoLancarView');
        var view = this.getEnderecamentoLancarView();
        var lancamentoModel = view.getModel();

        if(lancamentoModel.isValid()){
            var sucesso = function(records, operation){
                var message = Mensagem.getSucesso("Lançamento efetuado com sucesso!");
                self.getRouter().back(message);
            };

            var failure = function(records, operation, response){
                    Ext.Msg.alert("Não encontrado",response.responseText);
            };

            lancamentoModel.salvar(sucesso, failure);
        }
        else
            self.showErrosFromModel(lancamentoModel,cm);
    },

    enderecamentoLancarView_botaoCancelar_onCancelarEnderecamentoLancarView: function(button, e) {
        var self = this;
        var msg = Mensagem.getAlerta("O Lançamento foi cancelado")
        self.getRouter().back(msg);
    },

    // FUNÇÕES
    toViewListarItem:function(idDocumento){
        var router = this.getRouter();
        var listarView = this.getEnderecamentoListarItemDocumentoView();
        router.params = {idDocumento : idDocumento};
        router.changeView(listarView);
    },

    toViewLancar:function(idItemDocumento){
        var router = this.getRouter();
        var lancarView = this.getEnderecamentoLancarView();
        var listarItemView = this.getEnderecamentoListarItemDocumentoView();

        router.params = {idItemDocumento : idItemDocumento, idDocumento:listarItemView.params.idDocumento};

        router.changeView(lancarView);
    },

});