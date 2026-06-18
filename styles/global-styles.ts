// Y aquí se declaran los grupos de componentes usando los colores globales (2/2)

import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/theme';


export const globalStyles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    normalText: {
        color: Colors.textNormal,
        fontFamily: 'SpaceMono'
    },

    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
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
    },
});