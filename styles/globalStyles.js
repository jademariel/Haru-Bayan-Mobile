import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  // === CAROUSEL ===
  slide: {
    width: width,
    height: 220,
    position: 'relative',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  carouselContent: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 50,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  carouselCaption: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'RIGHT',
    marginBottom: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  orderNowBtn: {
    backgroundColor: '#8B0000',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  orderNowText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // === HOME SCREEN ===
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
  optionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 12,
    width: 100,
    height: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  optionText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
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

  // === ABOUT US ===
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

  // === TEAM SECTION ===
  teamSection: {
    backgroundColor: '#372327',
    paddingVertical: 15,
  },
  ITteam: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#ffffff',
    backgroundColor: '#372327',
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
  teamBanner: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    marginBottom: 10,
  },

  // === ABOUT ROWS ===
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

  // === STRONG POINT SECTION ===
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
    width: '100%',  // Increased width for a wider box
    backgroundColor: '#9b001e',
    padding: 15,  // More padding for spacing
    borderRadius: 8,
  },
  strongText: {
    fontSize: 14,  // Increased font size for better readability
    color: '#ffffff',
    textAlign: 'center',
  },

  // === DESCRIPTION TEXT SPECIFIC STYLES ===
  highlightedText: {
    fontSize: 16,
    color: '#fff',  // White text
    backgroundColor: '#8B0000', // Red background
    textAlign: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});
