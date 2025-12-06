import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Button,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const UserProfile = ({ route }) => {
  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);

  const handleLogout = async () => {
    navigation.navigate('Homescreen');
  };

  function renderModal() {
    // List of Locations

    return (
      // Pop up screen for User to select location
      <Modal
        visible={showModal}
        animationType='slide'
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to log out?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelBttn}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.cancelBttnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoutConfirmBttn}
                onPress={handleLogout}
              >
                <Text style={styles.logoutConfirmBttnText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <SafeAreaView style={styles.profileLayout}>
      <View style={styles.profileAdjustment}>
        <View style={styles.profileHeader}>
          <FontAwesome
            name='user-circle-o'
            size={65}
            color='black'
            style={styles.profileUser}
          />
          <Text style={styles.profileName}>
            {'Deontae'} {'Smith'}
          </Text>
        </View>
        <View style={styles.profileBottom}>
          <Text style={styles.profileBottomHeader}>Manage Campus Connect</Text>
          <TouchableOpacity
            style={styles.profileBox}
            // onPress={() => {
            //   changeScreen(dispatch, 'AccountInfo');
            //   navigation.navigate('AccountInfo', {
            //     id,
            //   });
            // }}
          >
            <MaterialCommunityIcons
              name='account-edit-outline'
              size={26}
              color='black'
            />
            <Text style={styles.profileText}>Account Info</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileBox}
            // onPress={() => {
            //   navigation.navigate('Security', {
            //     id,
            //   });
            // }}
          >
            <MaterialCommunityIcons
              name='lock-open-outline'
              size={25}
              color='black'
            />
            <Text style={styles.profileText}>Security</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileBox}
            onPress={() => setShowModal(true)}
          >
            <MaterialCommunityIcons name='logout' size={24} color='black' />
            <Text style={styles.profileText}>Log Out</Text>
          </TouchableOpacity>
          {renderModal()}
        </View>
      </View>
    </SafeAreaView>
  );
};

export { UserProfile };

export const styles = StyleSheet.create({
  profileLayout: {
    flex: 1,
    backgroundColor: '#fff',
  },

  profileAdjustment: {},

  profileHeader: {
    backgroundColor: '#fff',
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  profileUser: {
    marginBottom: 15,
  },

  profileName: {
    color: '#f2998d',
    fontWeight: '700',
    fontSize: 17,
  },

  profileBottom: {
    flexDirection: 'column',
  },

  profileBottomHeader: {
    fontSize: 20,
    paddingLeft: 20,
    marginBottom: 15,
    fontFamily: 'BebasNeue_400Regular',
  },

  profileBox: {
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    padding: 18,
    alignItems: 'center',
    marginBottom: 10,
  },

  profileText: {
    fontSize: 15,
    marginLeft: 10,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },

  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    height: '20%',
  },

  modalText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'BebasNeue_400Regular',
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },

  cancelBttn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3e3e3',
    borderRadius: 10,
    width: '45%',
    height: '80%',
  },

  cancelBttnText: {
    fontSize: 15,
  },

  logoutConfirmBttn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2998d',
    borderRadius: 10,
    width: '45%',
    height: '80%',
  },

  logoutConfirmBttnText: {
    color: '#fff',
    fontSize: 15,
  },
});
