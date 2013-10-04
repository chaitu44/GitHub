function UnivAdd(){

}
UnivAdd.prototype.sum = function() {
	
	var result = 0
		,i;
	for (i=0;i<arguments.length;i++){
		result += arguments[i];
	}
	return result;	
	;



	
};