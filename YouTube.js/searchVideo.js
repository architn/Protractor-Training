describe('YouTube', function(){
    beforeEach(function(){
        browser.ignoreSynchronization = true;
        browser.get('https://www.youtube.com/');
    })

        it('Should have appropiate searches', function(){
          
            element(by.id('search'))
            .sendKeys('Brookyln Nine Nine');
            
        });

});