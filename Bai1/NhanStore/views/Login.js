import { useState } from 'react';
import { StyleSheet, Text, View, Image,TextInput,Pressable } from 'react-native';
const arrUser = [
    { user: 'PhamDucNhan', pass: '123' },
    { user: 'TruongVanTu', pass: '123' },
    { user: 'LuongVietThanh', pass: '123' },
    { user: 'LeQuocThinh', pass: '123' },
    { user: 'NguyenNhatSang', pass: '123' },
    { user: 'admin', pass: '1' },
]
export default function App({navigation}) {
    const [userName,setUser] = useState('');
    const [passWord,setPass] = useState('');
    const handleLogin = () => {
        const login = arrUser.find((u) => u.user === userName && u.pass === passWord);
        if (login) {
            navigation.navigate('Home');
            alert('Login successful.')
        } else {
            alert('Login failed.');
        }
        console.log(userName,passWord);
    };
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30,fontWeight:700 }}>Nhân Store</Text>
            <Image source={require('../assets/logoStore.png')}
            style={{ width: 200, height: 200 }}
            resizeMode='contain'
            />
            <TextInput onChangeText={setUser}
            style={{width:'80%',height:70,backgroundColor:'#1978bf',fontSize:30,paddingLeft:20}} placeholder='UserName..' />
            <TextInput onChangeText={setPass}
            secureTextEntry={true}
            style={{width:'80%',height:70,backgroundColor:'#1978bf',fontSize:30,paddingLeft:20}} placeholder='Password..'/>
            <Pressable onPress={handleLogin}
            style={{width:'80%',height:70,alignItems:'center',justifyContent:'center',backgroundColor:'blue',borderRadius:30}}>
                <Text style={{fontSize:30,fontWeight:700,color:'#fff'}} >Login</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
