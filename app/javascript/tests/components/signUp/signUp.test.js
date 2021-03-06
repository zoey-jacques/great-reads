import { Map } from "immutable";
import React from "react";
import testHelpers from "../../helpers";
import SignUp from "../../../components/signUp";
import SignUpForm from "../../../forms/signUp";

describe("SignUp", () => {
  let wrapper;

  beforeEach(() => {
    const state = Map({
      user: Map(),
    });

    wrapper = testHelpers.mountWithRouter(<SignUp />, state);
  });

  it("renders", () => {
    expect(wrapper.find(SignUp)).toHaveLength(1);
  });

  it("renders the sign up form", () => {
    expect(wrapper.find(SignUpForm)).toHaveLength(1);
  });


  it("does not render the login error message", () => {
    expect(wrapper.find(".sign-up-error-message")).toHaveLength(0);
  });

  describe("sign up error message present", () => {
    let newWrapper;
    beforeEach(() => {
      const state = Map({
        user: Map({
          errors: Map({
            signUpErrorMessage: "Sup dog",
          }),
        }),
      });

      newWrapper = testHelpers.mountWithRouter(<SignUp />, state);
    });

    it("renders the error message html", () => {
      expect(newWrapper.find(".sign-up-error-message")).toHaveLength(1);
    });
  });
});
