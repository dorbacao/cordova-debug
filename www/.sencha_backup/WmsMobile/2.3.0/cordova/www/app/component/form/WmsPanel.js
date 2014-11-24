Ext.define('WmsMobile.component.form.WmsPanel', {
    extend: 'Ext.form.Panel',
    getModel:function(){
    	var model = this.getRecord();
    	model.set(this.getValues());

    	return model;
    }
});