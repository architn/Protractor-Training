
describe('Form Demo Application:', function(){

    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
    });

    it('1. Check First Form', function(){
        element(by.model('formData.name')).sendKeys('Archit');
        element(by.model('formData.email')).sendKeys('archit.n@gmail.com');
        element(by.linkText('Next Section')).click();

        element(by.model('formData.type')).click();
        element(by.linkText('Next Section')).click();

        element(by.buttonText('Submit')).click();
        

    });
});