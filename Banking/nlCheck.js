describe('Banking Application', function(){
   
    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.manage.window.maximize();
    });

    it('1. Neville LongBottom login check' ,function(){
        element(by.buttonText('Customer Login')).click();
        element(by.model('custId')).$('[value="5"]').click();
            
        element(by.buttonText('Login')).click();

        it('i) 1013 account check', function(){

            element(by.id('accountSelect')).$('[value="number:1013"]').click();
            expect(element(by.class('center')).getText()).contains('1013');
           
        });
        it('i) 1014 account check', function(){

            element(by.id('accountSelect')).$('[value="number:1014"]').click();
            expect(element(by.class('center')).getText()).contains('1014');
           
        });
        it('i) 1015 account check', function(){

            element(by.id('accountSelect')).$('[value="number:1015"]').click();
            expect(element(by.class('center')).getText()).contains('1015');
           
        });
    });
});