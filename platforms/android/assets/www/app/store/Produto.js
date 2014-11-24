Ext.define('WmsMobile.store.Produto',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Produto'
	],

	config:{
		model:'WmsMobile.model.Produto',
		storeId:'produtoStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('produtos'),
			reader: {
			    type: 'json',
			    root: 'data'
			},
			writer: {
                type: 'json'
            }
        },
	}
});