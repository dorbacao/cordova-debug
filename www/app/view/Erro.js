Ext.define('WmsMobile.view.Erro', {
    extend:'WmsMobile.component.form.WmsPanel',
    alias: 'widget.erroView',

    config:{

        items:[

            {
                xtype: 'fieldset',
                title: 'Erro',
                id: 'dadosDocumento',
                //instructions: 'Informe a quantidade e o Vencimento.',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'CodigoErro',
                        label: 'Codigo',
                        value:'0',
                    },
                    {
                        xtype: 'textareafield',
                        name : 'Descricao',
                        value:'comunication failure: Erro ao estabelecer conexão com o servidor',
                        label: 'Descrição',
                    },
                    {
                        xtype: 'textfield',
                        name : 'EnderecoServidor',
                        value:'127.0.0.1',
                        label: 'Servidor',
                    },
                    {
                        xtype: 'textfield',
                        name : 'PortaServidor',
                        value:'9967',
                        label: 'Porta',
                    },
                    {
                        xtype: 'togglefield',
                        name: 'verified',
                        label: 'Status',
                        value: 1,
                    },
                ]
            },
             {
                xtype:'container',
                layout:{
                    type:'hbox',
                },
                items:[
                {xtype:'spacer', width:'10px'},
                    {
                        xtype:'button',
                        name:'botaoConfirmar',
                        itemId:'testarButton',
                        text:'Testar',
                        ui: 'confirm',
                        width:'45%'
                    },
                    {xtype:'spacer', width:'10px'},
                    {
                        xtype:'button',
                        name:'reiniciarButton',
                        itemId:'reiniciarButton',
                        text:'Reiniciar',
                        ui: 'confirm',
                        width:'45%'
                    },
                    {xtype:'spacer', width:'10px'}
                ]
            }
        ]
    }
});