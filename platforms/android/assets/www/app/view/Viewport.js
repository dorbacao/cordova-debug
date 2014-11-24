Ext.define('WmsMobile.view.Viewport', {
    extend: 'Ext.Container',
    alias: 'widget.viewport',
    fullscreen: true,

    requires: [

        'WmsMobile.view.Erro',

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

        'WmsMobile.view.inventario.ListarProdutos',
        'WmsMobile.view.inventario.ListarEnderecos',
        'WmsMobile.view.inventario.ListarLancamentos',
        'WmsMobile.view.inventario.ListarPlanejadosPorProduto',
        'WmsMobile.view.inventario.ListarPlanejadosPorEndereco',
        'WmsMobile.view.inventario.LancarInventarioProduto',
        'WmsMobile.view.inventario.LancarInventarioEndereco',

        'WmsMobile.view.movimentacao.ListarProdutos',
        'WmsMobile.view.movimentacao.ListarOrigem',
        'WmsMobile.view.movimentacao.ListarDestino',

        'WmsMobile.view.abastecimento.Lancar',
        'WmsMobile.view.abastecimento.ListarEndereco',
        'WmsMobile.view.abastecimento.ListarItemDocumento',
        'WmsMobile.view.abastecimento.ListarProdutos',
        'WmsMobile.view.abastecimento.ListarEnderecosOrigem',
        'WmsMobile.view.abastecimento.ListarEnderecosPicking',
        'WmsMobile.view.abastecimento.ListarPosicaoEstoque',

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
            {xtype: 'erroView'},
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
            {
                xtype: 'abastecimentoListarProdutosView'
            },
            {
                xtype: 'abastecimentoListarEnderecosOrigemView'
            },
            {
                xtype: 'abastecimentoListarEnderecosPickingView'
            },
            {
                xtype: 'abastecimentoListarPosicaoEstoqueView'
            },
            //Controller: Movimentacao
            {
                xtype: 'movimentacaoListarProdutosView'
            },
            {
                xtype: 'movimentacaoListarOrigemView'
            },
            {
                xtype: 'movimentacaoListarDestinoView'
            },
            //Controller: Inventario
            {
                xtype: 'inventarioListarPlanejadosPorProdutoView'
            },
            {
                xtype: 'inventarioListarPlanejadosPorEnderecoView'
            },
            {
                xtype: 'inventarioListarProdutosView'
            },
            {
                xtype: 'inventarioListarEnderecosView'
            },
            {
                xtype: 'inventarioLancarInventarioProdutoView'
            },
            {
                xtype: 'inventarioLancarInventarioEnderecoView'
            },
            {
                xtype: 'inventarioListarLancamentosView'
            }
        ]
    }
});