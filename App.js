import { StyleSheet, SafeAreaView, Text, Image } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Songs from "./contents/songs";
import images from "./assets/Images/images";



export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  // add track id to tracks
  tracks.forEach((track, index) => {
    tracks[index].id = index;
  });

  let cont = null; 
  if (!token) {
    cont = (
      <Pressable style={styles.authBut} onPress={getSpotifyAuth}>
        <Image source={images.spotify} style={{ width: 20, height: 20, marginRight:10 }} />
        <Text style={{color: "white"}}>Connect With Spotify</Text>
      </Pressable>
    );
  } else {
    cont = (
      <Songs tracks={tracks} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: Your code goes here */}
      {cont}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  authBut: {
    backgroundColor: Themes.colors.spotify,
    padding: 10,
    borderRadius: 99999,
    flexDirection: "row",
  },
});
