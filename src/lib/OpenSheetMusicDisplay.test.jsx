import React from "react";
import OpenSheetMusicDisplay from "./OpenSheetMusicDisplay";
import renderer from "react-test-renderer";

describe("TextInput", () => {
  it("renders properly", () => {
    const tree = renderer
      .create(<OpenSheetMusicDisplay file="Beethoven_AnDieFerneGeliebte.xml" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});