
import { useState } from 'react';
import { TextInput } from 'react-native';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
const listProduct = [
    { id: 1, name: 'Iphone 15 Promax', price: 1500, img: (require('../assets/iphone15prm.png')), title: 'SmartPhone', sale: 'Best Seller' },
    { id: 2, name: 'Iphone 16 Promax', price: 1600, img: (require('../assets/iphone15prm.png')), title: 'SmartPhone', sale: 'Best Matched' },
    { id: 3, name: 'Iphone 17 Promax', price: 1700, img: (require('../assets/iphone15prm.png')), title: 'SmartPhone', sale: 'Popular' },
    { id: 4, name: 'Iphone 15 Promax', price: 1500, img: (require('../assets/iphone15prm.png')), title: 'SmartPhone', sale: 'Best Seller' },
    { id: 5, name: 'Iphone 16 Promax', price:1600, img: (require('../assets/iphone15prm.png')), title: 'SmartPhone', sale: 'Best Matched' },
    { id: 6, name: 'Iphone 17 Promax', price: 1700, img: (require('../assets/iphone15prm.png')), title: 'SmartPhone', sale: 'Popular' },
    { id: 7, name: 'MacBook Pro 24in', price: 1500, img: (require('../assets/macbook.png')), title: 'MacBook', sale: 'Best Seller' },
    { id: 8, name: 'MacBook Pro 22in', price: 1500, img: (require('../assets/macbook.png')), title: 'MacBook', sale: 'Best Matched' },
    { id: 9, name: 'MacBook Pro 20in', price: 1500, img: (require('../assets/macbook.png')), title: 'MacBook', sale: 'Popular' },
    { id: 10, name: 'MacBook Pro 24in', price: 1500, img: (require('../assets/macbook.png')), title: 'MacBook', sale: 'Best Seller' },
    { id: 11, name: 'MacBook Pro 22in', price: 1500, img: (require('../assets/macbook.png')), title: 'MacBook', sale: 'Best Matched' },
    { id: 12, name: 'MacBook Pro 20in', price: 1500, img: (require('../assets/macbook.png')), title: 'MacBook', sale: 'Popular' },
    { id: 13, name: 'Ipad Pro', price: 1500, img: (require('../assets/ipad.png')), title: 'Ipad', sale: 'Best Seller' },
    { id: 14, name: 'Ipad Cùi', price: 1500, img: (require('../assets/ipad.png')), title: 'Ipad', sale: 'Best Matched' },
    { id: 15, name: 'Ipad lỏ', price: 1500, img: (require('../assets/ipad.png')), title: 'Ipad', sale: 'Popular' },
    { id: 16, name: 'Ipad dởm', price: 1500, img: (require('../assets/ipad.png')), title: 'Ipad', sale: 'Best Seller' },
    { id: 17, name: 'Ipad sida', price: 1500, img: (require('../assets/ipad.png')), title: 'Ipad', sale: 'Best Matched' },
    { id: 18, name: 'Ipad Vip', price: 1500, img: (require('../assets/ipad.png')), title: 'Ipad', sale: 'Popular' },
    { id: 19, name: 'Ipad Pro', price: 1500, img: (require('../assets/ipad.png')), title: 'Ipad', sale: 'Best Seller' },
    { id: 20, name: 'Ipad Cùi', price: 1500, img: (require('../assets/ipad.png')), title: 'Ipad', sale: 'Best Matched' },
    { id: 21, name: 'Ipad lỏ', price: 1500, img: (require('../assets/ipad.png')), title: 'Ipad', sale: 'Popular' },
    { id: 22, name: 'Ipad dởm', price: 1500, img: (require('../assets/ipad.png')), title: 'Ipad', sale: 'Best Seller' },
    { id: 23, name: 'Ipad sida', price: 1500, img: (require('../assets/ipad.png')), title: 'Ipad', sale: 'Best Matched' },
    { id: 24, name: 'Ipad Vip', price: 1500, img: (require('../assets/ipad.png')), title: 'Ipad', sale: 'Popular' },
]
export default function App({navigation}) {
    const [category, setCategory] = useState("SmartPhone");
    const [sale, setSale] = useState("Best Seller");
    const [list, setList] = useState(listProduct.slice(0, 3));
    //search category
    const handleSearchCategory = (text) => {
        const fProduct = listProduct.filter(item =>
            item.title.toLowerCase().includes(text.toLowerCase()) && item.sale.toLowerCase().includes(sale.toLowerCase())
        );
        setList(fProduct.slice(0, 3));
    }
    //serach category + sale
    const handleSearchSale = (text) => {
        const fProduct = listProduct.filter(item =>
            item.title.toLowerCase().includes(category.toLowerCase()) && item.sale.toLowerCase().includes(text.toLowerCase())
        );
        setList(fProduct.slice(0, 3));
    }
    // get all theo category + sale
    const handleSeeAll = () => {
        const fAll = listProduct.filter((item) =>
            item.title.toLowerCase().includes(category.toLowerCase()) && item.sale.toLowerCase().includes(sale.toLowerCase())
        );
        setList(fAll);
    }
    const render = ({ item }) => {
        return (
            <View style={{ width: '100%', height: 100, flexDirection: 'row', borderWidth: 1, marginBottom: 10 }}>
                <Image style={{ width: '30%', height: '100%' }} resizeMode='contain' source={item.img} />
                <View style={{ padding: 10, width: '50%' }}>
                    <Text style={{ fontSize: 18, fontWeight: 700 }}>{item.name}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 700, color: 'red' }}>{item.price}$</Text>
                    <Text style={{ fontSize: 20, fontWeight: 700 }}>{item.sale}</Text>
                </View>
                <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable onPress={()=>{navigation.navigate('Detail',item)}} style={{ backgroundColor: 'red', width: 40, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 700 }}>Mua</Text>
                    </Pressable>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: '30%', justifyContent: 'space-around' }}>
                <View style={{ width: '100%', justifyContent: 'flex-start' }}>
                    <Text style={{ color: 'pink', fontSize: 30, fontWeight: 'bold' }}>Nhân Store</Text>
                </View>
                <TextInput style={{ height: 40, borderWidth: 1 }} placeholder='Search...'
                    onChangeText={(text) => {
                        handleSearchCategory(text)
                    }}
                >
                </TextInput>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pressable onPress={() => {
                        setCategory('SmartPhone')
                        handleSearchCategory('SmartPhone')
                    }}
                        style={{ width: 120, height: 40, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>Smart Phone</Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        setCategory('Ipad')
                        handleSearchCategory('Ipad')
                    }}
                        style={{ width: 100, height: 40, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>Ipad</Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        setCategory('MacBook')
                        handleSearchCategory('MacBook')
                    }}
                        style={{ width: 120, height: 40, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>Macbook</Text>
                    </Pressable>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pressable onPress={() => {
                        setSale('Best Seller')
                        handleSearchSale('Best Seller')
                    }}
                        style={{ width: 120, height: 40, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>Best Seller</Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        setSale('Best Matched')
                        handleSearchSale('Best Matched')
                    }}
                        style={{ width: 100, height: 40, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>Best Match</Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        setSale('Popular')
                        handleSearchSale('Popular')
                    }}
                        style={{ width: 120, height: 40, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>Populae</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ width: '100%', height: '60%' }}>
                <ScrollView>
                    <FlatList
                        data={list}
                        renderItem={render}>

                    </FlatList>
                </ScrollView>
            </View>
            <View style={{ width: '100%', height: '10%', justifyContent: 'center', alignItems: 'center' }}>
                <Pressable onPress={() => {
                    handleSeeAll()
                }}
                    style={{ backgroundColor: 'red', width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'blue', fontSize: 20 }}>See ALL</Text>
                </Pressable>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
});
