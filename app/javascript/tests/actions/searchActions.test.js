import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { List, Map } from "immutable";

import searchActions from "../../actions/searchActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("searchActions", () => {
  describe("successful search", () => {
    beforeEach(() => {
      global.fetch.resetMocks();
      global.fetch.mockResponse(JSON.stringify({
        success: true,
        books: [{ id: "3", title: "hey" }],
      }));
    });

    it("updates the books state", () => {
      const form = { query: "hey", scope: "all" };
      const expectedAction = {
        type: "SEARCH_SUCCESS",
        payload: Map({
          books: List([Map({ id: "3", title: "hey" })]),
          query: "hey",
          scope: "all",
        }),
      };

      return store.dispatch(searchActions.search(form))
        .then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions.length).toBe(1);
          expect(expectedActions).toContainEqual(expectedAction);
        });
    });
  });
});
