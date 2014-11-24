describe("O Model", function(){

	describe("ItemDocumento", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.ItemDocumento');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('Codigo', '1');
			model.set('Descricao', 'itemDocumento');
			model.set('UnidadeMedida', 'Kg');
			model.set('Quantidade', 1);
			model.set('QuantidadeLancada', 1);
			model.set('Vencimento', new Date(2014, 04, 11));
			model.set('IdVolume', '1');
			model.set('IdEndereco', '1');
			model.set('Status', 1);

			expect(model.get('Id')).toEqual('1');
			expect(model.get('IdDocumento')).toEqual('5');
			expect(model.get('Codigo')).toEqual('1');
			expect(model.get('Descricao')).toEqual('itemDocumento');
			expect(model.get('UnidadeMedida')).toEqual('Kg');
			expect(model.get('Quantidade')).toEqual(1);
			expect(model.get('QuantidadeLancada')).toEqual(1);
			expect(model.get('Vencimento')).toEqual(new Date(2014, 04, 11));
			expect(model.get('IdVolume')).toEqual('1');
			expect(model.get('IdEndereco')).toEqual('1');
			expect(model.get('Status')).toEqual(1);

		});

		it("deve possuir o status dentro de um range", function(){
			//Status devem estar entre 0-4 (inclusive)
			var model = Ext.create('WmsMobile.model.ItemDocumento');

			model.set('Status', 0);
			expect(model.isValid()).toEqual(true);

			model.set('Status', 1);
			expect(model.isValid()).toEqual(true);

			model.set('Status', 2);
			expect(model.isValid()).toEqual(true);

			model.set('Status', 3);
			expect(model.isValid()).toEqual(true);

			model.set('Status', 4);
			expect(model.isValid()).toEqual(true);

			model.set('Status', 5);
			expect(model.isValid()).toEqual(false); //#Fail 3 não é um range válido

			model.set('Status', 6);
			expect(model.isValid()).toEqual(false); //#Fail 3 não é um range válido
		});

	});

});