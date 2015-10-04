var a = lang.Class( /** @lends ViewModelExtender.prototype */ {
  /**
   * @class ViewModelExtender
   * @param originalViewModel
   */
  constructor: function (originalViewModel) {
    this.viewModel = lang.proxy(originalViewModel)
    this.eventBinder = new lang.EventBinder(this)
  },
  declareProp: function (name, initial, onChange) {
    this.viewModel.declareProp(name, initial)
    if (onChange)
      this.eventBinder.bind(this.viewModel, 'change:' + name, onChange.bind(this.viewModel))
  },
  dispose: function () {
    this.eventBinder.unbind()
  }
})
