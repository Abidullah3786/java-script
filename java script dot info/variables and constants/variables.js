// Rules for naming variables
//  1) only underScore and $ sign can be used begfore name
      let $name = "Abid";
      let _name = "Abid";

  // 2) incorrect 
      // let 1name = "abid"; throghs an error
      // let my-name = "Abid" throughs an error
      
      // Assignment without use strict
      // use strict should be at the top of the scope
      // use strict only restricts the scope in which its used
      num = 5; // the variable is created even if didnt exist
      console.log(5);
      
      function toSeUseStrict(){
        "use strict"
        // numAfterUseStrict = 6
        // console.log(numAfterUseStrict);
        // here we cant numAfterUseStrict in this scope
      }

      toSeUseStrict();

      numTwo = 7;
      console.log(numTwo);