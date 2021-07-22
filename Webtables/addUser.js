describe('WebTables', function(){
    
    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
    });
    it('1. Add new user', function(){

        var AddUser = element(by.buttonText('Add User'));
        AddUser.click();

        element(by.css('[name = "FirstName"]')).sendKeys('John');
        element(by.css('[name = "LastName"]')).sendKeys('Smith');
        element(by.css('[name = "UserName"]')).sendKeys('jsith');
        element(by.css('[name = "Password"]')).sendKeys('arch');
        element(by.css('[value = "15"]')).click();
        element(by.css('[name="RoleId"]')).$('[ value="0"]').click();
        element(by.css('[name = "Email"]')).sendKeys('john.s@gmail.com');
        element(by.css('[name = "Mobilephone"]')).sendKeys('7894561230');
        var Save = element(by.buttonText('Save'));
        Save.click();
        
        

    });

});
