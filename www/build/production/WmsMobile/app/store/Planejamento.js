
Ext.define('WmsMobile.store.Planejamento',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Planejamento'
	],

	config:{
		model:'WmsMobile.model.Planejamento',
		storeId:'planejamentoStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: Config.getApiUrl('planejamentos'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },

	}
});