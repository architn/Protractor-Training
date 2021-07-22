describe('Banking Application', function(){
   
    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.manage.window.maximize();
    });

    it('1. Albus Dumbledore login check' ,function(){
        element(by.buttonText('Customer Login')).click();
        element(by.model('custId')).$('[value="4"]').click();
            
        element(by.buttonText('Login')).click();

        it('i) 1010 account check', function(){

            element(by.id('accountSelect')).$('[value="number:1010"]').click();
            expect(element(by.class('center')).getText()).contains('1010');
           
        });

        it('i) 1011 account check', function(){

            element(by.id('accountSelect')).$('[value="number:1011"]').click();
            expect(element(by.class('center')).getText()).contains('1011');
           
        });

        it('i) 1012 account check', function(){

            element(by.id('accountSelect')).$('[value="number:1012"]').click();
            expect(element(by.class('center')).getText()).contains('1012');
            
           
        });
    });
});