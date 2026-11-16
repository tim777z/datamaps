// Jest setup file - loads jQuery for DOM tests
// This allows the existing Jasmine-style specs to run under Jest with jsdom

// Load jQuery globally
global.$ = require('jquery');
global.jQuery = require('jquery');
window.$ = require('window');
window.jQuery = require('jquery');

// Expose jQuery's noConflict
if (typeof window !== 'undefined') {
  window.jQuery = global.jQuery;
  window.$ = global.$;
}