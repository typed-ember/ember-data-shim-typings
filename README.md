# 🛑 ARCHIVED 🛑

# ember-data-shim-typings

Typings for [ember-data shims](https://www.emberjs.com/blog/2016/01/12/ember-data-2-3-released.html#toc_importing-modules):
```ts
// DS.Model
import Model from 'ember-data/model';

// DS.RESTSerializer
import RESTSerializer from 'ember-data/serializers/rest';

// DS.JSONSerializer
import JSONSerializer from 'ember-data/serializers/json';

// DS.JSONAPISerializer
import JSONAPISerializer from 'ember-data/serializers/json-api';

// DS.JSONAPIAdapter
import JSONAPIAdapter from 'ember-data/adapters/json-api';

// DS.RESTAdapter
import RESTAdapter from 'ember-data/adapters/rest';

// DS.Adapter
import Adapter from 'ember-data/adapter';

// DS.Store
import Store from 'ember-data/store';

// DS.Transform
import Transform from 'ember-data/transform';

// DS.attr
import attr from 'ember-data/attr';

// DS.hasMany or DS.belongsTo
import { hasMany, belongsTo } from 'ember-data/relationships';
```

### Installation

With npm:
```
npm install ember-data-shim-typings --save-dev
```

With yarn:
```
yarn add ember-data-shim-typings --dev
```

### Usage

Import the module from one of your typescript sources:

```ts
// app.ts
import 'ember-data-shim-typings';
```
