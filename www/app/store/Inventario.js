Ext.define('WmsMobile.store.Inventario',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Inventario'
	],

	config:{
		model:'WmsMobile.model.Inventario',
		storeId:'inventarioStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('inventarios'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});