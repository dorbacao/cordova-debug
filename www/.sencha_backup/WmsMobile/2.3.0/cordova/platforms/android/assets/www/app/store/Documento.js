
Ext.define('WmsMobile.store.Documento',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Documento'
	],

	config:{
		model:'WmsMobile.model.Documento',
		storeId:'documentoStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: 'http://localhost:9967/documentos',
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});