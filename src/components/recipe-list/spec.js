import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import {List, ListItem} from 'material-ui/List';

import RecipeList from './';

test( 'RecipeList', t => {
  let expected, actual;
  t.plan( 2 );

  const recipes = [ { id: 1 }, { id: 2, }, { id: 3 } ];
  const wrapper = shallow( <RecipeList recipes={recipes} /> );
  expected = true;
  actual = wrapper.is( List );

  t.ok( actual === expected, 'renders a List' );

  expected = 3;
  actual = wrapper.find( ListItem ).length;

  t.equals( actual, expected, 'renders a ListItems for each recipe in the list' );
});

