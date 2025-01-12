import { Animated, Button, Easing } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Sprites, type SpritesMethods } from 'react-native-sprites';


const CustomSprite = () => {
    const [positionAnim, setPositionAnim] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
    const spriteRef = useRef<Array<SpritesMethods | null>>([]);
    useEffect(() => {
        if (spriteRef.current[0] != null) {
            spriteRef.current[0].play({
                type: 'back',
                fps: 18,
                loop: true
            });
        }

        Animated.loop(
            Animated.sequence(
                [
                    Animated.timing(positionAnim.y, {
                        toValue: 500,
                        easing: Easing.ease,
                        duration: 2000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(positionAnim.x, {
                        toValue: 270,
                        easing: Easing.ease,
                        duration: 2000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(positionAnim.y, {
                        toValue: 0,
                        easing: Easing.ease,
                        duration: 2000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(positionAnim.x, {
                        toValue: 0,
                        easing: Easing.ease,
                        duration: 2000,
                        useNativeDriver: true,
                    }),
                ]
            )
        ).start();

    }, [])

    function mover() {

    }

    return (
        <Animated.View
            style={{
                transform: [{ translateY: positionAnim.y }, { translateX: positionAnim.x }]
            }}
        >
            <Sprites
                ref={(ref) => spriteRef.current.push(ref)}
                source={require('../assets/bicho_verde/bicho_sprite.png')}
                //source={require('../assets/bicho_verde/tamagot1.jpg')}
                columns={12}
                rows={4}
                animations={{
                    right: { row: 0, startFrame: 0, endFrame: 11 },
                    left: { row: 1, startFrame: 0, endFrame: 11 },
                    front: { row: 2, startFrame: 0, endFrame: 11 },
                    back: { row: 3, startFrame: 0, endFrame: 11 },
                }} />
        </Animated.View>
    )
}

export default CustomSprite
