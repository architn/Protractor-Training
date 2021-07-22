describe('CheckBox App', function(){

    it('To test checkbox', function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/checkboxes/');
        element(by.model('data.root')).click();
        expect(element(by.model("division.included")).isSelected()).toBeFalsy();
    });

});