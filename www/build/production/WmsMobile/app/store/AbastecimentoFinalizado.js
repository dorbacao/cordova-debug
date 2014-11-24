Ext.define('WmsMobile.store.AbastecimentoFinalizado',{
	extend:'Ext.data.Store',

	requires:[
		'WmsMobile.model.AbastecimentoFinalizado',
	],

	config:{
		model:'WmsMobile.model.AbastecimentoFinalizado',
		storeId:'abastecimentoFinalizadoStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('abastecimentosFinalizados'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});