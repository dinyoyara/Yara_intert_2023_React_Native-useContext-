import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: 'rgba(255,235,205, 1)'
    },
    title: {
        marginVertical: 5,
        color: 'rgba(85,107,47, 0.8)',
        backgroundColor: 'rgba(255,235,205, 1)',
        borderWidth: 3,
        borderColor: 'rgba(85,107,47, 0.8)',
        borderRadius: 8,
        padding: 16,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    dices_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
});

export default styles;
