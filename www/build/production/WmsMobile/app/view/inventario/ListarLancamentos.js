var itemTemplate = 
'<b>Volume:</b> {DescricaoVolume}</br>' +
'<b>Endereço:</b> {DescricaoEndereco}</br>' +
'<b>Quantidade:</b> {QuantidadeLancada}</br>' +
'<b>Data e Hora:</b>{DataHora}<b>';

Ext.define('WmsMobile.view.inventario.ListarLancamentos', {
    extend: 'WmsMobile.component.ViewBase',
    alias: 'widget.inventarioListarLancamentosView',

    load:function(){},

    config:{
        itemTpl:itemTemplate,
        store:'lancamentosInventarioStore',
        emptyText:'Não há lançamentos a serem listados.',
        styleHtmlCls:'listaStatusContainer',
        itemId: 'listInventarioListarLancamentosView',

        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        },

        items:
        [
        {
            xtype:'wmstoolbar',
            id:'wmstoolbar'
        },
        {
            xtype:'titlebar',
            id:'messageTitlebar',
            title:'Cadastrado com sucesso!',
            ui:'yellow',
            style: "background-color: #DCF0BA;display:none;font-size:10px;heigth:30px;",
            docked:'top',
            layout:{
                pack:'end',
                type:'hbox'
            },
        },
        {
            xtype:'titlebar',
            itemId:'meuBottomContainer',
            ui:'neutral',
            items:[
                {
                    xtype:'button',
                    itemId: 'lancarButton',
                    text:'Novo Lançamento',
                    width:'150px',
                    ui:'action',
                },
                {
                    xtype:'button',
                    itemId: 'finalizarButton',
                    text:'Finalizar',
                    width:'150px',
                    ui:'confirm',
                }
            ],
            docked:'bottom',
            layout:{
                type:'vbox',
                pack:'center',
                align :'middle'
            }
        }]
    }
});
