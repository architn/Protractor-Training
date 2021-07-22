describe('Banking App Demo', function(){

    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login')
    });

    it('Search functionality', function(){
        element(by.buttonText('Bank Manager Login'))
            .click();

            element(by.buttonText('Customers'))
            .click();

            var searchTab = element(by.css('[type="text" ]'));
            searchTab.sendKeys('H'); // For right results 
            searchTab.sendKeys('qqqq'); //For wrong results

            var searchTable = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/table/tbody'));
            var searchResults = searchTable.all(by.tagName('tr'));

            expect(searchResults.count()== 0);
            expect(searchResults.count()== 2);
        });
});