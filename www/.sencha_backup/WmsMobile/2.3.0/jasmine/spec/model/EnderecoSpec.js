describe("O Model", function(){

	describe("Endereco", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.Endereco');
			model.set('Id', '1');
			model.set('Codigo', '1');
			model.set('Descricao', 'endereco');
			model.set('NomeArea', 'area');
			model.set('IdVolume', '1');
			model.set('PrecisaSerInventariado', false);
			model.set('QuantidadeLancada', 1);
			model.set('Status', 1);

			expect(model.get('Id')).toEqual('1');
			expect(model.get('Codigo')).toEqual('1');
			expect(model.get('Descricao')).toEqual('endereco');
			expect(model.get('NomeArea')).toEqual('area');
			expect(model.get('IdVolume')).toEqual('1');
			expect(model.get('PrecisaSerInventariado')).toEqual(false);
			expect(model.get('QuantidadeLancada')).toEqual(1);
			expect(model.get('Status')).toEqual(1);

		});

		it("deve possuir o status dentro de um range", function(){
			//Status devem estar entre 0-4 (inclusive)
			var model = Ext.create('WmsMobile.model.Endereco');

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