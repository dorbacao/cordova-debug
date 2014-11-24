Ext.define('WmsMobile.store.ItemDocumento',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.ItemDocumento'
	],

	config:{
		model:'WmsMobile.model.ItemDocumento',
		storeId:'itemDocumentoStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: Config.getApiUrl('itensdocumento'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});