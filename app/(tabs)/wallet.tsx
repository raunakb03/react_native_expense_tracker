import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import * as Icons from "phosphor-react-native";

const Wallet = () => {

    const getTotalBalance = () => {
        return 100000000;
    }
    return (
        <ScreenWrapper style={{ backgroundColor : colors.black }}>
            <View style={styles.container}>
                <View style={styles.balanceView}>
                    <View style={{alignItems: "center"}}>
                        <Typo size={45}>
                            ${getTotalBalance()?.toFixed(2)}
                        </Typo>
                        <Typo size={16} color={colors.neutral300}>Total Balance</Typo>
                    </View>
                </View>
                <View style={styles.wallets}>
                    <View style={styles.flexRow}>
                        <Typo size={20} fontWeight={500}>My Walltes</Typo>
                        <TouchableOpacity>
                            <Icons.PlusCircle
                                weight="fill"
                                color={colors.primary}
                                size={verticalScale(33)}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    );
}

export default Wallet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    balanceView: {
        height: verticalScale(160),
        backgroundColor: colors.black,
        justifyContent: "center",
        alignItems: "center",
    },
    flexRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: spacingY._10,
    },
    wallets: {
        flex: 1,
        backgroundColor: colors.neutral900,
        borderTopRightRadius: radius._30,
        borderTopLeftRadius: radius._30,
        padding: spacingX._20,
        paddingTop: spacingY._25,
    },
    listStyle: {
        paddingVertical: spacingY._25,
        paddingTop: spacingY._15,
    }
});

