require.config({
	paths: {
		jquery : "jquery-1.10.2"
		
	}
})

require(['jquery','Calculator','CalculatorView'],function(CalculatorView){
	CalculatorView.init();
})