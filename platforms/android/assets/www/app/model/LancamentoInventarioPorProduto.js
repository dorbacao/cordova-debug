Ext.define('WmsMobile.model.LancamentoInventarioPorProduto',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',
		fields:[

		//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     						type: 'string'},
			{name: 'IdVolume',     					type: 'string'},
			{name: 'IdAvaria',         				type: 'string'},
			{name: 'CodigoEndereco',    			type: 'string'},
			{name: 'QuantidadeLancada',     		type: 'integer'},
			{name: 'Lote',    						type: 'string'},
			{name: 'Serie',    						type: 'string'},
			{name: 'DataVencimento',    			type: 'DATE', dateFormat:'d-m-Y'},
			{name: 'TipoDeLancamento',    			type: 'integer'},
		],

		validations: [
		   { type: 'presence', field: 'IdVolume', 			message:'O IdVolume precisa ser preenchido'},
		   { type: 'presence', field: 'CodigoEndereco', 	message:'O Endereço precisa ser preenchido'},
		   { type: 'presence', field: 'QuantidadeLancada', 	message:'A Quantidade precisa ser preenchida'},
		   { type: 'format',   field: 'QuantidadeLancada', message:'O campo Quantidade deve estar entre 0-999', matcher: /^\d{1,3}$/ },
   		   { type: 'presence', field: 'TipoDeLancamento', 	message:'A TipoDeLancamento precisa ser preenchida'},
		   { type: 'format', field: 'TipoDeLancamento', matcher: /[0-1]/ }
		   // { type: 'presence', field: 'DataVencimento', 	message:'A Data de Vencimento deve estar no formato' },
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('inventario/lancamentos/porproduto'),
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