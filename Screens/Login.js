import {View, Text, TextInput, Button, StyleSheet, Image} from 'react-native'
import Titulo from "../components/Titulo"

const Login = () => {
  return (
    <View style={estilos.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Image
          source={require('./Logo.png')}
          style={{ width: '90px', height: '120px', resizeMode: 'contain' }}
        />
      </View>
      <Titulo style={estilos.titulo}> LOGIN </Titulo>
      <Text>USUÁRIO</Text>
      <TextInput
        style={estilos.input}
        placeholder="email"
        keyboardType="email-address"
      />
      <Text>DIGITE SUA SENHA</Text>
      <TextInput
        style={estilos.input}
        placeholder="senha"
        secureTextEntry={true}
      />
      <Button title="ENTRAR" color={'#10482F'} />
    </View>
  );
};
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEBA3',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  titulo: {
    color: '#10482F',
    fontSize: 26,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    color: '#10482F',
    lineHeight: 48,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 24,
  },
});
export default Login;
