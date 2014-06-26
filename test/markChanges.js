module.exports = {
  "Clicking on a blank mark changes it to X": function(browser){
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#grid-11', '_')
      .click('#grid-11')
      .assert.containsText('#grid-11', 'X')
      .click('#grid-11')
      .assert.containsText('#grid-11', 'O')
      .click('#grid-11')
      .assert.containsText('#grid-11', '_')
      .end();
  },

  "Changing an entire row to X should make it say that X is winning": function(browser){
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .click('#grid-11')
      .click('#grid-12')
      .click('#grid-13')
      .assert.containsText('#winning', 'X')
      .end();
  }
};
