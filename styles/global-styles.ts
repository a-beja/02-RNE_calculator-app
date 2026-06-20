// Y aquí se declaran los grupos de componentes usando los colores globales (2/2)

import { StyleSheet } from 'react-native';

import { Fonts } from '@/constants/fonts';
import { Colors } from '@/constants/theme';


export const globalStyles = StyleSheet.create({

    base: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: 20,
        paddingBottom: 20,
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
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400',
    },

    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300',
        paddingBottom: 20
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },

    button: {
        height: 80,
        width: 80,
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