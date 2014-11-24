describe("O Model", function(){

	describe("Inventario", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.Inventario');
			model.set('Id', '1');
			model.set('Descricao', 'inventario');
			model.set('Status', 1);
			model.set('Finalizado', true);

			expect(model.get('Id')).toEqual('1');
			expect(model.get('Descricao')).toEqual('inventario');
			expect(model.get('Status')).toEqual(1);
			expect(model.get('Finalizado')).toEqual(true);

		});

		it("deve possuir o status dentro de um range", function(){
			//Status devem estar entre 0-4 (inclusive)
			var model = Ext.create('WmsMobile.model.Inventario');

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