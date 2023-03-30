import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 46,
        backgroundColor: 'rgba(255,235,205, 1)'
    },
    title: {
        marginBottom: 10,
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
    result: {
        marginBottom: 0,
        marginTop: 'auto'
    },
    dices_container: {
        marginVertical: 180,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttons_container: {
        marginTop: 'auto'
    }
});

export default styles;
