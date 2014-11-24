Ext.define('WmsMobile.store.DocumentoFinalizado',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.DocumentoFinalizado'
	],

	config:{
		model:'WmsMobile.model.DocumentoFinalizado',
		storeId:'documentoFinalizadoStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: Config.getApiUrl('documentos/finalizados'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});