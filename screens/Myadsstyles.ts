import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
    marginTop: 80,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#1e90ff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  bottomText: {
    fontSize: 14,
  },
  linkText: {
    color: '#1e90ff',
    fontSize: 14,
  },
  adCard: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  adTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  adImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 8,
  },
  imagePickerButton: {
    backgroundColor: '#1e90ff',   // bright blue button
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 12,
  },

  imagePickerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 8,
  },
  form: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
  },
  passwordContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  paddingHorizontal: 10,
  marginVertical: 10,
},
passwordInput: {
  flex: 1,
  height: 50,
},
addButton: {
  backgroundColor: '#4CAF50',
  padding: 14,
  borderRadius: 8,
  alignItems: 'center',
  marginBottom: 16,
},
addButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
logoutButton: {
  backgroundColor: '#f44336',
  padding: 14,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 20,
},
logoutButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
adItem: {
  padding: 12,
  backgroundColor: '#f2f2f2',
  borderRadius: 8,
  marginBottom: 10,
},
label: {
  marginTop: 10,
  marginBottom: 5,
  fontWeight: 'bold',
  fontSize: 16,
},

sharingButtonsContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 15,
},

sharingButton: {
  padding: 10,
  backgroundColor: '#eee',
  borderRadius: 8,
  width: 50,
  alignItems: 'center',
},

sharingButtonSelected: {
  backgroundColor: '#4CAF50',
},

sharingButtonText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#000',
},

  
});

export default styles;
