UsageLog  = {

	list:{},

	exists :function(key){

		return !!this.list[key];
	},

	increment:function(key){

		this.list[key]++;					
	},

	initialize:function(key){

 		this.list[key] = 1;
	},

	reset: function(){

		this.list = {};
	},

	get:function(key){

		return parseInt(this.list[key]);
		
	},
	max:function(key){
		this.list[key] = 15;
	},

	print:function(){

		return this.list;
	},

	verify: function(key){
		var value = parseInt(this.get());
		var result =  this.calculate(value);
		
		if(result == 0)
			return false
		
		return true;
	},

	calculate: function(usage){
		usage = parseInt(usage);

		if(usage >=15)
			return 0;
		else 
			return 15 - usage;
	},

	go:function(key){

		if(!this.exists(key)){
			
			this.initialize(key);
		}else if(!this.verify(key)){
			//needs to be logged
			console.log("Twitter limit exceeded for "+key);
			return true;		
			// throw new Meteor.Error('UsageLog.error', "Twitter Limit Exceeded");			
		}else{
			
			this.increment(key);
		}
		
		return false;
	}
};


