({
	detailAccount : function(cmp, event) {
        var appEvent = $A.get("e.c:detailAccountEvent");
        var accountId = event.currentTarget.dataset.accountid;
        
        appEvent.setParams({
            "accountId" : accountId
        });
        appEvent.fire();
    }
})