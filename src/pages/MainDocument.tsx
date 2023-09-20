import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import Weekly from "./weekly/Weekly";
import React from "react";

const stylesObject = StyleSheet.create({
  page: {
    display: "flex",
    width: "842px",
    height: "795px",
    padding: "12px",
  },
  boxed: {
    display: "flex",
    width: "842px",
    height: "795px",
    padding: "12px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
    backgroundColor: "#FBF9F7",
  },
  boxedInner: {
    display: "flex",
    width: "818px",
    height: "771px",
    alignItems: "flex-start",
    flexShrink: 0,
  },
  boxedContentWapper: {
    display: "flex",
    padding: "12px 0px 16px 0px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "14px",
    flex: "1 0 0",
    alignSelf: "stretch",
    backgroundColor: "#FFF",
  },
});

const testArr = [1, 2, 3, 4];
const MainDocument = () => (
  <Document>
    {testArr.map((n) => (
      <Page wrap={false} size="A3">
        <View style={stylesObject.boxed}>
          <View style={stylesObject.boxedInner}>
            <View style={stylesObject.boxedContentWapper}>
              <Weekly />
            </View>
          </View>
        </View>
      </Page>
    ))}
  </Document>
);

export default MainDocument;
