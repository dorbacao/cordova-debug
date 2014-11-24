describe("O Model", function(){

	describe("Documento", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.Documento');
			model.set('Id', '1');
			model.set('QtdItens', 5);
			model.set('Descricao', 'documento');
			model.set('Status', 1);
			model.set('Codigo', '1');
			model.set('Carrinho', '1');

			expect(model.get('Id')).toEqual('1');
			expect(model.get('QtdItens')).toEqual(5);
			expect(model.get('Descricao')).toEqual('documento');
			expect(model.get('Status')).toEqual(1);
			expect(model.get('Codigo')).toEqual('1');
			expect(model.get('Carrinho')).toEqual('1');

		});

		it("deve possuir o status dentro de um range", function(){
			//Status devem estar entre 0-4 (inclusive)
			var model = Ext.create('WmsMobile.model.Documento');

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