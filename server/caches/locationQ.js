LocationQ = {
	queue : [],

	add: function(location){

		if(!location.woeid)	
			throw new Meteor.Error('LocationQ.error.add', "Woeid Required");  

		if(!location.locationName)		
			throw new Meteor.Error('LocationQ.error.add', "LocationName Required");

		var dupes = this.checkForDuplicates(location);

		if(dupes){
			return;
		}		

		this.queue.push(location);
	},

	checkForDuplicates: function(location){
		for(var i = 0; i < this.queue.length; i++){
			
			if(location.woeid == this.queue[i].woeid)
				return true;			
		}
		return false;
	},

	get: function(){

		return this.queue.shift();
	},

	print: function(){

		return this.queue;
	},

	// calculate: function(usage){
		
	// 	usage = parseInt(usage);

	// 	if(usage >=15)
	// 		return 0;
	// 	else 
	// 		return 15 - usage;
	// },

	go: function(){
		
		
		var valid = UsageLog.verify("Admin")

		if(!valid)
			return;

		var usage = UsageLog.calculate(UsageLog.get("Admin"));	

		if(usage == 0)
			throw new Meteor.Error('LocationQ.error.go', "Twitter Usage Exceeded");

		for(var i = 0; i < usage; i++ ){
			location = this.get();
			if(!location)
				return;
			TrendsRepo.update(null, location.woeid, location.locationName);
		}

	}


}