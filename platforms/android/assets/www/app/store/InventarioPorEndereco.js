Ext.define('WmsMobile.store.InventarioPorEndereco',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.InventarioPorEndereco'
	],

	config:{
		model:'WmsMobile.model.InventarioPorEndereco',
		storeId:'inventarioPorEnderecoStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('inventarios/porendereco'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});