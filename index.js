module.exports = {
    name: 'ember-data-shim-typings',

    included: function(app) {
        this._super.included.apply(this, arguments);

        app.import('vendor/ember-data-shim-typings.js');
    }
};
