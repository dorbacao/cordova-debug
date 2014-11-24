Ext.define('WmsMobile.store.EnderecoAbastecimento',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Endereco'
	],

	config:{
		model:'WmsMobile.model.Endereco',
		storeId:'enderecoAbastecimentoStore',
		autoLoad:true,
		autoSync:true,
		remoteFilter:true,
		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('enderecos/abastecimento'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});