var VideoListEntryView = Backbone.View.extend({


  model: Video,

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function(e) {
    this.model.set('selectVal',e);
    this.model.select();
  },

  initialize: function() {
    this.on('click', this.model.select, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
