import { HeaderProps } from "@/types";
import { StyleSheet, View } from "react-native";
import Typo from "./Typo";

const Header = ({title = "", leftIcon, style}: HeaderProps) => {
    return (
        <View style={[styles.contianer, style]}>
            {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
            {title && (
                <Typo
                    size={22}
                    fontWeight={"600"}
                    style={{
                        textAlign: "center",
                        width: leftIcon ? "82%" : "100%"
                    }}
                >
                    {title}
                </Typo>
            )}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    contianer: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
    },
    leftIcon: {
        alignSelf: "flex-start"
    },
});
