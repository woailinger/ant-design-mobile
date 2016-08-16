import variables from '../../style/variables';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 89,
    height: 89,
    borderRadius: 6,
    backgroundColor: 'rgba(34,34,34,0.6)',
  },
  tip: {
    color: '#999',
    fontSize: 14,
    marginLeft: 2 * variables.grid,
  },
  toast: {
    color: '#fff',
    fontSize: 14,
    marginTop: variables.grid,
  },
});
