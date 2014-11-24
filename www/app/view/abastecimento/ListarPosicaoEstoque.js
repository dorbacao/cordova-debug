Ext.define('WmsMobile.view.abastecimento.ListarPosicaoEstoque', {
    extend: 'WmsMobile.component.ViewList',
    alias: 'widget.abastecimentoListarPosicaoEstoqueView',

	load:function(){},

    config:{
        itemTpl:'<b>Prd.:</b> {DescricaoProduto}</br><b>Qtd.:</b>{Quantidade}<b> {UnidadeMedida}</b><tpl if="DataVencimento"></br><b>Venc.:</b> {DataVencimento}</tpl><tpl if="Lote"></br><b>Lote.:</b> {Lote}</tpl><tpl if="NumeroSerie"></br><b>Nº Serie:</b>{NumeroSerie}</tpl>',
    	store:'posicaoEstoqueStore',
        emptyText:'Não há Estoques registrados para este produto no endereco informado',

        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        }
    }
});
