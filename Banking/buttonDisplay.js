
describe('Banking Application', function(){
    
    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    });

    it('Home Page Button', function(){
        var HomeButton = element(by.buttonText('Home'));
        expect(HomeButton.isDisplayed()).toBe(true);
    });
    it('Customer Login Button', function(){
        var CustomerLoginButton = element(by.buttonText('Customer Login'));
        expect(CustomerLoginButton.isDisplayed()).toBe(true);
    });
    it('Bank Manager Button', function(){
        var BankManagerButton = element(by.buttonText('Bank Manager Login'));
        expect(BankManagerButton.isDisplayed()).toBe(true);
    });
});