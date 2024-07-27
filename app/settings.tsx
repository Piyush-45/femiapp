import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const renderSectionHeader = (title, icon) => (
    <View style={styles.sectionHeader}>
      {icon}
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  const renderSettingItem = (title) => (
    <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.settingItemText}>{title}</Text>
      <Ionicons name="chevron-forward" size={24} color="#888" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {renderSectionHeader('Reminders', <Ionicons name="notifications" size={24} color="black" />)}
      {renderSettingItem('Cycle reminders')}
      {renderSettingItem('Medicine reminder')}
      {renderSettingItem('Contraception reminders')}
      {renderSettingItem('Meditation reminders')}
      {renderSettingItem('Daily logging reminder')}
      {renderSettingItem('Tracking reminders')}
      {renderSettingItem('Secret reminders')}

      {renderSectionHeader('Personal Data', <Ionicons name="star" size={24} color="black" />)}
      {renderSettingItem('Your name')}
      {renderSettingItem('Secure access (PIN)')}
      {renderSettingItem('Themes')}
      {renderSettingItem('Calendar view')}

      {renderSectionHeader('My Data', <Ionicons name="folder" size={24} color="black" />)}
      {renderSettingItem('Back up data')}
      {renderSettingItem('Restore Data')}
      {renderSettingItem('Delete app data')}
      {renderSettingItem('Calender view')}
      

      {renderSectionHeader('Other', <Ionicons name="settings-sharp" size={24} color="black" />)}
      {renderSettingItem('Upgrade to Premium') }
      {renderSettingItem('Remove ads')}
      {renderSettingItem('Restore the ad-free version')}
      {renderSettingItem('Share with friends')}
      {renderSettingItem('Help and feedback')}
      {renderSettingItem('Privacy')}
      {renderSettingItem('Rate app')}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f8f8f8',
  },
  sectionHeaderText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SettingsScreen;