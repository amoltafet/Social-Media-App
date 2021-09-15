import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import {Card} from 'react-native-elements';
import {
    UserInfo,
    UserImg,
    PostTime,
    PostUserName,
    PostContainer
  } from '../MessageStyles';


const Posts = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/users/user-3.jpg'),
    messageTime: '4 mins ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/users/user-3.jpg'),
    liked: true,
    likes: '15',
    comments: '4'
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/users/user-1.jpg'),
    messageTime: '2 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/users/user-2.jpg'),
    liked: true,
    likes: '15',
    comments: '4'
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/users/user-2.jpg'),
    messageTime: '1 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
      postImg: require('../assets/users/user-3.jpg'),
      liked: true,
      likes: '15',
      comments: '4'
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/users/user-2.jpg'),
    messageTime: '1 day ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/users/user-2.jpg'),
    liked: true,
    likes: '15',
    comments: '4'
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/users/user-2.jpg'),
    messageTime: '2 days ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/users/user-2.jpg'),
    liked: true,
    likes: '15',
    comments: '4'
  },
]

const PostCard = () => {
  return (
    <View style={styles.container}>
        <FlatList data = {Posts}
        renderItem={renderItem} 
        />
    </View>
  );
};

const renderItem = ({ item }) => (
    <PostContainer>
        <Card>
            <UserInfo>
                <UserImg source={item.userImg} />
                <PostUserName>{item.userName}</PostUserName>
                <PostTime>{item.messageTime}</PostTime>
            </UserInfo>
            <Card.Divider/>
            <Card.Image source={item.postImg}></Card.Image>
            <Text style={{marginBottom: 10, marginTop: 10}}>{item.userName}: {item.post}</Text>
        </Card>
    </PostContainer>
)


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffff',
    },
  });
  export default PostCard;

