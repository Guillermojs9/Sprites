import { Animated, Button, Easing } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Sprites, type SpritesMethods } from 'react-native-sprites';


const CustomSprite = () => {
    const [positionAnim, setPositionAnim] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
    const spriteRef = useRef<Array<SpritesMethods | null>>([]);
    useEffect(() => {
        if (spriteRef.current[0] != null) {
            spriteRef.current[0].play({
                type: 'front',
                fps: 12,
                loop: true
            });
        }
        Animated.timing(positionAnim.y, {
            toValue: 500,
            easing: Easing.ease,
            duration: 5000,
            useNativeDriver: true,
        }).start();
        Animated.timing(positionAnim.x, {
            toValue: 270,
            easing: Easing.ease,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    }, [])

    function mover() {

    }

    return (
        <><Animated.View
            style={{
                transform: [{ translateY: positionAnim.y }, { translateX: positionAnim.x }]
            }}
        >
            <Sprites
                ref={(ref) => spriteRef.current.push(ref)}
                source={require('../assets/bicho_verde/bicho_sprite.png')}
                columns={12}
                rows={4}
                animations={{
                    right: { row: 0, startFrame: 0, endFrame: 11 },
                    front: { row: 1, startFrame: 12, endFrame: 23 },
                    left: { row: 2, startFrame: 24, endFrame: 35 },
                    back: { row: 3, startFrame: 36, endFrame: 47 },
                }} />
        </Animated.View><Button
                onPress={mover}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            /></>
    )
}

export default CustomSprite
