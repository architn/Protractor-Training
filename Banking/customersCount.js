describe('Banking Application', function(){

    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    });

        it('Customer Account', function(){
            element(by.buttonText('Bank Manager Login'))
            .click();

            element(by.buttonText('Customers'))
            .click();

            var tableHead = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/table/tbody'));
            var countCustomers = tableHead.all(by.tagName('tr'));
            
            expect(countCustomers.count() == 5);

        });
});