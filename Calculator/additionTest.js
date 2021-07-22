describe('Protractor App Demo',function(){

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('Title should be right', function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('Addition should be correct', function(){
        
        element(by.model('first')).sendKeys('1'); //ebmod for IntelliSense
        element(by.model('second')).sendKeys('2');
        element(by.id('gobutton')).click(); //ebid for IntelliSense

       expect(element(by.binding('latest')).getText()).toEqual('3'); //ebbin for IntelliSense

      });

      it('Multiplication should be correct', function(){
        element(by.model('first')).sendKeys('0'); //ebmod for IntelliSense
        element(by.model('second')).sendKeys('0');

        // element(by.model('operator')).click();
        // element(by.tagName('select#MULTIPLICATION')).click();

        element(by.id('gobutton')).click(); //ebid for IntelliSense

        expect(element(by.binding('latest')).getText()).toEqual('0');

      });
});