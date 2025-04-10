import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  ImageBackground,
  Alert,
} from 'react-native';

function App(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Thông tin đăng nhập', `Username: ${username}\nPassword: ${password}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('./images/anhnen.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.centeredContent}>
          {/* Logo */}
          <Image
            source={require('./images/pokemon.jpg')}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* Form login */}
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="USERNAME"
              placeholderTextColor="#555"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="PASSWORD"
              placeholderTextColor="#555"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.registerText}>REGISTER</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  registerButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  registerText: {
    color: '#333',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#d66f6f',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
