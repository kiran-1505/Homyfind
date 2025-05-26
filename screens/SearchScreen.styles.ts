import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    width: '100%',
  },
  contentWrapper: {
    paddingHorizontal: 20,
  },
  scrollContainer: {
    paddingBottom: 100,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 36,
    fontFamily: 'Audiowide', // Make sure this font is loaded via expo-font if used
    color: '#fff',
  },
  searchBar: {
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  horizontalScroll: {
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemBox: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    width: 100,             // fixed width
    height: 60,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 14,
  },
  placeholder: {
    color: '#aaa',
    fontSize: 14,
  },
  pgCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 8,
    elevation: 1, // subtle shadow for Android
    shadowColor: '#000', // optional for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  pgName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  pgLocation: {
    color: '#555',
    marginTop: 4,
  },
});
