import React from "react";
import { List, Map } from "immutable";

import testHelpers from "../../helpers";
import Search from "../../../pages/search";

import AddBook from "../../../components/search/addBook";
import Books from "../../../components/search/books";
import RelatedShelves from "../../../components/search/relatedShelves";
import SearchBar from "../../../components/search/searchBar";

describe("Search", () => {
  let wrapper;

  beforeEach(() => {
    const state = Map({
      search: Map({
        query: "hey",
        books: List([]),
      }),
    });

    wrapper = testHelpers.mount(<Search />, state);
  });

  it("renders", () => {
    expect(wrapper.find(Search)).toHaveLength(1);
  });

  it("renders a SearchBar", () => {
    expect(wrapper.find(SearchBar)).toHaveLength(1);
  });

  it("does not render a Books", () => {
    expect(wrapper.find(Books)).toHaveLength(0);
  });

  it("renders a AddBook", () => {
    expect(wrapper.find(AddBook)).toHaveLength(1);
  });

  it("does not render a RelatedShelves", () => {
    expect(wrapper.find(RelatedShelves)).toHaveLength(0);
  });

  describe("if there are books", () => {
    beforeEach(() => {
      const state = Map({
        search: Map({
          query: "hey",
          books: List([Map({ id: "3", title: "hey" })])
        }),
      });

      wrapper = testHelpers.mount(<Search />, state);
    });

    it("renders a RelatedShelves", () => {
      expect(wrapper.find(RelatedShelves)).toHaveLength(1);
    });

    it("renders a Books", () => {
      expect(wrapper.find(Books)).toHaveLength(1);
    });
  });
});
