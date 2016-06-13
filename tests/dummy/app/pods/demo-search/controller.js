import Ember from 'ember'

export default Ember.Controller.extend({
  selected: {},

  viewSchema: {
    low: {
      'version': '1.0',
      'type': 'form',
      'rootContainers': [
        {'label': 'Main', 'container': 'main'}
      ],
      'containers': [
        {
          'id': 'main',
          'className': 'flex-row',
          'rows': [
            [
              {'model': 'alias', 'labelClassName': 'ob-label', 'inputClassName': 'ob-input'}
            ],
            [
              {
                'model': 'updatedAt',
                'label': 'Last Updated',
                'labelClassName': 'ob-label',
                'inputClassName': 'ob-input'
              }
            ]
          ]
        }
      ]
    },
    medium: {
      'version': '1.0',
      'type': 'form',
      'rootContainers': [
        {'label': 'Main', 'container': 'main'}
      ],
      'containers': [
        {
          'id': 'main',
          'className': 'flex-row',
          'rows': [
            [
              {'model': 'alias', 'labelClassName': 'ob-label', 'inputClassName': 'ob-input'},
              {'model': 'value', 'labelClassName': 'ob-label', 'inputClassName': 'ob-input'}
            ],
            [
              {
                'model': 'updatedAt',
                'label': 'Last Updated',
                'labelClassName': 'ob-label',
                'inputClassName': 'ob-input'
              }
            ]
          ]
        }
      ]
    },
    high: {
      'version': '1.0',
      'type': 'form',
      'rootContainers': [
        {'label': 'Main', 'container': 'main'}
      ],
      'containers': [
        {
          'id': 'main',
          'className': 'flex-row',
          'rows': [
            [
              {'model': 'alias', 'labelClassName': 'ob-label', 'inputClassName': 'ob-input'},
              {'model': 'value', 'labelClassName': 'ob-label', 'inputClassName': 'ob-input'}
            ],
            [
              {
                'model': 'updatedAt',
                'label': 'Last Updated',
                'labelClassName': 'ob-label',
                'inputClassName': 'ob-input'
              },
              {'model': 'id', 'labelClassName': 'ob-label', 'inputClassName': 'ob-input'}
            ]
          ]
        }
      ]
    }
  },

  filters: [
    {
      label: 'First Filter',
      type: 'select',
      name: 'first-filter',
      clearable: true,
      data: [{
        label: 'Test1',
        value: 'poasdfkljqpoiasdfjae'
      }, {
        label: 'Test2',
        value: 'asdfasdfkljqpoihaasf'
      }, {
        label: 'Test3',
        value: 'poasSfaFFsacaejktdfe'
      }, {
        label: 'Test4',
        value: 'asdfasdffeacrhASHASD'
      }]
    },
    {
      label: 'Second filter',
      type: 'select',
      name: 'second-filter',
      data: [{
        label: 'Test1',
        value: 'poasdfkljqpoiasdfjae'
      }, {
        label: 'Test2',
        value: 'asdfasdfkljqpoihaasf'
      }, {
        label: 'Test3',
        value: 'poasSfaFFsacaejktdfe'
      }, {
        label: 'Test4',
        value: 'asdfasdffeacrhASHASD'
      }]
    }
  ],

  demoSearchMode: true,

  demoSearchFilterModel: {
    "type": "object",
    "properties": {
      "searchText": {"type": "string"}
    }
  },

  demoSearchFilterValue: {
    searchText: ''
  },

  demoSearchFilterView: {
    "version": "1.0",
    "type": "form",
    "rootContainers": {
      "label": "Main",
      "id": "main"
    },
    "containers": [
      {
        "id": "main",
        "rows": [
          [
            {"label": "Search", "model": "searchText"}
          ]
        ]
      }
    ]
  },

  demoSearchFilterRenderers: {
    'string': 'search-text-field'
  },

  actions: {
    onCreate () {
      window.alert('One does not merely create things')
    },

    onOptionSelected () {
      let selected = this.get('selected')
      console.log('Facet changed')
      const facet = arguments[0]
      if (facet.value.length === 0) {
        delete selected[facet.id]
      } else {
        selected[facet.id] = facet.value
      }
      this.set('selected', selected)
    },

    delete (selections) {
      selections.forEach((item) => {
        item.destroyRecord()
      })
    },

    edit (selections) {
      const ids = selections.map((si) => si.get('id')).join(', ')
      window.alert(`Edit: ${ids}`)
    },

    onDetailChange (level) {
      Ember.Logger.debug(`Level of detail changed to ${level}`)
    },

    /**
     * Handles event whether the browser is in search mode or not
     *
     * @function actions:onSearchModeChange
     * @param boolean
     * @returns {undefined}
     */
    onSearchModeChange (inSearch) {
      console.log('onSearchModeChange', inSearch);
      this.set('demoSearchMode', inSearch);
    },

    onSearchFilterChange(value) {
      Ember.Logger.debug('onSearchFilterChange', value);
    }
  }
})
