({
	searchAccounts : function(component, event, helper) {
        if(event.getParams().keyCode == 13){
          	var accountName = component.find('name').get('v.value');
        	alert(accountName);
        }
    }
})