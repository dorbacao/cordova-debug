Ext.define('WmsMobile.store.PosicaoEstoque',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.PosicaoEstoque'
	],

	config:{
		model:'WmsMobile.model.PosicaoEstoque',
		storeId:'posicaoEstoqueStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('posicaoestoque'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});