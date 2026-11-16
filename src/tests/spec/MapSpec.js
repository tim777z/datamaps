describe("Map", function() {
  var map, mockEvents = {
    run: function() {}
  };

  beforeEach(function() {
    // Setup a mock DOM element for the map container
    const container = document.createElement('div');
    container.id = 'container1';
    document.body.appendChild(container);

    map = makeMap( $( $("#container1") ) );
    
    $("#container1").on("map-click", function() {
      mockEvents.run();
    });
    $("#container1").on("map-mouseover", function() {
      mockEvents.run();
    });
    $("#container1").on("map-mouseout", function() {
      mockEvents.run();
    });
    $("#container1").on("map-touchstart", function() {
      mockEvents.run();
    });

    spyOn(mockEvents, 'run');
  });

  afterEach(function() {
    if (map && map.remove) {
      map.remove();
    }
    // Clean up the container
    if ($("#container1").length) {
      $("#container1").remove();
    }
    mockEvents.run.mockClear();
  });

  it("should have a function named render", function() {
    map = makeMap( $( $("#container1") ) );
    expect(map.render).not.toBeUndefined();
  });

  describe("Events", function() {
    beforeEach(function() {
      map.render();
    });

    afterEach(function() {
      map.remove();
    });

    it("should fire event handler for click", function() {
      expect(mockEvents.run).not.toHaveBeenCalled();
      $("path:nth-child(20)").trigger("click");
      expect(mockEvents.run).toHaveBeenCalled();
    });

    it("should fire event handler for mouseover", function() {
      expect(mockEvents.run).not.toHaveBeenCalled();
      $("path:nth-child(20)").trigger("mouseover");
      expect(mockEvents.run).toHaveBeenCalled();
    });

    it("should fire event handler for mouseout", function() {
      expect(mockEvents.run).not.toHaveBeenCalled();
      $("path:nth-child(20)").trigger("mouseout");
      expect(mockEvents.run).toHaveBeenCalled();
    });


    it("should fire event handler for touch", function() {
      expect(mockEvents.run).not.toHaveBeenCalled();
      $("path:nth-child(20)").trigger("touchstart");
      expect(mockEvents.run).toHaveBeenCalled();
    });
  });

  describe("Rendering elements", function() {
    beforeEach(function() {
      map.render();
    });

    afterEach(function() {
      map.remove();
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

  function makeMap( $container ) {
    return new Datamap({
      element: $container[0],
      scope: 'world'
    });
  }
});