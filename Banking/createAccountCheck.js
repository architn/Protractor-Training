describe('To check the functionality of create account', function(){

    it('1. Creation of Hermoine account', function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.manage.window.maximize();
        element(by.buttonText('Bank Manager Login')).click();

        element(by.buttonText('Open Account')).click();

        element(by.id('userSelect')).$('[value="1"]').click();
        element(by.id('currency')).$('[value="Dollar"]').click();

        element(by.buttonText('Process')).click();
        browser.switchTo().alert().accept()

        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        element(by.buttonText('Customer Login')).click();
        element(by.model('custId')).$('[value="1"]').click();
            
        element(by.buttonText('Login')).click();
        it('i) New Account check', function(){

            element(by.id('accountSelect')).$('[value="number:1016"]').click();
            expect(element(by.class('center')).getText()).contains('1016');
           
        });
    })
})