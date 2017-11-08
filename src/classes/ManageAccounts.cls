public class ManageAccounts {

    @AuraEnabled
    public static List<Account> getAccountsByName(String name) {
        String accountName = '%'+name+'%';
        List<Account> accounts = [SELECT Name, Site, BillingAddress, Phone, Type FROM Account WHERE Name LIKE :accountName];
        return accounts;
    }
    
}