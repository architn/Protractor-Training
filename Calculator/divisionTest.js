describe('Protractor Demo App', function(){

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('Must have title', function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('Must perform division', function(){
        element(by.model('first')).sendKeys('34');
        element(by.model('second')).sendKeys('17');
        element(by.model('operator')).$('[value="DIVISION"]').click();
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual('2');

    });
    
    it('Must perform division', function(){
        element(by.model('first')).sendKeys('0');
        element(by.model('second')).sendKeys('0');
        element(by.model('operator')).$('[value="DIVISION"]').click();
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual('NaN');

    });
});