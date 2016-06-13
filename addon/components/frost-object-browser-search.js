import Ember from 'ember';
import layout from '../templates/components/frost-object-browser-search';
import _ from 'lodash'

export default Ember.Component.extend({
  layout: layout,
  classNames: ['frost-object-browser-search'],

  // passed in parameters when the component is called
  searchFilterModel: null,
  searchFilterValue: null,
  searchFilterView: null,
  searchFilterRenderers: {},

  searchMode: true,

  actions: {

    formValueChanged (value) {
      console.log('formValueChanged', value);
      this.set('searchFilterValue', value);
      this.get('actions.handleSearch').call(this, true);
    },

    onValidationHandler (e) {
      this.set('valid', e.errors.length === 0);
    },

    handleSearch (inSearch){
      console.log('handleSearch searchMode ' + inSearch + ', filter', this.get('searchFilterValue'));
      if (inSearch !== this.get('searchMode')) {
        this.set('searchMode', inSearch);
        let onSearchModeChange = this.get('onSearchModeChange');
        if (_.isFunction(onSearchModeChange)) {
          onSearchModeChange(inSearch);
        }
      }
      // if inSearch is true, then the user are still typing
      if (inSearch === false) {
        let onSearchFilterChange = this.get('onSearchFilterChange');
        if (_.isFunction(onSearchFilterChange)) {
          onSearchFilterChange(this.get('searchFilterValue'));
        }
      }
    }

}
});
