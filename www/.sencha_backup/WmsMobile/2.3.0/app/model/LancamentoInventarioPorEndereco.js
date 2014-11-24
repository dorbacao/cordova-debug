Ext.define('WmsMobile.model.LancamentoInventarioPorEndereco',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',
		fields:[

		//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     						type: 'string'},
			{name: 'IdEndereco',  					type: 'string'},
			{name: 'IdAvaria',         				type: 'string'},
			{name: 'CodigoVolume',    				type: 'string'},
			{name: 'QuantidadeLancada',     		type: 'integer'},
			{name: 'Lote',    						type: 'string'},
			{name: 'Serie',    						type: 'string'},
			{name: 'DataVencimento',    			type: 'DATE', dateFormat:'d-m-Y'},
			{name: 'TipoDeLancamento',    			type: 'integer'},
		],

		validations: [
		   { type: 'presence', field: 'IdEndereco', 	message:'O IdEndereco precisa ser preenchido'},
		   { type: 'presence', field: 'CodigoVolume', 	message:'O Produto precisa ser preenchido'},
		   { type: 'presence', field: 'QuantidadeLancada', 	message:'A Quantidade precisa ser preenchida'},
		   { type: 'format',   field: 'QuantidadeLancada', message:'O campo Quantidade deve estar entre 0-999', matcher: /^\d{1,3}$/ },
		   { type: 'presence', field: 'TipoDeLancamento', 	message:'A TipoDeLancamento precisa ser preenchida'},
		   { type: 'format', field: 'TipoDeLancamento', matcher: /[0-1]/ }
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('inventario/lancamentos/porendereco'),
			reader: {
			    type: 'json',
			    root: 'data'
			},
			writer: {
                type: 'json'
            }
        },
	}
});