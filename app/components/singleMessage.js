import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-native';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  username: {
    fontSize: 16,
  },
  created: {
    fontSize: 16,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 15,
    color: '#777',
  },
  unread: {
    width: 8,
    height: 8,
    marginTop: 20,
    marginLeft: 5,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
});

class Message extends Component {
  render() {
    const { id, members, messages, statuses: { created } } = this.props.message;
    // FIX ME this should have better validation
    const { message } = messages[0];
    const { username, avatar: { original: avatar } } = members[0];

    return (
      <Link to={`/conversation/${id}`}>
        <View style={styles.container}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <View style={styles.content}>
            <View style={styles.title}>
              <Text style={styles.username}>{ username }</Text>
              <Text style={styles.created}>{ created }</Text>
            </View>
            <Text style={styles.text}>{ message }</Text>
          </View>
          <View style={styles.unread} />
        </View>
      </Link>
    );
  }
}

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string,
    members: PropTypes.array,
    messages: PropTypes.array,
    statuses: PropTypes.object,
  }).isRequired,
};


export default Message;
