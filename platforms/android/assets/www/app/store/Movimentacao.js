Ext.define('WmsMobile.store.Movimentacao',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Movimentacao'
	],

	config:{
		model:'WmsMobile.model.Movimentacao',
		storeId:'movimentacaoStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('movimentacoes'),
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