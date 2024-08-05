// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const YourComponent = () => {
//   const [topRatedTv, setTopRatedTv] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const getTopRatedMovies = async () => {
//     // Replace with your actual API call
//     const response = await fetch('https://api.example.com/top-rated-movies');
//     return response.json();
//   };

//   const fetchAndStoreTopRatedMovies = async () => {
//     const res = await getTopRatedMovies();
//     const data = res.results;
//     const timestamp = new Date().toISOString();

//     await AsyncStorage.setItem('topRatedTv', JSON.stringify(data));
//     await AsyncStorage.setItem('topRatedTvTimestamp', timestamp);

//     setTopRatedTv(data);
//     setLoading(false);
//   };

//   const loadTopRatedMovies = async () => {
//     const storedData = await AsyncStorage.getItem('topRatedTv');
//     const storedTimestamp = await AsyncStorage.getItem('topRatedTvTimestamp');

//     if (storedData && storedTimestamp) {
//       const now = new Date();
//       const lastFetchDate = new Date(storedTimestamp);
//       const oneMonthAgo = new Date();
//       oneMonthAgo.setMonth(now.getMonth() - 1);

//       if (lastFetchDate >= oneMonthAgo) {
//         setTopRatedTv(JSON.parse(storedData));
//         setLoading(false);
//         return;
//       }
//     }

//     await fetchAndStoreTopRatedMovies();
//   };

//   useEffect(() => {
//     loadTopRatedMovies();
//   }, []);

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   return (
//     <View style={styles.container}>
//       {topRatedTv.map((item, index) => (
//         <View key={index} style={styles.item}>
//           <Text>{item.title}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   item: {
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
// });

// export default YourComponent;
