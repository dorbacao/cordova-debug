Ext.define('WmsMobile.controller.Main', {
    extend: 'WmsMobile.controller.ControllerBase',

    config: {
        refs: {
            loginForm: {
                selector: 'loginform',
                xtype: 'Ext.form.Panel'
            },
            mainPanel: {
                selector: 'mainpanel',
                xtype: 'Ext.Panel'
            },
            recebimentoListarView: {
                selector: 'recebimentoListarView',
                xtype: 'Ext.List'
            },
            enderecamentoListarView: {
                selector: 'enderecamentoListarView',
                xtype: 'Ext.List'
            },
            separacaoListarView: {
                selector: 'separacaoListarView',
                xtype: 'Ext.List'
            },
            expedicaoListarView: {
                selector: 'expedicaoListarView',
                xtype: 'Ext.List'
            },
            abastecimentoListarEnderecoView: {
                selector: 'abastecimentoListarEnderecoView',
                xtype: 'Ext.List'
            },
            movimentacaoListarProdutosView: {
                selector: 'movimentacaoListarProdutosView',
                xtype: 'Ext.List'
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
            abastecimentoListarProdutosView: {
                selector: 'abastecimentoListarProdutosView',
                xtype: 'Ext.List'
            }

            

        },

        control: {
            "loginform #loginbtn": {
                tap: 'onLogInButtonTap'
            },
            "mainpanel #menuPrincipal": {
                itemtap: 'onMenuItemTap'
            }
            ,
            "mainpanel": {
                load: 'mainpanel_onLoad'
            }
        }
    },

    mainpanel_onLoad:function(view){


    },

    onMenuItemTap: function(button, e, eOpts, target, record, event) {
        console.log("onTap");

        switch(record.raw.codigo)
        {

            case ItemMenuEnum.Recebimento:
                this.onMenuItemRecebimentoTap(button, e);
                break;

            case ItemMenuEnum.Enderecamento:
                this.onMenuItemEnderecamentoTap(button, e);
                break;

            case ItemMenuEnum.Movimentacao:
                //Não necessita de implementação, navegação será feita pelo NestedList
                break;

            case ItemMenuEnum.MovimentacaoAvulsa:
                this.onMenuItemMovimentacaoAvulsaTap(button, e);
                break;

            case ItemMenuEnum.MovimentacaoPlanejada:
                this.onMenuItemMovimentacaoPlanejadaTap(button, e);
                break;

            case ItemMenuEnum.Separacao:
                this.onMenuItemSeparacaoTap(button, e);
                break;

            case ItemMenuEnum.Abastecimento:
                this.onMenuItemAbastecimentoTap(button, e);
                break;

            case ItemMenuEnum.Expedicao:
                this.onMenuItemExpedicaoTap(button, e);
                break;

            case ItemMenuEnum.Inventario:
                //Não necessita de implementação, navegação será feita pelo NestedList
                break;

            case ItemMenuEnum.InventarioAvulso:
                //Não necessita de implementação, navegação será feita pelo NestedList
                break;

            case ItemMenuEnum.InventarioAvulsoPorProduto:
                //this.onMenuInventarioAvulsoPorProdutoTap(button,e);

                break;

            case ItemMenuEnum.InventarioAvulsoPorEndereco:
                //this.onMenuInventarioAvulsoPorEnderecoTap(button,e);
                break;

            case ItemMenuEnum.InventarioPlanejado:
                //Não necessita de implementação, navegação será feita pelo NestedList
                break;

            case ItemMenuEnum.InventarioPlanejadoPorProduto:
                this.onMenuInventarioPlanejadoPorProdutoTap(button,e);
                break;

            case ItemMenuEnum.InventarioPlanejadoPorEndereco:
                this.onMenuInventarioPlanejadoPorEnderecoTap(button,e);
                break;

            case ItemMenuEnum.Consultas:
                this.onMenuItemConsultasTap(button, e);
                break;

            default:
                throw "o index do menu deve compreender entre 0 - 7";
        }

    },

    onMenuItemRecebimentoTap:function(button, e){
        var router = this.getRouter();
        var listarView = this.getRecebimentoListarView();
        router.params = {id:1};
        router.changeView(listarView);
    },

    onMenuItemEnderecamentoTap:function(button, e){
        var router = this.getRouter();
        var listarView = this.getEnderecamentoListarView();
        router.changeView(listarView);
    },

    onMenuItemMovimentacaoAvulsaTap:function(button, e){
        var router = this.getRouter();
        var listarView = this.getMovimentacaoListarProdutosView();
        router.params = { tipo:ItemMenuEnum.MovimentacaoAvulsa };
        router.changeView(listarView);
    },

    onMenuItemMovimentacaoPlanejadaTap:function(button, e){
        var router = this.getRouter();
        var listarView = this.getMovimentacaoListarProdutosView();
        router.params = { tipo:ItemMenuEnum.MovimentacaoPlanejada };
        router.changeView(listarView);
    },

    onMenuItemSeparacaoTap:function(button, e){
        var router = this.getRouter();
        var listarView = this.getSeparacaoListarView();
        router.changeView(listarView);
    },

    onMenuItemAbastecimentoTap:function(button, e){
        var router = this.getRouter();
        var listarView = this.getAbastecimentoListarProdutosView();
        router.changeView(listarView);
    },

    onMenuItemExpedicaoTap:function(button, e){
        var router = this.getRouter();
        var listarView = this.getExpedicaoListarView();
        router.changeView(listarView);
    },

    onMenuInventarioAvulsoPorProdutoTap:function(button, e){
        var router = this.getRouter();
        var listarView = this.getInventarioListarProdutosView();
        listarView.params = { tipo:ItemMenuEnum.InventarioAvulsoPorProduto };
        router.changeView(listarView);
    },

    onMenuInventarioAvulsoPorEnderecoTap:function(button, e){
        var router = this.getRouter();
        var listarView = this.getInventarioListarEnderecosView();
        listarView.params = { tipo:ItemMenuEnum.InventarioAvulsoPorEndereco };
        router.changeView(listarView);
    },

    onMenuInventarioPlanejadoPorProdutoTap:function(button, e){
        this.onMenuInventarioPlanejado(button, e, ItemMenuEnum.InventarioPlanejadoPorProduto);
    },

    onMenuInventarioPlanejadoPorEnderecoTap:function(button, e){
        this.onMenuInventarioPlanejado(button, e, ItemMenuEnum.InventarioPlanejadoPorEndereco);
    },

    onMenuInventarioPlanejado:function(button, e, idTipo){
        var router = this.getRouter();
        var listarView = this.getInventarioListarPlanejadosView();
        router.params = {tipo:idTipo};
        router.changeView(listarView);  
    },

    onMenuItemConsultasTap:function(button, e){
        throw Exception.NotImplementedException;
    },

    onLogInButtonTap: function(button, e, eOpts) {
        var form = button.up('loginform'),
            user = form.down('#user'),
            pass = form.down('#pass'),
            label = form.down('#failmsg'),
            me = this;

        label.hide();

        var userName = user.getValue(),
            password = pass.getValue();

        var task = Ext.create('Ext.util.DelayedTask', function () {
            label.setHtml('');
            me.onSignInCommand(form, userName, password);
            user.setValue('');
            pass.setValue('');
        });

        task.delay(0);
    },

    onLogOutButtonTap: function(button, e, eOpts) {
        var me = this,
            login = me.getLoginForm(),
            myViewport = me.getMyViewport();

        myViewport.animateActiveItem(login, {type: 'slide', direction: 'right'});
    },

    onSignInCommand: function(login, username, password) {
        var me = this;

        if (username.length === 0 || password.length === 0) {
            login.showSignInFailedMessage('Por favor, informe seu usuário e senha.');
            return;
        }

        login.setMasked({
            xtype: 'loadmask',
            message: 'Signing In...'
        });

        if (username.length > 0 || password.length > 0) {
            me.signInSuccess();
        }
    },

    signInSuccess: function() {
        var me = this,
            login = me.getLoginForm(),
            mainPanel = me.getMainPanel(),
            myViewport = me.getViewport();

        login.setMasked(false);
        myViewport.animateActiveItem(mainPanel, {type: 'slide', direction: 'left'});
    }

});