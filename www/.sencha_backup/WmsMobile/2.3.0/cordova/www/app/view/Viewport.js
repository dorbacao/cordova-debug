
Ext.define('WmsMobile.view.Viewport', {
    extend: 'Ext.Container',
    alias: 'widget.viewport',
    fullscreen:true,

    requires: [

        'WmsMobile.component.ViewBase',

        'WmsMobile.view.Login',
        'WmsMobile.view.Main',

        'WmsMobile.view.recebimento.Lancar',
        'WmsMobile.view.recebimento.ListarDocumento',
        'WmsMobile.view.recebimento.ListarItemDocumento',

        'WmsMobile.view.enderecamento.Lancar',
        'WmsMobile.view.enderecamento.ListarDocumento',
        'WmsMobile.view.enderecamento.ListarItemDocumento',

        'WmsMobile.view.separacao.Lancar',
        'WmsMobile.view.separacao.ListarDocumento',
        'WmsMobile.view.separacao.ListarItemDocumento',
        'WmsMobile.view.separacao.ListarCarrinho',

        'WmsMobile.view.expedicao.Lancar',
        'WmsMobile.view.expedicao.ListarDocumento',
        'WmsMobile.view.expedicao.ListarItemDocumento',
        'WmsMobile.view.expedicao.ImpressaoEtiqueta',

        'WmsMobile.view.inventario.ListarPlanejados',
        'WmsMobile.view.inventario.ListarProdutos',
        'WmsMobile.view.inventario.ListarEnderecos',
        'WmsMobile.view.inventario.LancarInventarioProduto',

        'WmsMobile.view.movimentacao.ListarProdutos',
        'WmsMobile.view.movimentacao.ListarOrigem',
        'WmsMobile.view.movimentacao.ListarDestino',
        // 'WmsMobile.view.movimentacao.ListarProdutosPlanejados',
        // 'WmsMobile.view.movimentacaoPlanejadaHoje.Listar',

        // 'WmsMobile.view.movimentacaoPlanejadaFutura.Produto',
        // 'WmsMobile.view.movimentacaoPlanejadaFutura.Listar',

        'WmsMobile.view.abastecimento.Lancar',
        'WmsMobile.view.abastecimento.ListarEndereco',
        'WmsMobile.view.abastecimento.ListarItemDocumento',

        'WmsMobile.view.Main',
    ],

    config: {

        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'loginform'
            },
            {
                xtype: 'mainpanel'
            },
            //Controller: Recebimento
            {
                xtype: 'recebimentoListarView'
            },
            {
                xtype: 'recebimentoListarItemDocumentoView'
            },
            {
                xtype: 'recebimentoLancarView'
            },
            //Controller: Enderecamento
            {
                xtype: 'enderecamentoListarView'
            },
            {
                xtype: 'enderecamentoListarItemDocumentoView'
            },
            {
                xtype: 'enderecamentoLancarView'
            },
            //Controller: Separação
            {
                xtype: 'separacaoListarView'
            },
            {
                xtype: 'separacaoListarItemDocumentoView'
            },
            {
                xtype: 'separacaoLancarView'
            },
            {
                xtype: 'separacaoListarCarrinhoView'
            },
            //Controller: Expedição
            {
                xtype: 'expedicaoListarView'
            },
            {
                xtype: 'expedicaoListarItemDocumentoView'
            },
            {
                xtype: 'expedicaoLancarView'
            },
            {
                xtype: 'expedicaoImpressaoEtiqueta'
            },
            //Controller: Abastecimento
            {
                xtype: 'abastecimentoLancarView'
            },
            {
                xtype: 'abastecimentoListarEnderecoView'
            },
            {
                xtype: 'abastecimentoListarItemDocumentoView'
            },
            {
                xtype: 'abastecimentoLancarView'
            },
            //Controller: Movimentacao
            // {
            //     xtype: 'movimentacaoAvulsaOrigemView'
            // },
            {
                xtype: 'movimentacaoListarProdutosView'
            },
            {
                xtype: 'movimentacaoListarOrigemView'
            },
            {
                xtype: 'movimentacaoListarDestinoView'
            },
            // {
            //     xtype: 'movimentacaoListarProdutosPlanejadosView'
            // },
            // {
            //     xtype: 'movimentacaoPlanejadaHojeListarView'
            // },
            // {
            //     xtype: 'movimentacaoPlanejadaHojeProdutoView'
            // },
            // {
            //     xtype: 'movimentacaoPlanejadaListarView'
            // },
            //Controller: Inventario
            {
                xtype: 'inventarioListarPlanejadosView'
            },
            {
                xtype: 'inventarioListarProdutosView'
            },
            {
                xtype: 'inventarioListarEnderecosView'
            },
            {
                xtype: 'inventarioLancarInventarioProdutoView'
            }

        ]
    }

});