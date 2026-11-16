describe("Plugin", function() {
  var $el;

  beforeEach(function() {
    // Create a mock DOM element for the map container
    const container = document.createElement('div');
    container.id = 'container1';
    document.body.appendChild(container);

    $el = $( "#container1" );
  });

  afterEach(function() {
    if ($el && $el.length) {
      $el.remove();
    }
  });

  it("should add a 'datamaps' function to $.prototype", function() {
    expect($.fn.datamaps).toBeDefined();
  });

  describe("Rendering elements", function() {
    beforeEach(function() {
      $el.datamaps();
    });

    afterEach(function() {
      $el.html("");
    });

    it("should insert an <svg> element into #root", function() {
      expect( $("svg").length ).toBeGreaterThan(0);
    });

    it("should have inserted a <g> tag with an ID of #states", function() {
      expect( $("g#states").length ).toBeGreaterThan(0);    
    });

    it("should have a bunch of <path> elements", function() {
      expect( $("path").length ).toBeGreaterThan(35);
    });
  });
});