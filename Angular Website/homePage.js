describe('AngularJS website', function(){

    beforeEach(function(){
        browser.get('https://angularjs.org/')
    });

    it('Git Hub button', function(){
        var GitViewButton = element(by.css('[class="button button-small button-plain"]'));
        expect(GitViewButton.isDisplayed()).toBe(true);
    });
});