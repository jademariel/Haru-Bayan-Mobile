import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    // HOME SCREEN STYLES
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },

  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },

  tagline: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },

  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },

  description: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
  },

  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginVertical: 10,
  },

  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },

    // ABOUT US STYLES SECTION

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },

  stat: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B0000',
  },

  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    backgroundColor: '#372327',
    marginVertical: 10,
  },
  
  teamCard: {
    alignItems: 'center',
    margin: 10,
  },

  teamImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },

  optionText: {
    color: 'white',
    marginTop: 5,
  },

  teamBanner: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#39000B',
  },
  
  valuesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#39000B',
  },

  ITteam: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#ffffff',
    backgroundColor: '#372327',
  },
  
  descriptionBox: {
    fontSize: 14,
    marginHorizontal: 20,
    textAlign: 'center',
    marginBottom: 20,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  
  statBox: {
    alignItems: 'center',
    width: '22%',
  },
  
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#39000B',
  },
  
  statLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  
  memberName: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600',
    color: '#ffffff',
    marginTop: 5,
  },
  
  memberRole: {
    fontSize: 10,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  teamSection: {
    backgroundColor: '#372327',
    paddingVertical: 15,
  },

  aboutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  
  aboutImage: {
    width: '48%',
    height: 130,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  
  aboutTextBox: {
    width: '48%',
    justifyContent: 'center',
  },
  
  strongSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  
  strongTitle: {
    width: '40%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#39000b',
  },
  
  strongTextBox: {
    width: '58%',
    backgroundColor: '#9b001e',
    padding: 10,
    borderRadius: 8,
  },
  
  strongText: {
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'left',
  },

    // USER SCREEN STYLES

  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  
  button: {
    backgroundColor: '#ff6b81',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
  
});
