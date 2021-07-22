// var Jasmine2HTMLReporter = require('./protractor-jasmine2-html-reporter');

exports.config = {
    directConnect : true,
    specs: ["buttonDisplay.js"],
    framework: "jasmine",
    useAllAngular2AppRoots: true,

    // jasmineNodeOpts: {
    //   defaultTimeoutInterval: 40000
    // },

    // onPrepare : function(){
    //   jasmine.getEnv().addReporter(new Jasmine2HTMLReporter({
    //     savePath : './test/reports'
    //   }) 
    //   );
    // },
    
  };
  