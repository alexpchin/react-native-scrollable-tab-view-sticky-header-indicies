import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Text,
  Alert,
  SafeAreaView
} from "react-native";
import ScrollableTabView from "react-native-scrollable-tab-view";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    const data = [];
    for (let i = 0; i < 60; i++) {
      data.push(i);
    }

    this.state = {
      data: data
    };
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate("DetailScreen");
      }}
      style={{
        width: "100%",
        height: 50,
        borderBottomColor: "#0002",
        borderBottomWidth: 0.5,
        paddingHorizontal: 20,
        justifyContent: "center"
      }}
    >
      <Text style={{ fontSize: 22 }}>{item}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          // style={styles.container}
          // contentContainerStyle={styles.contentContainer}
          stickyHeaderIndices={[1]}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {}}
              tintColor={"black"}
              titleColor={"black"}
            />
          }
        >
          <View style={styles.header} />
          <ScrollableTabView>
            <FlatList
              tabLabel={"Results"}
              style={{ flex: 1 }}
              data={this.state.data}
              renderItem={this.renderItem}
              scrollEnabled={true}
              keyExtractor={(item, index) => String(index)}
              onEndReached={() => Alert.alert("End")}
              onEndReachedThreshold={0.01}
            />
          </ScrollableTabView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  // contentContainer: {
  //   flexGrow: 1
  // },
  header: {
    backgroundColor: "red",
    height: 300
  }
});
