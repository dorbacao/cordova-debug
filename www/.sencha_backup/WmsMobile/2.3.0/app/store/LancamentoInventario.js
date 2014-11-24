Ext.define('WmsMobile.store.LancamentoInventario',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.LancamentoInventario'
	],

	config:{
		model:'WmsMobile.model.LancamentoInventario',
		storeId:'lancamentosInventarioStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('inventario/lancamentos'),
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