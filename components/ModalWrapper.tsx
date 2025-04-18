import { colors, spacingY } from "@/constants/theme";
import { ModalWrapperProps } from "@/types";
import { Platform, StyleSheet, View } from "react-native";

const isIOS = Platform.OS === "ios";

const ModalWrapper = ({ children, style, bg = colors.neutral800 }: ModalWrapperProps) => {
    return (
        <View style={[styles.container, { backgroundColor: bg }, style && style]}>{children}</View>
    );
}

export default ModalWrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: isIOS ? spacingY._15 : 50,
        paddingBottom: isIOS ? spacingY._20 : spacingY._10,
    }
});
