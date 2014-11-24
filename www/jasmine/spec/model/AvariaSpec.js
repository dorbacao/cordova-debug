describe("O Model", function(){

	describe("Avaria", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.Avaria');
			model.set('Id', '1');
			model.set('Codigo', '1');
			model.set('NomeAvaria', 'avaria');

			expect(model.get('Id')).toEqual('1');
			expect(model.get('Codigo')).toEqual('1');
			expect(model.get('NomeAvaria')).toEqual('avaria');

		});

	});

});