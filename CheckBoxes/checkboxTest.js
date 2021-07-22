describe('My app', function() {

    it('Test Checkboxes', function() {

        browser.get('http://www.way2automation.com/angularjs-protractor/checkboxes/')
        .then(function () {
            element(by.model('data.root')).click();
            expect(element(by.model('division.included')).isSelected());
        });
    });
});