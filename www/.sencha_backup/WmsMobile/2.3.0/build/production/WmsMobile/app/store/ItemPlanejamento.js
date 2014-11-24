Ext.define('WmsMobile.store.ItemPlanejamento',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.ItemPlanejamento'
	],

	config:{
		model:'WmsMobile.model.ItemPlanejamento',
		storeId:'itemPlanejamentoStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: Config.getApiUrl('itensplanejamentos'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});