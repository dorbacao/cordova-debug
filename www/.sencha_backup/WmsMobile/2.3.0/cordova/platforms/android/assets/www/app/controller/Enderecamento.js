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
            "enderecamentoListarItemDocumentoView #documentoSearchfield": {
                change: 'enderecamentoListarItemDocumentoView_documentoSearchfield_onChange'
            },
            "enderecamentoListarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
            "enderecamentoListarItemDocumentoView": {
                itemsingletap: 'enderecamentoListarItemDocumentoView_onItemsingletapItemDocumento',
                load:'enderecamentoListarItemDocumentoView_onLoad'
            },
            "enderecamentoLancarView": {
                load: 'enderecamentoLancarView_onLoad'
            },
            "enderecamentoListarItemDocumentoView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
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

    enderecamentoListarItemDocumentoView_onLoad:function(view)
    {
        var cm = this.getComponentManager('enderecamentoListarItemDocumentoView');

        var wmstoolbar = cm.getCtrl('wmstoolbar');

        wmstoolbar.setTitle('Endereçamento - Item');

        this.setFocusSearchfield('enderecamentoListarItemDocumentoView');

        var store = Ext.getStore("itemDocumentoStore");
        store.filter('IdDocumento',view.params.idDocumento);
        store.load();

        if(view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);
    },


    //VIEW: enderecamentoLancarView
    enderecamentoListarView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){
        var store = Ext.getStore("documentoStore");
        store.filter('Status',Enums.StatusDocumento.EmEnderecamento);
        store.filter('Codigo',newValue);

        this.setFocusSearchfield('enderecamentoListarView');

        store.load(function(records, operation, success){
            if(records.length == 1)
                this.toViewListarItem(records[0].data.Id);

        }, this);

    },

    enderecamentoLancarView_onLoad:function(view){
        var viewName = "enderecamentoLancarView";
        var itemDocumentoStore = Ext.getStore('itemDocumentoStore');
        var cm = this.getComponentManager(viewName);

        var wmstoolbar = cm.getCtrl('wmstoolbar');

        var quantidadeTextField = cm.getCtrl('quantidadeTextField');

        var itemDocumentoModel = itemDocumentoStore.getById(view.params.idItemDocumento);

        var lancamentoModel = Ext.create('WmsMobile.model.Lancamento');

        lancamentoModel.set('IdItemDocumento',itemDocumentoModel.get('Id'));
        lancamentoModel.set('Descricao',itemDocumentoModel.get('Descricao'));
        lancamentoModel.set('Quantidade','');
        lancamentoModel.set('CodigoEndereco','');

        view.setRecord(lancamentoModel);

        this.setFocus(quantidadeTextField);

        wmstoolbar.setTitle('Endereçamento - Lançar');
    },

    enderecamentoListarItemDocumentoView_documentoSearchfield_onChange:function(sender, newValue, oldValue, eOpts){

        var view  = sender.parent.parent.parent;

        var store = Ext.getStore("itemDocumentoStore");
        store.filter('IdDocumento',view.params.idDocumento);
        store.filter('Codigo',newValue);

        this.setFocusSearchfield('enderecamentoListarItemDocumentoView');

        store.load(function(records, operation, success){
            if(records.length == 1)
                this.toViewLancar(records[0].data.Id);

        }, this);
    },

    enderecamentoListarView_onLoad:function(view)
    {
        var wmstoolbar = Ext.ComponentQuery.query('enderecamentoListarView #wmstoolbar');
        wmstoolbar[0].setTitle('Endereçamento');

        this.setFocusSearchfield('enderecamentoListarView');

        var store = Ext.getStore("documentoStore");
        store.filter('Status',Enums.StatusDocumento.EmEnderecamento);
        store.load();
    },

    enderecamentoLancarView_botaoConfirmar_onConfirmarenderecamentoLancarView: function(button, e) {
        var self = this;
        var cm = this.getComponentManager('enderecamentoLancarView');
        var view = this.getEnderecamentoLancarView();
        var lancamentoModel = view.getModel();

        if(lancamentoModel.isValid()){

            lancamentoModel.save(function(){
                var message = Mensagem.getSucesso("Lançamento efetuado com sucesso!");
        self.getRouter().back(message);
            });
        }
        else
            self.showErrosFromModel(lancamentoModel,cm);
    },

    enderecamentoLancarView_botaoCancelar_onCancelarEnderecamentoLancarView: function(button, e) {
        var self = this;
        var msg = Mensagem.getAlerta("O Lançamento foi cancelado")
        self.getRouter().back(msg);
    },
    //VIEW

    //VIEW: enderecamentoListarView
    enderecamentoListarView_onItemsingletapDocumento: function(sender, index, target, record, e, eOpts) {

        this.toViewListarItem(record.raw.Id);

    },

    toViewListarItem:function(idDocumento){
        var router = this.getRouter();
        var listarView = this.getEnderecamentoListarItemDocumentoView();
        router.params = {idDocumento : idDocumento};
        router.changeView(listarView);

    },

    enderecamentoListarItemDocumentoView_onItemsingletapItemDocumento: function(sender, index, target, record, e, eOpts) {

        this.toViewLancar(record.data.Id);
    },

    toViewLancar:function(idItemDocumento){
        var router = this.getRouter();
        var lancarView = this.getEnderecamentoLancarView();
        var listarItemView = this.getEnderecamentoListarItemDocumentoView();

        router.params = {idItemDocumento : idItemDocumento, idDocumento:listarItemView.params.idDocumento};

        router.changeView(lancarView);
    },
});
