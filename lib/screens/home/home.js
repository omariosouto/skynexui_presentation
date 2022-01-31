import { Box, Text, useTheme } from '@skynexui/components';


export function HomeScreen() {
    var theme = useTheme();
    var colorsneutral = theme.colors.neutral;
    var textColor = colorsneutral['x900'];

    return (
        <Box
            tag=""
            styleSheet={{
                flexDirection: { "Breakpoints.xs": 'column'},
                // justifyContent: {"Breakpoints.xs": 'flex-start'},
                // alignItems: {"Breakpoints.xs": 'stretch'},
                backgroundColor: { "Breakpoints.xs": theme.colors.primary.x600 },
            }}
        >
            <Text
                styleSheet={{
                    color: {"Breakpoints.xs": textColor},
                    padding: {"Breakpoints.xs": '10px'},
                    margin: {"Breakpoints.xs": '0'},
                    width: {"Breakpoints.xs": '100px'},
                    height: {"Breakpoints.xs": '100px'},
                    backgroundColor: {"Breakpoints.xs": theme.colors.positive.x500},
                }}
            >
                Box 01
            </Text>
            <Text
                styleSheet={{
                    color: {"Breakpoints.xs": textColor},
                    padding: {"Breakpoints.xs": '10px'},
                    margin: {"Breakpoints.xs": '0'},
                    width: {"Breakpoints.xs": '100px'},
                    height: {"Breakpoints.xs": '100px'},
                    backgroundColor: {"Breakpoints.xs": theme.colors.warning.x500},
                }}
            >
                Box 02
            </Text>
            <Text
                styleSheet={{
                    color: {"Breakpoints.xs": textColor},
                    padding: {"Breakpoints.xs": '10px'},
                    margin: {"Breakpoints.xs": '0'},
                    width: {"Breakpoints.xs": '100px'},
                    height: {"Breakpoints.xs": '100px'},
                    backgroundColor: {"Breakpoints.xs": theme.colors.accent.x500},
                }}
            >
                Box 03
            </Text>
        </Box >
    )
}