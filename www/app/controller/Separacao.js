Ext.define('WmsMobile.controller.Separacao', {
    extend: 'WmsMobile.controller.ControllerBase',
    requires: [
    	'WmsMobile.model.Documento',
        'WmsMobile.model.ItemDocumento',
        'WmsMobile.model.UsuarioPossuiPermissaoArea',
        'WmsMobile.model.UsuarioPossuiPermissaoEndereco',
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
            "separacaoListarItemDocumentoView #finalizarButton": {
                tap: 'separacaoListarItemDocumentoView_finalizarButton_onTap'
            },
            "separacaoListarItemDocumentoView #liberarButton": {
                tap: 'separacaoListarItemDocumentoView_liberarButton_onTap'
            },
            "separacaoLancarView #voltarbtn": {
                tap: 'controllerBase_onVoltarView'
            },
        }
    },

    //VIEW: separacaoListarView
    separacaoListarView_onLoad: function (view) {
        var wmstoolbar = Ext.ComponentQuery.query('separacaoListarView #wmstoolbar');
        wmstoolbar[0].setTitle('Listar');

        var cm = this.getComponentManager('separacaoListarView');

        var store = Ext.getStore("documentoStore");
        store.clearFilter();
        store.filter('Status', Enums.StatusDocumento.EmSeparacao);
        store.filter('Finalizado', false);

        store.load();

        if (view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);

        this.setFocusSearchfield('separacaoListarView');
    },

    separacaoListarView_documentoSearchfield_onChange: function (sender, newValue, oldValue, eOpts) {
        var store = Ext.getStore("documentoStore");
        store.filter('Status', Enums.StatusDocumento.EmSeparacao);
        store.filter('Codigo', newValue);

        var cm = this.getComponentManager('separacaoListarView');
        var documentoSearchfield = cm.getCtrl('documentoSearchfield');

        store.load(function (records, operation, success) {
            if (records.length == 1) {
                this.toViewListarCarrinho(records[0].data.Id);
                documentoSearchfield.setValue('');
            }

        }, this);

        this.setFocusSearchfield('separacaoListarView');
    },

    separacaoListarView_onItemsingletapDocumento: function (sender, index, target, record, e, eOpts) {
        // var router = this.getRouter();
        // var listarCarrinho = this.getSeparacaoListarCarrinhoView();
        // router.params = {idDocumento : record.data.Id};
        // router.changeView(listarCarrinho);

        this.toViewListarCarrinho(record.data.Id);
    },

    separacaoListarItemDocumentoView_finalizarButton_onTap: function () {
        var self = this;
        var cm = this.getComponentManager("separacaoListarItemDocumentoView");
        var finalizarButton = cm.getCtrl('finalizarButton');
        var model = Ext.create('WmsMobile.model.DocumentoFinalizado');
        var view = this.getSeparacaoListarItemDocumentoView();

        finalizarButton.setDisabled(true);

        var habilitar = function () { finalizarButton.setDisabled(false); };

        model.set('IdDocumento', view.params.idDocumento);
        model.set('StatusDocumento', Enums.StatusDocumento.EmSeparacao);

        Ext.Msg.confirm('Finalizar a Separação?', 'Nenhum item mais poderá ser separado', function (id, value) {
            if (id === 'yes') {
                model.salvar(function () {
                    var message = Mensagem.getSucesso("Documento finalizado com sucesso!");
                    self.getRouter().backTo(2, message);
                    habilitar();

                }, function (records, operation, response) {

                    if (response.status == 406) //Not Acceptable
                    {
                        Ext.Msg.confirm(response.responseText, "Deseja finalizar a separação com divergências?", function (id, value) {
                            if (id === 'yes') {
                                model.set("FinalizarComDivergencias", true);
                                model.salvar(function () {
                                    var message = Mensagem.getSucesso("Documento finalizado com sucesso!");
                                    self.getRouter().backTo(2, message);
                                    habilitar();

                                }, function (records, operation, response) {
                                    var message = Mensagem.getErro(response.responseText);
                                    cm.showMessage('messageTitlebar', message);
                                    habilitar();
                                });
                            }
                            else
                                habilitar();

                        }, this);
                    } else {
                        var message = Mensagem.getErro(response.responseText);
                        cm.showMessage('messageTitlebar', message);
                        habilitar();
                    }
                });
            }
            else
                habilitar();
        }, this);
    },

    separacaoListarItemDocumentoView_liberarButton_onTap: function () {
        var self = this;
        var router = this.getRouter();
        var cm = this.getComponentManager("separacaoListarItemDocumentoView");
        var liberarButton = cm.getCtrl('liberarButton');
        var model = Ext.create('WmsMobile.model.DocumentoLiberar');
        liberarButton.setDisabled(true);
        var view = this.getSeparacaoListarItemDocumentoView();

        var habilitar = function () { liberarButton.setDisabled(false); };
        model.set('Id', view.params.idDocumento);

        Ext.Msg.confirm('Liberar a Separação?', 'A separação poderá ser atendida por outro usuário.', function (id, value) {
            if (id === 'yes') {
                model.salvar(function () {

                    var message = Mensagem.getSucesso("Separação liberada com sucesso!");
                    cm.showMessage('messageTitlebar', message);
                    cm.getCtrl("liberarButton").hide();
                    habilitar();
                }, function (records, operation, response) {
                    var message = Mensagem.getErro(response.responseText);
                    cm.showMessage('messageTitlebar', message);
                    habilitar();
                });
            } else {
                habilitar();
            }

        }, this);
    },

    //VIEW: separacaoListarCarrinhoView
    separacaoListarCarrinhoView_onLoad: function (view) {
        var wmstoolbar = Ext.ComponentQuery.query('separacaoListarCarrinhoView #wmstoolbar');
        var store = Ext.getStore("carrinhoStore");
        wmstoolbar[0].setTitle('Carrinho');

        store.load();
        this.setFocusSearchfield('separacaoListarCarrinhoView');
    },

    separacaoListarCarrinhoView_documentoSearchfield_onChange: function (sender, newValue, oldValue, eOpts) {
        var view = this.getSeparacaoListarCarrinhoView();
        var store = Ext.getStore("carrinhoStore");
        var cm = this.getComponentManager('separacaoListarCarrinhoView');
        var documentoSearchfield = cm.getCtrl('documentoSearchfield');

        store.filter('Codigo', newValue);
        store.load(function (records, operation, success) {
            if (records.length == 1) {
                this.toViewListarItem(view.params.idDocumento, records[0].data.Id, true);
                documentoSearchfield.setValue('');
            }

        }, this);

        this.setFocusSearchfield('separacaoListarCarrinhoView');
    },

    separacaoListarCarrinhoView_btnSemCarrinho_onClick: function (button, e) {
        var view = this.getSeparacaoListarCarrinhoView();
        this.toViewListarItem(view.params.idDocumento, '00000000-0000-0000-0000-000000000000', true);
    },

    separacaoListarCarrinhoView_onItemsingletapCarrinhoSelecionado: function (sender, index, target, record, e, eOpts) {
        var view = this.getSeparacaoListarCarrinhoView();
        var store = Ext.getStore('documentoStore');
        var documento = store.getById(view.params.idDocumento);

        documento.set('idCarrinho', record.data.Id);
        store.sync();

        // console.log(record.data.Id);
        // console.log(documento);
        // console.log(store);

        this.toViewListarItem(view.params.idDocumento, record.data.Id, undefined);
    },

    separacaoListarCarrinhoView_onVoltarView: function (button, e) {
        var view = this.getSeparacaoListarItemDocumentoView();
        var router = this.getRouter();

        console.log(view.params.setCarrinho);

        if (view.params.setCarrinho === false) {
            console.log('indefinido');
            router.back();
        }
        else {
            console.log('definido');
            router.backTo(2);
        }
    },

    //VIEW: separacaoListarItemDocumentoView
    separacaoListarItemDocumentoView_onLoad: function (view) {
        var cm = this.getComponentManager('separacaoListarItemDocumentoView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        wmstoolbar.setTitle('Item');

        var store = Ext.getStore("itemDocumentoStore");
        store.filter('IdDocumento', view.params.idDocumento);
        store.load();

        if (view.message != undefined)
            cm.showMessage('messageTitlebar', view.message);

        this.setFocusSearchfield('separacaoListarItemDocumentoView');
        //add btn finalizar
        /*var botoes = [{
            xtype: 'button',
            itemId: 'finalizarButton',
            text: 'Finalizar',
            ui: 'confirm',
        }];*/
        var botoes = [];

        var storeSeparacao = Ext.getStore('documentoStore');
        storeSeparacao.filter("Id", view.params.idDocumento);
        storeSeparacao.load(function (records, operation, success) {
            var documento = this.getById(view.params.idDocumento);

            if (documento.get("IdUsuarioAtendente") != null) {
                if (cm.getCtrl("liberarButton") == undefined) {
                    botoes.push({
                        xtype: 'button',
                        itemId: 'liberarButton',
                        text: 'Liberar',
                        width: "150px",
                        ui: 'decline',
                    });
                } else {
                    cm.getCtrl("liberarButton").show();
                }
            } else if (cm.getCtrl("liberarButton") != undefined) {
                cm.getCtrl("liberarButton").hide();
            }
            cm.getCtrl("bottomContainer").add(botoes);
        });


        cm.getCtrl("finalizarButton").show();
        cm.getCtrl("bottomContainer").show();
    },

    separacaoListarItemDocumentoView_documentoSearchfield_onChange: function (sender, newValue, oldValue, eOpts) {
        var view = this.getSeparacaoListarItemDocumentoView();
        var store = Ext.getStore("itemDocumentoStore");
        store.filter('Codigo', newValue);

        store.load(function (records, operation, success) {
            if (records.length == 1)
                this.toViewLancar(records[0].data.Id, view.params.idCarrinho);

        }, this);

        this.setSelect(sender.element.dom);
    },

    separacaoListarItemDocumentoView_onItemsingletapItemDocumento: function (sender, index, target, record, e, eOpts) {
        var view = this.getSeparacaoListarItemDocumentoView();
        this.toViewLancar(record.data.Id, view.params.idCarrinho);
    },

    //VIEW: separacaoLancarView
    separacaoLancarView_onLoad: function (view) {
        var cm = this.getComponentManager('separacaoLancarView');
        var wmstoolbar = cm.getCtrl('wmstoolbar');
        var quantidade = cm.getCtrl('quantidadeTextField');
        var carrinho = cm.getCtrl('carrinhoSelectField');
        var itemDocumentoStore = Ext.getStore('itemDocumentoStore');
        var itemDocumentoModel = itemDocumentoStore.getById(view.params.idItemDocumento);
        var lancamentoSeparacaotoModel = Ext.create('WmsMobile.model.LancamentoSeparacao');

        wmstoolbar.setTitle('Lançar');
        lancamentoSeparacaotoModel.set('IdItemDocumento', itemDocumentoModel.get('Id'));
        lancamentoSeparacaotoModel.set('Descricao', itemDocumentoModel.get('Descricao'));
        lancamentoSeparacaotoModel.set('CodigoEndereco', itemDocumentoModel.get('CodigoEndereco'));
        lancamentoSeparacaotoModel.set('IdCarrinho', view.params.idCarrinho);
        lancamentoSeparacaotoModel.set('IdVolume', itemDocumentoModel.get('IdVolume'));
        lancamentoSeparacaotoModel.set('Quantidade', '');

        view.setRecord(lancamentoSeparacaotoModel);
        this.setFocus(quantidade);

        // console.log(view.params.idCarrinho);
        // console.log(lancamentoSeparacaotoModel.get('Carrinho'));

        if (view.params.idCarrinho == '')
            carrinho.setHidden(false);
        else
            carrinho.setHidden(true);
    },

    _separacaoLancarView_botaoConfirmar_onConfirmar: function (button, e) {
        var self = this;
        var cm = this.getComponentManager('separacaoLancarView');
        var botaoConfirmar = cm.getCtrl('botaoConfirmar');
        var view = this.getSeparacaoLancarView();
        var lancamentoSeparacaotoModel = view.getModel();
        var router = this.getRouter();

        console.log(lancamentoSeparacaotoModel);

        botaoConfirmar.setDisabled(true);

        var habilitar = function () { botaoConfirmar.setDisabled(false); };

        var sucesso = function (records, operation) {
            var message = Mensagem.getSucesso("Lançamento efetuado com sucesso!");
            self.getRouter().back(message);
            habilitar();
        };

        var falha = function (records, operation, response) {
            self.trataResponse(response, function () {
                var message = Mensagem.getErro(response.responseText);
                router.back(message);
                habilitar();
            });
        };

        if (lancamentoSeparacaotoModel.isValid())
            lancamentoSeparacaotoModel.salvar(sucesso, falha);
        else {
            self.showErrosFromModel(lancamentoSeparacaotoModel, cm);
            habilitar();
        }
    },

    separacaoLancarView_botaoConfirmar_onConfirmar: function (button, e) {
        var self = this;
        var view = this.getSeparacaoLancarView();
        var lancamentoSeparacaotoModel = view.getModel();
        this.usuarioPossuiPermissaoEndereco(lancamentoSeparacaotoModel.get('IdItemDocumento'),
            lancamentoSeparacaotoModel.get('CodigoEndereco'), function () {
                self._separacaoLancarView_botaoConfirmar_onConfirmar(button, e);
            }
        );
    },

    separacaoLancarView_botaoCancelar_onCancelar: function (button, e) {
        var self = this;
        var msg = Mensagem.getAlerta("O Lançamento foi cancelado")
        self.getRouter().back(msg);
    },

    //FUNÇÕES

    usuarioPossuiPermissaoArea: function (idItemDocumento, callBack) {
        var UsuarioPossuiPermissaoArea = Ext.ModelManager.getModel('WmsMobile.model.UsuarioPossuiPermissaoArea');
        var _response;

        var sucesso = function (records, operation) {
            console.log(records);
            console.log(operation);
            if (operation._response.responseText == "\"True\"") callBack();
            else Ext.Msg.alert('Acesso negado!', 'Você não possui acesso a este produto.');
        };

        var falha = function (records, operation, response) {
            self.trataResponse(response, function () {
                var message = JSON.parse(_response.responseText);
                Ext.Msg.alert('Estoque', message.ExceptionMessage);
            });
        };

        UsuarioPossuiPermissaoArea.getProxy().on("exception", function(proxy, response) {
            _response = response;

        }, UsuarioPossuiPermissaoArea, {single:true});

        UsuarioPossuiPermissaoArea.load(idItemDocumento, {
            success: sucesso,
            failure: function(records, operation){
                falha(records, operation, _response);
            }
        });
    },

    usuarioPossuiPermissaoEndereco: function (idItemDocumento, idEndereco, callBack) {
        var UsuarioPossuiPermissaoEndereco = Ext.ModelManager.getModel('WmsMobile.model.UsuarioPossuiPermissaoEndereco');
        var _response;

        var sucesso = function (records, operation) {
            if (operation._response.responseText == "\"True\"") callBack();
            else Ext.Msg.alert('Acesso negado!', 'Você não possui acesso a este endereço.');
        };

        var falha = function (records, operation, response) {
            self.trataResponse(response, function () {
                var message = JSON.parse(_response.responseText);
                Ext.Msg.alert('Erro', message.ExceptionMessage);
            });
        };

        UsuarioPossuiPermissaoEndereco.getProxy().on("exception", function(proxy, response) {
            _response = response;

        }, UsuarioPossuiPermissaoEndereco, {single:true});

        UsuarioPossuiPermissaoEndereco.load(idItemDocumento + '/' + idEndereco, {
            success: sucesso,
            failure: function(records, operation){
                falha(records, operation, _response);
            }
        });
    },

    _toViewLancar: function (idItemDocumento, idCarrinho) {
        var router = this.getRouter();
        var lancarView = this.getSeparacaoLancarView();
        var listarItemView = this.getSeparacaoListarItemDocumentoView();

        router.params = {
            idItemDocumento: idItemDocumento,
            idDocumento: listarItemView.params.idDocumento,
            idCarrinho: idCarrinho
        };

        router.changeView(lancarView);
    },

    toViewLancar: function (idItemDocumento, idCarrinho) {
        self = this;
        // Verificando se o usuário possui permissão em alguma área que contenha o produto
        this.usuarioPossuiPermissaoArea(idItemDocumento, function () {
            self._toViewLancar(idItemDocumento, idCarrinho);
        });
    },

    toViewListarItem: function (idDocumento, idCarrinho, setCarrinho) {
        var router = this.getRouter();
        var listarView = this.getSeparacaoListarItemDocumentoView();
        router.params = {
            idDocumento: idDocumento,
            idCarrinho: idCarrinho,
            setCarrinho: setCarrinho
        };
        router.changeView(listarView);

        var store = Ext.getStore('documentoStore');
        var documento = store.getById(idDocumento);
        documento.set('idCarrinho', idCarrinho);
        store.sync();

        console.log('idCarrinho: ' + documento.get('idCarrinho'));
    },

    toViewListarCarrinho: function (idDocumento) {
        var router = this.getRouter();
        var store = Ext.getStore('documentoStore');
        var documento = store.getById(idDocumento);
        // console.log('idCarrinho: ' + documento.get('idCarrinho'));

        var idCarrinho = documento.get('idCarrinho');
        if (idCarrinho == '00000000-0000-0000-0000-000000000000' || idCarrinho == null || idCarrinho == undefined) {
            var listarCarrinho = this.getSeparacaoListarCarrinhoView();
            router.params = {
                idDocumento: idDocumento
            };
            router.changeView(listarCarrinho);
        }
        else
            this.toViewListarItem(idDocumento, documento.get('idCarrinho'), false);
    },

});