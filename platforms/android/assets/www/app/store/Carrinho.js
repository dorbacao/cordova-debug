Ext.define('WmsMobile.store.Carrinho',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Carrinho'
	],

	config:{
		model:'WmsMobile.model.Carrinho',
		storeId:'carrinhoStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('carrinhos'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});