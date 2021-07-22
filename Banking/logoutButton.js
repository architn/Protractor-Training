describe('Banking Application', function(){
   
    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    });
    
    it('Logout Button check' ,function(){
    element(by.buttonText('Customer Login')).click();
    element(by.model('custId')).$('[value="1"]').click();
        
    element(by.buttonText('Login')).click();

    element(by.buttonText('Logout')).click();

    expect(element(by.buttonText('Home')).isDisplayed()).toBeTruthy();

    });
});                        