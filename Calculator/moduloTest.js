describe('Protractor Demo Application', function(){

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('Must have title', function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('Must perform modulus with a non-zero output', function(){
        element(by.model('first')).sendKeys('34');
        element(by.model('second')).sendKeys('15');
        element(by.model('operator')).$('[value="MODULO"]').click();
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual('4');

    });
    
    it('Must perform modulus with zero as output', function(){
        element(by.model('first')).sendKeys('34');
        element(by.model('second')).sendKeys('17');
        element(by.model('operator')).$('[value="MODULO"]').click();
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual('0');

    });

    it('Must perform modulus with 0 as inputs', function(){
        element(by.model('first')).sendKeys('0');
        element(by.model('second')).sendKeys('0');
        element(by.model('operator')).$('[value="MODULO"]').click();
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual('NaN');

    });
});