describe('Registartion', function(){

    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    }) ;

    it('Check registration', function(){
        element(by.id('username')).sendKeys('angular');
        element(by.css('[name="password"]')).sendKeys('password');
        element(by.css('[id="formly_1_input_username_0"]')).sendKeys('John');
        element(by.buttonText('Login')).click();

        expect(element(by.xpath('/html/body/div[3]/div/div/div/h1')).getText()).toEqual('Home');

    });
});