import { Animated, Easing, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Sprites, type SpritesMethods } from 'react-native-sprites';


const CustomSprite = () => {
    const [positionAnim, setPositionAnim] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
    const spriteRef = useRef<Array<SpritesMethods | null>>([]);
    useEffect(() => {
        if (spriteRef.current[0] != null)
            spriteRef.current[0].play({
                type: 'down',
                fps: 8,
                loop: true
            });

        Animated.timing(positionAnim.y, {
            toValue: 600,
            easing: Easing.ease,
            duration: 20000,
            useNativeDriver: true,
        }).start();

    }, [])

    return (
        <Animated.View
            style={{
                transform: [{ translateY: positionAnim.y }]
            }}
        >
            <Sprites
                ref={(ref) => spriteRef.current.push(ref)}
                source={require('../assets/bicho_verde/bicho_sprite.png')}
                columns={12}
                rows={4}
                animations={{
                    down: { row: 0, startFrame: 0, endFrame: 11 },
                    left: { row: 1, startFrame: 11, endFrame: 23 },
                    right: { row: 2, startFrame: 24, endFrame: 35 },
                    up: { row: 3, startFrame: 36, endFrame: 47 },
                }}
            />
        </Animated.View>
    )
}

export default CustomSprite
