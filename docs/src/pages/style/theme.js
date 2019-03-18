import React, { Component } from 'react';
import Section from '../../components/Section';
import PageTitle from '../../components/PageTitle';
import CodeBlock from '../../components/CodeBlock';
import CodeInline from '../../components/CodeInline';
import { defaultTheme } from '../../../../src/index';

const themeCode = `import * as React from 'react';
import { BreadProvider, Colors } from 'material-bread';
import App from './App';

const theme = {
    palette: {
        primary: Colors.pink['500'],
        secondary: Colors.blue['600'],
        error: Colors.red['300'],
    }
};

export default function Root() {
  return (
    <BreadProvider value={theme}>
      <App />
    </BreadProvider>
  );
}`;

const withThemeCode = `import React from 'react';
import { View } from 'react-native';
import { withTheme } from 'material-bread';

function AppButton(props) {
  const { theme } = props;

  return (
    <View style={{backgroundColor: theme.palette.primary }}>Click Me</View>
  )
}

export default withTheme(AppButton);`;

export default class IconPage extends Component {
  render() {
    return (
      <div>
        <PageTitle>Theme</PageTitle>
        <p
          style={{
            color: 'rgba(0, 0, 0, 0.67)',
            marginTop: 16,
            lineHeight: 1.5,
          }}>
          The theme defines both global and component specific styles for color,
          spacings, sizings, shadows, fonts, and more. You can customize as much
          or as little as you want.
        </p>
        <Section name="Customizing" href="/style/theme#custom" id="custom">
          <p
            style={{
              color: 'rgba(0, 0, 0, 0.67)',
              marginTop: 16,
              lineHeight: 1.5,
              marginBottom: 16,
            }}>
            To apply a global custom theme:
            <ol>
              <li>
                Wrap your app with the <CodeInline code={'BreadProvider'} />{' '}
                component
              </li>
              <li>
                Pass in a custom <CodeInline code={'theme'} /> object.
              </li>
            </ol>
            This will merge your custom changes with the default theme.
          </p>
          <CodeBlock code={themeCode} canCopy />
        </Section>
        <Section
          name="Apply theme to User Components"
          href="/style/theme#withTheme"
          id="withTheme">
          <p
            style={{
              color: 'rgba(0, 0, 0, 0.67)',
              marginTop: 16,
              lineHeight: 1.5,
              marginBottom: 16,
            }}>
            Using the <CodeInline code={'withTheme'} /> utility function, you
            can use the app theme in your own components.
          </p>
          <CodeBlock code={withThemeCode} canCopy small />
        </Section>
        <Section name="Default Theme" href="/style/theme#default" id="default">
          <p
            style={{
              color: 'rgba(0, 0, 0, 0.67)',
              marginTop: 16,
              lineHeight: 1.5,
              marginBottom: 16,
            }}>
            Below is the full default theme. You can override any value by
            either passing in theme object with that key specified, or directly
            in components by changing that property with the style prop.
          </p>
          <CodeBlock
            code={JSON.stringify(defaultTheme, null, 2)}
            canCopy
            small
          />
        </Section>
      </div>
    );
  }
}