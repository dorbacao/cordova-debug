
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
		proxy: {
			type: 'rest',
			url: 'http://localhost:9967/carrinhos',
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});