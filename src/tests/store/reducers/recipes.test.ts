import { describe, it, expect, expectTypeOf } from 'vitest';
import recipesReducer, {
  fetchRecipes,
  initialState,
  setLoading,
} from '../../../store/reducers/recipes';
import { Recipe } from '../../../@types/recipe';

describe('Recipes reducer', () => {
  describe('Structure', () => {
    it('Should be a function', () => {
      expectTypeOf(recipesReducer).toBeFunction();
    });

    it('Should return an object', () => {
      // my reducer should have 2 arguments
      // 1. the state
      // 2. the action
      expectTypeOf(
        recipesReducer(undefined, { type: '__TEST__' })
      ).toBeObject();
    });
  });

  describe('Execution', () => {
    it('Should return the initial state on first call', () => {
      expect(recipesReducer(undefined, { type: '@@INIT' })).toBe(initialState);
    });

    it('Should handle setLoading', () => {
      // je génère mon action pour avoir mon objet action
      const actionLoadingFalse = setLoading(false);
      // j'appelle mon reducer
      const stateLoadingFalse = recipesReducer(
        initialState,
        actionLoadingFalse
      );

      // je teste l'objet retourné
      // je m'attends à avoir mon state initial avec `loading` à `false`
      // j'utilise `toEqual` pour comparer des objets au lieu de `toBe` qui lui compare des références
      expect(stateLoadingFalse).toEqual({
        ...initialState,
        loading: false,
      });

      // on peut aussi tester uniquement la valeur modifiée
      // je teste la valeur retournée → mon state avec `loading` à `false`
      expect(stateLoadingFalse.loading).toBe(false);

      // je teste l'action inverse
      const actionLoadingTrue = setLoading(true);
      // j'appelle mon reducer
      const stateLoadingTrue = recipesReducer(initialState, actionLoadingTrue);
      // je teste la valeur retournée → mon state avec `loading` à `true`
      expect(stateLoadingTrue.loading).toBe(true);
    });

    describe('Thunk', () => {
      it('Should handle fetchRecipes.fulfilled', () => {
        // const action = {
        //   type: 'recipes/fetch/fulfilled',
        //   payload: [
        //     {
        //       id: '1',
        //       title: 'Pizza',
        //       description: 'Une bonne pizza',
        //       createdAt: new Date(),
        //       updatedAt: new Date(),
        //     },
        //   ],
        // };

        // const state = recipesReducer(initialState, action);

        // expect(state.list).toEqual(action.payload);

        const fakePayload: Recipe[] = [
          {
            id: 81439120380,
            title: 'Pizza',
            slug: 'pizza',
            thumbnail: 'https://fake.url',
            author: 'John Doe',
            difficulty: 'easy',
            description: 'Une bonne pizza',
            ingredients: [],
            instructions: [],
          },
        ];

        const fakeRequestId = 'fake-request-id';
        const action = fetchRecipes.fulfilled(fakePayload, fakeRequestId);

        const state = recipesReducer(initialState, action);

        // soit on teste l'objet entier
        // expect(state).toEqual({
        //   ...initialState,
        //   list: fakePayload,
        //   loading: false,
        // });

        // soit on teste uniquement la ou les valeur(s) modifiée
        expect(state.list).toEqual(fakePayload);
        expect(state.loading).toBe(false);
      });
    });
  });
});
