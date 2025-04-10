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
    // Hiển thị thông tin đăng nhập
    Alert.alert('Thông tin đăng nhập', `Username: ${username}\nPassword: ${password}`);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Hình nền */}
      <ImageBackground
        source={require('./images/anhnen.jpg')}
        style={styles.background}
        resizeMode="cover"
      >

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('./images/pokemon.jpg')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

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
    justifyContent: 'flex-start',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: '90%',
    height: 150,
  },
  formContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
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
