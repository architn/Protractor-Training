describe('Banking Application', function(){
   
    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.manage.window.maximize();
    });

    it('1. Harry Potter login check' ,function(){
        element(by.buttonText('Customer Login')).click();
        element(by.model('custId')).$('[value="2"]').click();
            
        element(by.buttonText('Login')).click();

        it('i) 1004 account check', function(){

            element(by.id('accountSelect')).$('[value="number:1004"]').click();
            expect(element(by.class('center')).getText()).contains('1004')
           
        });
        it('i) 1005 account check', function(){

            element(by.id('accountSelect')).$('[value="number:1005"]').click();
            expect(element(by.class('center')).getText()).contains('1005');
           
        });
        it('i) 1006 account check', function(){

            element(by.id('accountSelect')).$('[value="number:1006"]').click();
            expect(element(by.class('center')).getText()).contains('1006');
           
        });
    });
});