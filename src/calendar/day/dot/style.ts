import { StyleSheet } from 'react-native';
import * as defaultStyle from '../../../style';
export default function styleConstructor(theme = {}) {
    const appStyle = { ...defaultStyle, ...theme };
    return StyleSheet.create({
        dot: {
            width: 5,
            height: 5,
            marginTop: 1,
            marginHorizontal: 1,
            borderRadius: 2.5,
            opacity: 0,
            ...appStyle.dotStyle,
            marginTop: 8
        },
        visibleDot: {
            opacity: 1,
            backgroundColor: appStyle.dotColor,
        },
        selectedDot: {
            backgroundColor: appStyle.selectedDotColor,
            width:5, height:5, borderRadius:2.5
        },
        disabledDot: {
            backgroundColor: appStyle.disabledDotColor || appStyle.dotColor
        },
        inactiveDot: {
            backgroundColor: appStyle.inactiveDotColor || appStyle.dotColor
        },
        todayDot: {
            backgroundColor: appStyle.todayDotColor || appStyle.dotColor
        },
        // @ts-expect-error
        ...(theme['stylesheet.dot'] || {})
    });
}
