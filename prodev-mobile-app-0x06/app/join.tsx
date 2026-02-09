import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  formControl: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default function Join() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Create Account</Text>

      <View style={styles.formGroup}>
        <Text>Full Name</Text>
        <TextInput style={styles.formControl} />

        <Text>Email</Text>
        <TextInput style={styles.formControl} />

        <Text>Password</Text>
        <TextInput style={styles.formControl} secureTextEntry />
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
