import { View, Image } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Titulo from '../components/Titulo';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffeba3',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
          source={require('./Logo.png')}
          style={{ width: '90px', height: '120px', resizeMode: 'contain' }}
        />
      <Titulo>Facilit Nutrition</Titulo>
      <ActivityIndicator size={'large'} />
    </View>
  );
};
export default Splash;
