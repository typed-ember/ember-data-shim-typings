declare module 'ember-data/model' {
    import DS from 'ember-data';
    export default DS.Model;
}

declare module 'ember-data/serializers/rest' {
    import DS from 'ember-data';
    export default DS.RESTSerializer;
}

declare module 'ember-data/serializers/json' {
    import DS from 'ember-data';
    export default DS.JSONSerializer;
}

declare module 'ember-data/serializers/json-api' {
    import DS from 'ember-data';
    export default DS.JSONAPISerializer;
}

declare module 'ember-data/adapters/json-api' {
    import DS from 'ember-data';
    export default DS.JSONAPIAdapter;
}

declare module 'ember-data/adapters/rest' {
    import DS from 'ember-data';
    export default DS.RESTAdapter;
}

declare module 'ember-data/adapter' {
    import DS from 'ember-data';
    export default DS.Adapter;
}

declare module 'ember-data/store' {
    import DS from 'ember-data';
    export default DS.Store;
}

declare module 'ember-data/transform' {
    import DS from 'ember-data';
    export default DS.Transform;
}

declare module 'ember-data/attr' {
    import DS from 'ember-data';
    export default DS.attr;
}

declare module 'ember-data/relationships' {
    import DS from 'ember-data';
    export const hasMany: typeof DS.hasMany;
    export const belongsTo: typeof DS.belongsTo;
}
