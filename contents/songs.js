import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { millisToMinutesAndSeconds } from "../utils";
import images from "../assets/Images/images";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Ionicons } from "@expo/vector-icons";
import { Themes } from "../assets/Themes";

const Songs = ({ tracks, navigation }) => {
  const renderItem = ({ item }) => (
    <Pressable
        onPress={(e) => {
          e.stopPropagation();
          navigation.navigate("Song Details", { track: item });
        }}
      >
    <View style={styles.song}>
      
        <Pressable
          style={styles.play}
          onPress={(e) => {
            e.stopPropagation();
            navigation.navigate("Song Preview", { track: item });
          }}
        >
          <Ionicons
            name="md-play-circle"
            size={24}
            color={Themes.colors.spotify}
          />
        </Pressable>
        <Image
          source={{ uri: item.imageUrl }}
          style={{ width: "15%", aspectRatio: 1 }}
        />
        <View style={{ padding: 5, width: "30%" }}>
          <Text numberOfLines={1} style={styles.songName}>
            {item.songTitle}
          </Text>
          <Text numberOfLines={1} style={styles.songArtist}>
            {item.songArtists[0].name}
          </Text>
        </View>
        <Text numberOfLines={1} style={styles.songAlbum}>
          {item.albumName}
        </Text>
        <Text style={{ color: "white", width: "10%", padding: 1 }}>
          {millisToMinutesAndSeconds(item.duration)}
        </Text>
      
    </View>
    </Pressable>
  );

  return (
    <View>
      <View style={styles.toptrackspanel}>
        <Image source={images.spotify} style={{ width: 30, height: 30 }} />
        <Text style={styles.toptracks}>My Top Tracks</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  toptrackspanel: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  toptracks: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  song: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  play: {
    color: "white",
    width: "10%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  songName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  songArtist: {
    fontSize: 14,
    color: "#666",
  },
  songAlbum: {
    fontSize: 14,
    color: "white",
    width: "30%",
    padding: 5,
  },
});

export default Songs;
