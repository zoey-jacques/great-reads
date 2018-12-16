import mapStateToProps from "../../../../components/header/account/mapStateToProps";

describe("mapStateToProps", () => {
  const state = {
    user: {
      isLoggedIn: true,
    }
  };
  const props = mapStateToProps(state);

  it("returns isLoggedIn", () => {
    expect(props.isLoggedIn).toEqual(state.user.isLoggedIn);
  });
});