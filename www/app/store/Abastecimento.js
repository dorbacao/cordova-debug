Ext.define('WmsMobile.store.Abastecimento',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Abastecimento'
	],

	config:{
		model:'WmsMobile.model.Abastecimento',
		storeId:'abastecimentoStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('abastecimentos'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});