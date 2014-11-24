Ext.define('WmsMobile.view.Login', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',

    config: {
        padding: '10px',
        styleHtmlContent: true,

        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'WMS (POC)'
            },
            {
                xtype: 'label',
                hidden: true,
                hideAnimation: 'fadeOut',
                html: 'Por favor, entre com as credenciais corretas',
                itemId: 'failmsg',
                showAnimation: 'fadeIn',
                style: 'color: #990000; margin:5px 0px;'
            },
            {
                xtype: 'fieldset',
                title: 'Login',
                items: [
                    {
                        xtype: 'wmstextfield',
                        itemId: 'user',
                        id:'txtLogin',
                        required: true,
                        placeHolder: 'usuário',
                        value:'admin',
                        hasFocus:true
                    },
                    {
                        xtype: 'passwordfield',
                        itemId: 'pass',
                        value:'123456',
                        required: true,
                        placeHolder: 'senha'

                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'loginbtn',
                padding: '10px',
                ui: 'action-round',
                height:'50px',
                text: 'Entrar'
            }
        ]
    },

    showSignInFailedMessage: function(message) {
        var label = this.down('#failmsg');
        label.setHtml(message);
        label.show();
    }

});