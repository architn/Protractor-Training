describe('Protractor Demo App', function(){

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('Must have title', function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('Must perform multiplication', function(){
        element(by.model('first')).sendKeys('12');
        element(by.model('second')).sendKeys('12');
        element(by.model('operator')).$('[value="MULTIPLICATION"]').click();
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual('144');

    });
    it('Must perform multiplication', function(){
        element(by.model('first')).sendKeys('0');
        element(by.model('second')).sendKeys('0');
        element(by.model('operator')).$('[value="MULTIPLICATION"]').click();
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual('0');

    });
});