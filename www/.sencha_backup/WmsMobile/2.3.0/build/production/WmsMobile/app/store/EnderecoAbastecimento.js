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
		proxy: {
			type: 'rest',
			url: Config.getApiUrl('enderecos/abastecimento'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});