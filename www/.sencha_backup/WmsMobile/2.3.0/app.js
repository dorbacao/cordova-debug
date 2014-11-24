Ext.Loader.setConfig({
    enabled: true
});

Ext.define('StackRouter',{
    singleton:true,

    stack:[],

    constructor: function (config) {
        this.initConfig(config);
        this.callParent([config]);
    },

    push:function(view){
        StackRouter.stack.push(view);
    },

    pull:function(){
        var index = StackRouter.stack.length-1;
        var item = StackRouter.stack[index];

        StackRouter.stack.splice(index);

        return item;
    },

    length:function(){
        return StackRouter.stack.length;
    }
});

Ext.define('Rotas',{
    singleton:true,
    rotas:[],

    quando:function(caminhoAmigavel){
        var self = this;

        var retorno = {
            considere: function(caminhoConvencionado){
                self.rotas.push(
                {
                    quando:caminhoAmigavel,
                    considere:caminhoConvencionado
                });

                return self;
            }
        };

        return retorno;
    },

    getViewName:function(caminhoAmigavel)
    {
        var viewName = "WmsMobile.view.{replace}";

        for (var i = 0; i < Rotas.rotas.length; i++) {
            var rota = Rotas.rotas[i];
            if(rota.quando == caminhoAmigavel)
                return viewName
                    .replace("{replace}",rota.considere);
        };
    },

    getXtypeName:function(caminhoAmigavel){
        var nomeCompletoDaView = Rotas.getViewName(caminhoAmigavel);
        return Ext.create(nomeCompletoDaView).xtype;
    }

});



Ext.define('ItemMenuEnum',{
    singleton:true,

    Recebimento:'0',
    Enderecamento:'1',
    Movimentacao:'2',
    MovimentacaoAvulsa:'2.0',
    MovimentacaoPlanejada:'2.1',
    MovimentacaoPlanejadaHoje:'2.1.0',
    MovimentacaoPlanejadaFutura:'2.1.1',
    Separacao:'3',
    Abastecimento:'4',
    Expedicao:'5',
    Inventario:'6',
    InventarioAvulso:'6.0',
    InventarioAvulsoPorProduto:'6.0.0',
    InventarioAvulsoPorEndereco:'6.0.1',
    InventarioPlanejado:'6.1',
    InventarioPlanejadoPorProduto:'6.1.0',
    InventarioPlanejadoPorEndereco:'6.1.1',
    Consultas:'7',
});


Ext.define('Enums.StatusDocumento',{
    singleton:true,

    EmRecebimento:1,
    EmEnderecamento:2,
    EmSeparacao:3,
    EmExpedicao:4,
    EmInventario: 7
});


Ext.define('Enums.TipoDeLancamento',{
    singleton:true,

    Planejado:0,
    Avulso:1,
});


Ext.define('Enums.TipoEndereco',{
    singleton:true,
    Picking:0,
});

Ext.define('Mensagem',{
    singleton:true,

    Alerta:0,
    Sucesso:1,
    Erro:2,
    Informacao:3,

    _get:function(_texto, _tipo){
        return {text:_texto, tipo:_tipo};
    },
    getSucesso:function(texto){
        return Mensagem._get(texto, Mensagem.Sucesso);
    },
    getErro:function(texto){
        return Mensagem._get(texto, Mensagem.Erro);
    },
    getInfo:function(texto){
        return Mensagem._get(texto, Mensagem.Informacao);
    },
    getAlerta:function(texto){
        return Mensagem._get(texto, Mensagem.Alerta);
    }
});


Ext.define('LoggerBase',{

    _log:function(message, t){
        var logArray = this.provider.getData();

        logArray.push({mensagem:message, tipo:t, data:new Date()});

        this.provider.setData(logArray);
    },

    logInfo:function(message){
        this._log(message, "info");
    },

     logErro:function(message){
        this._log(message, "erro");
    },

});

Ext.define('Logger',{
    extend:'LoggerBase',

    provider:{
        getData:function(){

            if(localStorage.log == undefined)
                localStorage.log = "[]";

            if(localStorage.log == '')
                localStorage.log = "[]";

            return eval('(' + localStorage.log + ')');
        },

        setData:function(logArray){
            localStorage.log = JSON.stringify(logArray);
        },
    },
});

