describe('Banking Application', function(){
   
    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.manage.window.maximize();
    });

    it('1. Ron Weasley login check' ,function(){
        element(by.buttonText('Customer Login')).click();
        element(by.model('custId')).$('[value="3"]').click();
            
        element(by.buttonText('Login')).click();

        it('i) 1007 account check', function(){

            element(by.id('accountSelect')).$('[value="number:1007"]').click();
            expect(element(by.class('center')).getText()).contains('1007')
           
        });
        it('i) 1008 account check', function(){

            element(by.id('accountSelect')).$('[value="number:1008"]').click();
            expect(element(by.class('center')).getText()).contains('1008')
           
        });
        it('i) 1009 account check', function(){

            element(by.id('accountSelect')).$('[value="number:1009"]').click();
            expect(element(by.class('center')).getText()).contains('1009')
           
        });
    });
});