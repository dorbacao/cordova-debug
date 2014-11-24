Ext.define('WmsMobile.store.InventarioPorProduto',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.InventarioPorProduto',
	],

	config:{
		model:'WmsMobile.model.InventarioPorProduto',
		storeId:'inventarioPorProdutoStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('inventarios/porproduto'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});