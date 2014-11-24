Ext.define('WmsMobile.view.movimentacao.ListarDestino', {
    extend: 'Ext.form.Panel',
    alias: 'widget.movimentacaoListarDestinoView',

    load:function(){
        var wmstoolbar = Ext.ComponentQuery.query('movimentacaoListarDestinoView #wmstoolbar');
        wmstoolbar[0].setTitle('Destino');
    },

    config:{
        items:[
            {
                xtype:'wmstoolbar',
                id:'wmstoolbar'
            },
            {
                xtype: 'fieldset',
                title: 'Dados da Destino',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'produto',
                        label: 'Prod.:',
                        value: '#45689 - Mouse Microsoft',
                        disabled: true
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Destino:',
                        name: 'destino',
                        store: 'enderecoStore',
                        displayField: 'item_name',
                        valueField: 'item_id',
                        placeHolder: 'Select a Value'
                    }
                ]
            },
            {
                xtype:'container',
                layout:{
                    type:'hbox',
                },
                items:[
                    {
                        xtype:'spacer',
                        width:'4px'
                    },
                    {
                        xtype:'button',
                        name:'botaoConfirmar',
                        itemId:'botaoConfirmar',
                        text:'Confirmar',
                        ui: 'confirm',
                        width:'48%',
                    },
                    {
                        xtype:'spacer',
                        width:'4px'
                    },
                    {
                        xtype:'button',
                        name:'botaoCancelar',
                        itemId:'botaoCancelar',
                        text:'Cancelar',
                        ui: 'decline',
                        width:'48%',
                    },
                    {
                        xtype:'spacer',
                        width:'4px'
                    },
                ]
            }
        ]
    }
});