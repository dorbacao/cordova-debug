describe("O Model", function(){

	describe("Abastecimento", function(){

		it("deve respeitar seus tipos definidos", function(){

			//os atributos podem ser inseridos em forma de strig
			//entretanto será parseado para o tipo definido no model
			var model = Ext.create('WmsMobile.model.Abastecimento');
			model.set('Id', '1');
			model.set('CodigoPiking', '1');
			model.set('IdVolume', '1');
			model.set('UnidadeMedida', 'A');
			model.set('Status', 1);
			model.set('CodigoVolume', '1');
			model.set('QuantidadePrevista', 1);
			model.set('QuantidadeLancada', 1);
			model.set('Finalizado', true);

			expect(model.get('Id')).toEqual('1');
			expect(model.get('CodigoPiking')).toEqual('1');
			expect(model.get('IdVolume')).toEqual('1');
			expect(model.get('UnidadeMedida')).toEqual('A');
			expect(model.get('Status')).toEqual(1);
			expect(model.get('CodigoVolume')).toEqual('1');
			expect(model.get('QuantidadePrevista')).toEqual(1);
			expect(model.get('QuantidadeLancada')).toEqual(1);
			expect(model.get('Finalizado')).toEqual(true);

		});

		it("deve possuir o status dentro de um range", function(){
			//Status devem estar entre 0-2 (inclusive)
			var model = Ext.create('WmsMobile.model.Abastecimento');

			model.set('Status', 0);
			expect(model.isValid()).toEqual(true);

			model.set('Status', 1);
			expect(model.isValid()).toEqual(true);

			model.set('Status', 2);
			expect(model.isValid()).toEqual(true);

			model.set('Status', 3);
			expect(model.isValid()).toEqual(false); //#Fail 3 não é um range válido

			model.set('Status', 4);
			expect(model.isValid()).toEqual(false); //#Fail 4 não é um range válido
		});

	});

});