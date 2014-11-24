describe("O Model", function(){

	describe("Carrinho", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.Carrinho');
			model.set('Id', '1');
			model.set('Codigo', '1');
			model.set('Descricao', 'carrinho');

			expect(model.get('Id')).toEqual('1');
			expect(model.get('Codigo')).toEqual('1');
			expect(model.get('Descricao')).toEqual('carrinho');

		});

	});

});