onmessage = function(ev) {
	
	let type=ev.data[0];
	
	//console.log("WWW Worker recieved signal type:",type);
	if (type == 'cookie') {
		transport = new XMLHttpRequest();
		  transport.open('GET', '/wp-admin/admin-ajax.php?action=is_international', true);
		  transport.onreadystatechange = function(){
		    if(transport.readyState == 4){
		    	  let response = JSON.parse(transport.response);
		    	  postMessage(response.status);
		    } 
		  };
		  transport.send();
	 } else if (type == 'permutive') {
		 let clientId=ev.data[1];
		 transport = new XMLHttpRequest();
		 transport.open('GET', '/wp-admin/admin-ajax.php?action=get_client_id&clientId=' + clientId, true);
				  
		 transport.onreadystatechange = function(){
		    if(transport.readyState == 4){
		    	
		    	  let response = JSON.parse(transport.response);
		    	  if ( response.hasOwnProperty( 'clientId' ) ) {
		    		  postMessage(response.clientId);
		    		  return;
		    	  }
		    	  
		    	  postMessage(null);
		    	  
		    } 
		  };
		  
		  transport.send();
	 }
};