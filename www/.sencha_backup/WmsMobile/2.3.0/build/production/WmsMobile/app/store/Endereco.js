Ext.define('WmsMobile.store.Endereco',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Select'
	],

	config:{
		model:'WmsMobile.model.Endereco',
		storeId:'enderecoStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: Config.getApiUrl('enderecos'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
	    },
	}
});