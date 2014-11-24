Ext.define('WmsMobile.controller.ControllerBase', {
    extend: 'Ext.app.Controller',
    requires:[
    	'WmsMobile.component.Router'
    ],

    config:{
        refs:{
            viewport: {
                selector: 'viewport',
                xtype: 'Ext.Container'
            },
            erroView: {
                selector: 'erroView',
                xtype: 'Ext.Panel'
            },
        },

         control: {
            "erroView #reiniciarButton": {
                tap: 'erroView_reiniciarButton_onTap'
            },
        }
    },

    erroView_reiniciarButton_onTap:function(){
        window.location = "index.html";
    },

    trataResponse:function(response, callback){
        if(response.status == 0)
            this.getRouter().changeView(this.getErroView());
        else
            callback();
    },

    getComponentManager:function(_viewName){
        var self = this;

        var resultado = {
            viewName:_viewName,
        };

        resultado.getCtrl = function(componentName){
            return self.getCtrl(resultado.viewName, componentName);
        };

        resultado.showMessage = function(componentName, message){
            self.showMessage(resultado.viewName, componentName, message);
        };

        resultado.setSelectFromErrors = function(errosFromModel){
            self.setSelectFromErrors(resultado.viewName, errosFromModel);
        };

        return resultado;
    },

    getCtrl:function(viewName, componentName){
        return Ext.ComponentQuery.query(viewName + ' #' + componentName)[0];
    },

    getCtrlFromName:function(viewName, componentName){
        return Ext.ComponentQuery.query(viewName + ' [name=' + componentName + ']')[0];
    },

    setFocusSearchfield:function(viewName){
        var documentoSearchfield = Ext.ComponentQuery.query(viewName + ' #documentoSearchfield')[0].element.dom;
        this.setFocusAndSelect(documentoSearchfield);
    },

    setSelectFromErrors:function(viewName, errosFromModel){
        var field = this.getCtrlFromName(viewName, errosFromModel.all[0]._field)
        this.setSelect(field);
    },

    showMessage:function(viewName, componentName, message){
        var controle = this.getCtrl(viewName,componentName);
        controle.setTitle(message.text);

        if(message.tipo == Mensagem.Sucesso)
            jQuery(controle.element.dom).css("background-color","#DCF0BA");
        else if(message.tipo == Mensagem.Erro)
            jQuery(controle.element.dom).css("background-color","#FA300D");
        else if(message.tipo == Mensagem.Alerta)
            jQuery(controle.element.dom).css("background-color","#F2EEDC");
        else if(message.tipo == Mensagem.Informacao)
            jQuery(controle.element.dom).css("background-color","#89AEC1");


        jQuery(controle.element.dom).fadeIn(500);
        console.log(controle.element.dom)

        var taskHide = Ext.create('Ext.util.DelayedTask', function () {
            jQuery(controle.element.dom).fadeOut(1500);
        });

        taskHide.delay(3000);
    },

    setSelect:function(controle){
        if(controle == undefined)
            return;

        if(controle.element != undefined &&  controle.element.dom != undefined )
            jQuery(controle.element.dom).find('input').select();
        else
            jQuery(controle).find('input').select();
    },

    setFocus:function(controle){

        if(controle == undefined)
            return;

        if(controle.element != undefined &&  controle.element.dom != undefined )
            jQuery(controle.element.dom).find('input').focus();
        else
            jQuery(controle).find('input').focus();

    },

    setFocusAndSelect:function(controller){
        this.setFocus(controller);
        this.setSelect(controller);
    },
    getRouter:function(){
    	var self = this;

    	var router = Ext.create('WmsMobile.component.Router');

    	router.viewPort = self.getViewport();
        router.activeController = self;
    	return router;
    },

    controllerBase_onVoltarView:function(button, e){
        var router = this.getRouter();
        router.back();
    },

    controllerBase_onVoltarView2:function(button, e){
        var router = this.getRouter();
        router.backTo(2);
    },

    showErrosFromModel:function(model, componentManager){
        var erros = model.validate();

        this.alertErro(erros, function(){
            componentManager.setSelectFromErrors(erros);
        });

    },


    alertErro:function(erros, callback){
        Ext.Msg.alert("Opss!", this.getStringFromArray(erros), callback);
    },

    getStringFromArray:function(array){
        var msg = '';

        array.each(function(item){
            msg+=item.getMessage() + '<br />';
        });

        return msg;
    },

    addLancamento:function(model){
        model.save();
    },

    setFocusSearchfield:function(viewName){
        var documentoSearchfield = Ext.ComponentQuery.query(viewName + ' #documentoSearchfield')[0];
        //documentoSearchfield.setValue('');
        this.setFocusAndSelect(documentoSearchfield.element.dom);
    },
});