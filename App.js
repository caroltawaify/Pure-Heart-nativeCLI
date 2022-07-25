import React from 'react';
import Video from 'react-native-video';
// import video from './video.mp4'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  // useColorScheme,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);  

  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView >
      <StatusBar
       />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <Header />
        <View>
          <View style={{backgroundColor: '#f00', height: 245}}>
          <Text>lalaland</Text>
            <Video
            // https://player.vimeo.com/video/299264098
            // https://www.youtube.com/watch?v=rCxIvGGhb7k
            // http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
              source={{uri: 'https://player.vimeo.com/video/299264098'}}
              paused={!isPlaying}
              repeat={true}
              muted={false}
              style={{width:400, height: 200}}
            />
            <Button
                onPress={() => setIsPlaying(p => !p)}  
                title={isPlaying ? 'Stop' : 'Play'}  
            />  
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
