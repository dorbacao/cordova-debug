describe("O Model", function(){

	describe("DocumentoFinalizado", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.DocumentoFinalizado');
			model.set('Id', '1');
			model.set('IdDocumento', '1');
			model.set('Data', new Date(2014, 04, 11));
			model.set('StatusDocumento', 2);
			model.set('FinalizarComDivergencias', false);

			expect(model.get('Id')).toEqual('1');
			expect(model.get('IdDocumento')).toEqual('1');
			expect(model.get('Data')).toEqual(new Date(2014, 04, 11));
			expect(model.get('StatusDocumento')).toEqual(2);
			expect(model.get('FinalizarComDivergencias')).toEqual(false);

		});

		it("deve possuir IdDocumento definido", function(){

			var model = Ext.create('WmsMobile.model.DocumentoFinalizado');
			model.set('Id', '1');
			model.set('Data', new Date(2014, 04, 11));
			model.set('StatusDocumento', 2);
			model.set('FinalizarComDivergencias', false);

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir o StatusDocumento dentro de um range", function(){
			//Status devem estar entre 0-6 (inclusive)
			var model = Ext.create('WmsMobile.model.DocumentoFinalizado');

			model.set('IdDocumento', '1');

			model.set('StatusDocumento', 0);
			expect(model.isValid()).toEqual(true);

			model.set('StatusDocumento', 1);
			expect(model.isValid()).toEqual(true);

			model.set('StatusDocumento', 2);
			expect(model.isValid()).toEqual(true);

			model.set('StatusDocumento', 3);
			expect(model.isValid()).toEqual(true);

			model.set('StatusDocumento', 4);
			expect(model.isValid()).toEqual(true);

			model.set('StatusDocumento', 5);
			expect(model.isValid()).toEqual(true);

			model.set('StatusDocumento', 6);
			expect(model.isValid()).toEqual(true);

			model.set('StatusDocumento', 7);
			expect(model.isValid()).toEqual(false); //#Fail 3 não é um range válido

			model.set('StatusDocumento', 8);
			expect(model.isValid()).toEqual(false); //#Fail 3 não é um range válido

		});

	});

});