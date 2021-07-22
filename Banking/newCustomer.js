describe('New Account Check', function(){
    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.manage.window.maximize();
    });

    it('New account created', function(){
        element(by.buttonText('Bank Manager Login')).click();

        element(by.buttonText('Add Customer')).click();
        element(by.model('fName')).sendKeys('Archit');
        element(by.model('lName')).sendKeys('Nigam');
        element(by.model('postCd')).sendKeys('400063');
        element(by.css('[type="submit"]')).click();

        browser.switchTo().alert().accept();

        element(by.buttonText('Home')).click();
        element(by.buttonText('Customer Login')).click();

        element(by.model('custId')).$('[value="9"]').click();
        

    });
})