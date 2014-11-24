var _id = 0;

Ext.define('WmsMobile.store.Endereco',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Select'
	],

	config:{
		model:'WmsMobile.model.Select',
		storeId:'enderecoStore',
		autoLoad:true,
		autoSync:true,
		data:[
				{item_id:_id++,item_name:'#A1.B6.C3.D4'},
				{item_id:_id++,item_name:'#A1.B1.C8.D1'},
				{item_id:_id++,item_name:'#A1.B2.C7.D2'},
				{item_id:_id++,item_name:'#A1.B3.C6.D3'},
				{item_id:_id++,item_name:'#A1.B4.C5.D5'},
	    ]
	}
});