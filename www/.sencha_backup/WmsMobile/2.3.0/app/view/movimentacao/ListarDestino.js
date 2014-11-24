Ext.define('WmsMobile.view.movimentacao.ListarDestino', {
    extend: 'WmsMobile.component.form.WmsPanel',
    alias: 'widget.movimentacaoListarDestinoView',

    load:function(){},

    config:{
        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        },

        items:[
            {
                xtype:'wmstoolbar',
                id:'wmstoolbar'
            },
            {
                xtype: 'fieldset',
                title: 'Dados do movimento',
                id: 'dadosDestino',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'NomeProduto',
                        id: 'descricaoTextField',
                        label: 'Desc.:',
                        disabled: true
                    },
                    {
                        xtype: 'wmstextfield',
                        name : 'Quantidade',
                        itemId : 'quantidadeTextField',
                        label: 'Qtd.:',
                        minValue: 1,
                        required: true,
                        placeHolder: 'Informe a quantidade',
                        disabled: true
                    },
                     {
                        xtype: 'datepickerfield',
                        destroyPickerOnHide: true,
                        name : 'Vencimento',
                        id:'vencimentoTextField',
                        label: 'Venc.:',
                        value: null,
                        dateFormat: 'd-m-Y',
                        required:false,
                        placeHolder: 'validade',
                        picker:
                        {
                            //yearTo: parseInt(Ext.Date.format(new Date(), 'Y'), 10)
                            yearFrom: new Date().getFullYear(),
                            slotOrder: ['day', 'month', 'year'],
                            yearTo: new Date().getFullYear() + 5
                        }
                    },
                    {
                        xtype: 'wmstextfield',
                        name : 'Lote',
                        itemId : 'loteTextField',
                        label: 'Lote:',
                        //minValue: 1,
                        required: false,
                        placeHolder: 'Informe o Lote',
                        disabled: false
                    },
                    {
                        xtype: 'wmstextfield',
                        name : 'NumeroSerie',
                        itemId : 'numeroSerieTextField',
                        label: 'N. Serie:',
                        //minValue: 1,
                        required: true,
                        placeHolder: 'Informe o N. Serie',
                        disabled: false
                    },
                    {
                        xtype: 'textfield',
                        name : 'CodigoEnderecoOrigem',
                        itemId: 'CodigoEnderecoOrigem',
                        placeHolder: 'Informe a origem',
                        label: 'Origem:',
                        required: true,
                        disabled: true
                    },
                    {
                        xtype: 'textfield',
                        name : 'CodigoEnderecoDestino',
                        itemId : 'CodigoEnderecoDestino',
                        placeHolder: 'Informe o destino',
                        label: 'Destino:',
                        disabled: true,
                        required: true,
                    },
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