Ext.define('WmsMobile.store.EnderecoInventario',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Select'
	],

	config:{
		model:'WmsMobile.model.Endereco',
		storeId:'enderecoInventarioStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('enderecos/inventario'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
	    },
	}
});