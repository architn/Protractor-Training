describe('Banking Application', function(){

    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    });

        it('Withdrawal process', function(){
            element(by.buttonText('Customer Login'))
            .click();

            element(by.model('custId')).$('[value="1"]')
            .click();
        
            element(by.buttonText('Login'))
            .click();

            element(by.id('accountSelect')).$('[value="number:1003"]')
            .click();

            element(by.buttonText('Withdrawl'))
            .click();
            
            element(by.model('amount'))
            .sendKeys('120');

            element(by.buttonText('Withdraw'))
            .click();

            expect(element(by.xpath('/html/body/div[3]/div/div[2]/div/div[4]/div/span'))
            .getText())
            .toEqual('Transaction Failed. You can not withdraw amount more than the balance.');

        });
            it('Succesful withdrawl', function(){
                element(by.buttonText('Customer Login'))
                .click();
    
                element(by.model('custId')).$('[value="1"]')
                .click();
            
                element(by.buttonText('Login'))
                .click();
    
                element(by.id('accountSelect')).$('[value="number:1001"]')
                .click();
    
                element(by.buttonText('Withdrawl'))
                .click();
                
                element(by.model('amount'))
                .sendKeys('120');
    
                element(by.buttonText('Withdraw'))
                .click();
            
            });
});