import { StyleSheet, View } from "@react-pdf/renderer";
import { WaterIcon } from "assets/images/svg-icons";
import { ThemeColors } from "common/plannerOptions";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

export default function BlankRowItemWithIcon() {
  const { color } = useSelector(selectTheme());
  const styles = StyleSheet.create({
    container: {
      color: ThemeColors.get(color),
      width: "100%",
      height: 20,
      marginTop: 7,
      paddingLeft: 4,
      flexDirection: "row",
    },
  });
  return (
    <View style={styles.container}>
      <WaterIcon />
      <WaterIcon />
      <WaterIcon />
      <WaterIcon />
      <WaterIcon />
    </View>
  );
}
