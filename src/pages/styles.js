import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor:'#999'
})`
    flex: 1;
    height: 40px;
    background: #eee;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #3498db;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
`;

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #eee;
`;

export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
`;

export const Bio = styled.Text``;

export const ProfileButton = styled(RectButton)``;

export const ProfileButtonText = styled.Text``;