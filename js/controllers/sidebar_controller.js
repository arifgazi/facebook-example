// Generated by CoffeeScript 1.3.3
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['chaplin', 'views/sidebar_view'], function(Chaplin, SidebarView) {
  'use strict';

  var SidebarController;
  return SidebarController = (function(_super) {

    __extends(SidebarController, _super);

    function SidebarController() {
      return SidebarController.__super__.constructor.apply(this, arguments);
    }

    SidebarController.prototype.initialize = function() {
      return this.view = new SidebarView();
    };

    return SidebarController;

  })(Chaplin.Controller);
});