Ext.define('Exception',{
    singleton:true,
    requires:['Logger'],
    constructor:function(){
        this.logger = Ext.create('Logger')
    },

    NotImplementedException:"Método ainda não foi implementado",
    InvalidArgumentException:"O valor informado no parâmetro é de um tipo inválido",
    ArgumentNullException:"O valor informado no parâmetro é inválido",

    throwSeNaoForNumero:function(numero){
        if(isNaN(numero))
            throw Exception.InvalidArgumentException;
    },
    throwSeForNull:function(object){
        if(object == null)
            throw Exception.ArgumentNullException;
    },
    throwSeNaoForFunction:function(object){
        if((typeof object)  == 'function')
            throw Exception.InvalidArgumentException;
    },

    catchAllErros:function(){
        window.onerror = function(message, url, lineNumber) {
            var msg = '===Mensagem===<br/>' + message + '<br/>===Local===<br/>' + url + '\n<br/>Line: ' + lineNumber;
            var titulo = 'Oppss... Que constrangimento';
            Ext.Msg.alert(titulo, msg);

            Exception.logger.logErro(message);

            return true;
        };
    },

    logger:null,
});

Ext.application({
    name: 'WmsMobile',

    requires: [
        'Ext.MessageBox',
        'Ext.Toolbar',
        'Ext.Label',
        'Ext.List',
        'Ext.form.FieldSet',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.field.Password',
        'Ext.util.DelayedTask',
        'Ext.util.Filter',
        'Ext.field.Number',
        'Ext.field.TextArea',
        'Ext.field.Hidden',
        'Ext.field.Radio',
        'Ext.field.Checkbox',
        'Ext.field.Select',
        'Ext.field.Toggle',
        'WmsMobile.Config',

        /*Componentes customizados*/
        'WmsMobile.component.field.Text',
        'WmsMobile.component.Toolbar',
        'WmsMobile.component.ViewList',
        'WmsMobile.component.form.WmsPanel',
    ],

    views: [
        'Viewport',
    ],

    controllers:[
        'Abastecimento',
        'ControllerBase',
        'Enderecamento',
        'Expedicao',
        'Inventario',
        'Main',
        'Movimentacao',
        'Recebimento',
        'Separacao',
    ],

    models:[
        'Abastecimento',
        'AbastecimentoFinalizado',
        'Avaria',
        'Carrinho',
        'Documento',
        'Endereco',
        'ItemDocumento',
        'ItemMenuEnum',
        'InventarioPorProduto',
        'InventarioPorEndereco',
        'Lancamento',
        'LancamentoAbastecimento',
        'LancamentoEnderecamento',
        'LancamentoExpedicao',
        'LancamentoInventario',
        'LancamentoInventarioPorProduto',
        'LancamentoInventarioPorEndereco',
        'LancamentoRecebimento',
        'LancamentoSeparacao',
        'PosicaoEstoque',
        'ListItem',
        'Log',
        'Menu',
        'Movimentacao',
        'Inventario',
        'Produto',
        'Select',
        'StackRouter',
        'StatusDocumento',
        'Usuario',
        'DocumentoFinalizado',
        'UsuarioPossuiPermissaoArea'
    ],

    stores:[
        'Abastecimento',
        'AbastecimentoFinalizado',
        'Avaria',
        'Carrinho',
        'Documento',
        'Endereco',
        'EnderecoAbastecimento',
        'EnderecoInventario',
        'ItemDocumento',
        'InventarioPorProduto',
        'InventarioPorEndereco',
        'Lancamento',
        'LancamentoInventario',
        'PosicaoEstoque',
        'Log',
        'Movimentacao',
        // 'Inventario',
        'Produto',
        'TreeMenu',
        'Usuario',
        'DocumentoFinalizado',
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    configRoutes:function(){
        Rotas
        .quando('inventario/listar')
            .considere('inventario.ListarPlanejadosPorProduto')
        .quando('inventario/produtos')
            .considere('inventario.ListarProdutos');
    },


    launch: function() {
        Exception.catchAllErros();
        this.configRoutes();

        Ext.apply(Ext.util.Format, {
            naoInformado: function(value) {
                return value !== undefined && value != null && value != '' ? value : 'Não Informado';
            },
            naoControla: function(value) {
                return value !== undefined && value != null && value != '' ? value : 'Não Controla';
            },
        });

        // Destroy the #appLoadingIndicator element
        if(Ext.fly('appLoadingIndicator').destroy != undefined)
            Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        var myViewport = Ext.create('WmsMobile.view.Viewport');

        Ext.Viewport.add(myViewport);
    },
});
