import { StyleSheet, View } from "@react-pdf/renderer";
import TimeScheduleRow from "components/TimeSchedule/TimeScheduleRow";
import { COLOR } from "constants/color";
import Heading from "pages/weekly/Weekly3/Heading";

const styles = StyleSheet.create({
  container: {
    color: COLOR.BLACK,
    width: "100%",
    paddingLeft: 8,
    paddingRight: 8,
  },
  orderContainer: {
    backgroundColor: COLOR.LIGHT_BROWN,
    width: 25,
    textAlign: "center",
    paddingVertical: 2,
  },
});

export default function TimeSchedule() {
  return (
    <View style={styles.container}>
      <Heading title="SCHEDULE" />
      <TimeScheduleRow timeSchedule="6:00" />
      <TimeScheduleRow timeSchedule="7:00" />
      <TimeScheduleRow timeSchedule="8:00" />
      <TimeScheduleRow timeSchedule="9:00" />
      <TimeScheduleRow timeSchedule="10:00" />
      <TimeScheduleRow timeSchedule="11:00" />
      <TimeScheduleRow timeSchedule="12:00" />
      <TimeScheduleRow timeSchedule="1:00" />
      <TimeScheduleRow timeSchedule="2:00" />
      <TimeScheduleRow timeSchedule="3:00" />
      <TimeScheduleRow timeSchedule="4:00" />
      <TimeScheduleRow timeSchedule="5:00" />
      <TimeScheduleRow timeSchedule="6:00" />
      <TimeScheduleRow timeSchedule="7:00" />
      <TimeScheduleRow timeSchedule="8:00" />
      <TimeScheduleRow timeSchedule="9:00" />
      <TimeScheduleRow timeSchedule="10:00" />
    </View>
  );
}
