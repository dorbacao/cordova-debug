describe("O Model", function(){

	describe("Produto", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.Produto');
			model.set('Id', '1');
			model.set('Codigo', '5');
			model.set('Descricao', 'produto');
			model.set('UnidadeMedida', 'Kg');
			model.set('TotalEstoque', 1);

			expect(model.get('Id')).toEqual('1');
			expect(model.get('Codigo')).toEqual('5');
			expect(model.get('Descricao')).toEqual('produto');
			expect(model.get('UnidadeMedida')).toEqual('Kg');
			expect(model.get('TotalEstoque')).toEqual(1);

		});

	});

});