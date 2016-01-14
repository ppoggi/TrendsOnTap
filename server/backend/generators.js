Generator = {
	mod :0,
	value :0,
	next:function(){

		this.value = this.value % this.mod;
		return this.value++;
	}
}
