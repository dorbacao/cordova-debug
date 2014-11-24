Ext.define('WmsMobile.store.Lancamento',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Lancamento'
	],

	config:{
		model:'WmsMobile.model.Lancamento',
		storeId:'lancamentoStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('lancamentos'),
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