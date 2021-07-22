describe('Banking App Demo', function(){

    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login')
    });
    
    it('First Name Filter Check', function(){
        element(by.buttonText('Bank Manager Login'))
            .click();

            element(by.buttonText('Customers'))
            .click();

            element(by.linkText('First Name'))
            .click();

            var tableBody = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/table/tbody'));
            var tableData = tableBody.all(by.tagName('tr'));
            
            for(var i = 2 ; i<= tableData.count(); i++)
            {
                var fName = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/table/tbody/tr[1]/td[1]'))
                .getText();
                var fLetter = fName.startsWith();

                var sName = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/table/tbody/tr[" +i+ "]/td[1]'))
                .getText();
                var sLetter = sName.startsWith();
                console.log(sName);

                expect(fLetter.compareTo(sLetter)< 0);

            }
        });

            it('Last Name Filter Check', function(){
                element(by.buttonText('Bank Manager Login'))
                .click();
    
                element(by.buttonText('Customers'))
                .click();
    
                element(by.linkText('First Name'))
                .click();
                element(by.linkText('Last Name'))
                .click();

                var tableBody = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/table/tbody'));
                var tableData = tableBody.all(by.tagName('tr'));
            
            for(var i = 2 ; i<= tableData.count(); i++)
            {
                var lName = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/table/tbody/tr[1]/td[2]'))
                .getText();
                var lLetter = lName.startsWith();

                var slName = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/table/tbody/tr[" +i+ "]/td[2]'))
                .getText();
                var slLetter = sName.startsWith();
                // console.log(slName);
                
                expect(slLetter.compareTo(lLetter)< 0);

            }
         });

         
});
