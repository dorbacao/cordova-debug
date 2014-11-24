Ext.define('WmsMobile.component.Router', {

    viewPort:null,
    activeController:null,

    _instanciaView:function(nomeAmigavel, _self){
        var self = _self;

        var nomeMetodo = 'self.activeController.get{xtypeName}();';

        var xtypeName = Rotas.getXtypeName(nomeAmigavel);

        var xtypeNameCaixaAlta = xtypeName.substring(0,1).toUpperCase() +
                                   xtypeName.substring(1,xtypeName.length);

        nomeMetodo = nomeMetodo.replace("{xtypeName}", xtypeNameCaixaAlta);

        return eval(nomeMetodo);

    },

    changeView: function(newActiveView, objMessage) {
    	var self = this;

        Exception.throwSeForNull(self.viewPort);

        var viewAndParams = {
            view:Ext.Viewport.getActiveItem(),
            params:self.params,
        };

        StackRouter.push(viewAndParams);

        this._changeView(newActiveView,'left', self.params, objMessage);
    },

    back:function(objMessage){
        var viewAndParamsAnterior = StackRouter.pull();

        if(StackRouter.length() == 0)
            viewAndParamsAnterior.view = Ext.create('WmsMobile.view.Main');

        this._changeView(viewAndParamsAnterior.view,'right', viewAndParamsAnterior.params, objMessage);
    },


    backTo:function(count, objMessage){
        var viewAnterior;

        Exception.throwSeNaoForNumero(count);

        for (var i = 0; i < count; i++) {
            viewAnterior = StackRouter.pull();
        };

        this._changeView(viewAnterior.view,'right', viewAnterior.params, objMessage);
    },

    _changeView: function(newActiveView, direction, params, objMessage) {
        var self = this;

        newActiveView.params = params;
        newActiveView.message = objMessage;
        self.viewPort.animateActiveItem(newActiveView, {type: 'slide', direction: direction});

        var isFunction = (typeof newActiveView.load) == "function";

        if(isFunction)
        	newActiveView.load();
    }
});