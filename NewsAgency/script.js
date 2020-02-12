setInterval(function(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var specialNumbers = [0,1,2,3,4,5,6,7,8,9];
	if (specialNumbers.indexOf(h) != -1){
		h = '0' + h;
	}
	else{
		h = h;
	};

	if (specialNumbers.indexOf(m) != -1){
		m = '0' + m;
	}
	else{
		m = m;
	};
	var day = d.getDate();
	if (specialNumbers.indexOf(day) != -1){
		day = '0' + day;
	}
	else{
		day = day;
	};
	var month = d.getMonth() + 1;
	if (specialNumbers.indexOf(month) != -1){
		month = '0' + month;
	}
	else{
		month = month;
	};
	var year = d.getFullYear();

	var time = h + ':' + m + " " + day + '.' + month + '.' + year;

	$('#datetime').text(time);
	
},1000);

$(function(){
	$.get('http://data.fixer.io/api/latest',
	{'access_key': 'cb515928d3748b55b76f4ea59dea0390'},
	function(response){
		var valueUSD = response.rates.RUB/response.rates.USD;
		$('#money').text('1 ' + String.fromCharCode(8364) + ' = ' + response.rates.RUB.toFixed(2) + ' руб.' ); 
		$('#money2').text('1 ' + ' $' + ' = ' + valueUSD.toFixed(2) + ' руб.' )
	});			
});








