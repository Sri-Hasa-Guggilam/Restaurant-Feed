/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* To write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */

    it('defined URL is not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });


    /* TO write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

    it('defined name is not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      });
    });


  });


  /* Writting a new test suite named "The menu" */


  let body = document.getElementsByTagName('body')[0];
  describe('Menu', function() {
    it('Hidden', function() {
      expect(body.classList.contains('menu-hidden')).toBe(true);
    });
    /* Writting a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('Menu visibility', function() {
      let menu = document.getElementsByClassName('menu-icon-link')[0];
      menu.click();
      expect(body.classList.contains('menu-hidden')).toBe(false);
      menu.click();
      expect(body.classList.contains('menu-hidden')).toBe(true);
    });
  });

  /* To write a new test suite named "Initial Entries" */

  describe('Initial Entries', function() {
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('present', function() {
      expect($('.feed .entry').length).toBeGreaterThan(0);
    });
  });

  /* To write a new test suite named "New Feed Selection" */

  describe('Feeds', function() {
    var html;
    beforeEach(function(done) {
      loadFeed('0', function() {
        html = window.document.querySelector(".feed").innerHTML;
        loadFeed(1, done);
      });
    });



    /* Ensures content changes upon load.
     */
    it('content changes', function() {
      var newhtml = window.document.querySelector(".feed").innerHTML;
      expect(html).not.toBe(newhtml);
    });
  });
}());
