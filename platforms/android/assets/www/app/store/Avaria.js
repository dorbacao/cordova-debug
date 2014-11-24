Ext.define('WmsMobile.store.Avaria',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Avaria'
	],

	config:{
		model:'WmsMobile.model.Avaria',
		storeId:'avariaStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('avaria'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});