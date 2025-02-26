import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React, { useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import * as Icons from "phosphor-react-native";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const Login = () => {

    const router = useRouter();

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert("Login", "Please fill all the fields");
            return;
        }
        console.log(emailRef.current, passwordRef.current);
    }

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <BackButton />
                <View style={{ gap: 5, marginTop: spacingY._20 }}>
                    <Typo size={30} fontWeight={"800"}>Hey,</Typo>
                    <Typo size={30} fontWeight={"800"}>Welcome Back</Typo>
                </View>

                <View style={styles.form}>
                    <Typo size={16} color={colors.textLighter}>
                        Login now to tack all your expenses
                    </Typo>
                    <Input
                        placeholder="Enter your email"
                        onChangeText={(value) => (emailRef.current = value)}
                        icon={
                            <Icons.At size={verticalScale(26)}
                                color={colors.neutral300} weight="fill"
                            />
                        }
                    />
                    <Input
                        placeholder="Enter your password"
                        onChangeText={(value) => (passwordRef.current = value)}
                        secureTextEntry
                        icon={
                            <Icons.Lock size={verticalScale(26)}
                                color={colors.neutral300} weight="fill"
                            />
                        }
                    />
                    <Typo size={14} color={colors.text} style={{ alignSelf: "flex-end" }}>Forgot Password?</Typo>
                    <Button loading={isLoading} onPress={handleSubmit}>
                        <Typo fontWeight={"700"} color={colors.black} size={21}>Login</Typo>
                    </Button>
                </View>
                <View style={styles.footer}>
                    <Typo size={15}>Don't have an account?</Typo>
                    <Pressable onPress={() => router.push('/(auth)/register')}>
                        <Typo size={15} fontWeight={700} color={colors.primary}>Sign up</Typo>
                    </Pressable>
                </View>
            </View>
        </ScreenWrapper >
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20,
    },
    welcomeText: {
        fontSize: verticalScale(20),
        fontWeight: "bold",
        color: colors.text,
    },
    form: {
        gap: spacingY._20,
    },
    forgotPassword: {
        textAlign: "right",
        fontWeight: "500",
        color: colors.text
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    footerText: {
        textAlign: "center",
        color: colors.text,
        fontSize: verticalScale(15),
    }
});
