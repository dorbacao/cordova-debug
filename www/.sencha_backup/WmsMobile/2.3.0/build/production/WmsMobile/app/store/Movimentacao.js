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
			url: Config.getApiUrl('enderecos/movimentar'),
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