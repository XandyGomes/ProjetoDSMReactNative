import React, { Component } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import { Container, Form, Input, SubmitButton, List, User, Avatar, Name, Bio, ProfileButton, ProfileButtonText } from './styles';

export default class Main extends Component {

  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');
    
    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.users !== users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleAddUser = async () => {

    const { users, newUser } = this.state;

    this.setState({ loading: true });

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      users: [...users, data],
      newUser: '',
      loading: false,
    });

    Keyboard.dismiss();

    console.log(response.data)
  };

  render() {
    const { users, newUser, loading } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Adicionar usuário'
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType='send'
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (<ActivityIndicator color='#fff' />) : (<Icon name='add' size={20} color='#fff' />)}
          </SubmitButton>
        </Form>
        <List
          showVerticalScrollIndicator={false}
          data={users}
          keyExtractor={user => user.login}
          renderItem={( {item} ) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton onPress={() => {
                this.props.navigation.navigate('user', { user: item });
              }}>
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>

              <ProfileButton onPress={() => { 
                this.setState({ users: users.filter(user => user.login !== item.login) })
              }}
                style={{backgroundColor: '#FFC0CB'}}
              >
                <ProfileButtonText>Excluir</ProfileButtonText>
              </ProfileButton>


            </User>
          )}
        />
      </Container>
    );
  }
}