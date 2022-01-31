import 'package:skynexui_components/components.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var theme = useTheme(context);
    var colorsneutral = theme.colors.neutral.toMap();
    var textColor = colorsneutral['x900'] as String;

    return Box(
      styleSheet: StyleSheet(
        flexDirection: {Breakpoints.xs: 'row'},
        // justifyContent: {Breakpoints.xs: 'flex-start'},
        // alignItems: {Breakpoints.xs: 'stretch'},
        backgroundColor: {Breakpoints.xs: theme.colors.primary.x600},
      ),
      children: [
        Text(
          'Box 01',
          styleSheet: StyleSheet(
              color: {Breakpoints.xs: textColor},
              padding: {Breakpoints.xs: '10'},
              margin: {Breakpoints.xs: '0'},
              width: {Breakpoints.xs: '100'},
              height: {Breakpoints.xs: '100'},
              backgroundColor: {Breakpoints.xs: theme.colors.positive.x500}),
        ),
        Text(
          'Box 02',
          styleSheet: StyleSheet(
              color: {Breakpoints.xs: textColor},
              padding: {Breakpoints.xs: '10'},
              margin: {Breakpoints.xs: '0'},
              width: {Breakpoints.xs: '100'},
              height: {Breakpoints.xs: '100'},
              backgroundColor: {Breakpoints.xs: theme.colors.warning.x500}),
        ),
        Text(
          'Box 03',
          styleSheet: StyleSheet(
              color: {Breakpoints.xs: textColor},
              padding: {Breakpoints.xs: '10'},
              margin: {Breakpoints.xs: '0'},
              width: {Breakpoints.xs: '100'},
              height: {Breakpoints.xs: '100'},
              backgroundColor: {Breakpoints.xs: theme.colors.accent.x500}),
        ),
      ],
    );
  }
}
