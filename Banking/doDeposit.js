describe('Banking Application', function(){

    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        // browser.manage.window.maximize();
    });

        it('aaaaaacd', function(){
            element(by.buttonText('Customer Login')).click();
            element(by.model('custId')).$('[value="1"]').click();
        
            element(by.buttonText('Login')).click();

            element(by.buttonText('Deposit')).click();

            element(by.model('amount')).sendKeys('121');
            element(by.css('[type="submit"]')).click();
            expect(element(by.xpath('/html/body/div[3]/div/div[2]/div/div[4]/div/span')).getText())
            .toEqual('Deposit Successful');
            
        });
});