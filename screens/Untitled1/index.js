import { ImageBackground } from "react-native";
import { View } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }} style={styles.dOdZImAx}><View style={styles.lOzzPMiS}><ImageBackground style={styles.LTxwCCvq} source={require("./Bez názvu-2.png")} resizeMode="cover"></ImageBackground></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  dOdZImAx: {
    width: 357,
    height: 573,
    borderColor: "#30a49d",
    backgroundColor: "#30a49d"
  },
  lOzzPMiS: {
    height: 582,
    width: 370,
    backgroundColor: "#d0ebf6",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: -1,
    left: 0
  },
  LTxwCCvq: {
    width: 389,
    height: 759,
    position: "absolute",
    left: -20,
    top: 45
  }
});
export default Untitled1;