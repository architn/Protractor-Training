
describe('Banking Application', function(){
   
    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        // browser.manage.window.maximize();
    });
    
    it('1. Hermoine login check' ,function(){
    element(by.buttonText('Customer Login')).click();
    element(by.model('custId')).$('[value="1"]').click();
        
    element(by.buttonText('Login')).click();

        it('i) 1001 account check', function(){

            element(by.id('accountSelect')).$('[value="number:1001"]').click();
           expect(element(by.class('center')).getText()).contains('1001');
        });

        it('i) 1002 account check', function(){

            element(by.id('accountSelect')).$('[value="number:1002"]').click();
            expect(element(by.class('center')).getText()).contains('1002');
           
        });
        
        it('i) 1003 account check', function(){

            element(by.id('accountSelect')).$('[value="number:1003"]').click();
            expect(element(by.class('center')).getText()).contains('1003');
           
        });

    });


});