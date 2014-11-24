var _id = 0;

Ext.define('WmsMobile.store.Inventario',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Inventario'
	],

	config:{
		model:'WmsMobile.model.Inventario',
		storeId:'inventarioStore',
		autoLoad:true,
		autoSync:true,
		data:[
				{id:_id++,descricao:'Produtos da magal'},
				{id:_id++,descricao:'Perecíveis'},
				{id:_id++,descricao:'Brinquedos'},
				{id:_id++,descricao:'Produtos de automóveis'},
				{id:_id++,descricao:'Produtos da magal'},
				{id:_id++,descricao:'Perecíveis'},
				{id:_id++,descricao:'Brinquedos'},
				{id:_id++,descricao:'Produtos de automóveis'},

	    ]
	}
});