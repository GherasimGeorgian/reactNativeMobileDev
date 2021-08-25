import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'ubuntu-regular': require('../fonts/Ubuntu-Regular.ttf'),
    'robotomonoregular': require('../fonts/RobotoMono-Regular.ttf'),
     myfont: require('../fonts/RampartOne-Regular.ttf')
    
  });