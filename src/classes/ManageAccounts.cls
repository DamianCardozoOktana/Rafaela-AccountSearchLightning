public class ManageAccounts {

    @AuraEnabled
    public static List<Account> getAccountsByName(String name) {
        String accountName = '%'+name+'%';
        List<Account> accounts = [SELECT Name, Site, BillingAddress, Phone, Type FROM Account WHERE Name LIKE :accountName];
        return accounts;
    }
    
    @AuraEnabled
    public static List<Contact> getContactsAccount(Id accountId) {
        List<Contact> contacts = [SELECT FirstName, LastName, Email, Phone FROM Contact WHERE AccountId = :accountId];
        return contacts;
    }
    
}