// Y aquí se declaran los grupos de componentes usando los colores globales (2/2)

import { Dimensions, StyleSheet } from 'react-native';

import { Fonts } from '@/constants/fonts';
import { Colors } from '@/constants/theme';


const { width } = Dimensions.get('window');
const buttonSize = ( width - 80 ) / 4;



export const globalStyles = StyleSheet.create({

    background: {
    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    normalText: {
        color: Colors.textNormal,
        fontFamily: Fonts.fontFamily
    },

    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    mainResult: {
        color: Colors.textPrimary,
        fontSize: 60,
        // textAlign: 'right',
        fontWeight: '300',
    },

    subResult: {
        color: Colors.textSecondary,
        fontSize: 30,
        // textAlign: 'right',
        fontWeight: '300',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },

    button: {
        height: buttonSize,
        width: buttonSize,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },

    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: Colors.textNormal,
        fontFamily: Fonts.fontFamily,
        fontWeight: 300
    }
});