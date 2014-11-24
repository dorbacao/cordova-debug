describe("O Model", function(){

	describe("Menu", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.Menu');
			model.set('codigo', '1');
			model.set('text', 'menu');
			model.set('badgeText', '3');

			expect(model.get('codigo')).toEqual('1');
			expect(model.get('text')).toEqual('menu');
			expect(model.get('badgeText')).toEqual('3');

		});

	});

});