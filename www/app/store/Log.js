Ext.define('WmsMobile.store.Log',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Log'
	],

	config:{
		model:'WmsMobile.model.Log',
		storeId:'logStore',
		autoLoad:true,
		autoSync:true,
		 proxy: {
			type: 'localstorage',
	      	id  : 'logs'
    	}
	}
});